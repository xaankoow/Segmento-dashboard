import { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_en from "react-date-object/locales/persian_en";

export const filterBusinessPagesData = (allData, filterType, filterValue) => {
    var filteredData = [];
    console.log('filterValue', filterValue)
    if (filterValue != "") {

        allData.forEach((element) => {
            switch (filterType) {
                case "بدون فیلتر":
                    filteredData = allData;
                    break;

                case "آدرس صفحات URLs":
                    //for example: xxxx-xx-xxxx
                    if (element.link == filterValue) {
                        filteredData.push(element);
                    }
                    break;

                case "کلمه کلیدی":
                    //for example: برنزی / نقره ای / طلایی / الماسی
                    if (element.addingKeyWord.includes(filterValue)) {
                        filteredData.push(element);
                    }
                    break;

                case "رتبه کلمه کلیدی":
                    if (element.position==filterValue) {
                        filteredData.push(element)
                    }
                    break;

                case "تاریخ بروزرسانی":
                    filteredData = filterDataWithBetweenTime(
                        allData,
                        filterValue
                    );
                    break;

                case "وضعیت صفحه":
                    if (element.pageStatus==filterValue) {
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
const filterDataWithBetweenTime = (data, time) => {
    var filteredData = [];

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
                    element.updated_at.substring(8, 18).replaceAll("-", "/")
                )
                    .format("YYYYMMDD")
            );
            if ((elDate >= convertDateStart) & (elDate <= convertDateEnd)) {
                filteredData.push(element);
            }
        });

    }

    return filteredData;
};