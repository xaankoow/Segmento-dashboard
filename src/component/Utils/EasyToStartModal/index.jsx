import React, { Fragment, useEffect, useState } from 'react'
import Modal from 'react-modal'
import Head from './HeadModal'
import { useSelector } from 'react-redux'
import BodyContent from './BodyContent'
import FooterBtn from './FooterBtn'
import AleartMessageBuyPlan from '../../Dashboard/DashboaedComponents/BuyPlan/AleartMessageBuyPlan'
import SetTitleTabBrowser from '../SetTitleTabBrowser'
import { ReplaceClass } from '../replaceClass'
import { modalParentSelector } from '../../../variables/style'
import { useNavigate } from 'react-router'

export default function BuyPlanEasyToStartModal({ checkBuyPlan, handleClose }) {
  const [rederingWithDelay, setRederingWithDelay] = useState(false);


  const [stepModal, setStepModal] = useState(1);
  const [plan, setPlan] = useState({ uuid: "", type: "", planIndex: 0 });

  const [free, setFree] = useState(false);
  const [packageUuid, setPackageUuid] = useState("")
  const [applyWebAdress, setApplyWebAdress] = useState("")
  const [lockNextStep, setLockNextStep] = useState(false);
  const [checkErr, setCheckErr] = useState("");

  const { forceUpdate } = useSelector(state => state.planState);

  const navigate=useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setRederingWithDelay(true)
    }, 500);
  }, [])
  useEffect(() => {
    setTimeout(() => {
      setRederingWithDelay(true)
    }, 500);
  }, [])

  useEffect(() => {

    return () => {
      ReplaceClass({
        elementClass: "easyToStartRocket",
        oldClass: "easyToStartRocket_animation_fire",
        newClass: "easyToStartRocket_animation",
        replaceClass: true
      })
    }
  }, [])



  useEffect(() => {
    // const find_buy_type = localStorage.getItem("buyType")
    if (checkBuyPlan == true) {
      if (checkErr != "") {
        setCheckErr(true)
      }
    }
    const find_status_create_workSpace_modal = localStorage.getItem("modalWorkSpace");
    if (find_status_create_workSpace_modal != undefined) {
      setStepModal(6)
      localStorage.removeItem("modalWorkSpace");
    }
  }, [forceUpdate])

  const customStyles = {
    content: {
      top: '43vh',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgrounColor: "red",
      'z-index': '100',
      width:"70%",
      'max-width':"1000px"
    },
  };

  function ModalOptions(step,free) {
    let stepOne="680px";
    let stepTwo="731px";
    let stepTwo_free="432px";
    let stepThree="542px";
    let stepFour="587px";
    let stepFive="554px";
    let stepSix="674px";
    let modalSizes=["680px","731px","542px","587px","554px","674px"] 
    let modalStepTwoFree="432px"
    // return{
    //   calculateHeightSize:(step,mood)=>{
        if (free==true&step==2) {
          return modalStepTwoFree
        }else{
          return  modalSizes[step-1]
        }
    //   }
    // }
  }
  return (
    <Fragment>
      {rederingWithDelay ?
        (
          <div className='buy_plan_modal'>
            <Modal
              // closeTimeoutMS={2000}

              isOpen={true}
              parentSelector={() => document.querySelector(modalParentSelector)}
              style={customStyles}
              contentLabel="Example Modal"
              onRequestClose={()=>navigate(-1)}
              // className={" w-3/4"}
            >
              {/* <div className='w-full  overflow-scroll max-h-[712px]'> */}
              <div className={`w-full  overflow-scroll h-[80vh] max-h-[${ModalOptions(stepModal,free)}]`}>
                {checkErr != "" ? (
                  <div className='h-[685px]'>
                    {
                      AleartMessageBuyPlan()
                    }
                  </div>
                ) : (
                  <>
                    <Head handleClose={handleClose} stepModal={stepModal} free={free} />
                    <div className={`${stepModal == 1 ? "px-6" : stepModal > 2 ? "px-2" : stepModal == 2 ? " px-4" : ""}`}>
                      <BodyContent setStepModal={setStepModal} setApplyWebAdress={setApplyWebAdress} setPackageUuid={setPackageUuid} stepModal={stepModal} setPlan={setPlan} plan={plan} free={free} setFree={setFree} lockNextStep={lockNextStep} setLockNextStep={setLockNextStep} />
                      <FooterBtn applyWebAdress={applyWebAdress} stepModal={stepModal} free={free} setFree={setFree} setStepModal={setStepModal} handleClose={handleClose} lockNextStep={lockNextStep} packageUuid={plan.uuid} />
                    </div>
                  </>
                )}
              </div>
            </Modal>
            {forceUpdate ? "" : ""}
            <SetTitleTabBrowser nameSection={"شروع آسان"} />
          </div>
        ) : null}
    </Fragment>
  )
}
