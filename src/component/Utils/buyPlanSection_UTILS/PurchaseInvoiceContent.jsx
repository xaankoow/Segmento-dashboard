import React from 'react'
import { useSelector } from 'react-redux';
import AuthButton from '../../Auth/authButton/AuthButton';
import { roundPriceToUp, setDiscountPrice, setFormatPrice } from '../FORMAT/price';

export default function PurchaseInvoiceContent({ packageUuid }) {

  const { forceUpdate, allPackageData, discountStatus } = useSelector(state => state.planState);

  var packageSelected = "";
  allPackageData.forEach(element => {
    if (element.uuid == packageUuid) {
      packageSelected = element;
      if (packageSelected.default_discount_percent == 0) {
        packageSelected.default_discount = packageSelected.price;
      }
      // default_discount_percent
      if (discountStatus.value != 0) {
        debugger
        let funDisValue = setDiscountPrice(packageSelected.price, discountStatus.value, discountStatus.discountType == "cash" ? true : false);
        if (funDisValue.value > packageSelected.default_discount) {
          packageSelected.default_discount_percent = funDisValue.type == "cash" ? setFormatPrice(funDisValue.value) + funDisValue.type : discountStatus.value + funDisValue.type;
          packageSelected.default_discount = funDisValue.value;
          packageSelected.default_discount_price = packageSelected.price - funDisValue.value;
        }
      }
    }
  });

  // box-sizing: border-box;
  // width: 340px;
  // border-radius: 9px;
  // border: 1px solid rgba(211, 213, 226, 1);
  // margin: auto;
  // padding: 20px 5px 5px 5px;

  // console.log(packageSelected.default_discount_price)
  // console.log(setFormatPrice(packageSelected.default_discount_price))
  // console.log(Math.floor(parseFloat(1927800)))
  console.log(Math.round(257.90))

  return (
    <div className='report'>
      <div className='title'><span className='text-shortText'>اشتراک:</span><span className={`${packageSelected.type_text == "برنزی" ? " text-[#BF8970]" : packageSelected.type_text == "نقره ای" ? "text-[#7D7D7D]" : packageSelected.type_text == "طلایی" ? "text-[#FFCE47]" : "text-[#0A65CD]"}`}>{packageSelected.type_text}</span></div>
      <div className='date'><span>مدت: </span><span>{packageSelected.title}</span></div>
      <div className='plan_price'><span>قیمت: </span><span>{setFormatPrice(packageSelected.price)} هزار تومان </span></div>
      <div className="discount"><span>مقدار تخفیف: </span><span>{discountStatus.value != 0 ? packageSelected.default_discount_percent : packageSelected.default_discount_percent + (packageSelected.default_discount_percent.toString().length > 3 ? " هزار تومان " : " درصد ")}</span></div>
      {/* <div className="discount"><span>مقدار تخفیف: </span><span>{packageSelected.default_discount_text}</span></div> */}
      {discountStatus.discountType != "cash" ? <div className='price_discount'><span>مبلغ: </span><span>{setFormatPrice(packageSelected.default_discount)} هزار تومان </span></div> : discountStatus.value == 0 && <div className='price_discount'><span>مبلغ: </span><span>{setFormatPrice(packageSelected.default_discount)} هزار تومان </span></div>}
      <div className='final_price'><span>قیمت نهایی و پرداخت </span><span>{setFormatPrice(packageSelected.default_discount_price)} هزار تومان </span></div>
    </div>

  )
}
