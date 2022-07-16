import { toast } from "react-toastify";
import { getAllFinancialReportsData } from "../../service/financialReportsService";

export const getAllFinancialReports = ()=> {
    return async (dispatch, getState) => {
        // debugger
        const state = { ...getState().financialState }
        const loadingState = { ...getState().loadingState }
        
        let toastMessage="";
        try {
            //handle show loadin
            {
                // debugger
                loadingState.ProcessingDelay.push("getAllFinancialReports");
                loadingState.canRequest=false;
                await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState })    
                // await dispatch({ type: "CAN_REQUEST", payload: loadingState })    
            }


            const {data}=await getAllFinancialReportsData()
            // debugger
            if (data.status==true&&data.code==200) {
                state.allFinancialData = data.data;
            }else{
                
            }
            // debugger
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
            // loadingState.ProcessingDelay=0;
            // await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState })  
        }

        //handle hide loading
        {
            var removeProcessingItem=loadingState.ProcessingDelay.filter(item=>item!="getAllFinancialReports");
            loadingState.ProcessingDelay=removeProcessingItem;
            loadingState.canRequest=removeProcessingItem.length>0?false:true;
            await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState })  
        }
    }
}