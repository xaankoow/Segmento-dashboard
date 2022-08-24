import React, { useEffect, useState } from 'react'
import { applyDiscountAction, getAllPlanData, setPackageUuid } from '../../../Redux/Action/plan';
import { useDispatch, useSelector } from 'react-redux';
import AuthInput from '../../../Auth/authInput/AuthInput';
import HandleParagraphInfoPlan from '../../buyPlanSection_UTILS/proposalPlanParagraph/HandleParagraphInfoPlan';
import CardPlans from '../../buyPlanSection_UTILS/CardPlans';

export default function BuyPlnaModal() {

  // const dispatch = useDispatch();



  // const [discountInputGold, setDiscountInputGold] = useState("");
  // const [discountInputBronze, setDiscountInputBronze] = useState("");
  // const [discountInputSilver, setDiscountInputSilver] = useState("");
  // const [discountInputDiamond, setDiscountInputDiamond] = useState("");
  // const [lastSelectedDiscountInput, setLastSelectedDiscountInput] = useState("");

  // const { canRequest } = useSelector((state) => state.loadingState);
  // const { discount, discountStatus, allPackageData } = useSelector(state => state.planState);

  // const handleShowArrowDiscount = (text, arrowTarget) => {

  //   if (discountInputGold != "" && arrowTarget != "gold") { setDiscountInputGold(""); }
  //   if (discountInputBronze != "" && arrowTarget != "bronze") { setDiscountInputBronze(""); }
  //   if (discountInputSilver != "" && arrowTarget != "silver") { setDiscountInputSilver(""); }
  //   if (discountInputDiamond != "" && arrowTarget != "diamond") { setDiscountInputDiamond(""); }
  //   switch (arrowTarget) {
  //     case "gold":
  //       if (discountInputGold != text) {
  //         setLastSelectedDiscountInput("gold");
  //         setDiscountInputGold(text);
  //       }
  //       break;
  //     case "bronze":
  //       if (discountInputBronze != text) {
  //         setLastSelectedDiscountInput("bronze");
  //         setDiscountInputBronze(text);
  //       }
  //       break;
  //     case "silver":
  //       if (discountInputSilver != text) {
  //         setLastSelectedDiscountInput("silver");
  //         setDiscountInputSilver(text);
  //       }
  //       break;
  //     case "diamond":
  //       if (discountInputDiamond != text) {
  //         setLastSelectedDiscountInput("diamond");
  //         setDiscountInputDiamond(text);
  //       }
  //       break;

  //     default:
  //       break;
  //   }
  // }
  const [plan, setPlan] = useState({ uuid: "", type: "", planIndex: 0 });
  return (
    <body className='plans_body_container bg-[#fff] mt-12 mb-5'>
      <CardPlans plan={plan} setPlan={setPlan}/>
      <HandleParagraphInfoPlan typePlan={plan.type} indexPlan={plan.planIndex} />
    </body>

  )
}