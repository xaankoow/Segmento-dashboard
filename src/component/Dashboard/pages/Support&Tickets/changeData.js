
export const FilterDataSupport = ({
    radioTarget,
    FactorHandler,
    userTypeData,
    datePickerValues,
    setDatePickerValues,
    priceHandler,
    priceHandler1,
  }) => {
    switch (radioTarget) {
      case "بدون فیلتر":
        return "";
      case "شماره فاکتور":
        return (
          <input
            type={"text"}
            placeholder="شماره فاکتور خود را وارد کنید"
            onChange={(e) => FactorHandler(e.target.value)}
            className="min-w-[288px] placeholder-[#D9D9D9] h-11 border-2 border-b-[#7D7D7D] pr-2"
          />
        );
  
      case "نوع اشتراک":
        return (
          <div className=" min-w-[288px]">
            {/* <KeyWordsSearch
            usedBySection={"financialReports/sort"}
            inputPlaceHolder={targetSortFilter}
            getRadioValue={setTargetSortFilter}
          /> */}
            <ComboBox
              radioClickedHandler={(e) => userTypeData(e)}
              radioTextItems={financialRadioTextItems.type}
              placeholder={" نوع اشتراک را انتخاب کنید "}
            />
          </div>
        );
  
      case "تاریخ خرید":
        // debugger
        return (
          <DatePicker
            range
            value={datePickerValues}
            // ref={datePickerRef}
            // onOpen={true}
            calendar={persian}
            locale={persian_fa}
            calendarPosition="bottom-right"
            onChange={setDatePickerValues}
            format="DD MMMM YYYY - "
            maxDate={new DateObject()}
            render={(value, openCalendar) => (
              <div
                className="flex justify-start items-center px-3 h-10 border-[1.5px] border-[#D9D9D9] rounded-sm text-center border-b-[#7D7D7D] hover:border-[#7D7D7D] active:border-b-[#0A65CD]"
                onClick={openCalendar}
              >
                <img
                  src={file_download_svg}
                  alt="file_download"
                />
                <span className="text-xs mr-3">{value}</span>
              </div>
            )}
          ></DatePicker>
        );
  
      case "تاریخ انقضا":
        return (
          <DatePicker
            range
            value={datePickerValues}
            // ref={datePickerRef}
            // onOpen={true}
            calendar={persian}
            locale={persian_fa}
            calendarPosition="bottom-right"
            onChange={setDatePickerValues}
            format="DD MMMM YYYY - "
            // maxDate={new DateObject()}
            render={(value, openCalendar) => (
              <div
                className="flex justify-start items-center px-3 h-10 border-[1.5px] border-[#D9D9D9] rounded-sm text-center border-b-[#7D7D7D] hover:border-[#7D7D7D] active:border-b-[#0A65CD]"
                onClick={openCalendar}
              >
                <img
                  src={file_download_svg}
                  alt="file_download"
                />
                <span className="text-xs mr-3">{value}</span>
              </div>
            )}
          ></DatePicker>
        );
      case "مبلغ":
        return (
          <div className=" flex items-center justify-between gap-2">
            <input
              type={"text"}
              pattern="[0-9]*"
              placeholder="   بازه قیمتی(ریال)  "
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              onChange={(e) => priceHandler(e.target.value)}
              className="min-w-[165px] placeholder-[#D9D9D9] h-11 border-2 pr-2"
            />
            <span>تا</span>
            <input
              type={"text"}
              pattern="[0-9]*"
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              placeholder="   بازه قیمتی(ریال)  "
              onChange={(e) => priceHandler1(e.target.value)}
              className="min-w-[165px] placeholder-[#D9D9D9] h-11 border-2 pr-2"
            />
          </div>
        );
      case "وضعیت پرداخت":
        return (
          <div className=" min-w-[288px]">
            <ComboBox
              radioClickedHandler={(e) => userTypeData(e)}
              radioTextItems={financialRadioTextItems.payStatus}
              placeholder={" وضعیت پرداخت را مشخص کنید"}
            />
          </div>
        );
      case "عملیات":
        return (
          <div className=" min-w-[288px]">
            <ComboBox
              radioClickedHandler={(e) => userTypeData(e)}
              radioTextItems={financialRadioTextItems.sort}
              placeholder={" وضعیت عملیات را مشخص کنید   "}
            />
          </div>
        );
  
      default:
        break;
    }
  };
  
