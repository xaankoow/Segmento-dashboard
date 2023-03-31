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

export const getKeywordRankService = ({ id, workspace, axiosController }) => {
  const headerRegisterUser = {
    "Content-Type": "multipart/form-data",
    workspace,
    signal: axiosController != undefined && axiosController.signal,
  };
  return http.post(
    `${config.xaankooApi}/api/v1/keyword/rank`,
    {
      uuid: id,
      count: 10,
    },
    {
      headers: headerRegisterUser,
    }
  );
};

export const getKeywordRankPeriodService = ({ workspace, axiosController }) => {
  const headerRegisterUser = {
    "Content-Type": "multipart/form-data",
    workspace,
    signal: axiosController != undefined && axiosController.signal,
  };
  // return http.post(
  //   `${config.xaankooApi}/api/v1/workspace/keywordsRankPerDates`,
  //   {},
  //   {
  //     headers: headerRegisterUser,
  //   }
  // );
  // FOR TEST I PUT THIS
  return new Promise((resolve) => {
    setTimeout(
      resolve({
        status: true,
        code: 200,
        errors: [],
        data: {
          "2022-11-07": [
            {
              created_at: "2022-11-07",
              position: 1,
              keyword_uuid: "5e869426-04a0-4ff1-b510-cb1f06997487",
              keyword: {
                uuid: "5e869426-04a0-4ff1-b510-cb1f06997487",
                key: "ماهی",
                status: true,
                competitors: ["http://nopana.ir"],
              },
            },
            {
              created_at: "2022-11-07",
              position: 5,
              keyword_uuid: "f7c84876-c31a-4050-8da5-ad9c9be73647",
              keyword: {
                uuid: "f7c84876-c31a-4050-8da5-ad9c9be73647",
                key: "برگ",
                status: true,
                competitors: [],
              },
            },
            {
              created_at: "2022-11-07",
              position: 10,
              keyword_uuid: "f7c84876-c31a-4050-8da5-ad9c9be73649",
              keyword: {
                uuid: "f7c84876-c31a-4050-8da5-ad9c9be73649",
                key: "درخت",
                status: true,
                competitors: [],
              },
            },
          ],
          "2022-11-09": [
            {
              created_at: "2022-11-07",
              position: 3,
              keyword_uuid: "5e869426-04a0-4ff1-b510-cb1f06997487",
              keyword: {
                uuid: "5e869426-04a0-4ff1-b510-cb1f06997487",
                key: "ماهی",
                status: true,
                competitors: ["http://nopana.ir"],
              },
            },
            {
              created_at: "2022-11-07",
              position: 7,
              keyword_uuid: "f7c84876-c31a-4050-8da5-ad9c9be73647",
              keyword: {
                uuid: "f7c84876-c31a-4050-8da5-ad9c9be73647",
                key: "برگ",
                status: true,
                competitors: [],
              },
            },
            {
              created_at: "2022-11-07",
              position: 8,
              keyword_uuid: "f7c84876-c31a-4050-8da5-ad9c9be73649",
              keyword: {
                uuid: "f7c84876-c31a-4050-8da5-ad9c9be73649",
                key: "درخت",
                status: true,
                competitors: [],
              },
            },
          ],
          "2022-11-11": [
            {
              created_at: "2022-11-07",
              position: 4,
              keyword_uuid: "5e869426-04a0-4ff1-b510-cb1f06997487",
              keyword: {
                uuid: "5e869426-04a0-4ff1-b510-cb1f06997487",
                key: "ماهی",
                status: true,
                competitors: ["http://nopana.ir"],
              },
            },
            {
              created_at: "2022-11-07",
              position: 6,
              keyword_uuid: "f7c84876-c31a-4050-8da5-ad9c9be73647",
              keyword: {
                uuid: "f7c84876-c31a-4050-8da5-ad9c9be73647",
                key: "برگ",
                status: true,
                competitors: [],
              },
            },
            {
              created_at: "2022-11-07",
              position: 7,
              keyword_uuid: "f7c84876-c31a-4050-8da5-ad9c9be73649",
              keyword: {
                uuid: "f7c84876-c31a-4050-8da5-ad9c9be73649",
                key: "درخت",
                status: true,
                competitors: [],
              },
            },
          ],
          "2022-11-14": [
            {
              created_at: "2022-11-07",
              position: 2,
              keyword_uuid: "5e869426-04a0-4ff1-b510-cb1f06997487",
              keyword: {
                uuid: "5e869426-04a0-4ff1-b510-cb1f06997487",
                key: "ماهی",
                status: true,
                competitors: ["http://nopana.ir"],
              },
            },
            {
              created_at: "2022-11-07",
              position: 5,
              keyword_uuid: "f7c84876-c31a-4050-8da5-ad9c9be73647",
              keyword: {
                uuid: "f7c84876-c31a-4050-8da5-ad9c9be73647",
                key: "برگ",
                status: true,
                competitors: [],
              },
            },
            {
              created_at: "2022-11-07",
              position: 7,
              keyword_uuid: "f7c84876-c31a-4050-8da5-ad9c9be73649",
              keyword: {
                uuid: "f7c84876-c31a-4050-8da5-ad9c9be73649",
                key: "درخت",
                status: true,
                competitors: [],
              },
            },
          ],
          "2022-11-16": [
            {
              created_at: "2022-11-07",
              position: 2,
              keyword_uuid: "5e869426-04a0-4ff1-b510-cb1f06997487",
              keyword: {
                uuid: "5e869426-04a0-4ff1-b510-cb1f06997487",
                key: "ماهی",
                status: true,
                competitors: ["http://nopana.ir"],
              },
            },
            {
              created_at: "2022-11-07",
              position: 5,
              keyword_uuid: "f7c84876-c31a-4050-8da5-ad9c9be73647",
              keyword: {
                uuid: "f7c84876-c31a-4050-8da5-ad9c9be73647",
                key: "برگ",
                status: true,
                competitors: [],
              },
            },
            {
              created_at: "2022-11-07",
              position: 6,
              keyword_uuid: "f7c84876-c31a-4050-8da5-ad9c9be73649",
              keyword: {
                uuid: "f7c84876-c31a-4050-8da5-ad9c9be73649",
                key: "درخت",
                status: true,
                competitors: [],
              },
            },
          ],
          "2022-11-18": [
            {
              created_at: "2022-11-07",
              position: 2,
              keyword_uuid: "5e869426-04a0-4ff1-b510-cb1f06997487",
              keyword: {
                uuid: "5e869426-04a0-4ff1-b510-cb1f06997487",
                key: "ماهی",
                status: true,
                competitors: ["http://nopana.ir"],
              },
            },
            {
              created_at: "2022-11-07",
              position: 5,
              keyword_uuid: "f7c84876-c31a-4050-8da5-ad9c9be73647",
              keyword: {
                uuid: "f7c84876-c31a-4050-8da5-ad9c9be73647",
                key: "برگ",
                status: true,
                competitors: [],
              },
            },
            {
              created_at: "2022-11-07",
              position: 5,
              keyword_uuid: "f7c84876-c31a-4050-8da5-ad9c9be73649",
              keyword: {
                uuid: "f7c84876-c31a-4050-8da5-ad9c9be73649",
                key: "درخت",
                status: true,
                competitors: [],
              },
            },
          ],
          "2022-11-21": [
            {
              created_at: "2022-11-07",
              position: 2,
              keyword_uuid: "5e869426-04a0-4ff1-b510-cb1f06997487",
              keyword: {
                uuid: "5e869426-04a0-4ff1-b510-cb1f06997487",
                key: "ماهی",
                status: true,
                competitors: ["http://nopana.ir"],
              },
            },
            {
              created_at: "2022-11-07",
              position: 4,
              keyword_uuid: "f7c84876-c31a-4050-8da5-ad9c9be73647",
              keyword: {
                uuid: "f7c84876-c31a-4050-8da5-ad9c9be73647",
                key: "برگ",
                status: true,
                competitors: [],
              },
            },
            {
              created_at: "2022-11-07",
              position: 7,
              keyword_uuid: "f7c84876-c31a-4050-8da5-ad9c9be73649",
              keyword: {
                uuid: "f7c84876-c31a-4050-8da5-ad9c9be73649",
                key: "درخت",
                status: true,
                competitors: [],
              },
            },
          ],
          "2022-11-23": [
            {
              created_at: "2022-11-07",
              position: 5,
              keyword_uuid: "5e869426-04a0-4ff1-b510-cb1f06997487",
              keyword: {
                uuid: "5e869426-04a0-4ff1-b510-cb1f06997487",
                key: "ماهی",
                status: true,
                competitors: ["http://nopana.ir"],
              },
            },
            {
              created_at: "2022-11-07",
              position: 9,
              keyword_uuid: "f7c84876-c31a-4050-8da5-ad9c9be73647",
              keyword: {
                uuid: "f7c84876-c31a-4050-8da5-ad9c9be73647",
                key: "برگ",
                status: true,
                competitors: [],
              },
            },
            {
              created_at: "2022-11-07",
              position: 3,
              keyword_uuid: "f7c84876-c31a-4050-8da5-ad9c9be73649",
              keyword: {
                uuid: "f7c84876-c31a-4050-8da5-ad9c9be73649",
                key: "درخت",
                status: true,
                competitors: [],
              },
            },
          ],
          "2022-11-25": [
            {
              created_at: "2022-11-07",
              position: 1,
              keyword_uuid: "5e869426-04a0-4ff1-b510-cb1f06997487",
              keyword: {
                uuid: "5e869426-04a0-4ff1-b510-cb1f06997487",
                key: "ماهی",
                status: true,
                competitors: ["http://nopana.ir"],
              },
            },
            {
              created_at: "2022-11-07",
              position: 4,
              keyword_uuid: "f7c84876-c31a-4050-8da5-ad9c9be73647",
              keyword: {
                uuid: "f7c84876-c31a-4050-8da5-ad9c9be73647",
                key: "برگ",
                status: true,
                competitors: [],
              },
            },
            {
              created_at: "2022-11-07",
              position: 8,
              keyword_uuid: "f7c84876-c31a-4050-8da5-ad9c9be73649",
              keyword: {
                uuid: "f7c84876-c31a-4050-8da5-ad9c9be73649",
                key: "درخت",
                status: true,
                competitors: [],
              },
            },
          ],
        },
      }),
      1000
    );
  });
};
