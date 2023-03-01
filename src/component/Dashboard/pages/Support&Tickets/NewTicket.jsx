import React, { useEffect, useState } from "react";
import { helpText } from "../../../../variables/support";
import AuthInput from "../../../Auth/authInput/AuthInput";
import ComboBox from "../../../shared/comboBox/ComboBox";
import { ticketCategories } from "../../../../variables/support";
import AuthButton from "../../../Auth/authButton/AuthButton";
import { setNewTicket } from "../../../service/ticket";
import SupportMessage from "../../../shared/message/SendMessage.jsx/index";
import { EditorState } from "react-draft-wysiwyg";
import PopUp from "../../../Utils/PopUp/PopUp";
import { useDispatch, useSelector } from "react-redux";
import { ImageContainer } from "../../../../assets/img/IMG";
import { setTicketUUID } from "../../../Redux/Action/ticket";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { FindTicketParCode, FindTicketPartText } from "../../../Utils/supportAndMessage/supportData";

export default function NewTicket({ categories }) {
  const [filterCategories, setFilterCategories] = useState(FindTicketPartText(categories));
  const [priority, setPriority] = useState(1);
  const [editorValue, addEditorvalue] = useState("");
  const [showPopUpuuid, setShowPopup] = useState("");
  const [titleValue, setTitleValue] = useState("");
  const loadingState = useSelector((state) => state.loadingState);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [files, setFiles] = useState([]);

  const handleSetNewTicket = async () => {
    // handle show loadin
    {
      loadingState.ProcessingDelay.push("setNewTicket");
      loadingState.canRequest = false;
      await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState });
    }
    try {
      let formdata = new FormData();
      formdata.append("subject",titleValue);
      formdata.append("part", FindTicketParCode(filterCategories));
      formdata.append("priority", priority);
      formdata.append("message", editorValue);
      formdata.append("files[]", files);
      const { data } = await setNewTicket(formdata);
      if ((data.code == 200) & (data.status == true)) {
        
        setShowPopup(data.data.ticket.uuid);
      }
    } catch (error) {
      if (editorValue === ""  || titleValue==="") {
        toast.error("فیلدها را با دقت پر کنید.");
      }
    }
    {
      var removeProcessingItem = loadingState.ProcessingDelay.filter(
        (item) => item != "setNewTicket"
      );
      loadingState.ProcessingDelay = removeProcessingItem;
      loadingState.canRequest = removeProcessingItem > 0 ? false : true;
      await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState });
    }
  };
  // editor value
  const setValueEditor = (value) => {
    addEditorvalue(value);
  };
  // files array
  const setFileArray = (files) => {
    setFiles(files);
  };

  return (
    <>
      {showPopUpuuid !== "" && (
        <PopUp
          // clickHandler={() => navigate(`ticket/${showPopUpuuid}`)}
          clickHandler={() => navigate(`/dashboard/ReportSupport/ticket/${showPopUpuuid}`)}
          image={ImageContainer.tickPopUp}
          type={"sucsess"}
          buttonText={"باشه، فهمیدم!"}
          text={"تیکت شما با موفقیت برای پشتیبان سگمنتو ارسال شد!"}
          secoundText={
            "کارشناسان ما در کوتاه ترین زمان ممکن پاسخ شما رو خواهند داد."
          }
          title={"موفقیت آمیز"}
        />
      )}
      <div className="my-7 flex flex-col gap-7 justify-center">
        <div className="border rounded-lg border-sectionDisable py-4 px-7 mx-9">
          <span className="text-lg">
            برای ارسال تیکت به کارشناسان امور پشتیبانی سگمنتو، فرم زیر را کامل
            کنید.
          </span>
          <div className="flex gap-3 flex-col justify-start mt-7">
            <span className="text-silver font-bold">
              لطفا به نکات زیر توجه کنید:{" "}
            </span>
            {helpText.map((item) => {
              return (
                <div className="flex gap-3 items-center">
                  <span className="w-2 h-2 rounded-full bg-primary "></span>
                  <span className="text-silver">{item}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full flex  flex-col justify-center mt-7">
          <div className="w-2/3 mx-auto ">
            <AuthInput
              textLabelInput={"عنوان تیکت"}
              classes={"w-full"}
              handleChange={setTitleValue}
            />
          </div>
          <div className="w-2/3 mx-auto my-9 flex gap-7 justify-between items-center">
            <div className="max-w-[243px]">
              <ComboBox
                selectedItem={filterCategories}
                radioTextItems={ticketCategories.map(item=>{return item.partName})}
                radioClickedHandler={(e) => setFilterCategories(e)}
              />
            </div>
            <div className="flex items-center gap-3 ">
              <span>اولویت</span>
              <div
                className={` border-sectionDisable flex gap-3 py-3 px-4 rounded border `}
              >
                <button
                  className={`btn-secondary h-10 w-[101px] ${
                    priority === 1 && "!bg-primary !text-white"
                  }`}
                  onClick={() => setPriority(1)}
                >
                  معمولی
                </button>

                <button
                  className={`btn-secondary h-10 w-[101px] ${
                    priority === 2 && "!bg-primary !text-white"
                  }`}
                  onClick={() => setPriority(2)}
                >
                  مهم
                </button>

                <button
                  className={`btn-secondary h-10 ${
                    priority === 3 && "!bg-primary !text-white"
                  }`}
                  onClick={() => setPriority(3)}
                >
                  {" "}
                  بسیار مهم{" "}
                </button>
              </div>
            </div>
          </div>{" "}
          <div className="w-2/3 mx-auto flex  justify-center">
            <SupportMessage
              setValueEditor={setValueEditor}
              setFileArray={setFileArray}
            />
          </div>
          <div className="w-2/3 mx-auto flex  justify-center">
            <AuthButton 
            handlerClick={handleSetNewTicket}
            classes="mt-5"
            textButton={"ارسال تیکت"}
            keyLoading="setNewTicket"
            />
            {/* <button
              onClick={handleSetNewTicket}
              className={"btn-style h-10 w-[111px] mt-5"}
            >
              
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
}
