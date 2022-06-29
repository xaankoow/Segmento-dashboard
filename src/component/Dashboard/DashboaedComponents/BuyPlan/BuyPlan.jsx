import React, { Fragment, useEffect, useState } from 'react'
import AuthInput from '../../../Auth/authInput/AuthInput';
import { applyDiscountAction, getAllPlanData, setPackageUuid } from '../../../Redux/Action/plan';
import { useDispatch, useSelector } from 'react-redux';
import AuthButton from '../../../Auth/authButton/AuthButton';
import ReportBuyPlanSection from '../../../Utils/Modals/ReportBuyPlanSection';

export default function BuyPlan({ title }) {

  const { webAdress, charKey1, charKey2, site1, site2, commercialPage1, commercialPage2, planChosen, discount, forceUpdate,packageUuid,allPackageData } = useSelector(state => state.planState);

  const dispatch = useDispatch();
  
  console.log(allPackageData)
  useEffect(() => {
    dispatch(getAllPlanData())
  }, [])
  
  const [showReportModal, setShowReportModal] = useState(false);

  // const [free, setFree] = useState(false);

  const [plan, setPlan] = useState("");
  // debugger
  // const [showModal, setShowModal] = useState(true);
  const [discountInputGold, setDiscountInputGold] = useState("");
  const [discountInputBronze, setDiscountInputBronze] = useState("");
  const [discountInputSilver, setDiscountInputSilver] = useState("");
  const [discountInputDiamond, setDiscountInputDiamond] = useState("");


  const handleShowArrowDiscount = (text, arrowTarget) => {
    // debugger
    if (discountInputGold != "" && arrowTarget != "gold") { setDiscountInputGold(""); }
    if (discountInputBronze != "" && arrowTarget != "bronze") { setDiscountInputBronze(""); }
    if (discountInputSilver != "" && arrowTarget != "silver") { setDiscountInputSilver(""); }
    if (discountInputDiamond != "" && arrowTarget != "diamond") { setDiscountInputDiamond(""); }
    switch (arrowTarget) {
      case "gold":
        if (discountInputGold != text) {
          setDiscountInputGold("text");
        }
        break;
      case "bronze":
        if (discountInputBronze != text) {
          setDiscountInputBronze(text);
        }
        break;
      case "silver":
        if (discountInputSilver != text) {
          setDiscountInputSilver(text);
        }
        break;
      case "diamond":
        if (discountInputDiamond != text) {
          setDiscountInputDiamond(text);
        }
        break;

      default:
        break;
    }
  }









  const handleCloseReportModal=()=>{
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
      <div className='main_buy_plan_section max-w-5xl overflow-scroll'>


        <div className='section_title'>
          <div>
            <p>رایگان شروع کنید؛ قدرتمند ادامه دهید</p>
            <button className="btn_more_information_plan">توضیحات بیشتر</button>
          </div>
        </div>
        {/* <body className='plans_body_container'> */}
        <div className='plan_cards_container'>
        <div className='bronze plan_card ml-10'>
            <span className='title'>برنزی</span>
            <hr />
            <div className='plan'>
              <div className='container_row' onClick={() => { setPlan("bronze_1"); dispatch(setPackageUuid("eb2f7f18-5f0d-47fc-8610-99a71c869006")) }}>
                <div>
                  <input type="radio" name="radio" id="" checked={plan == "bronze_1" ? true : false} />
                  <p> 1 ماهه</p>
                </div>
              </div>
              <div className='container_row' onClick={() => { setPlan("bronze_3"); dispatch(setPackageUuid("45f370a6-b554-43ab-b757-39eb85175111")) }}>
                <div>
                  <input type="radio" name="radio" id="" checked={plan == "bronze_3" ? true : false} />
                  <p> 3 ماهه</p>
                </div>
                <span className='off_price'>15 درصد تخفیف</span>
              </div>
              <div className='container_row' onClick={() => { setPlan("bronze_6"); dispatch(setPackageUuid("31c4c8be-f830-4d72-8288-d9a3e1549aa8")) }}>
                <div>
                  <input type="radio" name="radio" id="" checked={plan == "bronze_6" ? true : false} />
                  <p> 6 ماهه</p>
                </div>
                <span className='off_price'>فقط پرداخت 5 ماه</span>
              </div>
              <div className='container_row' onClick={() => { setPlan("bronze_12"); dispatch(setPackageUuid("f9aae937-5278-47e0-85cc-84358c992923")) }}>
                <div>
                  <input type="radio" name="radio" id="" checked={plan == "bronze_12" ? true : false} />
                  <p> 12 ماهه</p>
                </div>
                <span className='off_price'>فقط پرداخت 10 ماه</span>
              </div>
            </div>
            <div className='price'>
              <p style={plan.substring(0, 1) == "b" ? { color: "rgba(10, 101, 205, 1)" } : null}>79 هزار تومان ماهانه</p>
            </div>
            <div className='input_apply_token_container'>
              <AuthInput
                textLabelInput=" کد تخفیف  "
                width={"100%"}
                typeInput="text"
                direction={"rtl"}
                handleArrowPlan={handleShowArrowDiscount}
                targePlanArrow={"bronze"}
                disabled={discount != "" ? true : false}
              // isPassword={true}
              // reduxHandleChange={setPasswordConfirmRedux}
              />
              <span className={`apply_token_ico ${discountInputBronze != "" && discount == "" ? "inline-block" : "hidden"}`} onClick={() => dispatch(applyDiscountAction(discountInputBronze))}></span>
            </div>
          </div>
          <div className='silver plan_card ml-10'>
            <span className='title'>نقره ای</span>
            <hr />
            <div className='plan'>
              <div className='container_row' onClick={() => { setPlan("silver_1"); dispatch(setPackageUuid("eb2f7f18-5f0d-47fc-8610-99a71c869006")) }}>
                <div>
                  <input type="radio" name="radio" id="" checked={plan == "silver_1" ? true : false} />
                  <p> 1 ماهه</p>
                </div>
              </div>
              <div className='container_row' onClick={() => { setPlan("silver_3"); dispatch(setPackageUuid("45f370a6-b554-43ab-b757-39eb85175111")) }}>
                <div>
                  <input type="radio" name="radio" id="" checked={plan == "silver_3" ? true : false} />
                  <p> 3 ماهه</p>
                </div>
                <span className='off_price'>15 درصد تخفیف</span>
              </div>
              <div className='container_row' onClick={() => { setPlan("silver_6"); dispatch(setPackageUuid("31c4c8be-f830-4d72-8288-d9a3e1549aa8")) }}>
                <div>
                  <input type="radio" name="radio" id="" checked={plan == "silver_6" ? true : false} />
                  <p> 6 ماهه</p>
                </div>
                <span className='off_price'>فقط پرداخت 5 ماه</span>
              </div>
              <div className='container_row' onClick={() => { setPlan("silver_12"); dispatch(setPackageUuid("f9aae937-5278-47e0-85cc-84358c992923")) }}>
                <div>
                  <input type="radio" name="radio" id="" checked={plan == "silver_12" ? true : false} />
                  <p> 12 ماهه</p>
                </div>
                <span className='off_price'>فقط پرداخت 10 ماه</span>
              </div>
            </div>
            <div className='price'>
              <p style={plan.substring(0, 1) == "s" ? { color: "rgba(10, 101, 205, 1)" } : null}>189 هزار تومان ماهانه</p>
            </div>
            <div className='input_apply_token_container'>
              <AuthInput
                textLabelInput=" کد تخفیف  "
                width={"100%"}
                typeInput="text"
                direction={"rtl"}
                handleArrowPlan={handleShowArrowDiscount}
                targePlanArrow={"silver"}
                disabled={discount != "" ? true : false}
              // isPassword={true}
              // reduxHandleChange={setPasswordConfirmRedux}
              />
              <span className={`apply_token_ico ${discountInputSilver != "" && discount == "" ? "inline-block" : "hidden"}`} onClick={() => dispatch(applyDiscountAction(discountInputSilver))}></span>
            </div>
          </div>
          <div className='gold plan_card ml-10'>
            <span className='title'>طلایی</span>
            <hr />
            <div className='plan'>
              <div className='container_row' onClick={() => { setPlan("gold_1"); dispatch(setPackageUuid("eb2f7f18-5f0d-47fc-8610-99a71c869006")) }}>
                <div>
                  <input type="radio" name="radio" id="" checked={plan == "gold_1" ? true : false} />
                  <p> 1 ماهه</p>
                </div>
              </div>
              <div className='container_row' onClick={() => { setPlan("gold_3"); dispatch(setPackageUuid("45f370a6-b554-43ab-b757-39eb85175111")) }}>
                <div>
                  <input type="radio" name="radio" id="" checked={plan == "gold_3" ? true : false} />
                  <p> 3 ماهه</p>
                </div>
                <span className='off_price'>15 درصد تخفیف</span>
              </div>
              <div className='container_row' onClick={() => { setPlan("gold_6"); dispatch(setPackageUuid("31c4c8be-f830-4d72-8288-d9a3e1549aa8")) }}>
                <div>
                  <input type="radio" name="radio" id="" checked={plan == "gold_6" ? true : false} />
                  <p> 6 ماهه</p>
                </div>
                <span className='off_price'>فقط پرداخت 5 ماه</span>
              </div>
              <div className='container_row' onClick={() => { setPlan("gold_12"); dispatch(setPackageUuid("f9aae937-5278-47e0-85cc-84358c992923")) }}>
                <div>
                  <input type="radio" name="radio" id="" checked={plan == "gold_12" ? true : false} />
                  <p> 12 ماهه</p>
                </div>
                <span className='off_price'>فقط پرداخت 10 ماه</span>
              </div>
            </div>
            <div className='price'>
              <p style={plan.substring(0, 1) == "g" ? { color: "rgba(10, 101, 205, 1)" } : null}>249 هزار تومان ماهانه</p>
            </div>
            <div className='input_apply_token_container'>
              <AuthInput
                textLabelInput=" کد تخفیف  "
                width={"100%"}
                typeInput="text"
                direction={"rtl"}
                handleArrowPlan={handleShowArrowDiscount}
                targePlanArrow={"gold"}
                disabled={discount != "" ? true : false}
              // isPassword={true}
              // reduxHandleChange={setPasswordConfirmRedux}
              />
              <span className={`apply_token_ico ${discountInputGold != "" && discount == "" ? "inline-block" : "hidden"}`} onClick={() => dispatch(applyDiscountAction(discountInputGold))}></span>
            </div>
          </div>
          <div className='diamond plan_card'>

            <span className='title'>الماسی</span>
            <hr />
            <div className='plan'>
              <div className='container_row' onClick={() => { setPlan("diamond_1"); dispatch(setPackageUuid("eb2f7f18-5f0d-47fc-8610-99a71c869006")) }}>
                <div>
                  <input type="radio" name="radio" id="" checked={plan == "diamond_1" ? true : false} />
                  <p> 1 ماهه</p>
                </div>
              </div>
              <div className='container_row' onClick={() => { setPlan("diamond_3"); dispatch(setPackageUuid("45f370a6-b554-43ab-b757-39eb85175111")) }}>
                <div>
                  <input type="radio" name="radio" id="" checked={plan == "diamond_3" ? true : false} />
                  <p> 3 ماهه</p>
                </div>
                <span className='off_price'>15 درصد تخفیف</span>
              </div>
              <div className='container_row' onClick={() => { setPlan("diamond_6"); dispatch(setPackageUuid("31c4c8be-f830-4d72-8288-d9a3e1549aa8")) }}>
                <div>
                  <input type="radio" name="radio" id="" checked={plan == "diamond_6" ? true : false} />
                  <p> 6 ماهه</p>
                </div>
                <span className='off_price'>فقط پرداخت 5 ماه</span>
              </div>
              <div className='container_row' onClick={() => { setPlan("diamond_12"); dispatch(setPackageUuid("f9aae937-5278-47e0-85cc-84358c992923")) }}>
                <div>
                  <input type="radio" name="radio" id="" checked={plan == "diamond_12" ? true : false} />
                  <p> 12 ماهه</p>
                </div>
                <span className='off_price'>فقط پرداخت 10 ماه</span>
              </div>
            </div>
            <div className='price'>
              <p style={plan.substring(0, 1) == "d" ? { color: "rgba(10, 101, 205, 1)" } : null}>249 هزار تومان ماهانه</p>
            </div>
            <div className='input_apply_token_container'>
              <AuthInput
                textLabelInput=" کد تخفیف  "
                width={"100%"}
                typeInput="text"
                direction={"rtl"}
                handleArrowPlan={handleShowArrowDiscount}
                targePlanArrow={"diamond"}
                disabled={discount != "" ? true : false}
              // isPassword={true}
              // reduxHandleChange={setPasswordConfirmRedux}
              />
              <span className={`apply_token_ico ${discountInputDiamond != "" && discount == "" ? "inline-block" : "hidden"}`} onClick={() => dispatch(applyDiscountAction(discountInputDiamond))}></span>
            </div>
          </div>
        </div>
        <div className='container_plan_message mt-5 rounded-lg'>
          <img src="./img/modal/footer/planInfoMessage.svg" className='inline-block mr-3' alt="" />
          <span className='py-2.5 mr-3 inline-block text-sm '>با خرید اشتراک 12 ماهه طلایی شما فقط مبلغ 10 ماه رو پرداخت میکنید؛ 2 ماه مهمون سگمنتو باشین</span>
        </div>
        <button className='btn-style m-auto mt-4' onClick={()=>setShowReportModal(true)}>فعالسازی اشتراک<span className='forward-ico'></span></button>
        {/* </body> */}
        <div className='footer_message'>
          <p>اگر بیزینس هستید یا به امکانات و منابع بیشتری نیاز دارید: </p>
          <button className="btn_more_information_plan">توضیحات بیشتر</button>
        </div>
      </div>
      <div className='report_buy_plan w-[500px]'>
        {showReportModal&&<ReportBuyPlanSection handleClose={handleCloseReportModal}/>}
      
      </div>
    </div>
  )
}
