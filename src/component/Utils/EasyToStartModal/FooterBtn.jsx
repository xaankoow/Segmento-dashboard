import React, { Fragment } from 'react'
import AuthButton from '../../Auth/authButton/AuthButton';
import { buyPlan } from '../../Redux/Action/plan';

export default function FooterBtn({ stepModal,setFree, setStepModal,handleClose }) {



    return (
        <footer className=''>
            {stepModal != 1&stepModal!=6 ? <span className='back_ico cursor-pointer' onClick={() => setStepModal(stepModal - 1)}></span> : <div></div>}
            {stepModal == 1 ? <AuthButton handlerClick={() => { setFree(false) }} reduxHandleClick={buyPlan} textButton={"خرید اشتراک"} /> : stepModal==6?<button className='btn-style' onClick={() => handleClose()}>پایان<span className='forward-ico'></span></button>:<button className='btn-style' onClick={() => setStepModal(stepModal + 1)}>گام بعدی <span className='forward-ico'></span></button>}
            {stepModal == 1 ? (<AuthButton handlerClick={() => { setStepModal(stepModal + 1); setFree(true) }} style={{ backgroundColor: "#0A65CD26", color: "#0A65CDB2" }} textButton={<Fragment>14 روز رایگان <span className='forward-14_free_ico'></span></Fragment>} />) : null}
        </footer>
    )
}
