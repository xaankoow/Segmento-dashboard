import React from 'react'
import Modal from 'react-modal'
import { useSelector } from 'react-redux';
import AuthButton from '../../Auth/authButton/AuthButton';
import {buyPlan } from '../../Redux/Action/plan';

export default function ReportBuyPlanSection({ handleClose, packageUuid }) {

  const {forceUpdate,allPackageData,discountStatus } = useSelector(state => state.planState);

  const customStyles = {
    content: {
      top: '43vh',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgrounColor: "red",
      'z-index': '100'
    },
  };

  var packageSelected=""; 
  allPackageData.forEach(element => {
    if (element.uuid==packageUuid) {
      if (discountStatus) {
        
      }
      packageSelected=element;
    }
  });

  console.log(packageSelected.type_text)
  return (
    <Modal
      isOpen={true}
      parentSelector={() => document.querySelector(".app #DASHBOARD .body .main")}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className='report_buy_plan w-[500px] rounded shadow-[0px_4px_8px_0px_rgb(0,0,0)]'>
        <body className='report_container border-0 pt-2 px-2 pb-5'>
          <div className='w-full flex items-center justify-between  text-center p-4 border border-[#D9D9D9] rounded-lg mb-5'> <div></div> رسید نهایی خرید اشتراک<img src='/img/modal/buyPlanReport/head/close.svg' className='float-left cursor-pointer' onClick={() => handleClose()} /></div>
          <div className='report'>
            <div className='title'><span className='text-shortText'>اشتراک:</span><span className={`${packageSelected.type_text=="برنزی"?" text-[#BF8970]":packageSelected.type_text=="نقره ای"?"text-[#7D7D7D]":packageSelected.type_text=="طلایی"?"text-[#FFCE47]":"text-[#0A65CD]"}`}>{packageSelected.type_text}</span></div>
            <div className='date'><span>مدت اشتراک:</span><span>{packageSelected.title}</span></div>
            <div className='plan_price'><span>قیمت اشتراک:</span><span>{packageSelected.price.toString().substring(0,packageSelected.price.toString().length-3)} هزار تومان </span></div>
            <div className="discount"><span>تخفیف سگمنتو:</span><span>{packageSelected.default_discount_percent} درصد </span></div>
            <div className='price_discount'><span>مقدار تخفیف:</span><span>{packageSelected.default_discount.toString().substring(0,packageSelected.default_discount.toString().length-3)} هزار تومان </span></div>
            <div className='final_price'><span>قیمت نهایی و پرداخت</span><span>{packageSelected.default_discount_price.toString().substring(0,packageSelected.default_discount_price.toString().length-3)} هزار تومان </span></div>
          </div>
          <AuthButton textButton={"خرید اشتراک"} reduxHandleClick={buyPlan}/>
        </body>
      </div>
      {forceUpdate ? "" : ""}
    </Modal>
  )
}

