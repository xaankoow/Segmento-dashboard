import { useSelector } from "react-redux";
import { FindLimitTools } from "./FindLimitTools";


export const ChackingAvailabilityTools = ({ path, section, userState, workSpaceState }) => {

    // const userState = useSelector((state) => state.userState);

    debugger
    const limit = FindLimitTools(section, workSpaceState).limit
    if ( limit == 0) {
        return "checkLimit"
    } else if (userState.userData.package.price == 0) {
        return "checkedPackage"
    }
    return path

    // switch (path) {
    //     case value:

    //         break;

    //     default:
    //         break;
    // 
}