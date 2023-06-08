import http from "./httpService";
import config from "./config.json";

export const website = (website) => {
  const headerRegisterUser = {
    Accept: "application/json",
  };
  return http.post(
    `${config.xaankooApi}/api/v1/workspace`,
    website,
    headerRegisterUser
  );
};

export const getAllWorkspace = () => {
  const headerRegisterUser = {
    Accept: "application/json",
  };
  let response = http.get(`${config.xaankooApi}/api/v2/workspaces`, headerRegisterUser);
  return response;
};

export const keywords = (website) => {
  const headerRegisterUser = {
    Accept: "application/json",
  };
  return http.post(
    `${config.xaankooApi}/api/v1/workspace`,
    website,
    headerRegisterUser
  );
};

export const creatWorkSpace = (workSpace) => {
  const headerRegisterUser = {
    Accept: "application/json",
  };
  return http.post(
    `${config.xaankooApi}/api/v1/workspace/workspace-wizard`,
    workSpace,
    headerRegisterUser
  );
};
