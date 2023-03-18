import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { setDiscountPrice, setFormatPrice } from '../FORMAT/price';

export default function PurchaseInvoiceContent({ packageUuid }) {

  const { allPackageData, discountStatus } = useSelector(state => state.planState);

  const convertPalanType={
    "برنزی":"bronze",
    "نقره ای":"silver",
    "طلایی":"gold",
    "الماسی":"diamond",
    getPlanName:(type)=>{
      return convertPalanType[type]||"";
    }
  }
  const [packageSelected,setPackageSelected]=useState("");
  const [purchaseDetails,setPurchaseDetails]=useState({
    discount,
    discountValue,
    priceAfterTheDiscount
  });

  var discountValue = "";
  var priceAfterTheDiscount = "";
  var discount=""

  useEffect(() => {
    allPackageData.map(element => {
      if (element.uuid == packageUuid) {
        var innerPackageSelected = "";
        innerPackageSelected = element;
        if (innerPackageSelected.default_discount_percent == 0) {
          innerPackageSelected.default_discount = innerPackageSelected.price;
        }
        if (discountStatus.value != 0&convertPalanType.getPlanName(innerPackageSelected.type_text)==discountStatus.planType) {
          let funDisValue = setDiscountPrice(innerPackageSelected.price, discountStatus.value, discountStatus.discountType == "cash" ? true : false);
          var a=innerPackageSelected.default_discount_price
          var b= funDisValue.value
          if (b < a) {
            discountValue=innerPackageSelected.price- funDisValue.value
            priceAfterTheDiscount=funDisValue.value;
            setPurchaseDetails({
              discount:funDisValue.type == "cash" ? setFormatPrice(funDisValue.value) : discountStatus.value,
              discountValue:innerPackageSelected.price- funDisValue.value,
              priceAfterTheDiscount:funDisValue.value,
            });
          }
        }
        setPackageSelected(innerPackageSelected);
      }
    });
  }, [])
  
  return (
    <div className='report'>
      <div className='title'><span className='text-shortText'>اشتراک:</span><span className={`${packageSelected.type_text == "برنزی" ? " text-[#BF8970]" : packageSelected.type_text == "نقره ای" ? "text-[#7D7D7D]" : packageSelected.type_text == "طلایی" ? "text-[#FFCE47]" : "text-[#0A65CD]"}`}>{packageSelected.type_text}</span></div>
      <div className='date'><span>مدت: </span><span>{packageSelected.title}</span></div>
      <div className='plan_price'><span>قیمت: </span><span>{setFormatPrice(packageSelected.price)}  تومان </span></div>
      <div className="discount"><span>مقدار تخفیف: </span><span>{setFormatPrice(purchaseDetails.discount,true) + (Math.ceil(purchaseDetails.discount).toString().length > 3 ? "  تومان " : " درصد ")}</span></div>
      {discountStatus.discountType != "cash" ? <div className='price_discount'><span>مبلغ تخفیف: </span><span>{setFormatPrice(purchaseDetails.discountValue)}  تومان </span></div> : discountStatus.value == 0 && <div className='price_discount'><span>مبلغ تخفیف: </span><span>{setFormatPrice(purchaseDetails.discountValue)}  تومان </span></div>}
      <div className='final_price'><span>قیمت نهایی و پرداخت </span><span>{setFormatPrice(purchaseDetails.priceAfterTheDiscount)}  تومان </span></div>
    </div>
  )
}
