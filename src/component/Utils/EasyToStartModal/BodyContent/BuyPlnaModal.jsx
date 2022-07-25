import React, { useEffect, useState } from 'react'
import { applyDiscountAction, getAllPlanData, setPackageUuid } from '../../../Redux/Action/plan';
import { useDispatch, useSelector } from 'react-redux';
import AuthInput from '../../../Auth/authInput/AuthInput';

export default function BuyPlnaModal() {

  const dispatch = useDispatch();
  const [num, setNum] = useState("");

  useEffect(() => {
    console.log("22")
    dispatch(getAllPlanData());
  }, [])

  const [plan, setPlan] = useState("");

  const [discountInputGold, setDiscountInputGold] = useState("");
  const [discountInputBronze, setDiscountInputBronze] = useState("");
  const [discountInputSilver, setDiscountInputSilver] = useState("");
  const [discountInputDiamond, setDiscountInputDiamond] = useState("");
  const [lastSelectedDiscountInput, setLastSelectedDiscountInput] = useState("");
  // var lastSelectedDiscountInput="";


  const { canRequest } = useSelector((state) => state.loadingState);
  const { discount,discountStatus,allPackageData } = useSelector(state => state.planState);
  console.log(allPackageData)

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

  
  let p;
  var dd="79000";
  p= dd.substring(0,dd.length-3);
  // alert(p + "هزار تومان ماهانه");
  // if(allPackageData.length>1)
  // {
  //   dd=allPackageData[1].price
  // }
  return (
    <body className='plans_body_container'>
      {/* <p className='text_information'>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته است .
      </p> */}
      <div className='plan_cards_container mt-7'>
        <div className='bronze plan_card'>
          <span className='title'>برنزی</span>
          <hr />
          <div className='plan'>
            {allPackageData.map(item => {
              
              if (item.type_text == "برنزی") {
              return (
                <div className='container_row' onClick={() => { setPlan(item.uuid); dispatch(setPackageUuid(item.uuid)) }}>
                  <div>
                    <input type="radio" name="radio" id="" checked={plan == item.uuid ? true : false} />
                    <p>{item.title}</p>
                  </div>
                  <span className='off_price'>{item.default_discount_text}</span>
                </div>)
              }
            })}
          </div>
          <div className='price relative'>
          {discountStatus.value!=0&discountStatus.planType=="bronze"?<span className=' absolute bottom-12 line-through w-full text-xs right-0'>{allPackageData.length>1?parseInt(allPackageData[1].price.toString().substring(0,allPackageData[1].price.toString().length-3))-discountStatus.value+" هزار تومان ماهانه":""}</span>:null}
            <p style={plan.substring(0, 1) == "b" ? { color: "rgba(10, 101, 205, 1)" } : null}>{allPackageData.length>1?allPackageData[1].price.toString().substring(0,allPackageData[1].price.toString().length-3)+" هزار تومان ماهانه":""}</p>
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
              classes={discountInputBronze != "" & discount != "" ? "border-b-[2px] border-b-[#10CCAE]" : ""}
              errorTextId={lastSelectedDiscountInput == "bronze" ? "discount" : ""}
            />
            <button disabled={!canRequest} className={`apply_token_ico ${discountInputBronze != "" && discount == "" ? "inline-block" : "hidden"}`} onClick={() => dispatch(applyDiscountAction(discountInputBronze,"bronze"))}></button>
            
          </div>
        </div>
        <div className='silver plan_card'>
          <span className='title'>نقره ای</span>
          <hr />
          <div className='plan'>
          {allPackageData.map(item => {
              
              if (item.type_text == "نقره ای") {
                if (item.title!="14 روز رایگان") {
                  
              return (
                <div className='container_row' onClick={() => { setPlan(item.uuid); dispatch(setPackageUuid(item.uuid)) }}>
                  <div>
                    <input type="radio" name="radio" id="" checked={plan == item.uuid ? true : false} />
                    <p>{item.title}</p>
                  </div>
                  <span className='off_price'>{item.default_discount_text}</span>
                </div>)
                }
              }
            })}
          </div>
          <div className='price relative'>
          {discountStatus.value!=0&discountStatus.planType=="silver"?<span className=' absolute bottom-12 line-through w-full text-xs right-0'>{allPackageData.length>1?parseInt(allPackageData[5].price.toString().substring(0,allPackageData[5].price.toString().length-3))-discountStatus.value+" هزار تومان ماهانه":""}</span>:null}

            <p style={plan.substring(0, 1) == "s" ? { color: "rgba(10, 101, 205, 1)" } : null}>{allPackageData.length>1?allPackageData[5].price.toString().substring(0,allPackageData[5].price.toString().length-3)+" هزار تومان ماهانه":""}</p>
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
              errorTextId={lastSelectedDiscountInput == "silver" ? "discount" : ""}
            />
            <button disabled={!canRequest} className={`apply_token_ico ${discountInputSilver != "" && discount == "" ? "inline-block" : "hidden"}`} onClick={() => dispatch(applyDiscountAction(discountInputSilver,"silver"))}></button>

          </div>
        </div>
        <div className='gold plan_card'>
          <span className='title'>طلایی</span>
          <hr />
          <div className='plan'>
          {allPackageData.map(item => {
              
              if (item.type_text == "طلایی") {
              return (
                <div className='container_row' onClick={() => { setPlan(item.uuid); dispatch(setPackageUuid(item.uuid)) }}>
                  <div>
                    <input type="radio" name="radio" id="" checked={plan == item.uuid ? true : false} />
                    <p>{item.title}</p>
                  </div>
                  <span className='off_price'>{item.default_discount_text}</span>
                </div>)
              }
            })}
          </div>
          <div className='price relative'>
          {discountStatus.value!=0&discountStatus.planType=="gold"?<span className=' absolute bottom-12 w-full line-through text-xs right-0'>{allPackageData.length>1?parseInt(allPackageData[9].price.toString().substring(0,allPackageData[9].price.toString().length-3))-discountStatus.value+" هزار تومان ماهانه":""}</span>:null}
            <p style={plan.substring(0, 1) == "g" ? { color: "rgba(10, 101, 205, 1)" } : null}>{allPackageData.length>1?allPackageData[9].price.toString().substring(0,allPackageData[9].price.toString().length-3)+" هزار تومان ماهانه":""}</p>
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
              errorTextId={lastSelectedDiscountInput == "gold" ? "discount" : ""}
            />
            <button disabled={!canRequest} className={`apply_token_ico ${discountInputGold != "" && discount == "" ? "inline-block" : "hidden"}`} onClick={() => dispatch(applyDiscountAction(discountInputGold,"gold"))}></button>
          </div>
        </div>
        <div className='diamond plan_card'>

          <span className='title'>الماسی</span>
          <hr />
          <div className='plan'>
          {allPackageData.map(item => {
              
              if (item.type_text == "الماسی") {
              return (
                <div className='container_row' onClick={() => { setPlan(item.uuid); dispatch(setPackageUuid(item.uuid)) }}>
                  <div>
                    <input type="radio" name="radio" id="" checked={plan == item.uuid ? true : false} />
                    <p>{item.title}</p>
                  </div>
                  <span className='off_price'>{item.default_discount_text}</span>
                </div>)
              }
            })}
          </div>
          <div className='price relative'>
          {discountStatus.value!=0&discountStatus.planType=="diamond"?<span className=' absolute bottom-12 w-full line-through text-xs right-0'>{allPackageData.length>1?parseInt(allPackageData[13].price.toString().substring(0,allPackageData[13].price.toString().length-3))-discountStatus.value+" هزار تومان ماهانه":""}</span>:null}
            <p style={plan.substring(0, 1) == "d" ? { color: "rgba(10, 101, 205, 1)" } : null}>{allPackageData.length>1?allPackageData[13].price.toString().substring(0,allPackageData[13].price.toString().length-3)+" هزار تومان ماهانه":""}</p>
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
              errorTextId={lastSelectedDiscountInput == "diamond" ? "discount" : ""}
            />
            <button disabled={!canRequest} className={`apply_token_ico ${discountInputDiamond != "" && discount == "" ? "inline-block" : "hidden"}`} onClick={() => dispatch(applyDiscountAction(discountInputDiamond,"diamond"))}></button>
          </div>
        </div>

      </div>
      <div className='container_plan_message mt-5 border rounded-lg'>
        <img src="/img/modal/footer/planInfoMessage.svg" className='inline-block mr-3' alt="" />
        <span className='py-2.5 mr-3 inline-block text-sm '>با خرید اشتراک 12 ماهه طلایی شما فقط مبلغ 10 ماه رو پرداخت میکنید؛ 2 ماه مهمون سگمنتو باشین</span>
      </div>
    </body>

  )
}