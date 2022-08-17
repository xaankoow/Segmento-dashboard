import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { TextBaner } from './handleBanerText';

export default function SidebarBaner() {

    const [disableAdvertisement, setDisableAdvertisement] = useState(false);

    return (
        <div>
            {!disableAdvertisement ? (
                <Link to={"buyPlan"}>
                    <div className="bg-secondary h-[57px] flex flex-col items-center justify-center mx-3 mb-7  relative bottom-0">
                        <img
                            src="/img/dashboard/nav_right/close.svg"
                            alt="close"
                            className="absolute top-2 left-2 cursor-pointer p-1 rounded-[3px] hover:bg-[#F352421A]"
                            onClick={() => setDisableAdvertisement(true)}
                        />
                        <span className="text-[#7D7D7D] text-sm">{TextBaner()}</span>
                    </div>
                </Link>
            ) : null}
        </div>
    )
}
