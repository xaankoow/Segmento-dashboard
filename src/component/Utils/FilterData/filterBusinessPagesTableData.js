import { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_en from "react-date-object/locales/persian_en";
import { BUSINESS_PAGE_FILTER_TABEL_BUSINESS_TAB, BUSINESS_PAGE_FILTER_TABEL_REPORTS_TAB } from "../../../variables/businessPages";

export const filterBusinessPagesData = (allData, filterType, filterValue) => {
  var filteredData = [];

  if (filterValue != "") {
    allData.forEach((element) => {
      switch (filterType) {
        case BUSINESS_PAGE_FILTER_TABEL_BUSINESS_TAB[0]:
          filteredData = allData;
          break;

        case BUSINESS_PAGE_FILTER_TABEL_BUSINESS_TAB[1]:
          //for example: xxxx-xx-xxxx
          if (element.page.link == filterValue) {
            filteredData.push(element);
          }
          break;

        case BUSINESS_PAGE_FILTER_TABEL_BUSINESS_TAB[2]:
          //for example: برنزی / نقره ای / طلایی / الماسی
          if (element.keyword.title.includes(filterValue)) {
            filteredData.push(element);
          }
          break;

        case BUSINESS_PAGE_FILTER_TABEL_BUSINESS_TAB[3]:
          if (element.keyword.position == filterValue) {
            filteredData.push(element);
          }
          break;

        case BUSINESS_PAGE_FILTER_TABEL_BUSINESS_TAB[4]:
          filteredData = filterDataWithBetweenTime(allData, filterValue);
          break;

        case BUSINESS_PAGE_FILTER_TABEL_BUSINESS_TAB[5]:
          if (element.insight[0]?.performance == filterValue) {
            filteredData.push(element);
          }
          break;

        default:
          break;
      }
    });
  }
  return filteredData;
};

export const filterBusinessPagesDataReportsTab = (
  allData,
  filterType,
  filterValue
) => {
  var filteredData = [];
  if (filterValue != "") {
    allData.forEach((element) => {
      switch (filterType) {
        case BUSINESS_PAGE_FILTER_TABEL_REPORTS_TAB[0]:
          filteredData = allData;
          break;

        case BUSINESS_PAGE_FILTER_TABEL_REPORTS_TAB[1]: //تاریخ بروزرسانی ×
          //for example: xxxx-xx-xxxx
          filteredData = filterDataWithBetweenTime(allData, filterValue);
          break;

        case BUSINESS_PAGE_FILTER_TABEL_REPORTS_TAB[2]: //کلمه کلیدی
          //for example: برنزی / نقره ای / طلایی / الماسی
          if (element.keyword.title.includes(filterValue)) {
            filteredData.push(element);
          }
          break;

        case BUSINESS_PAGE_FILTER_TABEL_REPORTS_TAB[3]: // رتبه گوگل
          if (element.keyword.position == filterValue) {
            filteredData.push(element);
          }
          break;

        case BUSINESS_PAGE_FILTER_TABEL_REPORTS_TAB[4]: //عملکرد اجرایی
          if (element.insight[0]?.performance == filterValue) {
            filteredData.push(element);
          }
          break;

        case BUSINESS_PAGE_FILTER_TABEL_REPORTS_TAB[5]: // دسترسی پذیری
          if (element.insight[0]?.accessibility == filterValue) {
            filteredData.push(element);
          }
          break;

        case BUSINESS_PAGE_FILTER_TABEL_REPORTS_TAB[6]: // معیار های مهم
          if (element.insight[0]?.best_practices == filterValue) {
            filteredData.push(element);
          }
          break;

        case BUSINESS_PAGE_FILTER_TABEL_REPORTS_TAB[7]: // سئو
          if (element.insight[0]?.seo == filterValue) {
            filteredData.push(element);
          }
          break;

        case BUSINESS_PAGE_FILTER_TABEL_REPORTS_TAB[8]: // درصد صفحه
          if (element.insight[0]?.performance == filterValue) {
            filteredData.push(element);
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
        ).format("YYYYMMDD")
      );
      if ((elDate >= convertDateStart) & (elDate <= convertDateEnd)) {
        filteredData.push(element);
      }
    });
  }

  return filteredData;
};
