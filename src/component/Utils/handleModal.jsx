import React, { Fragment, useEffect, useState } from 'react'
import Modal from 'react-modal'
import AuthInput from '../Auth/authInput/AuthInput'
import AuthButton from '../Auth/authButton/AuthButton'
import { Directions } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { applyDiscountAction } from '../Redux/Action/plan';
export default function HandleModal({ handleClose, checkClose, showModal, setShowModal }) {


  const [stepModal, setStepModal] = useState(1);
  const [discount ,setDiscount]=useState("sample-code");
  const [plan ,setPlan]=useState("");
  const [free, setFree] = useState(false);

  const dispatch=useDispatch();

  const customStyles = {
    content: {
      top: '43vh',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgrounColor: "red",
      'z-index': '100'
    },
  };


  const handleShowTitleModal = () => {
    switch (stepModal) {
      case 1:
        return "افزودن سایت";
      case 2:
        return "افزودن کلمات کلیدی";
      case 3:
        return "افزودن صفحات تجاری";
      case 4:
        return "انتخاب اشتراک";
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
  }


  const handleShowContentModal = () => {
    return (
      <Fragment>
        <p className='text_information'>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </p>
        <div className='main_contnt_modal'>
          <div>
            <div className='ul_text_container'>
              <ul className=''>
                <li>نمونه متن</li>
                <li>نمونه متن</li>
              </ul>
              <ul>
                <li>نمونه متن</li>
                <li>نمونه متن</li>
              </ul>
            </div>
          </div>
          <img src="./img/modal/body/siteDesignMan.svg" alt="" />
        </div>
        {stepModal == 1 ? (
          <AuthInput textLabelInput="ایمیل" width={"100%"} typeInput="email" />
        ) : stepModal == 2 ? (
          <Fragment>
            <div className='container_input_step2'>
              <AuthInput textLabelInput="کلمات کلیدی" width={"100%"} typeInput="email" />
              {/* <div className='arrow'></div> */}
              <img src="/img/modal/body/arrow.svg" className='arrpw' alt="" />
              <AuthInput textLabelInput="سایت مرتبط" width={"100%"} typeInput="email" />
            </div>
            <div className='container_input_step2'>
              <AuthInput textLabelInput="کلمات کلیدی" width={"100%"} typeInput="email" />
              {/* <div className='arrow'></div> */}
              <img src="/img/modal/body/arrow.svg" className='arrpw' alt="" />
              <AuthInput textLabelInput="سایت مرتبط" width={"100%"} typeInput="email" />
            </div>
          </Fragment>
        ) :
          stepModal == 3 ? (
            <div className='container_input_step3'>
              <AuthInput textLabelInput="صفحه تجاری" width={"100%"} typeInput="text" />
              <AuthInput textLabelInput="صفحه تجاری" width={"100%"} typeInput="text" />
            </div>
          ) : null}
      </Fragment>
    )
  }

  // console.log(discount);
  useEffect(() => {
    const containerRow = document.querySelectorAll(".container_row");
    if (containerRow.length !=0) {
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
  }, [plan])
  

  const handleShowPlans = () => {
    return (
      <Fragment>
        <p className='text_information'>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته است .
        </p>
        <div className='plan_cards_container'>
          <div className='bronze plan_card'>
            <span className='title'>برنزی</span>
            <hr />
            <div className='plan'>
              <div className='container_row' onClick={()=>{setPlan("bronze_1")}}>
                <div>
                  <input type="radio" name="radio" id="" checked={plan=="bronze_1"?true:false}/>
                  <p> 1 ماهه</p>
                </div>
              </div>
              <div className='container_row' onClick={()=>setPlan("bronze_3")}>
                <div>
                  <input type="radio" name="radio" id="" checked={plan=="bronze_3"?true:false}/>
                  <p> 3 ماهه</p>
                </div>
                <span className='off_price'>15 درصد تخفیف</span>
              </div>
              <div className='container_row' onClick={()=>setPlan("bronze_6")}>
                <div>
                  <input type="radio" name="radio" id="" checked={plan=="bronze_6"?true:false}/>
                  <p> 6 ماهه</p>
                </div>
                <span className='off_price'>فقط پرداخت 5 ماه</span>
              </div>
              <div className='container_row' onClick={()=>setPlan("bronze_12")}>
                <div>
                  <input type="radio" name="radio" id="" checked={plan=="bronze_12"?true:false}/>
                  <p> 12 ماهه</p>
                </div>
                <span className='off_price'>فقط پرداخت 10 ماه</span>
              </div>
            </div>
            <div className='price'>
              <p style={plan.substring(0,1)=="b"?{color:"rgba(10, 101, 205, 1)"}:null}>79 هزار تومان ماهانه</p>
            </div>
            <div className='input_apply_token_container'>
              <AuthInput
                textLabelInput=" کد تخفیف  "
                width={"100%"}
                typeInput="text"
                direction={"rtl"}
              // isPassword={true}
              // reduxHandleChange={setPasswordConfirmRedux}
              />
              <span className='apply_token_ico' onClick={()=>dispatch(applyDiscountAction(discount))}></span>
            </div>
          </div>
          {/* <div className='silver plan_card'>
            <span className='title'>نقره ای</span>
            <hr />
            <div className='plan'>
              <div>
                <p><span className='circle'></span>1 ماهه</p>
              </div>
              <div>
                <p><span className='circle'></span>3 ماهه</p>
                <span className='off_price'>15 درصد تخفیف</span>
              </div>
              <div>
                <p><span className='circle'></span>6 ماهه</p>
                <span className='off_price'>فقط پرداخت 5 ماه</span>
              </div>
              <div>
                <p><span className='circle'></span>12 ماهه</p>
                <span className='off_price'>فقط پرداخت 10 ماه</span>
              </div>
            </div>
            <div className='price'>
              <p>189 هزار تومان ماهانه</p>
            </div>
            <AuthInput
              textLabelInput=" کد تخفیف  "
              width={"100%"}
              typeInput="text"
              direction={"rtl"}
            // isPassword={true}
            // reduxHandleChange={setPasswordConfirmRedux}
            />
          </div>
          <div className='gold plan_card'>
            <span className='title'>برنزی</span>
            <hr />
            <div className='plan'>
              <div>
                <p><span className='circle'></span>1 ماهه</p>
              </div>
              <div>
                <p><span className='circle'></span>3 ماهه</p>
                <span className='off_price'>15 درصد تخفیف</span>
              </div>
              <div>
                <p><span className='circle'></span>6 ماهه</p>
                <span className='off_price'>فقط پرداخت 5 ماه</span>
              </div>
              <div>
                <p><span className='circle'></span>12 ماهه</p>
                <span className='off_price'>فقط پرداخت 10 ماه</span>
              </div>
            </div>
            <div className='price'>
              <p>249 هزار تومان ماهانه</p>
            </div>
            <AuthInput
              textLabelInput=" کد تخفیف  "
              width={"100%"}
              typeInput="text"
              direction={"rtl"}
            // isPassword={true}
            // reduxHandleChange={setPasswordConfirmRedux}
            />
          </div> */}

        </div>
      </Fragment>
    )
  }
  const handleShowTryFreePlan = () => {
    return (
      <Fragment>
        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته است . </p>
        <div className='report'>
          <div className='title'><span>اشتراک:</span><span>طلایی </span></div>
          <div className='date'><span>مدت اشتراک:</span><span>3 ماهه </span></div>
          <div className='plan_price'><span>قیمت اشتراک:</span><span>747 هزار تومان </span></div>
          <div  className="discount"><span>تخفیف سگمنتو:</span><span>15 درصد </span></div>
          <div className='price_discount'><span>مقدار تخفیف:</span><span>35 هزار تومان </span></div>
          <div className='final_price'><span>قیمت نهایی و پرداخت</span><span>600 هزار تومان </span></div>
        </div>
        <AuthButton textButton={"خرید اشتراک"} />
      </Fragment>
    )
  }


  return (
    <div className='modal'>
      <Modal
        isOpen={true}
        parentSelector={() => document.querySelector(".app #DASHBOARD .body .main")}
        // onAfterOpen={afterOpenModal}
        // onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      // className={"myModal"}
      >
        <header>
          <div>
            <span>{handleShowTitleModal()}</span>
            <span className='info'></span>
          </div>
          <div className='close_suport_container'>
            {stepModal == 4 || stepModal == 5 ? <AuthButton style={{ backgroundColor: "#0A65CD26", color: "#0A65CDB2" }} textButton={"پشتیبانی"} /> : null}

            <div className='close_modal_ico' onClick={() => setShowModal(false)}></div>
          </div>
        </header>
        {stepModal < 4 ? (

          <body>
            {handleShowContentModal()}
          </body>
        ) : stepModal == 4 ? (
          <body className='plans_body_container'>
            {handleShowPlans()}
          </body>

        ) : stepModal == 5 && free == false ? (
          <body className=' report_container'>

            {handleShowTryFreePlan()}
          </body>
        ) : null}
        <footer>
          {stepModal != 0 ? <span className='back_ico' onClick={() => setStepModal(stepModal - 1)}></span> : null}

          <button className='btn-style' onClick={() => setStepModal(stepModal + 1)}>گام بعدی <span className='forward-ico'></span></button>
          {stepModal == 4 ? (<AuthButton handlerClick={() => { setStepModal(stepModal + 1); setFree(true) }} style={{ backgroundColor: "#0A65CD26", color: "#0A65CDB2" }} textButton={<Fragment>14 روز رایگان <span className='forward-14_free_ico'></span></Fragment>} />) : null}
        </footer>
      </Modal>
    </div>
  )
}

