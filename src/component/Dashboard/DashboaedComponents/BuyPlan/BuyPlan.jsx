import React, { Fragment, useEffect, useState } from 'react'
// import AuthInput from '../../../Auth/authInput/AuthInput';
import { getAllPlanData } from '../../../Redux/Action/plan';
import { useDispatch, useSelector } from 'react-redux';
import AuthButton from '../../../Auth/authButton/AuthButton';
import ReportBuyPlanSection from '../../../Utils/Modals/ReportBuyPlanSection';
import SetTitleTabBrowser from '../../../Utils/SetTitleTabBrowser';
// import DiscountTagValue from '../../../Utils/buyPlanSection_UTILS/DiscountTagValue';
import HandleParagraphInfoPlan from '../../../Utils/buyPlanSection_UTILS/proposalPlanParagraph/HandleParagraphInfoPlan';
import PageTitle from '../pageTitle/pageTitle';
import CardPlans from '../../../Utils/buyPlanSection_UTILS/CardPlans';
// import CardPlans from '../../../Utils/buyPlanSection_UTILS/CardPlans';

export default function BuyPlan({ title }) {

  const { discount, discountStatus, allPackageData } = useSelector(state => state.planState);

  // debugger
  const { canRequest } = useSelector((state) => state.loadingState);
  const dispatch = useDispatch();

  // console.log(allPackageData)
  useEffect(() => {
    dispatch(getAllPlanData())
  }, [])

  const [showReportModal, setShowReportModal] = useState(false);


  // const [free, setFree] = useState(false);

  const [plan, setPlan] = useState({ uuid: "", type: "", planIndex: 0 });
  // 
  // const [showModal, setShowModal] = useState(true);










  const handleCloseReportModal = () => {
    setShowReportModal(false)
  }

  return (
    <div className='plans_body_container buy_plan_section '>
      <PageTitle title={title} />
      <div className='main_buy_plan_section overflow-visible max-w-7xl w-11/12 '>
        <div className='section_title'>
          <div>
            <p>رایگان شروع کنید؛ قدرتمند ادامه دهید</p>
            <button className="btn_more_information_plan">توضیحات بیشتر</button>
          </div>
        </div>
        <CardPlans plan={plan} setPlan={setPlan} />
        <HandleParagraphInfoPlan typePlan={plan.type} indexPlan={plan.planIndex} />
        <AuthButton classes={"m-auto mt-4"} handlerClick={setShowReportModal} setOnclickValue={true} disabled={plan.uuid != "" ? false : true} onClick={() => setShowReportModal(true)} textButton={<Fragment>فعالسازی اشتراک<span className='forward-ico'></span></Fragment>}></AuthButton>
        <div className='footer_message '>
          <p>آیا صاحب کسب‌و‌کار هستید و به امکانات بیشتری نیاز دارید؟</p>
          <AuthButton classes={"btn-secondary my-7"} textButton={"بله هستم"} />
        </div>
      </div>
      <div className='report_buy_plan w-[500px]'>
        {showReportModal && <ReportBuyPlanSection handleClose={handleCloseReportModal} packageUuid={plan.uuid} />}
      </div>
      <SetTitleTabBrowser nameSection={"خرید اشتراک"} />
    </div>
  )
}