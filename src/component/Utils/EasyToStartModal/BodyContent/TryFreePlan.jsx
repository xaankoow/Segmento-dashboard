import React,{Fragment} from 'react'
import AuthButton from '../../../Auth/authButton/AuthButton'

export default function TryFreePlan({setLockNextStep,lockNextStep,setStepModal}) {
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
            <p><input type="checkbox" name="" id="" checked={lockNextStep} onChange={(e)=>setLockNextStep(e.target.checked)}/>قوانین و مقررات استفاده از سگمنتو رو مطالعه کردم . </p>
            <AuthButton textButton={"خرید اشتراک"} handlerClick={setStepModal} setOnclickValue={1}/>
          </div>
        </div>
      </div>
  )
}
