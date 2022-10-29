import React, { useEffect, useState } from 'react'
import Message from '../../../shared/message/support'
import CloseSection from './CloseSection'
import HeaderCardInfo from './HeaderCardInfo'
import SendMessage from '../../../shared/message/SendMessage.jsx/index'
import PageTitle from '../pageTitle/pageTitle'
import AuthButton from '../../../Auth/authButton/AuthButton'
import { useDispatch, useSelector } from 'react-redux'
import { getSupportChatData } from '../../../service/ticket'

export default function Index() {

  const loadingState = useSelector((state) => state.loadingState);

  const [chatData, setChateData] = useState("")

  useEffect(() => {

    if (chatData == "") {
      initChat()
      console.log(chatData)
    }
  }, [])

  const dispatch = useDispatch();

  const initChat = async () => {
    //handle show loadin
    {
      loadingState.ProcessingDelay.push("getSupportChatData");
      loadingState.canRequest = false;
      await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState });
    }
    try {

      const { data } = await getSupportChatData("858d80e1-3dfb-4ca4-b187-221a5b2afa7d");
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

  return (
    <div className=' px-7'>
      <PageTitle title={"پشتیبانی و تیکت‌ها "} />
      {chatData != "" ? (
        <>
          <CloseSection showCloseBaner={chatData.ticket.status==0?true:false}/>
          <HeaderCardInfo ticketId={chatData.ticket.ticket_id } updateDate={chatData.ticket.updated_at} chatStatus={chatData.ticket.status}/>
          {
            chatData.messages.map(chatDetail => (
              <Message text={chatDetail.message} personeName={chatDetail.user.name} date={chatDetail.updated_at} />
            ))
          }
        </>
      ) : null}


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
          <SendMessage />
        </div>
      </div>
      <AuthButton textButton={"ارسال پاسخ"} classes="m-auto mt-7" />
    </div>
  )
}
