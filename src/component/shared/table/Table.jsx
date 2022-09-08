import React from 'react'

export default function Table() {
  return (
    <div className=" w-full  rounded-lg border border-[#D9D9D9] h-[672px] ">
          <div className=" mb-4 h-full w-full">
            <div className=" h-full">
              <div className=" h-14 text-sm font-normal flex items-center justify-around flex-row-reverse bg-[#FCFCFB]">
                <p className=" w-28 text-center">عملیات</p>
                <p className=" w-24 text-center">وضعیت پرداخت</p>
                <p className=" w-[72px] text-center ">مبلغ (تومان)</p>
                <p className=" w-[68px] text-center">تاریخ انقضا</p>
                <p className=" w-16 text-center">تاریخ خرید</p>
                <p className=" w-36 text-center">نوع اشتراک</p>
                <p className=" w-20 text-center">شماره فاکتور</p>
                <p className=" w-8 text-center">ردیف</p>

              </div>
              <div className="overflow-scroll h-[94%] text-xs font-normal">
                {/* {financialDataTableFiltered.length > 0 && */}
              
                {financialDataTableFiltered.length != 0 && financialDataTableFiltered.map((item, index) => (
                  <div
                    className={`w-full h-[61px] border-b border-[#0000000D] text-xs font-normal flex justify-around flex-row-reverse items-center`}
                  >
                    {/* عملیات */}
                    <p className=" w-28 text-center">{item.type_text}</p>
                    {/* وضعیت */}
                    <p className=" w-24 text-center">
                      <span
                        className={`inline-block w-20 py-2 text-center text-[#FFFFFF] rounded-[20px] ${item.payment_status_text == "پرداخت ناموفق"
                            ? " bg-[#F35242]"
                            : item.payment_status_text == "پرداخت نشده"
                              ? "bg-yellow"
                              : "bg-[#10CCAE]"
                          }`}
                      >
                        {item.payment_status_text}
                      </span>
                    </p>
                    {/* مبلغ */}
                    {/* <p className=" w-11 text-center">{item.sub_total.toString().substring(0, item.sub_total.toString().length - 3)}</p> */}
                    <p className=" w-[72px] text-center">
                     
                    </p>
                    {/* انقضا */}
                    <p className=" w-16 text-center">
                     
                    </p>
                    {/* خرید */}
                    <p className=" w-[68px] text-center">
                      
                    </p>
                    {/* نوع اشتراک */}
                    <p className=" w-36 text-center">
                      {item.user != undefined &&
                        item.description
                          .substring(31, item.description.length)
                          .includes("رایگان") == true
                        ? "14 روز رایگان"
                        : item.description.substring(
                          31,
                          item.description.length
                        )}
                    </p>
                    {/* شماره فاکتور */}
                    <p className=" w-20 text-center">{item.order_code}</p>
                    {/* ردیف */}
                    <p className=" w-8 text-center">{index + 1}</p>

                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
  )
}
