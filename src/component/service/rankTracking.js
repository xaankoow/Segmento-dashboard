import http from "./httpService";
import config from "./config.json";

export const initWorkSpacePeriodDataService = ({
  workspaceUuid,
  period,
  axiosController,
}) => {
  //7
  const headerRegisterUser = {
    "Content-Type": "multipart/form-data",
    workspace: "text/plain",
    signal: axiosController != undefined && axiosController.signal,
  };
  return http.post(
    `${config.xaankooApi}/api/v1/report/workspace`,
    { workspaceUuid, period },
    headerRegisterUser
  );
};

export const initKeyWordsDataService = ({
  workspaceUuid,
  period,
  axiosController,
}) => {
  //7
  const headerRegisterUser = {
    "Content-Type": "multipart/form-data",
    workspace: "text/plain",
    signal: axiosController != undefined && axiosController.signal,
  };
  return http.post(
    `${config.xaankooApi}/api/v1/report/keywords`,
    { workspace: workspaceUuid, period },
    headerRegisterUser
  );
};

export const keyWordsPeriodDataService = ({
  keyUuids,
  period,
  axiosController,
}) => {
  //7
  const headerRegisterUser = {
    "Content-Type": "multipart/form-data",
    workspace: "text/plain",
    signal: axiosController != undefined && axiosController.signal,
  };
  return http.post(
    `${config.xaankooApi}/api/v1/report/keywordChartData`,
    { uuids: keyUuids, period },
    headerRegisterUser
  );
};

export const keyWordsDataService = ({ axiosController, workspace }) => {
  const headerRegisterUser = {
    "Content-Type": "multipart/form-data",
    workspace,
    signal: axiosController != undefined && axiosController.signal,
  };
  return http.get(`${config.xaankooApi}/api/v1/keyword`, {
    headers: headerRegisterUser,
  });
};

export const keyWordDataService = ({ axiosController, workspace, id }) => {
  const headerRegisterUser = {
    "Content-Type": "multipart/form-data",
    workspace,
    signal: axiosController != undefined && axiosController.signal,
  };
  return http.get(`${config.xaankooApi}/api/v1/keyword/${id}`, {
    headers: headerRegisterUser,
  });
};

export const addKeywordService = ({
  keyword,
  url,
  workspace,
  axiosController,
}) => {
  const headerRegisterUser = {
    "Content-Type": "multipart/form-data",
    workspace,
    signal: axiosController != undefined && axiosController.signal,
  };
  return http.post(
    `${config.xaankooApi}/api/v1/workspace/addKeyword`,
    {
      keyword,
      url,
      workspace_id: workspace,
    },
    {
      headers: headerRegisterUser,
    }
  );
};

export const deleteKeywordService = ({ axiosController, workspace, id }) => {
  const headerRegisterUser = {
    "Content-Type": "multipart/form-data",
    workspace,
    signal: axiosController != undefined && axiosController.signal,
  };
  return http.delete(`${config.xaankooApi}/api/v1/keyword/${id}`, {
    headers: headerRegisterUser,
  });
};

export const addKeywordTagService = (workspace, data, axiosController) => {
  const headerRegisterUser = {
    "Content-Type": "multipart/form-data",
    workspace,
    signal: axiosController != undefined && axiosController.signal,
  };
  return http.post(`${config.xaankooApi}/api/v1/tag/addTagAndNote`, data, {
    headers: headerRegisterUser,
  });
};

export const searchKeywordTagService = (
  workspace,
  data = { tag: "", type: "keyword" },
  axiosController
) => {
  const headerRegisterUser = {
    "Content-Type": "multipart/form-data",
    workspace,
    signal: axiosController != undefined && axiosController.signal,
  };
  return http.post(`${config.xaankooApi}/api/v1/tag/searchWithTag`, data, {
    headers: headerRegisterUser,
  });
};
