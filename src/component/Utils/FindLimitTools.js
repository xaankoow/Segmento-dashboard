export const FindLimitTools = (section, workSpaceState) => {


    const limitInfo = {
        all: 0,
        limit: 0
    }
    switch (section) {
        case "workSpace":
            limitInfo.all = workSpaceState.allLimitsDatas.length != 0 ? workSpaceState.allLimitsDatas[2].count : 0;
            limitInfo.limit = workSpaceState.limitsDatas.length > 0 ? workSpaceState.limitsDatas[2].count : 0;
            break;
        case "keyWords":
            limitInfo.all = workSpaceState.allLimitsDatas.length != 0 && workSpaceState.allLimitsDatas[6].count;
            limitInfo.limit = workSpaceState.limitsDatas.length > 0 ? workSpaceState.limitsDatas[6].count : 0;
            break;
        case "contentCreation":
            limitInfo.all = workSpaceState.allLimitsDatas.length != 0 && workSpaceState.allLimitsDatas[20].count;
            limitInfo.limit = workSpaceState.limitsDatas.length > 0 ? workSpaceState.limitsDatas[20].count : 0;
            break;
        // case "commercialPage":
        //     a = {
        //         allWords: allLimitsDatas.length != 0 && allLimitsDatas[19].count,
        //         rest: limitsDatas.length > 0 ? limitsDatas[19].count : "",
        //     };
        //     break;
        // case "testSpeedPage":
        //     a = {
        //         allWords: allLimitsDatas.length != 0 && allLimitsDatas[18].count,
        //         rest: limitsDatas.length > 0 ? limitsDatas[18].count : "",
        //     };
        //     break;
        // case "CompetitorSite":
        //     a = {
        //         allWords: allLimitsDatas.length != 0 && allLimitsDatas[1].count,
        //         rest: limitsDatas.length > 0 ? limitsDatas[1].count : "",
        //     };

        //     break;

        default:
            break;
    }
    return limitInfo
}