import React, { Fragment } from 'react'
import { useSelector } from 'react-redux';
import AuthButton from '../../../Auth/authButton/AuthButton'
import { buyPlan } from '../../../Redux/Action/plan';

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
            <div className='date'><span>مدت اشتراک:</span><span>{packageSelected.title}</span></div>
            <div className='plan_price'><span>قیمت اشتراک:</span><span>{packageSelected.price.toString().substring(0, packageSelected.price.toString().length - 3)} هزار تومان </span></div>
            <div className="discount"><span>تخفیف سگمنتو:</span><span>{packageSelected.default_discount_percent} درصد </span></div>
            <div className='price_discount'><span>مقدار تخفیف:</span><span>{packageSelected.default_discount.toString().substring(0, packageSelected.default_discount.toString().length - 3)} هزار تومان </span></div>
            <div className='final_price'><span>قیمت نهایی و پرداخت</span><span>{packageSelected.default_discount_price.toString().substring(0, packageSelected.default_discount_price.toString().length - 3)} هزار تومان </span></div>
          </Fragment>
        ) : <div>اطلاعات یافت نشد</div>}
      </div>
      <AuthButton textButton={"خرید اشتراک"} reduxHandleClick={buyPlan} setOnclickValue="modal" />
    </body>
  )
}
