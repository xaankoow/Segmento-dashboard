import React from 'react'
import Modal from 'react-modal'
import { defaultCustomModalStyle, modalParentSelector } from '../../../variables/style';
import AuthButton from '../../Auth/authButton/AuthButton';
import { buyPlan } from '../../Redux/Action/plan';
import PurchaseInvoiceContent from '../buyPlanSection_UTILS/PurchaseInvoiceContent';

export default function ReportBuyPlanSection({ handleClose, packageUuid }) {

  return (
    <Modal
      isOpen={true}
      parentSelector={() => document.querySelector(modalParentSelector)}
      style={defaultCustomModalStyle}
      contentLabel="Example Modal"
    >
      <div className='report_buy_plan w-[500px] rounded shadow-[0px_4px_8px_0px_rgb(0,0,0)]'>
        <body className='report_container border-0 pt-2 px-2 pb-5'>
          <div className='w-full flex items-center justify-between  text-center p-4 border border-[#D9D9D9] rounded-lg mb-5'> <div></div> رسید نهایی خرید اشتراک<img src='/img/modal/buyPlanReport/head/close.svg' className='float-left cursor-pointer rounded-[3px] hover:bg-[#F352421A]' onClick={() => handleClose()} /></div>

          <PurchaseInvoiceContent packageUuid={packageUuid}/>
          <AuthButton textButton={"پرداخت"} reduxHandleClick={buyPlan} />
        </body>
      </div>
    </Modal>
  )
}

