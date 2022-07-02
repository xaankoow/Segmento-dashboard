import React, { useState } from 'react'
import Modal from 'react-modal'
import Head from './HeadModal'
import BodyContent from './BodyContent'
import FooterBtn from './FooterBtn'

export default function BuyPlanEasyToStartModal({ handleClose, checkClose, show }) {
  const [stepModal, setStepModal] = useState(6);
  // const [, setDiscount] = useState("sample-code");
  const [plan, setPlan] = useState("");
  const [free, setFree] = useState(true);

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
          <Head handleClose={handleClose} stepModal={stepModal} free={free} />
          <div className={`${stepModal==1?"px-6":stepModal>2?"px-2":stepModal==2?" px-4":""}`}>
            <BodyContent stepModal={stepModal} setPlan={setPlan} plan={plan} free={free} setFree={setFree} />
            <FooterBtn stepModal={stepModal} setFree={setFree} setStepModal={setStepModal} handleClose={handleClose}/>
          </div>
        </div>
      </Modal>
    </div>
  )
}
