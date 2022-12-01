import { sendNewMessageTicketServise } from "../../service/ticket";
import { showToast } from "../../Utils/toastifyPromise";

export const setTicketUUID = (show) => {
  return async (dispatch, getState) => {
    // debugger
    let state = { ...getState().ticketState };
    await dispatch({ type: "SET_UUID", payload: state });
  };
};



export const AddNewMessageAction = (messageUuid, message, files) => {
  return async (dispatch, getState) => {

    const loadingState = { ...getState().loadingState };

    let formdata = new FormData();
    formdata.append("message", message);
    formdata.append("files[]", files);
    formdata.append("uuid", messageUuid);
    try {
      if (!loadingState.ProcessingDelay.includes("sendNewMessageTicketServise")) {
        //handle show loadin
        {
          loadingState.ProcessingDelay = loadingState.ProcessingDelay.filter(
            (item) => item != "sendNewMessageTicketServise"
          );
          loadingState.ProcessingDelay.push("sendNewMessageTicketServise");
          loadingState.canRequest = false;
          await dispatch({
            type: "SET_PROCESSING_DELAY",
            payload: loadingState,
          });
        }
        const { data } = await sendNewMessageTicketServise();
        if (data.code == 200 & data.status == true) {
          showToast("پیام شما به ما رسید", "success")
        } else {
          showToast("خطا در ارسال پیام", "error")
        }
      }

    } catch (e) {
      showToast("خطا در ارسال پیام", "error")

    }
    //handle hide loading
    {
      const loadingState1 = { ...getState().loadingState };
      var removeProcessingItem = loadingState1.ProcessingDelay.filter(
        (item) => item != "sendNewMessageTicketServise"
      );
      loadingState1.ProcessingDelay = removeProcessingItem;
      loadingState1.canRequest =
        removeProcessingItem.length > 0 ? false : true;
      await dispatch({
        type: "SET_PROCESSING_DELAY",
        payload: loadingState1,
      });
    }
    let state = { ...getState().ticketState };
    await dispatch({ type: "SET_UUID", payload: state });
  };
};
