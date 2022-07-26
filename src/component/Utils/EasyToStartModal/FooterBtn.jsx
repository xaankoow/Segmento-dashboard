import React, { Fragment, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import AuthButton from '../../Auth/authButton/AuthButton';
import { buyPlan, modalSetWorkSpace, tryFreePlan } from '../../Redux/Action/plan';
import ReportInfoPlan from './BodyContent/ReportInfoPlan';

export default function FooterBtn({ stepModal, setFree, setStepModal, handleClose, lockNextStep, free, applyWebAdress }) {

    // const [showInfoPackage,setShowInfoPackage] = useState(false);
    const { webAdress, charKey1, charKey2, site1, site2, commercialPage1, commercialPage2 ,checkUseTryFree } = useSelector(state => state.planState);
    // console.log(lockNextStep)
    const navigate=useNavigate();

    return (
        <Fragment>

            <footer className=''>
                {stepModal != 1 & stepModal != 6 ? <span className='back_ico cursor-pointer' onClick={() => setStepModal(stepModal - 1)}></span> : <div></div>}
                {stepModal == 1 ? <AuthButton handlerClick={() => { setStepModal(stepModal + 1); setFree(false) }} textButton={"خرید اشتراک"} />:                       stepModal == 2&free ? <AuthButton reduxHandleClick={tryFreePlan} handlerClick={checkUseTryFree?setStepModal(stepModal + 1):""} textButton={"فعال سازی"} disabled={!lockNextStep & stepModal == 2 & free ? true : false}/>                  : stepModal == 5 ? <AuthButton reduxHandleClick={modalSetWorkSpace} textButton={"پایان"}/> : stepModal == 6 ? <Link to={"/dashboard/planStatus"} replace={true} className="btn-style">مشاهده اشتراک</Link> : stepModal == 3 ? <AuthButton handlerClick={() => { setStepModal(stepModal + 1) }} disabled={webAdress == "" ? true : false} textButton={<Fragment>گام بعدی <span className='forward-ico'></span></Fragment>} />: stepModal != 2 | free ? <button className='btn-style' onClick={() => setStepModal(stepModal + 1)} disabled={!lockNextStep & stepModal == 2 & free ? true : false}>گام بعدی <span className='forward-ico'></span></button> : ""}
                {stepModal == 1 ? (<AuthButton handlerClick={() => { setStepModal(stepModal + 1); setFree(true) }} style={{ backgroundColor: "#0A65CD26", color: "#0A65CDB2" }} textButton={<Fragment>14 روز رایگان <span className='forward-14_free_ico'></span></Fragment>} />) : stepModal == 5 ? <div></div> :null}
            </footer>
        </Fragment>
    )
}
