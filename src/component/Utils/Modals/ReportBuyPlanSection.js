import React, { useState } from 'react'
import Modal from 'react-modal'
import { useDispatch, useSelector } from 'react-redux';
import AuthButton from '../../Auth/authButton/AuthButton';
import { applyDiscountAction, buyPlan, setCharKey1, setCharKey2, setCommercialPage1, setCommercialPage2, setPackageUuid, setSite1, setSite2, setWebAdress } from '../../Redux/Action/plan';
import { workSpaceWebsite } from '../../Redux/Action/workSpace';

export default function ReportBuyPlanSection({ handleClose, packageUuid, show }) {

  const [plan, setPlan] = useState("");
  const [free, setFree] = useState(false);

  const { webAdress, charKey1, charKey2, site1, site2, commercialPage1, commercialPage2, planChosen, discount, forceUpdate } = useSelector(state => state.planState);

  const dispatch = useDispatch();

  // handleShowArrowDiscount();
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
            <div className='title'><span>اشتراک:</span><span>طلایی </span></div>
            <div className='date'><span>مدت اشتراک:</span><span>3 ماهه </span></div>
            <div className='plan_price'><span>قیمت اشتراک:</span><span>747 هزار تومان </span></div>
            <div className="discount"><span>تخفیف سگمنتو:</span><span>15 درصد </span></div>
            <div className='price_discount'><span>مقدار تخفیف:</span><span>35 هزار تومان </span></div>
            <div className='final_price'><span>قیمت نهایی و پرداخت</span><span>600 هزار تومان </span></div>
          </div>
          {/* <AuthButton textButton={"خرید اشتراک"} reduxHandleClick={buyPlan}/> */}
          <AuthButton textButton={"خرید اشتراک"} reduxHandleClick={workSpaceWebsite}/>
        </body>
      </div>
      {forceUpdate ? "" : ""}
    </Modal>
  )
}

