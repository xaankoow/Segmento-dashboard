
// imported date dependency
import { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_en from "react-date-object/locales/persian_en";
// import moment from "jalali-moment";
// var moment = require("jalali-moment");



// filtred data table in the financial section 
export const filterFinancialData = ( allData, filterType, filterValue ) => {

    var filteredData = [];

    // filter target search box
    if (filterValue != "") {
        allData.forEach(element => {
            switch (filterType) {
                case "شماره فاکتور":
                    if (element.order_code == filterValue) {
                        filteredData.push(element);
                    }
                    break;
                case "نوع اشتراک":
                    if (element.description.includes(filterValue)) {
                        filteredData.push(element);
                    }
                    break;
                case "تاریخ خرید":
                    // filteredData = filterDataWithBetweenTime(allData, filterValue[0], filterValue[1], "buy");
                    filteredData = filterDataWithBetweenTime(allData, filterValue, "buy");
                    break;
                case "تاریخ انقضا":
                    filteredData = filterDataWithBetweenTime(allData, filterValue[0], filterValue[1], "expair");
                    break;
                case "مبلغ":
                    if (element.sub_total == filterValue) {
                        filteredData.push(element);
                    }
                    break;
                case "وضعیت پرداخت":
                    if (element.payment_status_text == filterValue) {
                        filteredData.push(element);
                    }
                    break;
                case "عملیات":
                    if (element.type_text == filterValue) {
                        filteredData.push(element);
                    }
                    break;

                default:
                    break;
            }
        });

        return filteredData;
    }

}


// filtering data time with between time
// export const filterDataWithBetweenTime = (data, firstTime, secoundTime, buyOrExpair) => {
export const filterDataWithBetweenTime = (data, time, buyOrExpair) => {

    var filteredData = [];

    // debugger
    // if (firstTime != "" & secoundTime != "") {
    if (time.length != 0 ) {
        var convertDateStart = parseInt(new DateObject(time[0]).convert(persian, persian_en).format("YYYYMMDD"));
        var convertDateEnd = parseInt(new DateObject(time[1]).convert(persian, persian_en).format("YYYYMMDD"));
        if (buyOrExpair === "buy") {
            data.forEach(element => {
                // var moment = require("jalali-moment");
                var convertDateStart1 = parseInt(new DateObject(element.created_at).convert(persian, persian_en).format("YYYYMMDD"));
  
  
  
            // console.log(moment(data[0].created_at).locale("fa").format("YYYYMMDD"))
            });
            // filteredData = data.filter(item => parseInt(item.created_at) > convertDateStart & parseInt(item.created_at.replaceAll('/', '')) < convertDateEnd);
            // filteredData = data.filter(item => moment(item.created_at.locale("fa").format("YYYYMMDD")) > convertDateStart & moment(item.created_at.locale("fa").format("YYYYMMDD")) < convertDateEnd);
        } else if (buyOrExpair === "expair") {
            filteredData = data.filter(item => parseInt(item.user.package_end_date.replaceAll('/', '')) > convertDateStart & parseInt(item.user.package_end_date.replaceAll('/', '')) < convertDateEnd);
        }
    }

    return filteredData;
}


// catching item by count
export const filterDataWithBetweenTime1 = (data, numCount) => {

    var filteredData = [];

    filteredData = data.splice(0, numCount < data.length ? numCount : data.length);

    return filteredData;
} 