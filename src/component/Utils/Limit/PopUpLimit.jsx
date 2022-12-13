import React, { useEffect, useState } from 'react'
import { ImageContainer } from '../../../assets/img/IMG'
import PopUp from '../PopUp/PopUp'
import Modal from "react-modal";
import { afterOpenOrCloseAnyModal } from '../../../variables/modal';
import AuthButton from '../../Auth/authButton/AuthButton';
import { defaultCustomModalStyle } from '../../../variables/style'
import ContentText from './ContentText';
import FooterBtn from './FooterBtn';
import { FindLimitTools } from '../FindLimitTools';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';

export default function PopUpLimit({ section, handleClose , navigateClose}) {

    const workSpaceState = useSelector((state) => state.workSpaceState);

    const [show, setShow] = useState(true)
    const [title, setTitle] = useState(true)
    const [contentText, setContentText] = useState(true)
    const [typeLimit, setTypeLimit] = useState("") // buy plan / default user plan
    const [typePopUp, setTypePopUp] = useState("warning")

    const [checkLimit, setCheckLimit] = useState(0)
    const checkBusiness = workSpaceState.businessCustomer;

    const location = useLocation();

    useEffect(() => {
        let limit = FindLimitTools(section, workSpaceState).limit
        if (checkLimit != limit) {
            setCheckLimit(limit)
        }
        // initTypeLimit()
    }, [workSpaceState.limitsDatas])

    const navigate=useNavigate();

    useEffect(() => {
        initTypeLimit()

    }, [checkLimit])


    const initTypeLimit = () => {
        if (!checkBusiness.last) {
            setShow(true);
            setTypeLimit("default")
        } else if (checkBusiness.last & checkBusiness.current & checkLimit == 0) {
            setShow(true);
            setTypeLimit("business")
        } else if (checkBusiness.last & !checkBusiness.current) {
            setShow(true);
            setTypeLimit("defaultBusiness")
        } else {
            setShow(false)

        }
    }


    return (
        <>
            {show ?
                <Modal
                    isOpen={true}
                    parentSelector={() =>
                        document.querySelector("#DASHBOARD .body .main")
                    }
                    onAfterOpen={() => afterOpenOrCloseAnyModal({ open: true })}
                    onAfterClose={() => afterOpenOrCloseAnyModal({ open: false })}
                    style={defaultCustomModalStyle}
                    contentLabel="Example Modal"
                >
                    <div className="popUpContainer w-[60vw] max-w-[900px]">
                        <div
                            className="PopUpBox h-9 "
                            style={{
                                backgroundColor:
                                    typePopUp === "sucsess"
                                        ? " #10CCAE " :
                                        typePopUp === "warning"
                                            ? " #FFCE47 "
                                            : "error"
                                                ? "#F24939F2"
                                                : typePopUp === "info"
                                                    ? "info"
                                                    : typePopUp === "aler"
                                                        ? "info"
                                                        : "#10CCAE",
                            }}
                        >
                            <div className='w-full flex justify-end items-center px-3'>
                                <div className='flex justify-center items-center p-1 rounded-[3px] cursor-pointer hover:bg-[#F352421A]' onClick={() =>navigateClose?navigate(-1): handleClose != undefined ? handleClose(false) : setShow(false)}>
                                    <div className='close_modal_ico' ></div>
                                </div>
                            </div>
                        </div>
                        <div className="popUpContent mt-3">

                            <ContentText typeLimit={typeLimit} />

                            <div className=' mb-4 w-full'>
                                <FooterBtn typeLimit={typeLimit} closePopUp={setShow} handleClose={handleClose} />
                            </div>

                        </div>
                    </div>
                </Modal> : null}
        </>
    )
}
