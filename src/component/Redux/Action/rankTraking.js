import { Label, LensBlurRounded } from "@mui/icons-material";
import { toast } from "react-toastify";
import { rankTrackingChartId } from "../../../variables/rankTracking";
import { RANK_TRACKING_FILTERS_DATE } from "../../../variables/rankTrackingFilters";
import {
  initKeyWordsDataService,
  initWorkSpacePeriodDataService,
  keyWordsPeriodDataService,
} from "../../service/rankTracking";
import { generateColor } from "../../Utils/color";
import { addLoadingItem, removeLoadingItem } from "./loading";

export const initWorkSpacePeriodData = ({ axiosController }) => {
  return async (dispatch, getState) => {
    const state = { ...getState().rankTrakingState };
    const loadingState = { ...getState().loadingState };
    const workSpaceState = { ...getState().workSpaceState };

    let toastMessage = "";

    try {
      //   

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
      // 

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

export const setDataForRankTrackingBigChar = ({
  chartData,
  chartType = "Line",
}) => {
  return async (dispatch, getState) => {
    const state = { ...getState().rankTrakingState };
    // 
    // state.bigChartData.push(chartData);
    // 
    
    state.bigChartData = [
      {
        labels: chartData.labels,
        label: chartData.datasets[0].label,
        data: chartData.datasets[0].data,
      },
    ];
    const labels = chartData.labels;
    const label = chartData.datasets[0].label;
    const data = chartData.datasets[0].data;

    const generateColor = () => {
      return Math.floor(Math.random() * 255);
    };

    // state.bigChartData =()=>{
    if (chartType == "Line") {
      state.bigChartData = {
        data: [
          {
            labels,
            datasets: [
              {
                fill: "end",
                label: label,
                data: data,
                borderColor: `rgb(${
                  generateColor() +
                  "," +
                  generateColor() +
                  "," +
                  generateColor()
                })`,
                backgroundColor: "rgba(255, 255, 255, 0)",
                pointRadius: 3,
                pointHitRadius: 3,
              },
            ],
          },
        ],
        type: "Line",
      };
    } else if ((chartType = "Bar")) {
      state.bigChartData = { data: [chartData], type: "Bar" };
    }
    // }

    state.rankTrakingForceUpdate = state.rankTrakingForceUpdate + 1;

    await dispatch({ type: "SET_DATA_FROM_BIG_CHART", payload: state });
  };
};

export const setDataForRankTrackingBigCharInKeyWordsSection = ({
  chartData,
}) => {
  return async (dispatch, getState) => {
    const state = { ...getState().rankTrakingState };
    // 
    // state.bigChartData.push(chartData);
    // 
    // state.bigChartData=[{
    //   labels:chartData.labels,
    //   label:chartData.datasets[0].label,
    //   data:chartData.datasets[0].data
    // }];
    const labels = chartData.labels;
    const label = chartData.datasets[0].label;
    const data = chartData.datasets[0].data;

    // const generateColor = () => {
    //   return Math.floor(Math.random() * 255);
    // };

    state.bigChartData = [
      {
        labels,
        datasets: [
          {
            fill: "end",
            label: label,
            data: data,
            borderColor: `rgb(${
              generateColor() + "," + generateColor() + "," + generateColor()
            })`,
            backgroundColor: "rgba(255, 255, 255, 0)",
            pointRadius: 3,
            pointHitRadius: 3,
          },
        ],
      },
    ];

    await dispatch({ type: "SET_DATA_FROM_BIG_CHART", payload: state });
  };
};

export const initKeyWordsData = ({ axiosController }) => {
  return async (dispatch, getState) => {
    const state = { ...getState().rankTrakingState };
    const loadingState = { ...getState().loadingState };
    const workSpaceState = { ...getState().workSpaceState };

    let toastMessage = "";

    try {
      //   

      if (!loadingState.ProcessingDelay.includes("initKeyWordsDataService")) {
        dispatch(addLoadingItem("initKeyWordsDataService"));
        const { data } = await initKeyWordsDataService({
          axiosController: axiosController,
          period: 8,
          workspaceUuid: workSpaceState.allWorkSpace[0].uuid,
        });

        if (data.code == 200 && data.status == true) {
          state.keyWordsData = data.data;
          await dispatch({
            type: "INIT_KEY_WORDS_DATA",
            payload: state,
          });
        } else {
        }
        dispatch(removeLoadingItem("initKeyWordsDataService"));
      }
    } catch (error) {
      // 

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
      dispatch(removeLoadingItem("initKeyWordsDataService"));
    }
  };
};

export const keyWordsPeriodData = ({ axiosController }) => {
  return async (dispatch, getState) => {
    const state = { ...getState().rankTrakingState };
    const loadingState = { ...getState().loadingState };
    const workSpaceState = { ...getState().workSpaceState };

    let toastMessage = "";

    try {
      //   

      ;
      if (!loadingState.ProcessingDelay.includes("keyWordsPeriodDataService")) {
        dispatch(addLoadingItem("keyWordsPeriodDataService"));
        const { data } = await keyWordsPeriodDataService({
          axiosController: axiosController,
          period: 20,
          // keyUuids: workSpaceState.keyWordsSelected,
          keyUuids: state.keyWordsSelected,
        });

        if (data.code == 200 && data.status == true) {
          let apiData = data.data;
          state.keyWordsSelectedPeriosData = apiData;

          let labels = Object.keys(apiData).map((item) => {
            return item;
          });

          let chartData = [];
          let label = [];

          ;
          for (let i = 1; i < labels.length - 1; i++) {
            // selected date and foreach in arr
            apiData[labels[i]].forEach((element) => {
              let keysPositon = [];
              element.forEach((keyData) => {
                let findDataIndex = chartData.findIndex(
                  (item) => item.uuid == keyData.uuid
                );
                if (findDataIndex != -1) {
                  chartData[findDataIndex].data.push(keyData.position);
                } else {
                  chartData.push({
                    uuid: keyData.uuid,
                    label: keyData.key,
                    data: [keyData.position],
                  });
                }
                // label
                keysPositon.push(keyData.position);
              });
              chartData.push(keysPositon);
            });
          }

          // اضافه کردن صفر برایه مقادیر ناموجود
          {
          }

          // bigChartDataInkeyWordsSection: [], //[{labels:[],label:"",data:[]}]

          state.bigChartDataInkeyWordsSection = {
            // label:label,
            labels: labels,
            data: chartData.map((item) => item),
          };

          await dispatch({
            type: "GET_KEY_WORDS_PERIOD_DATA",
            payload: state,
          });
        } else {
        }
        dispatch(removeLoadingItem("keyWordsPeriodDataService"));
      }
    } catch (error) {
      // 

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
      dispatch(removeLoadingItem("keyWordsPeriodDataService"));
    }
  };
};

export const selectingOrRemovingKeyWordsSelected = ({ keyUuid }) => {
  return async (dispatch, getState) => {
    const state = { ...getState().rankTrakingState };
    // const loadingState = { ...getState().loadingState };
    // const workSpaceState = { ...getState().workSpaceState };

    var keyWords = state.keyWordsSelected;
    if (keyWords.includes(keyUuid)) {
      state.keyWordsSelected = keyWords.filter((item) => item != keyUuid);
    } else {
      keyWords.push(keyUuid);
    }

    await dispatch({
      type: "TOOGLE_SELECTING_KEY_WOURDS_TABEL",
      payload: state,
    });
  };
};

export const setRankTrackingChartsDataAction = ({ id, type, data }) => {
  return async (dispatch, getState) => {
    const state = { ...getState().rankTrakingState };
    // const loadingState = { ...getState().loadingState };
    // const workSpaceState = { ...getState().workSpaceState };

    var chartList = state.charts;
    // if (keyWords.includes(keyUuid)) {
    //   state.keyWordsSelected = keyWords.filter((item) => item != keyUuid);
    // } else {
    //   keyWords.push(keyUuid);
    // }
    // charts
    // var a=[]
    
    let checkChartExist = chartList.findIndex((item) => item.id == id);
    if (checkChartExist == -1) {
      chartList.push({
        id,
        type,
        data,
      });
    }
    await dispatch({
      type: "SET_CHARTS_DATA_IN_STATE",
      payload: state,
    });
  };
};

export const searchChartIdAndSetInBigChartData = ({ textId }) => {
  return async (dispatch, getState) => {
    const state = { ...getState().rankTrakingState };
    // const loadingState = { ...getState().loadingState };
    // const workSpaceState = { ...getState().workSpaceState };

    var chartId = "";
    var chartType = "";

    switch (textId) {
      case RANK_TRACKING_FILTERS_DATE[0]:
        chartId = rankTrackingChartId.AvgRankTotalWords;
        chartType = "line";
        break;
      case RANK_TRACKING_FILTERS_DATE[1]:
        chartId = rankTrackingChartId.GrownWords;
        chartType = "line";
        break;
      case RANK_TRACKING_FILTERS_DATE[2]:
        chartId = rankTrackingChartId.ProgressAndDeclineGraphOfWords;
        break;
      case RANK_TRACKING_FILTERS_DATE[3]:
        chartId = rankTrackingChartId.TheWordsAreLost;
        break;
      case RANK_TRACKING_FILTERS_DATE[4]:
        chartId = rankTrackingChartId.AvgGrownWords;
        break;
      case RANK_TRACKING_FILTERS_DATE[5]:
        chartId = rankTrackingChartId.AvgTheWordsAreLost;
        break;

      default:
        break;
    }
    console.log("chartType :>> ", textId);
    state.charts.forEach((element) => {
      
      // 
      if (element.id == chartId) {
        dispatch(
          setDataForRankTrackingBigChar({
            chartData: element.data,
            chartType: element.type,
          })
        );
        return;
      }
    });
    // break;
    // export const RANK_TRACKING_FILTERS_DATE = [
    //   "میانگین رتبه کل کلمات",
    //   "کلمات رشد کرده",
    //   "توزیع رتبه کلمات کلیدی",
    //   "کلمات افت کرده",
    //   "میانگین رشد کلمات",
    //   "میانگین افت کلمات"
    //   ];

    // var chartList = state.charts;

    // var a = [];
    // var findItem;
    // let checkChartExist = chartList.findIndex((item) => item.type == type);
    // if (checkChartExist == -1) {
    //   chartList.push({
    //     id,
    //     type,
    //     data,
    //   });
    // }
    // await dispatch({
    //   type: "SET_CHARTS_DATA_IN_STATE",
    //   payload: state,
    // });
  };
};
