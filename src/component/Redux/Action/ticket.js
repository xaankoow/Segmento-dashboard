import { sendNewMessageTicketServise } from "../../service/ticket";
import { showToast } from "../../Utils/toastifyPromise";

export const setTicketUUID = (show) => {
  return async (dispatch, getState) => {
    // debugger
    let state = { ...getState().ticketState };
    await dispatch({ type: "SET_UUID", payload: state });
  };
};



export const AddNewMessageAction = (messageUuid,message,files) => {
  return async (dispatch, getState) => {
    
    let formdata = new FormData();
    formdata.append("message", message);
    formdata.append("files[]", files);
    formdata.append("uuid", messageUuid);
    try {
      const { data } = await sendNewMessageTicketServise();
      if (data.code==200 & data.status==true) {
        showToast("پیام شما به ما رسید","success")
      }else{
        showToast("خطا در ارسال پیام","error")
      }
      
    } catch (e) {
      showToast("خطا در ارسال پیام","error")
      
    }
    let state = { ...getState().ticketState };
    await dispatch({ type: "SET_UUID", payload: state });
  };
};
