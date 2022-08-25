import React from 'react'
import { useSelector } from 'react-redux';
import AuthButton from '../../Auth/authButton/AuthButton';
import { setDiscountPrice, setFormatPrice } from '../FORMAT/price';

export default function PurchaseInvoiceContent({packageUuid}) {

    const { forceUpdate, allPackageData, discountStatus } = useSelector(state => state.planState);

    var packageSelected = "";
    allPackageData.forEach(element => {
      if (element.uuid == packageUuid) {
        packageSelected = element;
        if (discountStatus.value != 0) {
          let funDisValue = setDiscountPrice(packageSelected.price, discountStatus.value, discountStatus.discountType == "cash" ? true : false);
          packageSelected.default_discount_percent =funDisValue.type=="cash"?setFormatPrice(packageSelected.price - funDisValue.value) + funDisValue.type:setFormatPrice(discountStatus.value) + funDisValue.type;
          packageSelected.default_discount = packageSelected.price - funDisValue.value;
          packageSelected.default_discount_price = packageSelected.price - (packageSelected.price - funDisValue.value);
        }
      }
    });

    return (
        <div className='report'>
                    <div className='title'><span className='text-shortText'>اشتراک:</span><span className={`${packageSelected.type_text == "برنزی" ? " text-[#BF8970]" : packageSelected.type_text == "نقره ای" ? "text-[#7D7D7D]" : packageSelected.type_text == "طلایی" ? "text-[#FFCE47]" : "text-[#0A65CD]"}`}>{packageSelected.type_text}</span></div>
                    <div className='date'><span>مدت: </span><span>{packageSelected.title}</span></div>
                    <div className='plan_price'><span>قیمت: </span><span>{setFormatPrice(packageSelected.price)} هزار تومان </span></div>
                    <div className="discount"><span>مقدار تخفیف: </span><span>{packageSelected.default_discount_percent}</span></div>
                    {discountStatus.discountType != "cash" && <div className='price_discount'><span>مبلغ: </span><span>{setFormatPrice(packageSelected.default_discount)} هزار تومان </span></div>}
                    <div className='final_price'><span>قیمت نهایی و پرداخت </span><span>{setFormatPrice(packageSelected.default_discount_price)} هزار تومان </span></div>
                </div>

    )
}
