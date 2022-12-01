import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';
import AuthInput from '../../Auth/authInput/AuthInput';
import { applyDiscountAction, getAllPlanData, setPackageUuid } from '../../Redux/Action/plan';
import DiscountTagValue from './DiscountTagValue';

export default function CardPlans({ plan, setPlan }) {

  const {allPackageData } = useSelector(state => state.planState);

  const { canRequest } = useSelector((state) => state.loadingState);

  const dispatch = useDispatch();

  const axiosController = new AbortController();
  
  useEffect(() => {
    dispatch(getAllPlanData(axiosController));
  }, [])

  useEffect(() => {
    return () => {
      axiosController.abort();
    }
  }, [])
  

  const [discountInputGold, setDiscountInputGold] = useState("");
  const [discountInputBronze, setDiscountInputBronze] = useState("");
  const [discountInputSilver, setDiscountInputSilver] = useState("");
  const [discountInputDiamond, setDiscountInputDiamond] = useState("");

  const [lastSelectedDiscountInput, setLastSelectedDiscountInput] = useState("");

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

  const [packageBronzePrice, setPackageBronzePrice] = useState(0);
  const [packageSilverPrice, setPackageSilverPrice] = useState(0);
  const [packageGoldPrice, setPackageGoldPrice] = useState(0);
  const [packageDiamondPrice, setPackageDiamondPrice] = useState(0);

  useEffect(() => {
    if (allPackageData.length != 0) {
      var innerPrice = allPackageData[plan.planIndex]
      if (plan.planIndex > 1 & plan.planIndex <= 5) {
        if (innerPrice != packageBronzePrice) {
          setPackageBronzePrice(innerPrice)
        }
      } else if (plan.planIndex > 5 & plan.planIndex <= 9) {
        if (innerPrice != packageSilverPrice) {
          setPackageSilverPrice(innerPrice)
        }
      } else if (plan.planIndex > 9 & plan.planIndex <= 13) {
        if (innerPrice != packageGoldPrice) {
          setPackageGoldPrice(innerPrice)
        }
      } else if (plan.planIndex > 13 & plan.planIndex <= 17) {
        if (innerPrice != packageDiamondPrice) {
          setPackageDiamondPrice(innerPrice)
        }
      }
    }

  }, [plan])

  return (
    <div className='plan_cards_container'>
      {allPackageData.length > 0 ?
        <>
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
                tagStatusName={"bronze"}
                price={packageBronzePrice != 0 ? packageBronzePrice : allPackageData[2]}
                planSelected={plan}
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
                // disable={discount != "" ? true : false}
                errorTextId={lastSelectedDiscountInput == "bronze" ? "discount" : ""}
              />
              <button disabled={!canRequest} className={`apply_token_ico ${discountInputBronze != "" ? "inline-block" : "hidden"}`} onClick={() => dispatch(applyDiscountAction(discountInputBronze, "bronze"))}></button>
            </div>
          </div>
          <div className='silver plan_card mx-1'>
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
                tagStatusName={"silver"}
                price={packageSilverPrice != 0 ? packageSilverPrice : allPackageData[6]}
                planSelected={plan}
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
                errorTextId={lastSelectedDiscountInput == "silver" ? "discount" : ""}
              />
              <button disabled={!canRequest} className={`apply_token_ico ${discountInputSilver != "" ? "inline-block" : "hidden"}`} onClick={() => dispatch(applyDiscountAction(discountInputSilver, "silver"))}></button>
            </div>
          </div>
          <div className='gold plan_card ml-1'>
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
                tagStatusName={"gold"}
                price={packageGoldPrice != 0 ? packageGoldPrice : allPackageData[10]}
                planSelected={plan}
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
                errorTextId={lastSelectedDiscountInput == "gold" ? "discount" : ""}
              />
              <button disabled={!canRequest} className={`apply_token_ico ${discountInputGold != "" ? "inline-block" : "hidden"}`} onClick={() => dispatch(applyDiscountAction(discountInputGold, "gold"))}></button>
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
                tagStatusName={"diamond"}
                price={packageDiamondPrice != 0 ? packageDiamondPrice : allPackageData[14]}
                planSelected={plan}
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
                errorTextId={lastSelectedDiscountInput == "diamond" ? "discount" : ""}
              />
              <button disabled={!canRequest} className={`apply_token_ico ${discountInputDiamond != "" ? "inline-block" : "hidden"}`} onClick={() => dispatch(applyDiscountAction(discountInputDiamond, "diamond"))}></button>
            </div>
          </div>
        </>
        : (
          <>
              <Skeleton width={"230px"} height={"400px"}/>
              <Skeleton width={"230px"} height={"400px"}/>
              <Skeleton width={"230px"} height={"400px"}/>
              <Skeleton width={"230px"} height={"400px"}/>
          </>
        )}

    </div>
  )
}
