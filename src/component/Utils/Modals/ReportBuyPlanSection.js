import React from 'react'
import Modal from 'react-modal'
import { ImageContainer } from '../../../assets/img/IMG';
import { afterOpenOrCloseAnyModal } from '../../../variables/modal';
import { defaultCustomModalStyle, modalParentSelector } from '../../../variables/style';
import AuthButton from '../../Auth/authButton/AuthButton';
import { buyPlan } from '../../Redux/Action/plan';
import PurchaseInvoiceContent from '../buyPlanSection_UTILS/PurchaseInvoiceContent';

export default function ReportBuyPlanSection({ handleClose, packageUuid }) {

  return (
    <Modal
      isOpen={true}
      parentSelector={() => document.querySelector(modalParentSelector)}
      // parentSelector={() => document.querySelector("#DASHBOARD .body .main")}
      style={defaultCustomModalStyle}
      onAfterOpen={()=>afterOpenOrCloseAnyModal({open:true})}
      onAfterClose={()=>afterOpenOrCloseAnyModal({open:false})}
      contentLabel="Example Modal"
    >
      <div className='report_buy_plan w-[500px] rounded shadow-[0px_4px_8px_0px_rgb(0,0,0)]'>
        <body className='report_container border-0 pt-2 px-2 pb-5'>
          <div className='w-full h-14 flex items-center justify-between  text-center p-5 border border-[#D9D9D9] rounded-lg mb-5'> <div></div> رسید نهایی خرید اشتراک<img src={ImageContainer.closeModalIco} className='float-left cursor-pointer p-1 rounded-[3px] hover:bg-[#F352421A]' onClick={() => handleClose()} /></div>

          <PurchaseInvoiceContent packageUuid={packageUuid}/>
          <AuthButton textButton={"پرداخت"} reduxHandleClick={buyPlan} />
        </body>
      </div>
    </Modal>
  )
}

