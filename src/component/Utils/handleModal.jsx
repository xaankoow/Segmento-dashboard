import React, { Fragment, useState } from 'react'
import Modal from 'react-modal'
import AuthInput from '../Auth/authInput/AuthInput'
import AuthButton from '../Auth/authButton/AuthButton'
export default function HandleModal({ handleClose, checkClose }) {

  const [showModal, setShowModal] = useState(true);
  const [stepModal, setStepModal] = useState(3);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgrounColor: "red"
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


  return (
    <div className='modal'>
      <Modal
        isOpen={showModal}
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
          <div>
            <AuthButton textButton={"پشتیبانی"} />
            <div className='close_modal_ico' onClick={() => setShowModal(false)}></div>
          </div>
        </header>
        <body>
          {handleShowContentModal()}
        </body>
        <footer>
          <span className='back_ico' onClick={() => setStepModal(stepModal - 1)}></span>
          <button className='btn-style' onClick={() => setStepModal(stepModal + 1)}>گام بعدی <span className='forward-ico'></span></button>
        </footer>
      </Modal>
    </div>
  )
}

