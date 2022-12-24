import React from 'react'
import AuthButton from '../../Auth/authButton/AuthButton'
import Modal from 'react-modal'
import report_svg from "../../assets/img/modal/body/report.svg";

export default function ModalResultBuyPlanMessage({ title, planType }) {
    return (
        <Modal
            isOpen={showResultModal}
            parentSelector={() => document.querySelector(".app #DASHBOARD .body .main")}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div className=' w-[907px]'>
                <body className='final_report_container p-5'>
                    <div className='popup'>
                        <div className='title_popup'>اشتراک فعال سازی شده برای شما: </div>
                        <div className='main_popup'>اشتراک طلایی ، 3 ماهه</div>
                    </div>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته است . </p>
                    <div className='support_container'>
                        <p>تا اینجای کار اگر نیاز به راهنمایی و مشاوره داشتی میتونی از این طریق باهامون تماس بگیری</p>
                        <AuthButton textButton={"مشاوره و تماس"} />
                        <img src={report_svg} alt="" />
                    </div>
                </body>
            </div>
        </Modal>
    )
}
