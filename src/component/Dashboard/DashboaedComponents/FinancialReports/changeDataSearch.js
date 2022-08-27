export const filterData=(getAllData)=>{
    var filterFinancialReportData = [];
    
    
        getAllData.forEach(element => {
            switch (radiotarget) {
                case "شماره فاکتور":
                    if (element.order_code == textValue) {
                        filterFinancialReportData.push(element);
                    }
                    break;
                case "نوع اشتراک":
                    if (element.description.includes(textValue)) {
                        filterFinancialReportData.push(element);
                    }
                    break;
                case "مبلغ":
                    // debugger
                    if (element.sub_total == textValue) {
                        filterFinancialReportData.push(element);
                    }
                    break;
                case "وضعیت پرداخت":
                    if (element.payment_status_text == textValue) {
                        filterFinancialReportData.push(element);
                    }
                    break;
                case "عملیات":
                    if (element.type_text == textValue) {
                        filterFinancialReportData.push(element);
                    }
                    break;
    
                default:
                    break;
            }
        });
    }
    
    
    // // filter with date or cound
    // if (sortTarget == "تاریخ خرید") {
    //     var convertDateStart = parseInt(new DateObject(sortValue[0]).convert(persian, persian_en).format("YYYYMMDD"));
    //     var convertDateEnd = parseInt(new DateObject(sortValue[1]).convert(persian, persian_en).format("YYYYMMDD"));
    //     filterFinancialReportData = filterFinancialReportData.filter(item => parseInt(item.created_at.replaceAll('/', '')) > convertDateStart & parseInt(item.created_at.replaceAll('/', '')) < convertDateEnd);
    // } else {
    //     filterFinancialReportData = filterFinancialReportData.splice(0, sortValue < filterFinancialReportData.length ? sortValue : filterFinancialReportData.length);
    // }
