import React, { Fragment, useEffect, useState } from 'react'
import Modal from 'react-modal'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { modalParentSelector } from '../../../variables/style';
import AuthButton from '../../Auth/authButton/AuthButton';
import { addWorkSpace, resetWorkSpaceState } from '../../Redux/Action/workSpace';
import BadgeLimitKeyWords from '../BadgeLimitKeyWords';
import SetTitleTabBrowser from '../SetTitleTabBrowser';
import InputGetWorkSpaceInfo from './inputValue';
import { WorkSpaceParagraph } from './textParagraph';
import { workSpaceTitle } from './titleWorkSpaceModal';

export default function WorkSpace() {

  // debugger
  const [stepModal, setStepModal] = useState(1);
  const { webAdress } = useSelector(state => state.workSpaceState)

  const [addKeyCharInput, setAddKeyCharInput] = useState(3)
  const [addCommercialPageInput, setAddCommercialPageInput] = useState(3)
  const [addWebsitePageInput, setAddWebsitePageInput] = useState(3)
  const [addCompetitorSite, setAddCompetitorSite] = useState(2)

  const navigate = useNavigate();


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

  const handleAddStateCountInput = (state) => {
    switch (state) {
      case "keyChar":
        setAddKeyCharInput(addKeyCharInput + 1);
        break;
      case "commercialPage":
        setAddCommercialPageInput(addCommercialPageInput + 1);
        break;
      case "websitePage":
        setAddWebsitePageInput(addWebsitePageInput + 1);
        break;
      case "competitorSite":
        setAddCompetitorSite(addCompetitorSite + 1);
        break;

      default:
        break;
    }
  }

  const handleRemoveStateCountInput = (state) => {
    switch (state) {
      case "keyChar":
        setAddKeyCharInput(addKeyCharInput - 1);
        break;
      case "addCommercialPageMap":
        setAddCommercialPageInput(addCommercialPageInput - 1);
        break;
      case "websitePage":
       

        setAddWebsitePageInput(addWebsitePageInput - 1);
        break;
      case "competitorSite":
        setAddCompetitorSite(addCompetitorSite - 1);
        break;

      default:
        break;
    }
  }

  const dispatch=useDispatch()

  useEffect(() => {
    return () => {
      
    }
  }, [])

  return (
    <Fragment>

      <Modal
        isOpen={true}
        parentSelector={() => document.querySelector(modalParentSelector)}
        style={customStyles}
        contentLabel="Example Modal"
        onRequestClose={()=>navigate(-1)}
      >
        <div className=' w-[862px]'>
          <header className='px-2.5 border-0 bg-[#FCFCFB] mb-2'>
            <div>
              <img src="/img/modal/workSpace/head/add_circle.svg" alt="" className='inline-block ml-3' />
              <span className='text-lg'>تعریف ورک‌اسپیس جدید</span>
              <span className='info'></span>
            </div>
            <div className='close_suport_container' onClick={() => {navigate(-1);dispatch(resetWorkSpaceState());}}>
              <div className='flex justify-center items-center p-[6px] rounded-[5px] cursor-pointer hover:bg-[#F352421A]' >
                <div className='close_modal_ico w-3 h-3' ></div>
              </div>
            </div>
          </header>
          <body className='px-5 bg-[#fff]'>
            <div className='flex gap-6 items-center relative'>
              <div className='w-[20px] h-[2px] bg-primary rotate-90 rounded absolute -right-[10px]' />
              <span className='text-sm mr-3'>{workSpaceTitle(stepModal)}</span>
              <div className="h-5">
                <BadgeLimitKeyWords  api={stepModal}/>
              </div>
            </div>
            <p className='mt-2.5 text-sm text-[#002145]'>
              {WorkSpaceParagraph(stepModal)}
            </p>
            <div className=' '>
            {/* step, countInput, handleAddStateCountInput */}
            <InputGetWorkSpaceInfo step={stepModal} countInput={stepModal == 2 ? addKeyCharInput : stepModal == 3 ? addCommercialPageInput : stepModal == 4 ? addWebsitePageInput : stepModal == 5 && addCompetitorSite} handleAddStateCountInput={handleAddStateCountInput} handleRemoveStateCountInput={handleRemoveStateCountInput}/>
              {/* {InputGetWorkSpaceInfo(stepModal, stepModal == 2 ? addKeyCharInput : stepModal == 3 ? addCommercialPageInput : stepModal == 4 ? addWebsitePageInput : stepModal == 5 && addCompetitorSite, handleAddStateCountInput)} */}
            </div>
          </body>
          <footer className='px-5'>
            {stepModal != 1 ? <span className={"back_ico ml-24"} onClick={() => setStepModal(stepModal - 1)}></span> : <div></div>}
            {stepModal != 1 ? <AuthButton classes={"btn-secondary"} reduxHandleClick={addWorkSpace} setOnclickValue={stepModal} textButton={"پایان پیکربندی"} /> : <div></div>}
            {stepModal != 5 ? <AuthButton handlerClick={setStepModal} disabled={webAdress.length != 0 ? false : true} setOnclickValue={stepModal + 1} textButton={<Fragment>گام بعدی<span className='forward-ico'></span></Fragment>} /> : <div className=' w-32'></div>}
            {/* {stepModal != 5 ? <button className='btn-style ' onClick={() => setStepModal(stepModal + 1)}>ادامه<span className='forward-ico'></span></button> : <div></div>} */}
          </footer>
        </div>
      </Modal>
      <SetTitleTabBrowser nameSection={"تعریف ورک‌اسپیس جدید"} />
    </Fragment>
  )
}