
// imported date dependency
import { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_en from "react-date-object/locales/persian_en";
// import moment from "jalali-moment";
// var moment = require("jalali-moment");



// filtred data table in the financial section 
export const filterFinancialData = (allData, filterType, filterValue) => {

    debugger
    var filteredData = [];

    // filter target search box
    // if (filterValue!="") {       
        if (filterValue != "") {
            allData.forEach(element => {
                switch (filterType) {
                    case "شماره فاکتور":
                        //for example: xxxx-xx-xxxx
                        if (element.order_code == filterValue) {
                            filteredData.push(element);
                        }
                        break;
    
                    case "نوع اشتراک":
                        //for example: برنزی / نقره ای / طلایی / الماسی
                        if (element.description.includes(filterValue)) {
                            filteredData.push(element);
                        }
                        break;
    
                    case "تاریخ خرید":
                        //for example: DatePicker value (Array)
                        filteredData = filterDataWithBetweenTime(allData, filterValue, "buy");
                        break;
    
                    case "تاریخ انقضا":
                        //for example: DatePicker value (Array)
                        filteredData = filterDataWithBetweenTime(allData, filterValue, "expair");
                        break;
    
                    case "مبلغ":
                        //for example: [2500,3000] (دو میلیون و پانصد هزار تومان)
                        if (element.sub_total >= filterValue[0] & element.sub_total <= filterValue[1]) {
                            filteredData.push(element);
                        }
                        break;
    
                    case "وضعیت پرداخت":
                        //for example: موفقیت آمیز / ناموفق / پرداخت نشده
                        if (element.payment_status_text == filterValue) {
                            filteredData.push(element);
                        }
                        break;
                    case "عملیات":
                        //for example: خرید پکیچ / شارژ پکیچ
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
    // }

}


// filtering data time with between time
export const filterDataWithBetweenTime = (data, time, buyOrExpair) => {

    var filteredData = [];

    // if (firstTime != "" & secoundTime != "") {
        if (time.length != 0) {
            var convertDateStart = parseInt(new DateObject(time[0]).convert(persian, persian_en).format("YYYYMMDD"));
            var convertDateEnd = parseInt(new DateObject(time[1]).convert(persian, persian_en).format("YYYYMMDD"));
            if (buyOrExpair === "buy") {
                data.forEach(element => {
                    let elDate = parseInt(new DateObject(element.created_at.substring(0, 10).replaceAll("-", "/")).convert(persian, persian_en).format("YYYYMMDD"));
                    if (elDate >= convertDateStart & elDate <= convertDateEnd) {
                        filteredData.push(element)
                    }
                });
            } else if (buyOrExpair === "expair") {
                data.forEach(element => {
                    // debugger
                    let elDate = parseInt(new DateObject(element.user.package_end_date.substring(0, 10).replaceAll("-", "/")).convert(persian, persian_en).format("YYYYMMDD"));
                    if (elDate >= convertDateStart & elDate <= convertDateEnd) {
                        filteredData.push(element)
                    }
                });
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