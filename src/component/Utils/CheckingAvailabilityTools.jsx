import { useSelector } from "react-redux";
import { FindLimitTools } from "./FindLimitTools";


export const ChackingAvailabilityTools = ({ path, section, userState, workSpaceState }) => {

    // const userState = useSelector((state) => state.userState);


    const limit = FindLimitTools(section, workSpaceState).limit
    if (limit == 0) {
        return "checkLimit"
    } else if (userState.userData.package.title == "پکیج پایه  ") {
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