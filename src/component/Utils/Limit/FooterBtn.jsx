import React from 'react'
import { Link } from 'react-router-dom'
import AuthButton from '../../Auth/authButton/AuthButton'

export default function FooterBtn({ typeLimit,closePopUp }) {
    return (
        <>
            {typeLimit == "default" ? (
                <div className="flex justify-between items-center w-full px-3">
                    <Link className='third-btn' to={"/dashboard/buyPlanEasyToStartModal"}>فعالسازی 14 روز رایگان</Link>
                    {/* <p className='third-btn'>استفاده از پکیج پایه</p> */}
                    {/* <AuthButton handlerClick={closePopUp} setOnclickValue={false} textButton="استفاده از پکیج پایه"/> */}
                    {/* <Link className='btn-style' to={"/dashboard/buyPlanEasyToStartModal"}>استفاده از پکیج پایه</Link> */}
                    <Link className='btn-style' to={"/dashboard/buyPlanEasyToStartModal"}>اشتراک میخرم</Link>
                    {/* <span className="buttonText mt-5 third-btn">ok</span> */}
                </div>
            ) : typeLimit == "defaultBusiness" ? ("") : ("")
            }

            {/* <div className="flex justify-between items-center w-full px-3">
                <div>
                    <AuthButton textButton={"اشتراک میخرم"} />
                </div>
                <span className="buttonText mt-5 third-btn">ok</span>
            </div> */}
        </>
    )
}
