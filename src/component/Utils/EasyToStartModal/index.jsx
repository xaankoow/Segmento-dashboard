import React, { Fragment, useEffect, useState } from 'react'
import Modal from 'react-modal'
import Head from './HeadModal'
import BodyContent from './BodyContent'
import FooterBtn from './FooterBtn'
import AleartMessageBuyPlan from '../../Dashboard/DashboaedComponents/BuyPlan/AleartMessageBuyPlan'

export default function BuyPlanEasyToStartModal({ handleClose, checkClose, show, checkBuyPlan }) {
  const [stepModal, setStepModal] = useState(1);
  // const [, setDiscount] = useState("sample-code");
  const [plan, setPlan] = useState("");
  const [free, setFree] = useState(false);
  const [packageUuid, setPackageUuid] = useState("")
  const [applyWebAdress, setApplyWebAdress] = useState("")
  const [lockNextStep, setLockNextStep] = useState(false);
  const [checkErr, setCheckErr] = useState(false);
  // console.log(applyWebAdress)
  // debugger
  // useEffect(() => {
  //   const find_buy_type = localStorage.getItem("buyType")
  //   if (true & false) {
  //     setStepModal(3);
  //   } else if (true && true) {
  //     setCheckErr(true)
  //   }
  // }, [])

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

  return (
    <div className='buy_plan_modal'>
      <Modal
        isOpen={true}
        parentSelector={() => document.querySelector(".app #DASHBOARD .body .main")}
        // onAfterOpen={afterOpenModal}
        // onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      // className={"myModal"}
      >
        <div className='w-[907px]'>
          {checkErr ? (
            <div className='h-[685px]'>
              {
              AleartMessageBuyPlan()
              }
            </div>
          ) : (
            <Fragment>
              <Head handleClose={handleClose} stepModal={stepModal} free={free} />
              <div className={`${stepModal == 1 ? "px-6" : stepModal > 2 ? "px-2" : stepModal == 2 ? " px-4" : ""}`}>
                <BodyContent setStepModal={setStepModal} setApplyWebAdress={setApplyWebAdress} setPackageUuid={setPackageUuid} stepModal={stepModal} setPlan={setPlan} plan={plan} free={free} setFree={setFree} lockNextStep={lockNextStep} setLockNextStep={setLockNextStep} />
                <FooterBtn applyWebAdress={applyWebAdress} stepModal={stepModal} free={free} setFree={setFree} setStepModal={setStepModal} handleClose={handleClose} lockNextStep={lockNextStep} packageUuid={packageUuid} />
              </div>
            </Fragment>
          )}
        </div>
      </Modal>
    </div>
  )
}
