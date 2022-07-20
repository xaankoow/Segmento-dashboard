import { DateObject } from "react-multi-date-picker";
import { toast } from "react-toastify";
import { getAllFinancialReportsData } from "../../service/financialReportsService";
import persian from "react-date-object/calendars/persian";
import persian_en from "react-date-object/locales/persian_en";

export const getAllFinancialReports = () => {
    return async (dispatch, getState) => {
        // debugger
        const state = { ...getState().financialState }
        const loadingState = { ...getState().loadingState }

        let toastMessage = "";
        try {
            //handle show loadin
            {
                // debugger
                loadingState.ProcessingDelay.push("getAllFinancialReports");
                loadingState.canRequest = false;
                await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState })
                // await dispatch({ type: "CAN_REQUEST", payload: loadingState })    
            }


            const { data } = await getAllFinancialReportsData()
            // debugger
            if (data.status == true && data.code == 200) {
                state.allFinancialData = data.data;
                state.financialDataTable = data.data;
            } else {

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
            var removeProcessingItem = loadingState.ProcessingDelay.filter(item => item != "getAllFinancialReports");
            loadingState.ProcessingDelay = removeProcessingItem;
            loadingState.canRequest = removeProcessingItem.length > 0 ? false : true;
            await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState })
        }
    }
}




export const filterFinancialReports = ({textTarget, textValue, sortTarget, sortValue}) => {
    return async (dispatch, getState) => {
        const state = { ...getState().financialState }

        const getAllData = state.allFinancialData;
        var filterFinancialReportData = [];


        // filter target search box
        getAllData.forEach(element => {
            switch (textTarget) {
                case "شماره فاکتور":
                    if (element.order_code == textValue) {
                        filterFinancialReportData.push(element);
                    }
                    break;
                // case "نوع اشتراک":
                //     if (element.order_code==textValue) {
                //         filterFinancialReportData.push(element);
                //     }
                //     break;
                case "مبلغ":
                    // debugger
                    if (element.sub_total == textValue) {
                        filterFinancialReportData.push(element);
                    }
                    break;
                case "وضعیت پرداخت":
                    if (element.payment_status_text == textValue) {
                        filterFinancialReportData.push(element);
                    }
                    break;
                case "عملیات":
                    if (element.type_text == textValue) {
                        filterFinancialReportData.push(element);
                    }
                    break;

                default:
                    break;
            }
        });


        // filter with date or cound
        if (sortTarget=="تاریخ خرید") {
            var convertDateStart=parseInt(new DateObject(sortValue[0]).convert(persian,persian_en).format("YYYYMMDD"));
            var convertDateEnd=parseInt(new DateObject(sortValue[1]).convert(persian,persian_en).format("YYYYMMDD"));
            // const datesSelected=sortValue.split('-');
            let filterList=[];
            // filterFinancialReportData.forEach(element => {
            //     const internalDate=parseInt(element.created_at.replaceAll('/',''));
            //     debugger
            //     if (!internalDate>convertDateStart&!internalDate<convertDateEnd) {
                //         filterFinancialReportData.r
                //         // filterList.push(element);
                //         // parseInt(item.created_at.replace('/',''))>convertDateStart&parseInt(item.created_at.replace('/',''))<convertDateEnd
                //     }
                // });
                    // const internalDate=parseInt(element.created_at.replaceAll('/',''));
                filterFinancialReportData=filterFinancialReportData.filter(item=>parseInt(item.created_at.replaceAll('/',''))>convertDateStart&parseInt(item.created_at.replaceAll('/',''))<convertDateEnd);
        }else{
            filterFinancialReportData=filterFinancialReportData.splice(0, sortValue<filterFinancialReportData.length?sortValue:filterFinancialReportData.length);
        }

        // state.allFinancialData = data.data;
        state.financialDataTable =filterFinancialReportData;

        await dispatch({ type: "SEARCH_FINANCIAL_DATA", payload: state })
    }
}