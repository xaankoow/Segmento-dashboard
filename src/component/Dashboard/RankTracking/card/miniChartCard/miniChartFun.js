import { rankTrackingChartId } from "../../../../../variables/rankTracking";

export const drawChart=({chartId,workSpaceData,objKey,labels})=>{
    // var chartData={    
    //     labels,
    //     datasets: [
    //       {
    //         fill: "end",
    //         label: 'Dataset 2',
    //         data: positionKeyWork,  
    //         borderColor: 'rgb(53, 162, 235)',
    //         backgroundColor: 'rgba(53, 162, 235, 0.5)',
    //         pointRadius: 3,
    //         pointHitRadius: 1,
    //       },
    //     ]}

    // // debugger
    // switch (chartId) {
    //     case "AvgRankTotalWords":
    //         let getAvgPositionKeyWords=[]
    //         for (let i = 0; i < objKey.length; i++) {
    //           let avg=0
      
    //           // selected date and foreach in arr
    //           workSpaceData[objKey[i]].forEach(element => {
    //             avg+=element.position
    //           });
      
    //           // geting avg period
    //           getAvgPositionKeyWords.push(avg/workSpaceData[objKey[i]].length)
    //         }
    //         break;
    
    //     default:
    //         break;
    // }

    // return chartData;
}




export const chartInformationTooltip=({chartId,chartType})=>{
    var tooltipText="";
    
    switch (chartId) {
        case "AvgRankTotalWords":
            tooltipText="به ازای هر بروزرسانی ورک اسپیس، میانگین رتبه کل کلمات کلیدی موجود آن در صفحه اول گوگل محاسبه می‌شود."
            break;
            case "GrownWords":
            tooltipText="این نمودار به ازای هر دوره جایگاه کلمات کلیدی آن را با دوره قبل مقایسه کرده و تعداد پیشرفت را نمایش می‌‌دهد";
            break;
            case rankTrackingChartId.TheWordsAreLost:
            tooltipText ="این نمودار به ازای هر دوره جایگاه کلمات کلیدی آن را با دوره قبل مقایسه کرده و تعداد افت را نمایش می‌‌دهد"
            break;
            case rankTrackingChartId.AvgGrownWords:
          tooltipText="به ازای هر بروزرسانی ورک اسپیس، میانگین میزان پیشرفت کلمات کلیدی موجود آن در صفحه اول گوگل محاسبه می‌شود."
          break;
          case rankTrackingChartId.AvgTheWordsAreLost:
            tooltipText="به ازای هر بروزرسانی ورک اسپیس، میانگین میزان افت کلمات کلیدی موجود آن در صفحه اول گوگل محاسبه می‌شود."
         break;
         case rankTrackingChartId.KeywordRankDistribution:
            if(chartType=="Doughnut"){
                tooltipText="بیانگر میزان فراوانی هر بازه نسبت به کل فراوانی کلمات کلیدی صفحه اول گوگل می‌باشد"
            }else{
                tooltipText="به ازای هر بروزرسانی ورک اسپیس، میانگین میزان افت کلمات کلیدی موجود آن در صفحه اول گوگل محاسبه می‌شود."
            }
         break;
        default:
            break;
    }

    return tooltipText;
}


