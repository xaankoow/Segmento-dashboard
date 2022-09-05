import React, { useState } from 'react'
import CardPlans from '../../buyPlanSection_UTILS/CardPlans'
import PurchaseInvoiceContent from '../../buyPlanSection_UTILS/PurchaseInvoiceContent'
import BuyPlnaModal from './BuyPlnaModal'
import { InputEasyToStartModal } from './HandleInputBody'
import { Paragraph } from './HandleParagraphBody'
import ReportInfoPlan from './ReportInfoPlan'
import { setImages } from './setImages'
import ShowFinalReportModal from './ShowFinalReportModal'
import TryFreePlan from './TryFreePlan'
import siteDesignMan_svg from '../../../../assets/img/modal/body/siteDesignMan.svg'

export default function BodyContent({ stepModal, setStepModal, free, lockNextStep, setLockNextStep, setApplyWebAdress,plan, setPlan }) {


//   debugger

    return (
        <div>
            <body className={` ${stepModal > 2 & stepModal < 6 ? "border-[#F2F5F7] border rounded-lg p-5 bg-[#fff]" : "bg-[#fff]"}`}>
                <p className={`leading-6 text-sm font-normal text-[#083c78] bg-[#fff]`}>
                    {Paragraph(stepModal, free)}
                </p>
                {stepModal > 2 & stepModal < 6 ? (
                    <div className='main_contnt_modal text-center w-full'>
                        {/* <img src={siteDesignMan_svg} alt="" className=' m-auto' /> */}
                        {setImages(stepModal)}
                    </div>
                ) : ""}

                {stepModal == 2 & free == false ? <PurchaseInvoiceContent packageUuid={plan.uuid}/> : ""}
                {stepModal == 2 & free == true ? <TryFreePlan setLockNextStep={setLockNextStep} lockNextStep={lockNextStep} setStepModal={setStepModal} /> : ""}
                {stepModal > 2 & stepModal < 6 ? <InputEasyToStartModal stepModal={stepModal}/> : ""}
                {stepModal == 1 ? <BuyPlnaModal plan={plan} setPlan={setPlan}/> : ""}
                {/* {stepModal == 1 ? <CardPlans /> : ""} */}
                {stepModal == 6 ? <ShowFinalReportModal/> : ""}
            </body>
        </div>
    )
}
