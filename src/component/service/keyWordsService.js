import http from "./httpService";
import config from "./config.json";

export const keywordService = (datas) => {
  //7
  const headerRegisterUser = {
    "Content-Type": "multipart/form-data",
    workspace: "text/plain",
  };
  return http.post(
    `${config.xaankooApi}/api/v1/keyword/suggests`,
    datas,
    headerRegisterUser
  );
};
