import { toast } from "react-toastify";
import { getBusinessPagesDataService } from "../../service/businessPagesService";
import { addLoadingItem, removeLoadingItem } from "./loading";

export const getBusinessPagesAction = (axiosController) => {
    return async (dispatch, getState) => {
      const loadingState = { ...getState().loadingState };
      let toastMessage = "";
      try {
        if (!loadingState.ProcessingDelay.includes("getAllWorkspace")) {
        dispatch(addLoadingItem("getBusinessPagesDataService"));
          const pagesData = await getBusinessPagesDataService(axiosController);
          if (pagesData.data.status == true && pagesData.data.code == 200) {
            const state = { ...getState().businessPagesState };
            state.pagesData = pagesData.data.data;
            await dispatch({ type: "GET_ALL_BUSINESS_PAGES_DATA", payload: state });
          }
        }
      } catch (error) {
        error.response.data.errors.forEach((element) => {
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
      dispatch(removeLoadingItem("getBusinessPagesDataService"));
    };
  };