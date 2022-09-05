import React, { Fragment } from 'react'
import { useState } from 'react'
import { Paragraph } from './createParagraph';
import planInfoMessage_svg from "../../../../assets/img/modal/footer/planInfoMessage.svg";

export default function HandleParagraphInfoPlan({ typePlan, indexPlan }) {
    // const [paragraph,setParagraph]=useState("با خرید اشتراک 12 ماهه طلایی شما فقط مبلغ 10 ماه رو پرداخت میکنید؛ 2 ماه مهمون سگمنتو باشین");
    const getParagraph = Paragraph(typePlan, indexPlan);
    return (
        <Fragment>
            {getParagraph != "" ? (
                <div className='container_plan_message mt-5 rounded-lg'>
                    <img src={planInfoMessage_svg} className='inline-block mr-3' alt="" />
                    <span className='py-2.5 mr-3 inline-block text-sm '>{getParagraph}</span>
                </div>
            ) : null}
        </Fragment>
    )
}
