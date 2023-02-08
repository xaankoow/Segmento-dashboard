import { useDispatch, useSelector } from "react-redux";

export default function BadgeLimitKeyWords({ numFont, api }) {
  const userState = useSelector((state) => state.userState);
  const { checkLimit } = useSelector((state) => state.workSpaceState);

  var moment = require("jalali-moment");
  var nowDate = new Date();

  //store badge redux
  const dispatch = useDispatch();
  const { limitsDatas } = useSelector((state) => state.workSpaceState);
  const { allLimitsDatas } = useSelector((state) => state.workSpaceState);
  var startDate =
    userState.userData.package != undefined &&
    new Date(moment(userState.userData.package.start).format("YYYY/M/D"));
  var expiryDate =
    userState.userData.package != undefined &&
    new Date(moment(userState.userData.package.end).format("YYYY/M/D"));
  var timeSecDaysLeft = Math.abs(expiryDate - nowDate);
  var timeSecDays = Math.abs(expiryDate - startDate);

  var numberOfDaysLeft = Math.ceil(timeSecDaysLeft / (1000 * 60 * 60 * 24));
  var numberOfDays = Math.ceil(timeSecDays / (1000 * 60 * 60 * 24));

  const numStyle = `text-[#7D7D7D] text-[${
    numFont != undefined ? numFont : "14px"
  }] pt-[5px] pb-[2px]`;
  var a = 0;

  switch (api) {
    case "isContentProduction":
      a = {
        allWords: allLimitsDatas.length != 0 && allLimitsDatas[20].count,
        rest: limitsDatas.length > 0 ? limitsDatas[20].count : "",
      };
      break;

    case "isKeyword":
      a = {
        allWords: allLimitsDatas.length != 0 && allLimitsDatas[4].count,
        rest: limitsDatas.length > 0 ? limitsDatas[4].count : "",
      };
      break;
    case "GOOGLE_INDEXER_LIMIT":
      a = {
        allWords: allLimitsDatas.length != 0 && allLimitsDatas[13].count,
        rest: limitsDatas.length > 0 ? limitsDatas[13].count : "",
      };
      break;
    //   data of workSpace
    case 1:
      a = {
        allWords: allLimitsDatas.length != 0 && allLimitsDatas[2].count,
        rest: limitsDatas.length > 0 ? limitsDatas[2].count : "",
      };
      break;
    case 2:
      a = {
        allWords: allLimitsDatas.length != 0 && allLimitsDatas[3].count,
        rest: limitsDatas.length > 0 ? limitsDatas[3].count : "",
      };
      break;
    case 3:
      a = {
        allWords: allLimitsDatas.length != 0 && allLimitsDatas[19].count,
        rest: limitsDatas.length > 0 ? limitsDatas[19].count : "",
      };
      break;
    case 4:
      a = {
        allWords: allLimitsDatas.length != 0 && allLimitsDatas[18].count,
        rest: limitsDatas.length > 0 ? limitsDatas[18].count : "",
      };
      break;
    case 5:
      a = {
        allWords: allLimitsDatas.length != 0 && allLimitsDatas[1].count,
        rest: limitsDatas.length > 0 ? limitsDatas[1].count : "",
      };
      break;
    case "titleCopyWriter":
      a = {
        allWords: allLimitsDatas.length != 0 && allLimitsDatas[7].count,
        rest: limitsDatas.length > 0 ? limitsDatas[7].count : "",
      };
      break;
      case "titleCopyWriterBulk":
        a = {
          allWords: allLimitsDatas.length != 0 && allLimitsDatas[15].count,
          rest: limitsDatas.length > 0 ? limitsDatas[15].count : "",
        };

      break;
    default:
      break;
  }
  return (
    <div className="flex items-center text-[#7D7D7D] bg-[#D9D9D9] rounded  px-2 w-full h-full">
      <span className={numStyle}>{a.allWords}</span>
      <hr className="w-4 bg-gray text-[#7D7D7D] rotate-90" />
      <span
        className={numStyle}
        style={{
          color:
            a.allWords && a.rest >= Math.round((a.allWords * 70) / 100)
              ? "#10CCAE"
              : a.rest && a.rest >= Math.round((a.allWords * 1) / 100)
              ? "#F35242"
              : "#F35242",
        }}
      >
        {a.rest}
      </span>
    </div>
  );
}
