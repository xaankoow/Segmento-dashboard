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

export default function PopUpLimit({ section }) {

    const workSpaceState = useSelector((state) => state.workSpaceState);

    const [show, setShow] = useState(true)
    const [title, setTitle] = useState(true)
    const [contentText, setContentText] = useState(true)
    const [typeLimit, setTypeLimit] = useState("") // buy plan / default user plan
    const [typePopUp, setTypePopUp] = useState("warning")

    const checkLimit=FindLimitTools("workSpace",workSpaceState).limit
    const checkBusiness=workSpaceState.businessCustomer;



    useEffect(() => {
        if (!checkBusiness) {
            setShow(true);
            setTypeLimit("default")
        }
    }, [section])
    
    switch (section) {
        case "workSpace":
            
            break;
    
        default:
            break;
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
                                <div className='flex justify-center items-center p-1 rounded-[3px] cursor-pointer hover:bg-[#F352421A]' onClick={() => setShow(false)}>
                                    <div className='close_modal_ico' ></div>
                                </div>
                            </div>
                        </div>
                        <div className="popUpContent mt-3">

                            <ContentText />

                            <div className=' mb-4 w-full'>
                            <FooterBtn typeLimit={typeLimit} closePopUp={setShow}/>
                            </div>

                        </div>
                    </div>
                </Modal> : null}
        </>
    )
}
