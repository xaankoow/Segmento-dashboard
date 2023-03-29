import { keywordService } from "../../service/keyWordsService";
import { addLoadingItem, removeLoadingItem } from "./loading";
import { handleLowOffLimitCount } from "./workSpace";

export const titleCopyWriterAction = (keys) => {
  return async (dispatch, getState) => {
    dispatch(addLoadingItem("titleCopyWriterService"));
    const isArray = typeof keys=="object";
    try {
      const serviceData = {
        key: keys,
        key2: "",
        used_by: "local",
        type: "",
        characters: false,
      }; 
          const { data, status } = await keywordService(serviceData);
          if (status == 200 && data.status == true) {
            dispatch(removeLoadingItem("titleCopyWriterService"));
            dispatch(
              handleLowOffLimitCount(
                isArray ? "TITLE_BUILDER_BATCH" : "TITLE_BUILDER",
                isArray ? keys.length : 1
              )
            );
            return true;
          } else {
            dispatch(removeLoadingItem("titleCopyWriterService"));
            return false;
          }
    } catch (error) {
      dispatch(removeLoadingItem("titleCopyWriterService"));
      return false;
    }
  };
};
