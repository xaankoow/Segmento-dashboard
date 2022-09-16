import { useSelector } from "react-redux";
import { FindLimitTools } from "./FindLimitTools";


export const ChackingAvailabilityTools = ({ path, section, userState, workSpaceState }) => {

    // const userState = useSelector((state) => state.userState);

    debugger
    const limit = FindLimitTools(section, workSpaceState).limit
    if (userState.userData.package.price == 0) {
        return "checkedPackage"
    } else if (limit == 0) {
        return "checkLimit"

    }
    return path

    // switch (path) {
    //     case value:

    //         break;

    //     default:
    //         break;
    // 
}