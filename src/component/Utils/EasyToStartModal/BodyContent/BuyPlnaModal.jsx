import React, { useEffect, useState } from 'react'
import { applyDiscountAction, getAllPlanData, setPackageUuid } from '../../../Redux/Action/plan';
import { useDispatch, useSelector } from 'react-redux';
import AuthInput from '../../../Auth/authInput/AuthInput';
import HandleParagraphInfoPlan from '../../buyPlanSection_UTILS/proposalPlanParagraph/HandleParagraphInfoPlan';
import CardPlans from '../../buyPlanSection_UTILS/CardPlans';

export default function BuyPlnaModal({plan,setPlan}) {

  return (
    <body className='plans_body_container bg-[#fff] mt-12 mb-5'>
      <CardPlans plan={plan} setPlan={setPlan}/>
      <HandleParagraphInfoPlan typePlan={plan.type} indexPlan={plan.planIndex} />
    </body>

  )
}