import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import AuthButton from '../../../Auth/authButton/AuthButton'
import Checkbox from '../../Elements/CheckBox/Checkbox';
import PopUp from '../../PopUp/PopUp'

export default function TryFreePlan({ setLockNextStep, lockNextStep, setStepModal }) {
  const [showPopUp, setShowPopUp] = useState(true);
  const handleCheckBoxClick=(e) => setLockNextStep(e.target.checked)
  return (
    <div className='plan_list_option bg-[#fff]'>
      <div className='plan_card_list_option'>
        <div className='title'>استفاده 14 روز رایگان از تمامی امکانات سگمنتو</div>
        <div className='list_option'>
          <div><p><span></span>افزودن سایت شخصی و سایت رقیب</p> </div>
          <hr />
          <div><p><span></span>شناسایی سایت در گوگل</p> </div>
          <hr />
          <div><p><span></span>ابزار تحقیق کلمه کلیدی</p> </div>
          <hr />
          <div><p><span></span>سازنده فایل ربات و Disavow</p> </div>
          <hr />
          <div><p><span></span>ایمیل روزانه وضعیت</p> </div>
          <hr />
          <div><p><span></span>لایت هاوس فارسی</p> </div>
          <hr />
          <div><a href='https://segmento.ir/pricing/' className=" inline-block w-full text-right text-sm text-[#0A65CD] underline py-3"><span></span>مشاهده تمامی امکانات سگمنتو</a> </div>
        </div>
      </div>
      <div className='btn_read_policy_container'>
        <div className=' w-[467px] flex justify-between text-center mx-auto my-3'>
          {/* <p><input type="checkbox" name="" id="" checked={lockNextStep} onChange={(e) => setLockNextStep(e.target.checked)} />قوانین و مقررات استفاده از سگمنتو رو مطالعه کردم . </p> */}
          {/* <div className=' relative shrink w-28'> */}
            <form className=' flex shrink w-28 grow'>

            
              
              <Checkbox  id="readPolicyEasyToStart"  checked={lockNextStep} handleClick={handleCheckBoxClick} label={"قوانین و مقررات استفاده از سگمنتو رو مطالعه کردم ."}/>

            </form>
          {/* </div> */}
          <AuthButton textButton={"خرید اشتراک"} handlerClick={setStepModal} setOnclickValue={1} />
        </div>
      </div>
      {showPopUp & lockNextStep ? (

        // <div className=' pt-6 pb-3'>
        <PopUp
          clickHandler={() => setShowPopUp(false)}
          image={"/img/popUp/errorIco.svg"}
          type={"error"}
          buttonText={"	باشه قبوله!"}
          text={"کاربر گرامی توجه داشته باشید، اگر در پایان 14 روز اشتراک تهیه نکنید، اطلاعات آماری حساب‌تان حذف می‌شود."}
          title={"توجه !"}
          tryFreePlan={true}
          tryFreePlanClick={setStepModal}
        />
        // </div>
      ) : null}
    </div>
  )
}
