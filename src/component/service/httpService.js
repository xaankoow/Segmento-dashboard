import axios from "axios";
import { toast } from 'react-toastify'
import axiosRetry from 'axios-retry';

const token = localStorage.getItem("token");



if (token !== "undefined" && token != null && token) {
    // axios.defaults.headers.common["Authorization"]=`Bearer ${token}`
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
}

axiosRetry(axios, {
    retries: 10, // number of retries
    retryDelay: (retryCount) => {
        // console.log(`retry attempt: ${retryCount}`);
        return retryCount + 2000; // time interval between retries
    },
    retryCondition: (error) => {
        // console.log('error :>> ', error);
        // if retry condition is not specified, by default idempotent requests are retried
        return error.code === "ERR_NETWORK"|error.code === "ECONNABORTED";
    },
});

axios.interceptors.response.use(null, error => {
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
    if (!expectedError&error.code!="ERR_CANCELED") {
        toast.error("مشکلی از سمت سرور رخ داده است.", {
            position: "top-right",
            closeOnClick: true
        });
    }
    return Promise.reject(error);
})

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
}