import { DateObject } from "react-multi-date-picker";
import { filterBoxDatas } from "../../../variables/support";
import { FindStatusTicket, FindStatusTicketCod, FindTicketParCode } from "../supportAndMessage/supportData";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import persian_en from "react-date-object/locales/persian_en";

export const filterSupportData = (allData, filterType, filterValue) => {
    var filteredData = [];

    // filter target search box

    // filterBoxDatas.forEach(item=>{
    //     if (item.filterName==filterType) {
    //         if (allData==filterValue) {

    //         }
    //     }
    // })
    // debugger
    if (filterValue != "") {

        allData.forEach((element) => {
            switch (filterType) {
                case "بدون فیلتر":
                    filteredData = allData;
                    break;

                case "شناسه تیکت":
                    //for example: xxxx-xx-xxxx
                    if (element.ticket_id == filterValue) {
                        filteredData.push(element);
                    }
                    break;

                case "عنوان":
                    //for example: برنزی / نقره ای / طلایی / الماسی
                    if (element.subject.includes(filterValue)) {
                        filteredData.push(element);
                    }
                    break;

                case "دسته بندی":
                    if (element.part==FindTicketParCode(filterValue)) {
                        filteredData.push(element)
                    }
                    break;

                case "آخرین بروز رسانی":
                    //for example: DatePicker value (Array)
                    filteredData = filterDataWithBetweenTime(
                        allData,
                        filterValue
                    );
                    break;

                case "وضعیت":
                    //for example: [2500,3000] (دو میلیون و پانصد  تومان)
                    if (element.status==FindStatusTicketCod(filterValue)) {
                        filteredData.push(element)
                    }
                    break;

                default:
                    break;
            }
        });
    }
    return filteredData;
};


// filtering data time with between time
export const filterDataWithBetweenTime = (data, time) => {
    var filteredData = [];

    // if (firstTime != "" & secoundTime != "") {
    if (time.length != 0) {
        var convertDateStart = parseInt(
            new DateObject(time[0]).convert(persian, persian_en).format("YYYYMMDD")
        );
        var convertDateEnd = parseInt(
            new DateObject(time[1]).convert(persian, persian_en).format("YYYYMMDD")
        );

        data.forEach((element) => {
            let elDate = parseInt(
                new DateObject(
                    element.updated_at.substring(0, 10).replaceAll("-", "/")
                )
                    .convert(persian, persian_en)
                    .format("YYYYMMDD")
            );
            if ((elDate >= convertDateStart) & (elDate <= convertDateEnd)) {
                filteredData.push(element);
            }
        });

    }

    return filteredData;
};