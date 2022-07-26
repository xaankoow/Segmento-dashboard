import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllPlanData } from '../../Redux/Action/plan';

export default function BuyPlan(setPlan) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllPlanData());
    }, [])
    debugger
    
  const { discount,discountStatus,allPackageData } = useSelector(state => state.planState);
    // console.log("allPackageData")
    return (
        <body className='plans_body_container p-5'>
            <p className='text_information'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته است .
            </p>
            <div className='plan_cards_container'>
                <div className='bronze plan_card'>
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
                            errorTextId={lastSelectedDiscountInput == "bronze" ? "discount" : ""}
                        // isPassword={true}
                        // reduxHandleChange={setPasswordConfirmRedux}
                        />
                        <span className={`apply_token_ico ${discountInputBronze != "" && discount == "" ? "inline-block" : "hidden"}`} onClick={() => dispatch(applyDiscountAction(discountInputBronze))}></span>
                    </div>
                </div>
                <div className='silver plan_card'>
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
                            errorTextId={lastSelectedDiscountInput == "silver" ? "discount" : ""}
                        // isPassword={true}
                        // reduxHandleChange={setPasswordConfirmRedux}
                        />
                        <span className={`apply_token_ico ${discountInputSilver != "" && discount == "" ? "inline-block" : "hidden"}`} onClick={() => dispatch(applyDiscountAction(discountInputSilver))}></span>
                    </div>
                </div>
                <div className='gold plan_card'>
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
                            errorTextId={lastSelectedDiscountInput == "gold" ? "discount" : ""}
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
                            errorTextId={lastSelectedDiscountInput == "diamond" ? "discount" : ""}
                        // isPassword={true}
                        // reduxHandleChange={setPasswordConfirmRedux}
                        />
                        <span className={`apply_token_ico ${discountInputDiamond != "" && discount == "" ? "inline-block" : "hidden"}`} onClick={() => dispatch(applyDiscountAction(discountInputDiamond))}></span>
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
