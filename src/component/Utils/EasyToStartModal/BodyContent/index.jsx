import React from 'react'
import CardPlans from '../../buyPlanSection_UTILS/CardPlans'
import BuyPlnaModal from './BuyPlnaModal'
import { InputEasyToStartModal } from './HandleInputBody'
import { Paragraph } from './HandleParagraphBody'
import ReportInfoPlan from './ReportInfoPlan'
import ShowFinalReportModal from './ShowFinalReportModal'
import TryFreePlan from './TryFreePlan'

export default function BodyContent({ stepModal, setStepModal, free, lockNextStep, setLockNextStep, setApplyWebAdress }) {

    return (
        <div>
            <body className={` ${stepModal > 2 & stepModal < 6 ? "border-[#F2F5F7] border rounded-lg p-5" : "bg-white"}`}>
                <p className={`leading-6 text-sm font-normal text-[#083c78]`}>
                    {Paragraph(stepModal, free)}
                </p>
                {stepModal > 2 & stepModal < 6 ? (
                    <div className='main_contnt_modal text-center w-full'>
                        <img src="/img/modal/body/siteDesignMan.svg" alt="" className=' m-auto' />
                    </div>
                ) : ""}

                {stepModal == 2 & free == false ? <ReportInfoPlan /> : ""}
                {stepModal == 2 & free == true ? <TryFreePlan setLockNextStep={setLockNextStep} lockNextStep={lockNextStep} setStepModal={setStepModal} /> : ""}
                {stepModal > 2 & stepModal < 6 ? InputEasyToStartModal(stepModal, setApplyWebAdress) : ""}
                {/* {stepModal == 1 ? <BuyPlnaModal /> : ""} */}
                {stepModal == 1 ? <CardPlans /> : ""}
                {stepModal == 6 ? <ShowFinalReportModal/> : ""}
            </body>
        </div>
    )
}
