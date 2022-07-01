import React from 'react'
import FooterBtn from '../FooterBtn'
// import { FooterBtn } from '../FooterBtn'
import BuyPlnaModal from './BuyPlnaModal'
import { InputEasyToStartModal } from './HandleInputBody'
import { Paragraph } from './HandleParagraphBody'
import { ListBody } from './ListBody'
import ShowFinalReportModal from './ShowFinalReportModal'

export default function BodyContent({ stepModal, free,setFree,setPlan,plan }) {
    return (
        <div>
            <body className='p-5'>
            <p className='text_information'>
                {Paragraph(stepModal, free)}
            </p>
            {stepModal > 2 & stepModal < 6 ? (

                <div className='main_contnt_modal'>
                    {ListBody(stepModal)}
                    <img src="./img/modal/body/siteDesignMan.svg" alt="" />
                </div>
            ):""}
            {stepModal==1?BuyPlnaModal(stepModal,plan):""}
            {stepModal>2&stepModal<6?InputEasyToStartModal(stepModal):""}
            {stepModal==6? ShowFinalReportModal():""}
                </body>
            {/* <FooterBtn stepModal={stepModal} setFree={setFree}/> */}
            {/* {FooterBtn(stepModal,free)} */}
            {/* {stepModal < 4 ? (

                <body className=' p-5'>
                    {handleShowContentModal()}
                </body>
            ) : stepModal == 4 ? (
                <body className='plans_body_container p-5'>
                    {handleShowPlans()}
                </body>

            ) : stepModal == 5 && free == false ? (
                <body className='report_container mt-16 p-5'>
                    {handleShowBuyPlan()}
                </body>
            ) : stepModal == 6 && free == false ? (
                <body className='final_report_container p-5'>
                    {handleShowReport("اشتراک طلایی ، 3 ماهه")}
                </body>
            )
                : stepModal == 5 && free == true ? (
                    <body className='plan_list_option p-5'>
                        {handleShowTryFreePlan()}
                    </body>
                ) : stepModal == 6 && free == true ? (
                    <body className='final_report_container p-5'>
                        {handleShowReport("14 روز رایگان")}
                    </body>
                ) : ""} */}
        </div>
    )
}
