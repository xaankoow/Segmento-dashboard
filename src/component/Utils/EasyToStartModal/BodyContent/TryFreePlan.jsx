import React, { Fragment, useState } from 'react'
import AuthButton from '../../../Auth/authButton/AuthButton'
import PopUp from '../../PopUp/PopUp'

export default function TryFreePlan({ setLockNextStep, lockNextStep, setStepModal }) {
  const [showPopUp, setShowPopUp] = useState(true);
  return (
    <div className='plan_list_option'>
      <div className='plan_card_list_option'>
        <div className='title'>استفاده 14 روز رایگان از تمامی امکانات سگمنتو</div>
        <div className='list_option'>
          <div><p><span></span>نمونه نوشته</p> </div>
          <hr />
          <div><p><span></span>نمونه نوشته</p> </div>
          <hr />
          <div><p><span></span>نمونه نوشته</p> </div>
          <hr />
          <div><p><span></span>نمونه نوشته</p> </div>
          <hr />
          <div><p><span></span>نمونه نوشته</p> </div>
          <hr />
          <div><p><span></span>نمونه نوشته</p> </div>
          <hr />
          <div><p><span></span>نمونه نوشته</p> </div>
        </div>
      </div>
      <div className='btn_read_policy_container'>
        <div>
          <p><input type="checkbox" name="" id="" checked={lockNextStep} onChange={(e) => setLockNextStep(e.target.checked)} />قوانین و مقررات استفاده از سگمنتو رو مطالعه کردم . </p>
          <AuthButton textButton={"خرید اشتراک"} handlerClick={setStepModal} setOnclickValue={1} />
        </div>
      </div>
      {showPopUp & lockNextStep ? (
        <PopUp
          clickHandler={() => setShowPopUp(false)}
          image={"/img/popUp/err_!.svg"}
          type={"error"}
          buttonText={"	باشه قبوله!"}
          text={"کاربر گرامی توجه داشته باشید، اگر در پایان 14 روز اشتراک تهیه نکنید، اطلاعات آماری حساب‌تان حذف می‌شود."}
          title={"توجه !"}
          tryFreePlan={true}
          tryFreePlanClick={setStepModal}
        />
      ) : null}
    </div>
  )
}
