import { toast } from "react-toastify";
import { getPackageInfO } from "../../service/packages";
import { userLimit } from "../../service/userLimit";
import {
  creatWorkSpace,
  getAllWorkspace,
  keywords,
  website,
} from "../../service/workSpaceService";
import {
  showInputErrorToast,
  showToast,
} from "../../Utils/toastifyPromise";

export const ChackBusinessCustomer = () => {
  return async (dispatch, getState) => {
    const userState = { ...getState().userState };
    const loadingState = { ...getState().loadingState };

    try {
      if (!loadingState.ProcessingDelay.includes("getAllFinancialReports")) {
        //handle show loadin
        {
          loadingState.ProcessingDelay.push("getAllFinancialReports");
          loadingState.canRequest = false;
          await dispatch({
            type: "SET_PROCESSING_DELAY",
            payload: loadingState,
          });
        }

        const state = { ...getState().workSpaceState };
        state.businessCustomer = {
          current:
            userState.userData.package.type_text != "پکیج پایه" ? true : false,
          last: userState.userData.user_has_success_purchase,
          // last: findSuccessReport != -1 ? true : false
        };
        await dispatch({ type: "CHECK_BUSSINESS", payload: state });

        //handle hide loading
        {
          const loadingState1 = { ...getState().loadingState };
          var removeProcessingItem = loadingState1.ProcessingDelay.filter(
            (item) => item != "getAllFinancialReports"
          );
          loadingState1.ProcessingDelay = removeProcessingItem;
          loadingState1.canRequest = removeProcessingItem > 0 ? false : true;
          await dispatch({
            type: "SET_PROCESSING_DELAY",
            payload: loadingState1,
          });
        }
      }
    } catch (error) {
      //handle hide loading
      {
        const loadingState2 = { ...getState().loadingState };
        var removeProcessingItem = loadingState2.ProcessingDelay.filter(
          (item) => item != "getAllFinancialReports"
        );
        loadingState2.ProcessingDelay = removeProcessingItem;
        loadingState2.canRequest = removeProcessingItem > 0 ? false : true;
        await dispatch({
          type: "SET_PROCESSING_DELAY",
          payload: loadingState2,
        });
      }
    }
  };
};

export const setWebAdress = (adress) => {
  return async (dispatch, getState) => {
    const state = { ...getState().workSpaceState };
    state.webAdress = adress;
    await dispatch({ type: "WEB_ADRESS", payload: state });
  };
};

export const setShowWorkSpaceModal = (value) => {
  return async (dispatch, getState) => {
    const state = { ...getState().workSpaceState };
    state.showWorkSpaceModal = value;
    await dispatch({ type: "HANDLE_SHOW_WORK_SPACE", payload: state });
  };
};
export const getAllWorkSpace = () => {
  return async (dispatch, getState) => {
    // var state = { ...getState().workSpaceState };
    const loadingState = { ...getState().loadingState };

    let toastMessage = "";
    try {
      if (!loadingState.ProcessingDelay.includes("getAllWorkspace")) {
        //handle show loadin
        {
          loadingState.ProcessingDelay = loadingState.ProcessingDelay.filter(
            (item) => item != "getAllWorkspace"
          );
          loadingState.ProcessingDelay.push("getAllWorkspace");
          loadingState.canRequest = false;
          await dispatch({
            type: "SET_PROCESSING_DELAY",
            payload: loadingState,
          });
        }

        const workSpaces = await getAllWorkspace();
        if (workSpaces.data.status == true && workSpaces.data.code == 200) {
          const state = { ...getState().workSpaceState };
          state.allWorkSpace = workSpaces.data.data;
          state.webAdress = workSpaces.data.data[0].website || "";
          await dispatch({ type: "GET_ALL_WEB_ADRESS_DATA", payload: state });
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
    //handle hide loading
    {
      const loadingState1 = { ...getState().loadingState };
      var removeProcessingItem = loadingState1.ProcessingDelay.filter(
        (item) => item != "getAllWorkspace"
      );
      loadingState1.ProcessingDelay = removeProcessingItem;
      loadingState1.canRequest = removeProcessingItem.length > 0 ? false : true;
      await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState1 });
    }
  };
};

export const setKeyWords = (value, stateKey) => {
  return async (dispatch, getState) => {
    const state = { ...getState().workSpaceState };
    switch (stateKey) {
      case "keyWord1":
        state.keyWord1.key = value;
        break;
      case "site1":
        state.keyWord1.site = value;
        break;
      case "keyWord2":
        state.keyWord2.key = value;
        break;
      case "site2":
        state.keyWord2.site = value;
        break;
      case "keyWord3":
        state.keyWord3.key = value;
        break;
      case "site3":
        state.keyWord3.site = value;
        break;
      case "keyWord4":
        state.keyWord4.key = value;
        break;
      case "site4":
        state.keyWord4.site = value;
        break;
      case "keyWord5":
        state.keyWord5.key = value;
        break;
      case "site5":
        state.keyWord5.site = value;
        break;
      case "keyWord6":
        state.keyWord6.key = value;
        break;
      case "site6":
        state.keyWord6.site = value;
        break;
      case "keyWord7":
        state.keyWord7.key = value;
        break;
      case "site7":
        state.keyWord7.site = value;
        break;
      case "keyWord8":
        state.keyWord8.key = value;
        break;
      case "site8":
        state.keyWord8.site = value;
        break;
      case "keyWord9":
        state.keyWord9.key = value;
        break;
      case "site9":
        state.keyWord9.site = value;
        break;
      case "keyWord10":
        state.keyWord10.key = value;
        break;
      case "site10":
        state.keyWord10.site = value;
        break;
      default:
        break;
    }
    await dispatch({ type: "WEB_ADRESS", payload: state });
  };
};

export const setCommercialPages = (adress, stateCommercial) => {
  return async (dispatch, getState) => {
    const state = { ...getState().workSpaceState };

    switch (stateCommercial) {
      case "commercialPage1":
        state.commercialPage1 = adress;
        break;
      case "commercialPage2":
        state.commercialPage2 = adress;
        break;
      case "commercialPage3":
        state.commercialPage3 = adress;
        break;
      case "commercialPage4":
        state.commercialPage4 = adress;
        break;
      case "commercialPage5":
        state.commercialPage5 = adress;
        break;
      case "commercialPage6":
        state.commercialPage6 = adress;
        break;
      case "commercialPage7":
        state.commercialPage7 = adress;
        break;
      case "commercialPage8":
        state.commercialPage8 = adress;
        break;
      case "commercialPage9":
        state.commercialPage9 = adress;
        break;
      case "commercialPage10":
        state.commercialPage10 = adress;
        break;
      default:
        break;
    }
    await dispatch({ type: "COMMERCIAL_PAGES", payload: state });
  };
};

export const setWebsitePages = (adress, stateWebsitePage) => {
  return async (dispatch, getState) => {
    const state = { ...getState().workSpaceState };

    switch (stateWebsitePage) {
      case "websitePage1":
        state.websitePage1 = adress;
        break;
      case "websitePage2":
        state.websitePage2 = adress;
        break;
      case "websitePage3":
        state.websitePage3 = adress;
        break;
      case "websitePage4":
        state.websitePage4 = adress;
        break;
      case "websitePage5":
        state.websitePage5 = adress;
        break;
      case "websitePage6":
        state.websitePage6 = adress;
        break;
      case "websitePage7":
        state.websitePage7 = adress;
        break;
      case "websitePage8":
        state.websitePage8 = adress;
        break;
      case "websitePage9":
        state.websitePage9 = adress;
        break;
      case "websitePage10":
        state.websitePage10 = adress;
        break;
      default:
        break;
    }
    await dispatch({ type: "COMMERCIAL_PAGES", payload: state });
  };
};

export const setCompetitorSite = (adress, competitorSite) => {
  return async (dispatch, getState) => {
    const state = { ...getState().workSpaceState };

    var handleCompetitorIndex = competitorSite.split(",");
    switch (handleCompetitorIndex[0]) {
      case "keyWord1":
        state.keyWord1.competitorSite[handleCompetitorIndex[1] - 1] = adress;
        break;
      case "keyWord2":
        state.keyWord2.competitorSite[handleCompetitorIndex[1] - 1] = adress;
        break;
      case "keyWord3":
        state.keyWord3.competitorSite[handleCompetitorIndex[1] - 1] = adress;
        break;
      case "keyWord4":
        state.keyWord4.competitorSite[handleCompetitorIndex[1] - 1] = adress;
        break;
      case "keyWord5":
        state.keyWord5.competitorSite[handleCompetitorIndex[1] - 1] = adress;
        break;
      case "keyWord6":
        state.keyWord6.competitorSite[handleCompetitorIndex[1] - 1] = adress;
        break;
      case "keyWord7":
        state.keyWord7.competitorSite[handleCompetitorIndex[1] - 1] = adress;
        break;
      case "keyWord8":
        state.keyWord8.competitorSite[handleCompetitorIndex[1] - 1] = adress;
        break;
      case "keyWord9":
        state.keyWord9.competitorSite[handleCompetitorIndex[1] - 1] = adress;
        break;
      case "keyWord10":
        state.keyWord10.competitorSite[handleCompetitorIndex[1] - 1] = adress;
        break;
      default:
        break;
    }
    await dispatch({ type: "COMMERCIAL_PAGES", payload: state });
  };
};

export const workSpaceWebsite = () => {
  return async (dispatch, getState) => {
    const state = { ...getState().workSpaceState };
    const loadingState = { ...getState().loadingState };
    let toastMessage = "";
    const webAdress = state.webAdress;
    if (webAdress != "") {
      try {
        //handle show loadin
        {
          loadingState.ProcessingDelay.push("website");
          loadingState.canRequest = false;
          await dispatch({
            type: "SET_PROCESSING_DELAY",
            payload: loadingState,
          });
        }
        var row = {
          website: webAdress,
        };

        const { data } = await website(row);
        if (data.code == 200 && data.status == true) {
          state.webAdressUuid = data.data.uuid;
          // toast.update(toastPromise, { render: "آدرس وبسایت شما تنظیم شد", type: "success", isLoading: false, autoClose: 3000 })
        } else {
          data.errors.forEach((element) => {
            toastMessage += element + " / ";
          });
          showToast(toastMessage, "error");
          // toast.update(toastPromise, { render: toastMessage, type: "error", isLoading: false, autoClose: 3000 })
        }
      } catch (error) {
        error.response.data.errors.forEach((element) => {
          toastMessage += element + " / ";
        });
        showToast(toastMessage, "error");
        // toast.update(toastPromise, { render: toastMessage, type: "error", isLoading: false, autoClose: 3000 })
      }
      await dispatch({ type: "SET_WORK_SPACE_WEB_ADRESS", payload: state });
    } else {
      showInputErrorToast();
    }
    //handle hide loading
    {
      var removeProcessingItem = loadingState.ProcessingDelay.filter(
        (item) => item != "website"
      );
      loadingState.ProcessingDelay = removeProcessingItem;
      loadingState.canRequest = removeProcessingItem > 0 ? false : true;
      await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState });
    }
  };
};

export const workSpaceKeyWords = () => {
  return async (dispatch, getState) => {
    const state = { ...getState().workSpaceState };
    const loadingState = { ...getState().loadingState };
    let toastMessage = "";
    const webAdress = state.webAdress;
    if (webAdress != "") {
      try {
        //handle show loadin
        {
          loadingState.ProcessingDelay.push("keywords");
          loadingState.canRequest = false;
          await dispatch({
            type: "SET_PROCESSING_DELAY",
            payload: loadingState,
          });
        }
        var row = {
          key: webAdress,
        };
        const { data } = await keywords(row);
        if (data.code == 200 && data.status == true) {
          state.webAdressUuid = data.data.uuid;
          showToast("آدرس وبسایت شما تنظیم شد", "success");
          // toast.update(toastPromise, { render: "آدرس وبسایت شما تنظیم شد", type: "success", isLoading: false, autoClose: 3000 })
        } else {
          data.errors.forEach((element) => {
            toastMessage += element + " / ";
          });
          showToast(toastMessage, "error");
          // toast.update(toastPromise, { render: toastMessage, type: "error", isLoading: false, autoClose: 3000 })
        }
      } catch (error) {
        error.response.data.errors.forEach((element) => {
          toastMessage += element + " / ";
        });
        showToast(toastMessage, "error");
        // toast.update(toastPromise, { render: toastMessage, type: "error", isLoading: false, autoClose: 3000 })
      }
      await dispatch({ type: "SET_WORK_SPACE_WEB_ADRESS", payload: state });
    } else {
      showInputErrorToast();
    }
    //handle hide loading
    {
      var removeProcessingItem = loadingState.ProcessingDelay.filter(
        (item) => item != "keywords"
      );
      loadingState.ProcessingDelay = removeProcessingItem;
      loadingState.canRequest = removeProcessingItem > 0 ? false : true;
      await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState });
    }
  };
};

export const addWorkSpace = (step) => {
  return async (dispatch, getState) => {
    //
    const state = { ...getState().workSpaceState };
    const loadingState = { ...getState().loadingState };

    const webAdress = state.webAdress;
    // const charKey1 = state.charKey1;
    // const charKey2 = state.charKey2;
    // const site1 = state.site1;
    // const site2 = state.site2;
    const {
      // allWorkSpace,
      keyWord1,
      keyWord2,
      keyWord3,
      keyWord4,
      keyWord5,
      keyWord6,
      keyWord7,
      keyWord8,
      keyWord9,
      keyWord10,
      commercialPage1,
      commercialPage2,
      commercialPage3,
      commercialPage4,
      commercialPage5,
      commercialPage6,
      commercialPage7,
      commercialPage8,
      commercialPage9,
      commercialPage10,
      websitePage1,
      websitePage2,
      websitePage3,
      websitePage4,
      websitePage5,
      websitePage6,
      websitePage7,
      websitePage8,
      websitePage9,
      websitePage10,
      resultSetWorkSpace,
    } = state;

    const keyWords = [
      keyWord1,
      keyWord2,
      keyWord3,
      keyWord4,
      keyWord5,
      keyWord6,
      keyWord7,
      keyWord8,
      keyWord9,
      keyWord10,
    ];
    var keywords = [];

    keyWords.forEach((element) => {
      if (element.key != "") {
        keywords.push({
          key: element.key,
          url: "https://" + webAdress + "/" + element.site,
          competitors:
            step == 5
              ? element.competitorSite
                  .map((item) => "https://" + item)
                  .filter((value) => value != "https://")
              : [],
        });
      }
    });

    //competitorSite
    var commercialPages = [
      commercialPage1,
      commercialPage2,
      commercialPage3,
      commercialPage4,
      commercialPage5,
      commercialPage6,
      commercialPage7,
      commercialPage8,
      commercialPage9,
      commercialPage10,
    ];
    var links = commercialPages.filter((value) => value != "");

    var websitePages = [
      websitePage1,
      websitePage2,
      websitePage3,
      websitePage4,
      websitePage5,
      websitePage6,
      websitePage7,
      websitePage8,
      websitePage9,
      websitePage10,
    ];
    var pages = websitePages.filter((value) => value != "");
    // let toastPromise = toast.loading("درحال ارسال درخواست شما به سرور")
    var modalWorkSpace = {
      workspace: "https://" + webAdress,
      keywords: keywords,
      links:
        step >= 3
          ? links.map((item) => "https://" + webAdress + "/" + item)
          : [],
      pages:
        step >= 4
          ? pages.map((item) => "https://" + webAdress + "/" + item)
          : [],
    };

    let toastMessage = "";
    try {
      //handle show loadin
      {
        loadingState.ProcessingDelay.push("creatWorkSpace");
        loadingState.canRequest = false;
        await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState });
      }

      const { data } = await creatWorkSpace(modalWorkSpace);

      if (data.code == 200 && data.status == true) {
        // getAllWorkSpace();
        const workSpaces = await getAllWorkspace();
        if (workSpaces.data.status == true && workSpaces.data.code == 200) {
          state.allWorkSpace = workSpaces.data.data;
        }
        state.resultSetWorkSpace = { reportStatus: false, reportStep: step };
        showToast(data.data.msg, "success");
        // toast.update(toastPromise, { render: data.data.msg, type: "success", isLoading: false, autoClose: 3000 })
        // localStorage.setItem("modalWorkSpace", `${data.status},${step}`);
        // state.forceUpdate += 1;
      } else {
        // data.errors.forEach(element => {
        //     toastMessage += element + " / ";
        // });
        showToast(data.data.msg, "error");
        // toast.update(toastPromise, { render: data.data.msg, type: "error", isLoading: false, autoClose: 3000 })
      }
      state.resultSetWorkSpace = {
        reportStatus: data.code == 200 && data.status == true ? true : false,
        reportStep: step,
      };
    } catch (error) {
      error.response.data.errors.forEach((element) => {
        toastMessage += element + " / ";
      });
      showToast(toastMessage, "error");
      // toast.update(toastPromise, { render: toastMessage, type: "error", isLoading: false, autoClose: 3000 })
    }
    // } else {
    //     showInputErrorToast();
    // }

    //handle hide loading
    {
      var removeProcessingItem = loadingState.ProcessingDelay.filter(
        (item) => item != "creatWorkSpace"
      );
      loadingState.ProcessingDelay = removeProcessingItem;
      loadingState.canRequest = removeProcessingItem > 0 ? false : true;
      await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState });
    }
    await dispatch({ type: "MODAL_SET_WORK_SPACE_PLAN", payload: state });
  };
};

export const resetLimitState = () => {
  return async (dispatch, getState) => {
    const state = { ...getState().workSpaceState };
    state.checkLimit = !state.checkLimit;
    await dispatch({ type: "CHECK_LIMIT", payload: state });
  };
};

export const resetWorkSpaceState = () => {
  return async (dispatch, getState) => {
    const state = { ...getState().workSpaceState };
    await dispatch({ type: "RESET_WORK_SPACE_STATE", payload: state });
  };
};

//all limit
export const allLimitDataFeature = ({ axiosController }) => {
  return async (dispatch, getState) => {
    //
    const userState = { ...getState().userState };
    const loadingState = { ...getState().loadingState };

    // let package_uuid = "";
    if (userState.userData.package != undefined) {
      // package_uuid = userState.userData.package.uuid;

      if (!loadingState.ProcessingDelay.includes("userLimit")) {
        //handle show loadin
        {
          loadingState.ProcessingDelay.push("userLimit");
          loadingState.canRequest = false;
          await dispatch({
            type: "SET_PROCESSING_DELAY",
            payload: loadingState,
          });
        }

        try {
          // debugger
          // const infoPackage = await getPackageInfO({ package_uuid });
          const limitPackage = await userLimit({ axiosController });
          if (
            limitPackage.data.code == 200 &&
            limitPackage.data.status == true 
            // infoPackage.data.code == 200 &&
            // infoPackage.data.status == true
          ) {
            const state = { ...getState().workSpaceState };
            state.limitsDatas = limitPackage.data.data;
            state.allLimitsDatas = limitPackage.data.data;
            await dispatch({
              type: "SET_WORK_SPACE_WEB_ADRESS",
              payload: state,
            });
          }
          //handle hide loading
          {
            const loadingState1 = { ...getState().loadingState };
            var removeProcessingItem = loadingState1.ProcessingDelay.filter(
              (item) => item != "userLimit"
            );
            loadingState1.ProcessingDelay = removeProcessingItem;
            loadingState1.canRequest =
              removeProcessingItem.length > 0 ? false : true;
            await dispatch({
              type: "SET_PROCESSING_DELAY",
              payload: loadingState1,
            });
          }
        } catch (error) {
          //handle hide loading
          {
            const loadingState1 = { ...getState().loadingState };
            var removeProcessingItem = loadingState1.ProcessingDelay.filter(
              (item) => item != "userLimit"
            );
            loadingState1.ProcessingDelay = removeProcessingItem;
            loadingState1.canRequest =
              removeProcessingItem.length > 0 ? false : true;
            await dispatch({
              type: "SET_PROCESSING_DELAY",
              payload: loadingState1,
            });
          }
        }
      }
    }
  };
};

export const handleLowOffLimitCount = (section, numLowOff) => {
  return async (dispatch, getState) => {
    const state = { ...getState().workSpaceState };
    const findFeatureIndex = state.limitsDatas.findIndex(
      (state) => state.feature_title == section
    );
    if (findFeatureIndex != -1) {
      state.limitsDatas[findFeatureIndex].count -= numLowOff;
    }
    await dispatch({ type: "LOW_OFF_FEATURE_COUNT", payload: state });
  };
};
