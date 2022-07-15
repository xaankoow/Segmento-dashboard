import { getAllFinancialReportsData } from "../../service/financialReportsService";

export const getAllFinancialReports = ()=> {
    return async (dispatch, getState) => {
        // debugger
        const state = { ...getState().financialState }
        let toastMessage="";
        try {
            const {data}=await getAllFinancialReportsData()
            // debugger
            if (data.status==true&&data.code==200) {
                state.allFinancialData = data.data;
            }else{
                
            }
            await dispatch({ type: "GET_FINANCIAL_DATA", payload: state })    
        } catch (error) {
            console.log("register error")
            error.response.data.errors.forEach(element => {
                toastMessage += element + " / ";
            });
            toast.warn(toastMessage, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }
}