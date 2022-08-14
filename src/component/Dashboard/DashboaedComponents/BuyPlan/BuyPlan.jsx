import React, { Fragment, useEffect, useState } from 'react'
import AuthInput from '../../../Auth/authInput/AuthInput';
import { applyDiscountAction, getAllPlanData, setPackageUuid } from '../../../Redux/Action/plan';
import { useDispatch, useSelector } from 'react-redux';
import AuthButton from '../../../Auth/authButton/AuthButton';
import ReportBuyPlanSection from '../../../Utils/Modals/ReportBuyPlanSection';
import SetTitleTabBrowser from '../../../Utils/SetTitleTabBrowser';
import DiscountTagValue from '../../../Utils/buyPlanSection_UTILS/DiscountTagValue';
import HandleParagraphInfoPlan from '../../../Utils/buyPlanSection_UTILS/proposalPlanParagraph/HandleParagraphInfoPlan';

export default function BuyPlan({ title }) {

  const { discount, discountStatus, allPackageData } = useSelector(state => state.planState);

  const { canRequest } = useSelector((state) => state.loadingState);
  const dispatch = useDispatch();

  // console.log(allPackageData)
  useEffect(() => {
    dispatch(getAllPlanData())
  }, [])

  const [showReportModal, setShowReportModal] = useState(false);

  const [lastSelectedDiscountInput, setLastSelectedDiscountInput] = useState("");
  // const [free, setFree] = useState(false);

  const [plan, setPlan] = useState({ uuid: "", type: "", planIndex: 0 });
  // 
  // const [showModal, setShowModal] = useState(true);
  const [discountInputGold, setDiscountInputGold] = useState("");
  const [discountInputBronze, setDiscountInputBronze] = useState("");
  const [discountInputSilver, setDiscountInputSilver] = useState("");
  const [discountInputDiamond, setDiscountInputDiamond] = useState("");


  const handleShowArrowDiscount = (text, arrowTarget) => {
    // 
    if (discountInputGold != "" && arrowTarget != "gold") { setDiscountInputGold(""); }
    if (discountInputBronze != "" && arrowTarget != "bronze") { setDiscountInputBronze(""); }
    if (discountInputSilver != "" && arrowTarget != "silver") { setDiscountInputSilver(""); }
    if (discountInputDiamond != "" && arrowTarget != "diamond") { setDiscountInputDiamond(""); }
    switch (arrowTarget) {
      case "gold":
        if (discountInputGold != text) {
          setLastSelectedDiscountInput("gold");
          setDiscountInputGold(text);
        }
        break;
      case "bronze":
        if (discountInputBronze != text) {
          setLastSelectedDiscountInput("bronze");
          setDiscountInputBronze(text);
        }
        break;
      case "silver":
        if (discountInputSilver != text) {
          setLastSelectedDiscountInput("silver");
          setDiscountInputSilver(text);
        }
        break;
      case "diamond":
        if (discountInputDiamond != text) {
          setLastSelectedDiscountInput("diamond");
          setDiscountInputDiamond(text);
        }
        break;

      default:
        break;
    }
  }









  const handleCloseReportModal = () => {
    setShowReportModal(false)
  }

  return (
    <div className='plans_body_container buy_plan_section'>
      <div className='flex gap-6 items-center pr-4 mt-3'>
        <div className='w-[20px] h-[2px] bg-[#001F43] rotate-90 rounded absolute -right-[9px]' />
        <span className='text-lg'>{title}</span>
      </div>
      {/* <div className='badge_title'> */}
      {/* <div></div> */}
      {/* <p>خرید اشتراک سگمنتو</p> */}
      {/* </div> */}
      <div className='main_buy_plan_section overflow-visible max-w-7xl w-full'>


        <div className='section_title'>
          <div>
            <p>رایگان شروع کنید؛ قدرتمند ادامه دهید</p>
            <button className="btn_more_information_plan">توضیحات بیشتر</button>
          </div>
        </div>
        {/* <body className='plans_body_container'> */}



        <div className='plan_cards_container'>
          <div className='bronze plan_card'>
            <span className='title'>برنزی</span>
            <hr />
            <div className='plan'>
              {allPackageData.map((item, index) => {
                // 
                if (item.type_text == "برنزی") {
                  return (
                    <div className='container_row' onClick={() => { setPlan({ uuid: item.uuid, type: "bronze", planIndex: index }); dispatch(setPackageUuid(item.uuid)) }}>
                      <div>
                        <input type="radio" name="radio" id="" checked={plan.uuid == item.uuid ? true : false} />
                        <p>{item.title}</p>
                      </div>
                      <span className='off_price'>{item.default_discount_text}</span>
                    </div>
                  )
                }
              })}
            </div>
            {allPackageData.length > 1 &&
              <DiscountTagValue
                discountValue={discountStatus.value}
                discountStatus={discountStatus.planType}
                tagStatusName={"bronze"}
                price={allPackageData[1].price}
                planSelected={plan.type}
              />
            }
            <div className='input_apply_token_container'>
              <AuthInput
                textLabelInput=" کد تخفیف  "
                width={"100%"}
                typeInput="text"
                direction={"rtl"}
                handleArrowPlan={handleShowArrowDiscount}
                targePlanArrow={"bronze"}
                disable={discount != "" ? true : false}
                errorTextId={lastSelectedDiscountInput == "bronze" ? "discount" : ""}
              />
              <button disabled={!canRequest} className={`apply_token_ico ${discountInputBronze != "" && discount == "" ? "inline-block" : "hidden"}`} onClick={() => dispatch(applyDiscountAction(discountInputBronze, "bronze"))}></button>
            </div>
          </div>


          <div className='silver plan_card'>
            <span className='title'>نقره ای</span>
            <hr />
            <div className='plan'>
              {allPackageData.map((item, index) => {
                // 
                if (item.type_text == "نقره ای") {
                  if (item.title != "14 روز رایگان") {
                    return (
                      <div className='container_row' onClick={() => { setPlan({ uuid: item.uuid, type: "silver", planIndex: index }); dispatch(setPackageUuid(item.uuid)) }}>
                        <div>
                          <input type="radio" name="radio" id="" checked={plan.uuid == item.uuid ? true : false} />
                          <p>{item.title}</p>
                        </div>
                        <span className='off_price'>{item.default_discount_text}</span>
                      </div>)
                  }
                }
              })}
            </div>
            {allPackageData.length > 1 &&
              <DiscountTagValue
                discountValue={discountStatus.value}
                discountStatus={discountStatus.planType}
                tagStatusName={"silver"}
                price={allPackageData[5].price}
                planSelected={plan.type}
              />
            }
            <div className='input_apply_token_container'>
              <AuthInput
                textLabelInput=" کد تخفیف  "
                width={"100%"}
                typeInput="text"
                direction={"rtl"}
                handleArrowPlan={handleShowArrowDiscount}
                targePlanArrow={"silver"}
                disable={discount != "" ? true : false}
                errorTextId={lastSelectedDiscountInput == "silver" ? "discount" : ""}
              />
              <button disabled={!canRequest} className={`apply_token_ico ${discountInputSilver != "" && discount == "" ? "inline-block" : "hidden"}`} onClick={() => dispatch(applyDiscountAction(discountInputSilver, "silver"))}></button>
            </div>
          </div>
          <div className='gold plan_card'>
            <span className='title'>طلایی</span>
            <hr />
            <div className='plan'>
              {allPackageData.map((item, index) => {

                if (item.type_text == "طلایی") {
                  return (
                    <div className='container_row' onClick={() => { setPlan({ uuid: item.uuid, type: "gold", planIndex: index }); dispatch(setPackageUuid(item.uuid)) }}>
                      <div>
                        <input type="radio" name="radio" id="" checked={plan.uuid == item.uuid ? true : false} />
                        <p>{item.title}</p>
                      </div>
                      <span className='off_price'>{item.default_discount_text}</span>
                    </div>)
                }
              })}
            </div>
            {allPackageData.length > 1 &&
              <DiscountTagValue
                discountValue={discountStatus.value}
                discountStatus={discountStatus.planType}
                tagStatusName={"gold"}
                price={allPackageData[9].price}
                planSelected={plan.type}
              />
            }
            <div className='input_apply_token_container'>
              <AuthInput
                textLabelInput=" کد تخفیف  "
                width={"100%"}
                typeInput="text"
                direction={"rtl"}
                handleArrowPlan={handleShowArrowDiscount}
                targePlanArrow={"gold"}
                disable={discount != "" ? true : false}
                errorTextId={lastSelectedDiscountInput == "gold" ? "discount" : ""}
              />
              <button disabled={!canRequest} className={`apply_token_ico ${discountInputGold != "" && discount == "" ? "inline-block" : "hidden"}`} onClick={() => dispatch(applyDiscountAction(discountInputGold, "gold"))}></button>
            </div>
          </div>
          <div className='diamond plan_card'>

            <span className='title'>الماسی</span>
            <hr />
            <div className='plan'>
              {allPackageData.map((item, index) => {

                if (item.type_text == "الماسی") {
                  return (
                    <div className='container_row' onClick={() => { setPlan({ uuid: item.uuid, type: "diamond", planIndex: index }); dispatch(setPackageUuid(item.uuid)) }}>
                      <div>
                        <input type="radio" name="radio" id="" checked={plan.uuid == item.uuid ? true : false} />
                        <p>{item.title}</p>
                      </div>
                      <span className='off_price'>{item.default_discount_text}</span>
                    </div>)
                }
              })}
            </div>
            {allPackageData.length > 1 &&
              <DiscountTagValue
                discountValue={discountStatus.value}
                discountStatus={discountStatus.planType}
                tagStatusName={"diamond"}
                price={allPackageData[13].price}
                planSelected={plan.type}
              />
            }
            <div className='input_apply_token_container'>
              <AuthInput
                textLabelInput=" کد تخفیف  "
                width={"100%"}
                typeInput="text"
                direction={"rtl"}
                handleArrowPlan={handleShowArrowDiscount}
                targePlanArrow={"diamond"}
                disable={discount != "" ? true : false}
                errorTextId={lastSelectedDiscountInput == "diamond" ? "discount" : ""}
              />
              <button disabled={!canRequest} className={`apply_token_ico ${discountInputDiamond != "" && discount == "" ? "inline-block" : "hidden"}`} onClick={() => dispatch(applyDiscountAction(discountInputDiamond, "diamond"))}></button>
            </div>
          </div>
        </div>




        <HandleParagraphInfoPlan typePlan={plan.type} indexPlan={plan.planIndex} />
        <AuthButton classes={"m-auto mt-4"} handlerClick={setShowReportModal} setOnclickValue={true} disabled={plan.uuid != "" ? false : true} onClick={() => setShowReportModal(true)} textButton={<Fragment>فعالسازی اشتراک<span className='forward-ico'></span></Fragment>}></AuthButton>
        {/* <AuthButton className='btn-style m-auto mt-4' handlerClick={setShowReportModal(true)} onClick={()=>setShowReportModal(true)}>فعالسازی اشتراک<span className='forward-ico'></span></AuthButton> */}
        {/* </body> */}
        <div className='footer_message'>
          <p>اگر بیزینس هستید یا به امکانات و منابع بیشتری نیاز دارید: </p>
          <button className="btn_more_information_plan">توضیحات بیشتر</button>
        </div>
      </div>
      <div className='report_buy_plan w-[500px]'>
        {showReportModal && <ReportBuyPlanSection handleClose={handleCloseReportModal} packageUuid={plan.uuid} />}
      </div>
      <SetTitleTabBrowser nameSection={"خرید اشتراک"} />
    </div>
  )
}