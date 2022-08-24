import React from 'react'
import Modal from 'react-modal'
import { useSelector } from 'react-redux';
import AuthButton from '../../Auth/authButton/AuthButton';
import { buyPlan } from '../../Redux/Action/plan';
import { setDiscountPrice, setFormatPrice } from '../FORMAT/price';

export default function ReportBuyPlanSection({ handleClose, packageUuid }) {

  const { forceUpdate, allPackageData, discountStatus } = useSelector(state => state.planState);

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

  var discountValue = "";
  var discountPriceValue = "";
  var finalPrice = "";

  var packageSelected = "";
  allPackageData.forEach(element => {
    if (element.uuid == packageUuid) {
      packageSelected = element;
      if (discountStatus.value != 0) {
        let funDisValue = setDiscountPrice(packageSelected.price, discountStatus.value, discountStatus.discountType == "cash" ? true : false);
        packageSelected.default_discount_percent =funDisValue.type=="cash"?setFormatPrice(packageSelected.price - funDisValue.value) + funDisValue.type:discountStatus.value + funDisValue.type;
        packageSelected.default_discount = packageSelected.price - funDisValue.value;
        packageSelected.default_discount_price = packageSelected.price - (packageSelected.price - funDisValue.value);
      }
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
          <div className='w-full flex items-center justify-between  text-center p-4 border border-[#D9D9D9] rounded-lg mb-5'> <div></div> رسید نهایی خرید اشتراک<img src='/img/modal/buyPlanReport/head/close.svg' className='float-left cursor-pointer rounded-[3px] hover:bg-[#F352421A]' onClick={() => handleClose()} /></div>
          <div className='report'>
            <div className='title'><span className='text-shortText'>اشتراک:</span><span className={`${packageSelected.type_text == "برنزی" ? " text-[#BF8970]" : packageSelected.type_text == "نقره ای" ? "text-[#7D7D7D]" : packageSelected.type_text == "طلایی" ? "text-[#FFCE47]" : "text-[#0A65CD]"}`}>{packageSelected.type_text}</span></div>
            <div className='date'><span>مدت: </span><span>{packageSelected.title}</span></div>
            <div className='plan_price'><span>قیمت: </span><span>{setFormatPrice(packageSelected.price)} هزار تومان </span></div>
            <div className="discount"><span>مقدار تخفیف: </span><span>{packageSelected.default_discount_percent}</span></div>
            {discountStatus.discountType != "cash" && <div className='price_discount'><span>مبلغ: </span><span>{setFormatPrice(packageSelected.default_discount)} هزار تومان </span></div>}
            <div className='final_price'><span>قیمت نهایی و پرداخت </span><span>{setFormatPrice(packageSelected.default_discount_price)} هزار تومان </span></div>
          </div>
          <AuthButton textButton={"پرداخت"} reduxHandleClick={buyPlan} />
        </body>
      </div>
      {forceUpdate ? "" : ""}
    </Modal>
  )
}

