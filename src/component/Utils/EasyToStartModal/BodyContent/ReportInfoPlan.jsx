import React, { Fragment } from 'react'
import { useSelector } from 'react-redux';
import AuthButton from '../../../Auth/authButton/AuthButton'
import { buyPlan } from '../../../Redux/Action/plan';
import { setFormatPrice } from '../../FORMAT/price';

export default function ReportInfoPlan({ handleClose }) {

  const { forceUpdate, allPackageData, packageUuid } = useSelector(state => state.planState);
  var packageSelected = "";
  allPackageData.forEach(element => {
    if (element.uuid == packageUuid) {
      packageSelected = element;
    }
  });

  return (

    <body className='report_container mt-36 mb-20 bg-[#fff]'>
      <div className='report'>
        {packageSelected != "" ? (
          <Fragment>
            <div className='title'><span className='text-'>اشتراک:</span><span className={`${packageSelected.type_text == "برنزی" ? " text-[#BF8970]" : packageSelected.type_text == "نقره ای" ? "text-[#7D7D7D]" : packageSelected.type_text == "طلایی" ? "text-[#FFCE47]" : "text-[#0A65CD]"}`}>{packageSelected.type_text}</span></div>
            <div className='date'><span>مدت : </span><span>{packageSelected.title}</span></div>
            <div className='plan_price'><span>قیمت: </span><span>{setFormatPrice(packageSelected.price)} هزار تومان </span></div>
            <div className="discount"><span>مقدار تخفیف: </span><span>{packageSelected.default_discount_percent} درصد </span></div>
            <div className='price_discount'><span>مبلغ: </span><span>{setFormatPrice(packageSelected.default_discount)} هزار تومان </span></div>
            <div className='final_price'><span>قیمت نهایی و پرداخت </span><span>{setFormatPrice(packageSelected.price)} هزار تومان </span></div>
          </Fragment>
        ) : <div>اطلاعات یافت نشد</div>}
      </div>
      <AuthButton textButton={"خرید اشتراک"} reduxHandleClick={buyPlan} setOnclickValue="modal" />
    </body>
  )
}
