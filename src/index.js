import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./component/Redux/Store";
import 'react-toastify/dist/ReactToastify.css';
import "./assets/css/style.css";
import "./assets/css/iranyekan-font.css"
import 'react-loading-skeleton/dist/skeleton.css'
import 'swiper/swiper.min.css';
import dayjs from 'dayjs'
// import 'swiper/modules/pagination/pagination.min.css';

const  isBetween = require('dayjs/plugin/isBetween')
dayjs.extend(isBetween);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Provider store={store}>
      {/* <React.StrictMode> */}
        {/* <BrowserRouter> */}
        <App />
        {/* </BrowserRouter> */}
      {/* </React.StrictMode> */}
    </Provider>
  </Router>

);
