export const FindLimitTools = (section,workSpaceState) => {

    // const { limitsDatas } = useSelector((state) => state.workSpaceState);
    // const { allLimitsDatas } = useSelector((state) => state.workSpaceState);

    const limitInfo = {
        all: 0,
        limit: 0
    }
// debugger
    switch (section) {
        case "workSpace":
            // debugger
            limitInfo.all = workSpaceState.allLimitsDatas.length != 0 ? workSpaceState.allLimitsDatas[2].count:0;
            limitInfo.limit = workSpaceState.limitsDatas.length > 0 ? workSpaceState.limitsDatas[2].count : 0;
            // limitInfo.limit = 0;
            //   a = {
            //     allWords: allLimitsDatas.length != 0 && allLimitsDatas[2].count,
            //     rest: limitsDatas.length > 0 ? limitsDatas[2].count : "",
            //   };
            break;
        case "keyWords":
            limitInfo.all = workSpaceState.allLimitsDatas.length != 0 && workSpaceState.allLimitsDatas[3].count;
            limitInfo.limit = workSpaceState.limitsDatas.length > 0 ? workSpaceState.limitsDatas[3].count : 0;
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