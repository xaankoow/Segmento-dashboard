import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';
import { TextBaner } from './handleBanerText';
import close_svg from '../../../../assets/img/dashboard/nav_right/close.svg'

export default function SidebarBaner({ setDisableAdvertisement }) {


    // const [disableAdvertisement, setDisableAdvertisement] = useState(false);

    return (
        <Fragment>

            <div className="bg-secondary h-[57px] flex flex-col items-center justify-center mx-3 mb-7  relative bottom-0">
                <img
                    src={close_svg}
                    alt="close"
                    className="absolute top-2 left-2 cursor-pointer p-1 rounded-[3px] hover:bg-[#F352421A]"
                    onClick={() => setDisableAdvertisement(true)}
                />
                <Link to={"buyPlan"}>
                    <span className="text-[#7D7D7D] text-sm">{TextBaner()}</span>
                </Link>
            </div>

        </Fragment>
    )
}
