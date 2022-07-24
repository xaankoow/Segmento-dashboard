import React, { Fragment, useEffect, useState } from "react";
import Modal from "react-modal";
import AuthInput from "../Auth/authInput/AuthInput";
import AuthButton from "../Auth/authButton/AuthButton";
import { Directions } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
  applyDiscountAction,
  buyPlan,
  setCharKey1,
  setCharKey2,
  setCommercialPage1,
  setCommercialPage2,
  setPackageUuid,
  setSite1,
  setSite2,
  setWebAdress,
} from "../Redux/Action/plan";
import StaticInputText from "./staticInputText/textInput";
import { getPlanDetails } from "../service/planService";

export default function HandleModal({ handleClose, checkClose, show }) {
  var planReportDetails = {};

  const [stepModal, setStepModal] = useState(1);
  // const [, setDiscount] = useState("sample-code");
  const [plan, setPlan] = useState("");
  const [free, setFree] = useState(false);

  // const [free, setFree] = useState(false);

  // debugger
  // const [showModal, setShowModal] = useState(true);
  const [discountInputGold, setDiscountInputGold] = useState("");
  const [discountInputBronze, setDiscountInputBronze] = useState("");
  const [discountInputSilver, setDiscountInputSilver] = useState("");
  const [discountInputDiamond, setDiscountInputDiamond] = useState("");
  const [lastSelectedDiscountInput, setLastSelectedDiscountInput] =
    useState("");
  // var lastSelectedDiscountInput="";

  const {
    webAdress,
    charKey1,
    charKey2,
    site1,
    site2,
    commercialPage1,
    commercialPage2,
    planChosen,
    discount,
    forceUpdate,
    packageUuid,
  } = useSelector((state) => state.planState);

  const dispatch = useDispatch();

  const handleShowArrowDiscount = (text, arrowTarget) => {
    // debugger
    if (discountInputGold != "" && arrowTarget != "gold") {
      setDiscountInputGold("");
    }
    if (discountInputBronze != "" && arrowTarget != "bronze") {
      setDiscountInputBronze("");
    }
    if (discountInputSilver != "" && arrowTarget != "silver") {
      setDiscountInputSilver("");
    }
    if (discountInputDiamond != "" && arrowTarget != "diamond") {
      setDiscountInputDiamond("");
    }
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
  };
  // handleShowArrowDiscount();
  const customStyles = {
    content: {
      top: "43vh",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgrounColor: "red",
      "z-index": "100",
    },
  };
  // debugger
  const handleShowReportModal = async () => {
    const { data } = await getPlanDetails(packageUuid);
  };

  const handleShowTitleModal = () => {
    switch (stepModal) {
      case 1:
        return "افزودن سایت";
      case 2:
        return "افزودن کلمات کلیدی و صفحات هدف:  ";
      case 3:
        return "افزودن صفحات تجاری";
      case 4:
        return "صفحه انتخاب اشتراک: ";
      case 5:
        if (free) {
          return "14 روز اشتراک رایگان";
        }
        return "خرید اشتراک";
      case 6:
        return "تبریک به شما";

      default:
        break;
    }
  };

  const handleShowBodyContentModal = () => {
    switch (stepModal) {
      case 1:
        return (
          <>
            وب‌سایت شما ورک‌اسپیس شماست و در ادامه، داده‌ها در ورک‌اسپیس فعلی
            نسبت به آدرس وبسایت شما تعریف می‌شوند. پس فقط آدرس وب‌سایت‌تان را
            بنویسید.{" "}
          </>
        );
      case 2:
        return (
          <>
            برای حفظ کیفیت گزارش رتبه کلمات کلیدی باید صفحات هدف تعریف کنید.
            صفحات هدف، همان صفحات داخلی ورک‌اسپیس فعلی هستند که می‌خواهید برای
            کلمات کلیدی هدف، رتبه کسب کنند. <br></br> • اگر صفحه هدف تعریف
            نکنید، صفحه اصلی وب‌سایت برای گزارش رتبه کلمات کلیدی رهگیری می‌شود.
          </>
        );
      case 3:
        return (
          <>
            صفحات تجاری احتمالا مهم‌ترین صفحات وب‌سایت شما هستند که بخش زیادی از
            درآمد وب‌سایت را تولید می‌کنند. با درج آدرس‌شان در کادر زیر، گزارش
            این صفحات منتخب را دریافت می‌کنید، قابلیتی که تنها در سگمنتو تجربه
            خواهید کرد.
          </>
        );
      case 4:
        return (
          <>
            سگمنتو با ارائه بیش از 20 ابزار تخصصی سئو و تولیدمحتوا، منتخب شما و
            1500 کسب‌و‌کار بزرگ دیگر است. با تهیه اشتراک و دسترسی به این
            ابزارهای قدرتمند، رشدی که شایسته آن هستید را تجربه کنید.
          </>
        );
      case 5:
        if (free) {
          return "14 روز رایگان";
        }
        return "خرید اشتراک";
      case 6:
        return "خوش آمدید به سگمنتو";

      default:
        break;
    }
  };
  const handleShowContentModal = () => {
    return (
      <Fragment>
        <p className="text_information">{handleShowBodyContentModal()}</p>
        <div className="main_contnt_modal flex flex-col justify-center">
          <div>
            <div className="ul_text_container">
              <ul className="">
                {/* <li className=" py-4 px-5">نمونه متن</li>
                <li className=" py-4 px-5">نمونه متن</li> */}
              </ul>
              <ul className="mr-[117px]">
                {/* <li className=" py-4 px-5">نمونه متن</li>
                <li className=" py-4 px-5">نمونه متن</li> */}
              </ul>
            </div>
          </div>
          <img src="/img/modal/body/siteDesignMan.svg" alt="" />
        </div>
        {stepModal == 1 ? (
          <Fragment>
            {/* // <div className=''> */}

            {/* <div className='grow'>
  
              <AuthInput  wrapperClass={"w-full"} width={"100%"} textLabelInput="ایمیل"  typeInput="email" reduxHandleChange={setWebAdress} value={webAdress}/>
              </div>
              <AuthInput width={"8ch"} classes={"pr-0"}  typeInput="email" reduxHandleChange={setWebAdress} value={"https://"}/> */}
            {/* // </div> */}

            <StaticInputText
              typeInput={"text"}
              width={"100%"}
              textLabelInput={"آدرس وبسایت شما"}
              reduxHandleChange={setWebAdress}
              staticText={"https:// "}
              placeholder={"example.com"}
            />
            {/* <AuthInput textLabelInput="کلمات کلیدی" width={"100%"} typeInput="email" reduxHandleChange={setCharKey1} value={charKey1}/> */}
          </Fragment>
        ) : stepModal == 2 ? (
          <Fragment>
            <div className="container_input_step2">
              <AuthInput
                textLabelInput="کلمات کلیدی"
                width={"100%"}
                typeInput="text"
                reduxHandleChange={setCharKey1}
                value={charKey1}
              />
              {/* <div className='arrow'></div> */}
              <img src="/img/modal/body/arrow.svg" className="arrpw" alt="" />
              <StaticInputText
                typeInput={"text"}
                width={"100%"}
                textLabelInput={"صفحه هدف"}
                staticText={webAdress}
                reduxHandleChange={setSite1}
                placeholder={"page1"}
              />
              {/* <AuthInput textLabelInput="سایت مرتبط" width={"100%"} typeInput="email" reduxHandleChange={setSite1} value={site1}/> */}
            </div>
            <div className="container_input_step2">
              <AuthInput
                textLabelInput="کلمات کلیدی"
                width={"100%"}
                typeInput="text"
                reduxHandleChange={setCharKey2}
                value={charKey2}
              />
              {/* <div className='arrow'></div> */}
              <img src="/img/modal/body/arrow.svg" className="arrpw" alt="" />
              <StaticInputText
                typeInput={"text"}
                width={"100%"}
                textLabelInput={"صفحه هدف"}
                staticText={webAdress}
                reduxHandleChange={setSite2}
                placeholder={"page2"}
              />
              {/* <AuthInput textLabelInput="صفحه هدف" width={"100%"} typeInput="email" reduxHandleChange={setSite2} value={site2}/> */}
            </div>
          </Fragment>
        ) : stepModal == 3 ? (
          <div className="container_input_step3">
            <StaticInputText
              typeInput={"text"}
              width={"100%"}
              textLabelInput={"صفحه تجاری"}
              staticText={webAdress + site1 + "/"}
              placeholder={"test"}
              reduxHandleChange={setCommercialPage1}
              value={commercialPage1}
            />
            <StaticInputText
              typeInput={"text"}
              width={"100%"}
              textLabelInput={"صفحه تجاری"}
              staticText={webAdress + site2 + "/"}
              placeholder={"test"}
              reduxHandleChange={setCommercialPage2}
              value={commercialPage2}
            />
            {/* <AuthInput textLabelInput="صفحه تجاری" width={"100%"} typeInput="text" reduxHandleChange={setCommercialPage1} value={commercialPage1}/> */}
            {/* <AuthInput textLabelInput="صفحه تجاری" width={"100%"} typeInput="text" reduxHandleChange={setCommercialPage2} value={commercialPage2}/> */}
          </div>
        ) : null}
      </Fragment>
    );
  };

  // console.log(discount);
  useEffect(() => {
    const containerRow = document.querySelectorAll(".container_row");
    if (containerRow.length != 0) {
      for (let i = 0; i < containerRow.length; i++) {
        if (containerRow[i].classList.contains("style_selected_plan")) {
          containerRow[i].classList.remove("style_selected_plan");
        }
      }
      switch (plan) {
        case "bronze_1":
          containerRow[0].classList.add("style_selected_plan");
          break;
        case "bronze_3":
          containerRow[1].classList.add("style_selected_plan");
          break;
        case "bronze_6":
          containerRow[2].classList.add("style_selected_plan");
          break;
        case "bronze_12":
          containerRow[3].classList.add("style_selected_plan");
          break;

        default:
          break;
      }
      // debugger
    }
  }, [plan]);

  const handleShowPlans = () => {
    return (
      <Fragment>
        <p className="text_information mb-7">
          سگمنتو با ارائه بیش از 20 ابزار تخصصی سئو و تولیدمحتوا، منتخب شما و
          1500 کسب‌و‌کار بزرگ دیگر است. با تهیه اشتراک و دسترسی به این ابزارهای
          قدرتمند، رشدی که شایسته آن هستید را تجربه کنید.
        </p>
        <div className="plan_cards_container">
          <div className="bronze plan_card">
            <span className="title">برنزی</span>
            <hr />
            <div className="plan">
              <div
                className="container_row"
                onClick={() => {
                  setPlan("bronze_1");
                  dispatch(
                    setPackageUuid("eb2f7f18-5f0d-47fc-8610-99a71c869006")
                  );
                }}
              >
                <div>
                  <input
                    type="radio"
                    name="radio"
                    id=""
                    checked={plan == "bronze_1" ? true : false}
                  />
                  <p> 1 ماهه</p>
                </div>
              </div>
              <div
                className="container_row"
                onClick={() => {
                  setPlan("bronze_3");
                  dispatch(
                    setPackageUuid("45f370a6-b554-43ab-b757-39eb85175111")
                  );
                }}
              >
                <div>
                  <input
                    type="radio"
                    name="radio"
                    id=""
                    checked={plan == "bronze_3" ? true : false}
                  />
                  <p> 3 ماهه</p>
                </div>
                <span className="off_price">15 درصد تخفیف</span>
              </div>
              <div
                className="container_row"
                onClick={() => {
                  setPlan("bronze_6");
                  dispatch(
                    setPackageUuid("31c4c8be-f830-4d72-8288-d9a3e1549aa8")
                  );
                }}
              >
                <div>
                  <input
                    type="radio"
                    name="radio"
                    id=""
                    checked={plan == "bronze_6" ? true : false}
                  />
                  <p> 6 ماهه</p>
                </div>
                <span className="off_price">فقط پرداخت 5 ماه</span>
              </div>
              <div
                className="container_row"
                onClick={() => {
                  setPlan("bronze_12");
                  dispatch(
                    setPackageUuid("f9aae937-5278-47e0-85cc-84358c992923")
                  );
                }}
              >
                <div>
                  <input
                    type="radio"
                    name="radio"
                    id=""
                    checked={plan == "bronze_12" ? true : false}
                  />
                  <p> 12 ماهه</p>
                </div>
                <span className="off_price">فقط پرداخت 10 ماه</span>
              </div>
            </div>
            <div className="price">
              <p
                style={
                  plan.substring(0, 1) == "b"
                    ? { color: "rgba(10, 101, 205, 1)" }
                    : null
                }
              >
                79 هزار تومان ماهانه
              </p>
            </div>
            <div className="input_apply_token_container">
              <AuthInput
                textLabelInput=" کد تخفیف  "
                width={"100%"}
                typeInput="text"
                direction={"rtl"}
                handleArrowPlan={handleShowArrowDiscount}
                targePlanArrow={"bronze"}
                disabled={discount != "" ? true : false}
                errorTextId={
                  lastSelectedDiscountInput == "bronze" ? "discount" : ""
                }
                // isPassword={true}
                // reduxHandleChange={setPasswordConfirmRedux}
              />
              <span
                className={`apply_token_ico ${
                  discountInputBronze != "" && discount == ""
                    ? "inline-block"
                    : "hidden"
                }`}
                onClick={() =>
                  dispatch(applyDiscountAction(discountInputBronze))
                }
              ></span>
            </div>
          </div>
          <div className="silver plan_card">
            <span className="title">نقره ای</span>
            <hr />
            <div className="plan">
              <div
                className="container_row"
                onClick={() => {
                  setPlan("silver_1");
                  dispatch(
                    setPackageUuid("eb2f7f18-5f0d-47fc-8610-99a71c869006")
                  );
                }}
              >
                <div>
                  <input
                    type="radio"
                    name="radio"
                    id=""
                    checked={plan == "silver_1" ? true : false}
                  />
                  <p> 1 ماهه</p>
                </div>
              </div>
              <div
                className="container_row"
                onClick={() => {
                  setPlan("silver_3");
                  dispatch(
                    setPackageUuid("45f370a6-b554-43ab-b757-39eb85175111")
                  );
                }}
              >
                <div>
                  <input
                    type="radio"
                    name="radio"
                    id=""
                    checked={plan == "silver_3" ? true : false}
                  />
                  <p> 3 ماهه</p>
                </div>
                <span className="off_price">15 درصد تخفیف</span>
              </div>
              <div
                className="container_row"
                onClick={() => {
                  setPlan("silver_6");
                  dispatch(
                    setPackageUuid("31c4c8be-f830-4d72-8288-d9a3e1549aa8")
                  );
                }}
              >
                <div>
                  <input
                    type="radio"
                    name="radio"
                    id=""
                    checked={plan == "silver_6" ? true : false}
                  />
                  <p> 6 ماهه</p>
                </div>
                <span className="off_price">فقط پرداخت 5 ماه</span>
              </div>
              <div
                className="container_row"
                onClick={() => {
                  setPlan("silver_12");
                  dispatch(
                    setPackageUuid("f9aae937-5278-47e0-85cc-84358c992923")
                  );
                }}
              >
                <div>
                  <input
                    type="radio"
                    name="radio"
                    id=""
                    checked={plan == "silver_12" ? true : false}
                  />
                  <p> 12 ماهه</p>
                </div>
                <span className="off_price">فقط پرداخت 10 ماه</span>
              </div>
            </div>
            <div className="price">
              <p
                style={
                  plan.substring(0, 1) == "s"
                    ? { color: "rgba(10, 101, 205, 1)" }
                    : null
                }
              >
                189 هزار تومان ماهانه
              </p>
            </div>
            <div className="input_apply_token_container">
              <AuthInput
                textLabelInput=" کد تخفیف  "
                width={"100%"}
                typeInput="text"
                direction={"rtl"}
                handleArrowPlan={handleShowArrowDiscount}
                targePlanArrow={"silver"}
                disabled={discount != "" ? true : false}
                errorTextId={
                  lastSelectedDiscountInput == "silver" ? "discount" : ""
                }
                // isPassword={true}
                // reduxHandleChange={setPasswordConfirmRedux}
              />
              <span
                className={`apply_token_ico ${
                  discountInputSilver != "" && discount == ""
                    ? "inline-block"
                    : "hidden"
                }`}
                onClick={() =>
                  dispatch(applyDiscountAction(discountInputSilver))
                }
              ></span>
            </div>
          </div>
          <div className="gold plan_card">
            <span className="title">طلایی</span>
            <hr />
            <div className="plan">
              <div
                className="container_row"
                onClick={() => {
                  setPlan("gold_1");
                  dispatch(
                    setPackageUuid("eb2f7f18-5f0d-47fc-8610-99a71c869006")
                  );
                }}
              >
                <div>
                  <input
                    type="radio"
                    name="radio"
                    id=""
                    checked={plan == "gold_1" ? true : false}
                  />
                  <p> 1 ماهه</p>
                </div>
              </div>
              <div
                className="container_row"
                onClick={() => {
                  setPlan("gold_3");
                  dispatch(
                    setPackageUuid("45f370a6-b554-43ab-b757-39eb85175111")
                  );
                }}
              >
                <div>
                  <input
                    type="radio"
                    name="radio"
                    id=""
                    checked={plan == "gold_3" ? true : false}
                  />
                  <p> 3 ماهه</p>
                </div>
                <span className="off_price">15 درصد تخفیف</span>
              </div>
              <div
                className="container_row"
                onClick={() => {
                  setPlan("gold_6");
                  dispatch(
                    setPackageUuid("31c4c8be-f830-4d72-8288-d9a3e1549aa8")
                  );
                }}
              >
                <div>
                  <input
                    type="radio"
                    name="radio"
                    id=""
                    checked={plan == "gold_6" ? true : false}
                  />
                  <p> 6 ماهه</p>
                </div>
                <span className="off_price">فقط پرداخت 5 ماه</span>
              </div>
              <div
                className="container_row"
                onClick={() => {
                  setPlan("gold_12");
                  dispatch(
                    setPackageUuid("f9aae937-5278-47e0-85cc-84358c992923")
                  );
                }}
              >
                <div>
                  <input
                    type="radio"
                    name="radio"
                    id=""
                    checked={plan == "gold_12" ? true : false}
                  />
                  <p> 12 ماهه</p>
                </div>
                <span className="off_price">فقط پرداخت 10 ماه</span>
              </div>
            </div>
            <div className="price">
              <p
                style={
                  plan.substring(0, 1) == "g"
                    ? { color: "rgba(10, 101, 205, 1)" }
                    : null
                }
              >
                249 هزار تومان ماهانه
              </p>
            </div>
            <div className="input_apply_token_container">
              <AuthInput
                textLabelInput=" کد تخفیف  "
                width={"100%"}
                typeInput="text"
                direction={"rtl"}
                handleArrowPlan={handleShowArrowDiscount}
                targePlanArrow={"gold"}
                disabled={discount != "" ? true : false}
                errorTextId={
                  lastSelectedDiscountInput == "gold" ? "discount" : ""
                }
                // isPassword={true}
                // reduxHandleChange={setPasswordConfirmRedux}
              />
              <span
                className={`apply_token_ico ${
                  discountInputGold != "" && discount == ""
                    ? "inline-block"
                    : "hidden"
                }`}
                onClick={() => dispatch(applyDiscountAction(discountInputGold))}
              ></span>
            </div>
          </div>
          <div className="diamond plan_card">
            <span className="title">الماسی</span>
            <hr />
            <div className="plan">
              <div
                className="container_row"
                onClick={() => {
                  setPlan("diamond_1");
                  dispatch(
                    setPackageUuid("eb2f7f18-5f0d-47fc-8610-99a71c869006")
                  );
                }}
              >
                <div>
                  <input
                    type="radio"
                    name="radio"
                    id=""
                    checked={plan == "diamond_1" ? true : false}
                  />
                  <p> 1 ماهه</p>
                </div>
              </div>
              <div
                className="container_row"
                onClick={() => {
                  setPlan("diamond_3");
                  dispatch(
                    setPackageUuid("45f370a6-b554-43ab-b757-39eb85175111")
                  );
                }}
              >
                <div>
                  <input
                    type="radio"
                    name="radio"
                    id=""
                    checked={plan == "diamond_3" ? true : false}
                  />
                  <p> 3 ماهه</p>
                </div>
                <span className="off_price">15 درصد تخفیف</span>
              </div>
              <div
                className="container_row"
                onClick={() => {
                  setPlan("diamond_6");
                  dispatch(
                    setPackageUuid("31c4c8be-f830-4d72-8288-d9a3e1549aa8")
                  );
                }}
              >
                <div>
                  <input
                    type="radio"
                    name="radio"
                    id=""
                    checked={plan == "diamond_6" ? true : false}
                  />
                  <p> 6 ماهه</p>
                </div>
                <span className="off_price">فقط پرداخت 5 ماه</span>
              </div>
              <div
                className="container_row"
                onClick={() => {
                  setPlan("diamond_12");
                  dispatch(
                    setPackageUuid("f9aae937-5278-47e0-85cc-84358c992923")
                  );
                }}
              >
                <div>
                  <input
                    type="radio"
                    name="radio"
                    id=""
                    checked={plan == "diamond_12" ? true : false}
                  />
                  <p> 12 ماهه</p>
                </div>
                <span className="off_price">فقط پرداخت 10 ماه</span>
              </div>
            </div>
            <div className="price">
              <p
                style={
                  plan.substring(0, 1) == "d"
                    ? { color: "rgba(10, 101, 205, 1)" }
                    : null
                }
              >
                249 هزار تومان ماهانه
              </p>
            </div>
            <div className="input_apply_token_container">
              <AuthInput
                textLabelInput=" کد تخفیف  "
                width={"100%"}
                typeInput="text"
                direction={"rtl"}
                handleArrowPlan={handleShowArrowDiscount}
                targePlanArrow={"diamond"}
                disabled={discount != "" ? true : false}
                errorTextId={
                  lastSelectedDiscountInput == "diamond" ? "discount" : ""
                }
                // isPassword={true}
                // reduxHandleChange={setPasswordConfirmRedux}
              />
              <span
                className={`apply_token_ico ${
                  discountInputDiamond != "" && discount == ""
                    ? "inline-block"
                    : "hidden"
                }`}
                onClick={() =>
                  dispatch(applyDiscountAction(discountInputDiamond))
                }
              ></span>
            </div>
          </div>
        </div>
        <div className='container_plan_message mt-5 border rounded-lg'>
          <img src="/img/modal/footer/planInfoMessage.svg" className='inline-block mr-3' alt="" />
          <span className='py-2.5 mr-3 inline-block text-sm '>با خرید اشتراک 12 ماهه طلایی شما فقط مبلغ 10 ماه رو پرداخت میکنید؛ 2 ماه مهمون سگمنتو باشین</span>
        </div>
      </Fragment>
    );
  };
  const handleShowBuyPlan = () => {
    return (
      <Fragment>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته است .{" "}
        </p>
        <div className="report mt-16">
          <div className="title">
            <span>اشتراک:</span>
            <span>طلایی </span>
          </div>
          <div className="date">
            <span>مدت اشتراک:</span>
            <span>3 ماهه </span>
          </div>
          <div className="plan_price">
            <span>قیمت اشتراک:</span>
            <span>747 هزار تومان </span>
          </div>
          <div className="discount">
            <span>تخفیف سگمنتو:</span>
            <span>15 درصد </span>
          </div>
          <div className="price_discount">
            <span>مقدار تخفیف:</span>
            <span>35 هزار تومان </span>
          </div>
          <div className="final_price">
            <span>قیمت نهایی و پرداخت</span>
            <span>600 هزار تومان </span>
          </div>
        </div>
        <AuthButton textButton={"خرید اشتراک"} />
      </Fragment>
    );
  };
  const handleShowTryFreePlan = () => {
    return (
      <Fragment>
        <div className="header">
          <p>
          دوست داریم در این 14 روز، رشد را در کسب و کارتان تجربه کنید تا در آینده هم تنها انتخاب شما باشیم.
          </p>
        </div>
        <div className="plan_card_list_option">
          <div className="title">
            استفاده 14 روز رایگان از تمامی امکانات سگمنتو
          </div>
          <div className="list_option">
            <div>
              <p>
                <span></span>نمونه نوشته
              </p>{" "}
            </div>
            <hr />
            <div>
              <p>
                <span></span>نمونه نوشته
              </p>{" "}
            </div>
            <hr />
            <div>
              <p>
                <span></span>نمونه نوشته
              </p>{" "}
            </div>
            <hr />
            <div>
              <p>
                <span></span>نمونه نوشته
              </p>{" "}
            </div>
            <hr />
            <div>
              <p>
                <span></span>نمونه نوشته
              </p>{" "}
            </div>
            <hr />
            <div>
              <p>
                <span></span>نمونه نوشته
              </p>{" "}
            </div>
            <hr />
            <div>
              <p>
                <span></span>نمونه نوشته
              </p>{" "}
            </div>
          </div>
        </div>
        <div className="btn_read_policy_container">
          <div>
            <p>
              <input type="checkbox" name="" id="" />
              شرایط استفاده از سگمنتو را مطالعه کردم و با آن موافقم.
            </p>
            <AuthButton textButton={"فعال سازی"} />
          </div>
        </div>
      </Fragment>
    );
  };
  const handleShowReport = (planType) => {
    return (
      <Fragment>
        <div className="popup">
          <div className="title_popup">اشتراک فعال سازی شده برای شما: </div>
          <div className="main_popup">{planType}</div>
        </div>
        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته است . </p>
        <div className='support_container'>
          <p>تا اینجای کار اگر نیاز به راهنمایی و مشاوره داشتی میتونی از این طریق باهامون تماس بگیری</p>
          <AuthButton textButton={"مشاوره و تماس"} />
          <img src="/img/modal/body/report.svg" alt="" />
        </div>
      </Fragment>
    );
  };

  // debugger
  return (
    <div className="buy_plan_modal">
      <Modal
        isOpen={true}
        parentSelector={() =>
          document.querySelector(".app #DASHBOARD .body .main")
        }
        // onAfterOpen={afterOpenModal}
        // onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        // className={"myModal"}
      >
        <div className=" w-[907px]">
          <header className="pr-5 pl-3.5">
            <div>
              <span>{handleShowTitleModal()}</span>
              <span className="info"></span>
            </div>
            <div className="close_suport_container">
              {stepModal == 4 || stepModal == 5 ? (
                <AuthButton
                  style={{ backgroundColor: "#0A65CD26", color: "#0A65CDB2" }}
                  textButton={"پشتیبانی"}
                />
              ) : null}
              {/* <div className='bg-orange-500 w-2 h-2'> */}
              <div
                className="close_modal_ico"
                onClick={() => handleClose()}
              ></div>
              {/* <div className='close_modal_ico' onClick={() => setShowModal(false)}></div> */}
              {/* </div> */}
            </div>
          </header>

          {stepModal < 4 ? (
            <body className=" p-5">{handleShowContentModal()}</body>
          ) : stepModal == 4 ? (
            <body className="plans_body_container p-5">
              {handleShowPlans()}
            </body>
          ) : stepModal == 5 && free == false ? (
            <body className="report_container mt-16 p-5">
              {handleShowBuyPlan()}
            </body>
          ) : stepModal == 6 && free == false ? (
            <body className="final_report_container p-5">
              {handleShowReport("اشتراک طلایی ، 3 ماهه")}
            </body>
          ) : stepModal == 5 && free == true ? (
            <body className="plan_list_option p-5">
              {handleShowTryFreePlan()}
            </body>
          ) : stepModal == 6 && free == true ? (
            <body className="final_report_container p-5">
              {handleShowReport("14 روز رایگان")}
            </body>
          ) : (
            ""
          )}
          <footer className=" px-[18px]">
            {stepModal != 1 ? (
              <span
                className="back_ico"
                onClick={() => setStepModal(stepModal - 1)}
              ></span>
            ) : (
              <div></div>
            )}
            {stepModal == 4 ? (
              <AuthButton
                handlerClick={() => {
                  setFree(false);
                }}
                reduxHandleClick={buyPlan}
                textButton={"خرید اشتراک"}
              />
            ) : (
              <button
                className="btn-style"
                onClick={() => setStepModal(stepModal + 1)}
              >
                گام بعدی <span className="forward-ico"></span>
              </button>
            )}
            {stepModal == 4 ? (
              <AuthButton
                handlerClick={() => {
                  setStepModal(stepModal + 1);
                  setFree(true);
                }}
                style={{ backgroundColor: "#0A65CD26", color: "#0A65CDB2" }}
                textButton={
                  <Fragment>
                    14 روز رایگان <span className="forward-14_free_ico"></span>
                  </Fragment>
                }
              />
            ) : null}
          </footer>
        </div>
      </Modal>
      {forceUpdate ? "" : ""}
    </div>
  );
}
