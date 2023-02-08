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
import Skeleton from 'react-loading-skeleton'
import { useNavigate } from 'react-router'
import { ImageContainer } from '../../../../assets/img/IMG'

export default function Index() {

  const loadingState = useSelector((state) => state.loadingState);
  const { userData } = useSelector((state) => state.userState);

  const [chatData, setChateData] = useState({ messages: [], ticket: [] })

  const [textEditor, setTextEditor] = useState("")
  const [fileEditor, setFileEditor] = useState([])

  const navigate=useNavigate()

  useEffect(() => {
    if (chatData.messages.length == 0) {
      initChat()
      // console.log(chatData)
    }
  }, [])

  const axiosController=new AbortController()

  const dispatch = useDispatch();

  const ticketUuid = window.location.hash.substring(window.location.hash.lastIndexOf('/') + 1);
  const initChat = async () => {

    try {
      const { data } = await getSupportChatData({ticketUuid,axiosController});
      if (data.code == 200 & data.status == true) {
        // console.log(data)
        setChateData(data.data); //5
      }
    } catch (error) {
      // setShowPopUpLimit(true);
      // console.log(error)
    }
  };

  const AddNewMessageAction = async () => {
    // 
    //handle show loadin
    {
      loadingState.ProcessingDelay.push("sendNewMessageTicketServise");
      loadingState.canRequest = false;
      await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState });
    }
    if (textEditor != "") {

      // 
      let formdata = new FormData();
      formdata.append("message", textEditor);
      // formdata.append("files[]", fileEditor[0]);
      formdata.append("files[]", URL.createObjectURL(fileEditor[0]));
      
      formdata.append("uuid", ticketUuid);
      try {

        const { data } = await sendNewMessageTicketServise(formdata);

        if (data.code == 200 & data.status == true) {
          const backupChatDate = chatData;
          backupChatDate.messages.push(data.data)
          setChateData(backupChatDate)
          showToast("پیام شما به ما رسید", "success")
        } else {
          showToast("خطا در ارسال پیام", "error")
        }

      } catch (e) {
        showToast("خطا در ارسال پیام", "error")

      }
    } else {
      showToast("لطفا فیلد پیام را خالی نگذارید")
    }
    //handle hide loading
    {
      var removeProcessingItem = loadingState.ProcessingDelay.filter(
        (item) => item != "sendNewMessageTicketServise"
      );
      loadingState.ProcessingDelay = removeProcessingItem;
      loadingState.canRequest = removeProcessingItem > 0 ? false : true;
      await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState });
    }
  };

  useEffect(() => {
    return () => {
      axiosController.abort();
    }
  }, [])
  console.log('chatData :>> ', chatData);
  return (
    <>
      <PageTitle title={"پشتیبانی و تیکت‌ها "} />
      <div className='px-7'>
        {chatData.messages.length != 0 ? (
          <>
            <CloseSection showCloseBaner={chatData.ticket.status == 0 ? true : false} />
            <HeaderCardInfo ticketId={chatData.ticket.ticket_id} updateDate={chatData.ticket.updated_at} chatStatus={chatData.ticket.status} subjectTitle={chatData.ticket.subject} />
            {
              chatData.messages.map(chatDetail => (
                <Message chatData={chatDetail} type={chatDetail.user.uuid == userData?.user?.uuid ? "user" : "admin"} />
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
                      <span className='text-gray text-sm mr-3'>حداکثر تا ۱۲ ساعت پس از ارسال تیکت،پاسخ آن برای شما ارسال خواهد شد.</span>
                    </li>
                    <li>
                      <div className=' w-2 h-2 bg-shortText rounded-full inline-block'></div>
                      <span className='text-gray text-sm mr-3'>برخی تیکت‌هانیازمند بررسی تخصصی هستند و ممکن است این پروسه زمان‌بر باشد.</span>
                    </li>
                    <li>
                      <div className=' w-2 h-2 bg-shortText rounded-full inline-block'></div>
                      <span className='text-gray text-sm mr-3'>پاسخ به هر تیکت در بخش تیکت‌ها در داشبورد قرار خواهد گرفت.</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className=' px-10 '>
                <SendMessage setValueEditor={setTextEditor} setFileArray={setFileEditor} />
              </div>
            </div>
            <AuthButton handlerClick={AddNewMessageAction} keyLoading={"sendNewMessageTicketServise"} textButton={"ارسال پاسخ"} classes="m-auto mt-7" />
          </>
        ) :
          <> {/* skeleton style */}

          {/* header message info */}
            <div className='flex justify-between rounded-lg border border-sectionDisable box-content my-7 m-auto h-20 max-w-5xl'>
              <div className='flex mr-5 py-3'>
                <div className='h-full flex justify-center items-center'>
                  <div className=''>
                    <div onClick={() => navigate("/dashboard/ReportSupport")}>
                      <AuthButton classes={"btn-secondary"} textButton={<img src={ImageContainer.blueArrowBtn} className="p-1 rotate-180" />} />
                    </div>
                  </div>
                </div>
                <div className='border border-silver mx-5'></div>
                <div className='h-full flex flex-col justify-between py-1'>
                  <p className=' text-sm text-title'><Skeleton/></p>
                  <p className='text-silver text-s'>شناسه تیکت: <Skeleton width={30}/></p>
                </div>
              </div>

              <div className='h-full flex justify-around flex-col ml-5 py-3 '>
                <div className='text-s text-title flex justify-between'>
                  <span className=' w-28  text-left'>تاریخ آخرین بروزرسانی:</span>
                  <div className=' w-28'>

                    <span className='text-s text-title mr-4 text-right'><Skeleton width={90}/></span>
                  </div>
                </div>
                <div className='text-s text-title flex justify-between'>
                  <span className='w-28 text-left'> وضعیت: </span>
                  <div className='w-28'>
                    <span className={`rounded-2xl text-s text-[#fff] py-1 px-2 mr-4 text-right`}><Skeleton width={70}/></span>
                  </div>
                </div>
              </div>
            </div>



            <div className='m-auto mt-5 rounded-lg overflow-hidden border border-sectionDisable box-content max-w-5xl'> 
              {/* header */}
              <div className={` bg-white flex items-center justify-between px-4 h-14`}>
                <div className='h-10 flex items-center'>
                  <Skeleton circle width={"32px"} height={"32px"} />
                  <div className='flex items-center flex-col justify-between mr-5'>
                    <Skeleton width={"100px"} />
                  </div>
                </div>
                <div className='text-title text-s'>
                  <Skeleton width={"50px"} />
                </div>
              </div>
              {/* body (content) */}
              <div className=' px-7 py-4 '>
                <p className=' text-sm text-primaryV1'>
                  <Skeleton count={4} />
                </p>
              </div>
              {/* footer */}
              <div className=' border-t border-silver h-12 mx-4'>
                <div className={`float-right h-full`}>
                  <div className='flex justify-between items-center ml-5 h-full'>
                    <Skeleton width={50} className=' mr-3' />
                    <Skeleton width={50} className=' mr-8' />
                  </div>
                </div>
              </div>
            </div>
          </>}
        {chatData.messages.length ? "" : ""}
      </div>
    </>
  )
}

// AddNewMessageAction(ticketUuid,textEditor,fileEditor)