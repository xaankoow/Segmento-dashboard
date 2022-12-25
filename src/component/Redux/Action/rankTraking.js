import { toast } from "react-toastify";
import { initWorkSpacePeriodDataService } from "../../service/rankTracking";
import { addLoadingItem, removeLoadingItem } from "./loading";

export const initWorkSpacePeriodData = ({ axiosController }) => {
  return async (dispatch, getState) => {
    const state = { ...getState().rankTrakingState };
    const loadingState = { ...getState().loadingState };
    const workSpaceState = { ...getState().workSpaceState };

    let toastMessage = "";

    try {
    //   debugger

      if (
        !loadingState.ProcessingDelay.includes("initWorkSpacePeriodDataService")
      ) {
        dispatch(addLoadingItem("initWorkSpacePeriodDataService"));
        const { data } = await initWorkSpacePeriodDataService({
          axiosController: axiosController,
          period: 9,
          workspaceUuid: workSpaceState.allWorkSpace[0],
        });

        if (data.code == 200 && data.status == true) {
          state.workSpacePeriodData = data.data;
          await dispatch({
            type: "INIT_WORK_SPACE_PERIOD_DATA",
            payload: state,
          });
        } else {
        }
        dispatch(removeLoadingItem("initWorkSpacePeriodDataService"));
      }
    } catch (error) {
      // debugger

      error?.response?.data?.errors.forEach((element) => {
        toastMessage += element + " / ";
      });
      toastMessage != "" &&
        toast.warn(toastMessage, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      dispatch(removeLoadingItem("initWorkSpacePeriodDataService"));
    }
  };
};

export const setDataForRankTrackingBigChar = ({ chartData }) => {
  return async (dispatch, getState) => {
    const state = { ...getState().rankTrakingState };
    // debugger
    state.bigChartData.push(chartData);

    await dispatch({ type: "SET_DATA_FROM_BIG_CHART", payload: state });
  };
};
