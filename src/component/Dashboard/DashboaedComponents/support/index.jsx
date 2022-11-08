import React, { useEffect, useState } from 'react'
import Message from '../../../shared/message/support'
import CloseSection from './CloseSection'
import HeaderCardInfo from './HeaderCardInfo'
import SendMessage from '../../../shared/message/SendMessage.jsx/index'
import PageTitle from '../pageTitle/pageTitle'
import AuthButton from '../../../Auth/authButton/AuthButton'
import { useDispatch, useSelector } from 'react-redux'
import { getSupportChatData, sendNewMessageTicketServise } from '../../../service/ticket'
import { showToast } from '../../../Utils/toastifyPromise'

export default function Index() {

  const loadingState = useSelector((state) => state.loadingState);
  const { userData } = useSelector((state) => state.userState);

  const [chatData, setChateData] = useState("")

  const [textEditor, setTextEditor] = useState("")
  const [fileEditor, setFileEditor] = useState([])


  useEffect(() => {
    if (chatData == "") {
      initChat()
      console.log(chatData)
    }
  }, [])

  const dispatch = useDispatch();

  const ticketUuid = window.location.hash.substring(window.location.hash.lastIndexOf('/') + 1);
  const initChat = async () => {
    //handle show loadin
    {
      loadingState.ProcessingDelay.push("getSupportChatData");
      loadingState.canRequest = false;
      await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState });
    }
    try {

      const { data } = await getSupportChatData(ticketUuid);
      if (data.code == 200 & data.status == true) {
        console.log(data)
        setChateData(data.data); //5
      }
    } catch (error) {
      // setShowPopUpLimit(true);
      console.log(error)
    }
    //handle hide loading
    {
      var removeProcessingItem = loadingState.ProcessingDelay.filter(
        (item) => item != "getSupportChatData"
      );
      loadingState.ProcessingDelay = removeProcessingItem;
      loadingState.canRequest = removeProcessingItem > 0 ? false : true;
      await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState });
    }
  };

  const AddNewMessageAction = async () => {
    // debugger
    let formdata = new FormData();
    formdata.append("message", textEditor);
    formdata.append("files[]", fileEditor);
    formdata.append("uuid", ticketUuid);
    try {
      const { data } = await sendNewMessageTicketServise(formdata);
      debugger
      if (data.code == 200 & data.status == true) {
        // setChateData(...chatData.ticket,...chatData.messages+data.data)

        showToast("پیام شما به ما رسید", "success")
      } else {
        showToast("خطا در ارسال پیام", "error")
      }

    } catch (e) {
      showToast("خطا در ارسال پیام", "error")

    }
  };

  const sendMessageData = (ticketUuid, textEditor, fileEditor)

  return (
    <div className=' px-7'>
      <PageTitle title={"پشتیبانی و تیکت‌ها "} />
      {chatData != "" ? (
        <>
          <CloseSection showCloseBaner={chatData.ticket.status == 0 ? true : false} />
          <HeaderCardInfo ticketId={chatData.ticket.ticket_id} updateDate={chatData.ticket.updated_at} chatStatus={chatData.ticket.status} subjectTitle={chatData.ticket.subject} />
          {
            chatData.messages.map(chatDetail => (
              <Message chatData={chatDetail} type={chatDetail.user.uuid==userData.user.uuid?"user":"admin"}/>
            ))
          }
          <div className='border border-gray rounded-lg pb-5 mt-9 max-w-3xl m-auto'>
            <div>
              <header className=' px-2'>
                <h1 className='text-title text-lg pt-5'>ارسال پاسخ</h1>
                <h5 className='text-title text-sm mt-2'>برای ارسال پاسخ به این تیکت، از فرم زیر استفاده کنید.</h5>
              </header>
              <div className=' px-7 mt-7'>
                <span className='text-gray text-sm'>لطفا به نکات زیر توجه کنید: </span>
                <ul className=' mt-2'>
                  <li>
                    <div className=' w-2 h-2 bg-shortText rounded-full inline-block'></div>
                    <span className='text-gray text-sm mr-3'>نمونه متن برای نوشتن نکات مهم برای تیکت</span>
                  </li>
                  <li>
                    <div className=' w-2 h-2 bg-shortText rounded-full inline-block'></div>
                    <span className='text-gray text-sm mr-3'>نمونه متن برای نوشتن نکات مهم برای تیکت</span>
                  </li>
                  <li>
                    <div className=' w-2 h-2 bg-shortText rounded-full inline-block'></div>
                    <span className='text-gray text-sm mr-3'>نمونه متن برای نوشتن نکات مهم برای تیکت</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className=' px-10 '>
              <SendMessage setValueEditor={setTextEditor} setFileArray={setFileEditor} />
            </div>
          </div>
          <AuthButton reduxHandleClick={AddNewMessageAction} textButton={"ارسال پاسخ"} classes="m-auto mt-7" />
        </>
      ) : null}
    </div>
  )
}

// AddNewMessageAction(ticketUuid,textEditor,fileEditor)