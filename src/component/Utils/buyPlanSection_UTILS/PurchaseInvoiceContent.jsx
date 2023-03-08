import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { setDiscountPrice, setFormatPrice } from '../FORMAT/price';

export default function PurchaseInvoiceContent({ packageUuid }) {

  const { forceUpdate, allPackageData, discountStatus } = useSelector(state => state.planState);

  const [packageSelected,setPackageSelected]=useState("");
  // console.log('allPackageData last:', allPackageData)

  var dss=allPackageData;
  useEffect(() => {
    dss.map(element => {
      if (element.uuid == packageUuid) {
        var innerPackageSelected = "";
        // debugger
        innerPackageSelected = element;
        // setPackageSelected
        if (innerPackageSelected.default_discount_percent == 0) {
          innerPackageSelected.default_discount = innerPackageSelected.price;
        }
        // default_discount_percent
        if (discountStatus.value != 0) {
          let funDisValue = setDiscountPrice(innerPackageSelected.price, discountStatus.value, discountStatus.discountType == "cash" ? true : false);
          var a=innerPackageSelected.default_discount_price
          var b= funDisValue.value
          // 
          // debugger
          if (b < a) {
            
          // if (innerPackageSelected.price-funDisValue.value > innerPackageSelected.price-RoundPriceToUp(innerPackageSelected.default_discount)) {
            innerPackageSelected.default_discount_percent = funDisValue.type == "cash" ? setFormatPrice(funDisValue.value) : discountStatus.value;
            innerPackageSelected.default_discount = innerPackageSelected.price- funDisValue.value;
            innerPackageSelected.default_discount_price = funDisValue.value;
          }
        }
        setPackageSelected(innerPackageSelected);
        // return;
      }
    });
  }, [])
  

  // console.log('allPackageData next:', packageSelected)

  return (
    <div className='report'>
      <div className='title'><span className='text-shortText'>اشتراک:</span><span className={`${packageSelected.type_text == "برنزی" ? " text-[#BF8970]" : packageSelected.type_text == "نقره ای" ? "text-[#7D7D7D]" : packageSelected.type_text == "طلایی" ? "text-[#FFCE47]" : "text-[#0A65CD]"}`}>{packageSelected.type_text}</span></div>
      <div className='date'><span>مدت: </span><span>{packageSelected.title}</span></div>
      <div className='plan_price'><span>قیمت: </span><span>{setFormatPrice(packageSelected.price)}  تومان </span></div>
      <div className="discount"><span>مقدار تخفیف: </span><span>{setFormatPrice(packageSelected.default_discount_percent,true) + (Math.ceil(packageSelected.default_discount_percent).toString().length > 3 ? "  تومان " : " درصد ")}</span></div>
      {discountStatus.discountType != "cash" ? <div className='price_discount'><span>مبلغ تخفیف: </span><span>{setFormatPrice(packageSelected.default_discount)}  تومان </span></div> : discountStatus.value == 0 && <div className='price_discount'><span>مبلغ تخفیف: </span><span>{setFormatPrice(packageSelected.default_discount)}  تومان </span></div>}
      <div className='final_price'><span>قیمت نهایی و پرداخت </span><span>{setFormatPrice(packageSelected.default_discount_price)}  تومان </span></div>
    </div>
  )
}
