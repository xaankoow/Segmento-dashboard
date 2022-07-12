import React, { useEffect, useState } from "react";
import PageTitle from "../../DashboaedComponents/pageTitle/pageTitle";
import ProfileInformation from "./components/profileInfo/ProfileInformation";
import AuthInput from "../../../Auth/authInput/AuthInput";
// import {
//   EditorComposer,
//   Editor,
//   ToolbarPlugin,
//   InsertDropdown,
//   AlignDropdown,
// } from "verbum";
import { Editor } from "react-draft-wysiwyg";
import SelectBox from "./components/selectBox/SelectBox";
import PopUp from "../../../Utils/PopUp/PopUp";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { coreUser, logoutAction } from "../../../Redux/Action";
import { getAllWorkSpace } from "../../../Redux/Action/workSpace";
import ChangeImageModal from "./components/changeImageModal/ChangeImageModal";
import {
  editPassword,
  editProfile,
  getSelectBoxData,
} from "../../../service/editProfile";
export default function EditUserProfile() {
  const [selectDatas, setSelectDtas] = useState([]);
  const [nameInputValue, setNameInputValue] = useState("");
  const [familyInputValue, setfamilyInputValue] = useState("");
  const [selectBoxValue1, setSelectBoxValue1] = useState("");
  const [selectBoxValue2, setSelectBoxValue2] = useState("");
  const [selectBoxValue3, setSelectBoxValue3] = useState("");
  const [selectBoxValue4, setSelectBoxValue4] = useState("");
  const [selectBoxValue5, setSelectBoxValue5] = useState("");
  const [selectBoxValue6, setSelectBoxValue6] = useState("");
  const [forceUpdates, setForceUpdate] = useState(false);
  const [changepassWord, setChangePassword] = useState(false);
  //password inputs
  const [currentPass, setcurrentPass] = useState("");
  const [newPass, setnewPass] = useState("");
  const [confrimPass, setconfrimPass] = useState("");
  //show success pop up for password
  const [updatePass, setUpdatePass] = useState(false);
  const [openChangeImageModal, setOpenChangeImageModal] = useState(false);
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.userState);
  var user_name = "";
  var user_email = "";
  const handleSelectBox1 = (e) => {
    setSelectBoxValue1(e.target.value);
  };
  const handleSelectBox2 = (e) => {
    setSelectBoxValue2(e.target.value);
  };
  const handleSelectBox3 = (e) => {
    setSelectBoxValue3(e.target.value);
  };
  const handleSelectBox4 = (e) => {
    setSelectBoxValue4(e.target.value);
  };
  const handleSelectBox5 = (e) => {
    setSelectBoxValue5(e.target.value);
  };
  const handleSelectBox6 = (e) => {
    setSelectBoxValue6(e.target.value);
  };

  const handleNameInput = (e) => {
    setNameInputValue(e.target.value);
  };
  const handlefamilyInput = (e) => {
    setfamilyInputValue(e.target.value);
  };
  const selexboxData = async () => {
    try {
      const { data, status } = await getSelectBoxData();
      // setcontent(data.data); //5
      setSelectDtas(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSetNewProfile = async () => {
    let family = "";
    try {
      let formdata = new FormData();
      if (nameInputValue && familyInputValue) {
        family = nameInputValue + " " + familyInputValue;
      } else {
        family = user_name;
      }
      formdata.append("name", family);
      formdata.append("bio", "من یک برنامه نویس هستم");
      formdata.append("avatar", "");
      formdata.append("website_type", selectBoxValue1);
      formdata.append("company_scale", selectBoxValue2);
      formdata.append("seo_experts", selectBoxValue3);
      formdata.append("website_traffic", selectBoxValue4);
      formdata.append("role_in_company", selectBoxValue5);
      formdata.append("dating_method", selectBoxValue6);
      // const { data, status } = await keywordService(searchBoxValue);
      const { data, status } = await editProfile(formdata);
      // setcontent(data.data); //5
      toast.success("اطلاعات شما با موفقیت ویرایش شد");
      setForceUpdate(!forceUpdates);
    } catch (error) {
      console.log(error);
      toast.error("اطلاعات شما ذخیره نشد !");
    }
  };
  // select box data
  const data = [];
  Object.keys(selectDatas).map((item) => {
    data.push(selectDatas[item]);
  });
  // edit password api
  const handleCurrentPass = (e) => {
    setcurrentPass(e.target.value);
  };
  const handleNewtPass = (e) => {
    setnewPass(e.target.value);
  };
  const handleConfrimationPass = (e) => {
    setconfrimPass(e.target.value);
  };

  const handleUpdatePassword = async () => {
    try {
      let formdata = new FormData();
      formdata.append("last_pass", currentPass);
      formdata.append("password", newPass);
      formdata.append("password_confirmation", confrimPass);
      // const { data, status } = await keywordService(searchBoxValue);
      const { data, status } = await editPassword(formdata);
      // setcontent(data.data); //5
      console.log(data.errors);
      if (data.errors.length != 0) {
        toast.error(data.errors[0]);
      } else {
        setUpdatePass(true);
      }
      setForceUpdate(!forceUpdates);
    } catch (error) {
      console.log(error);
      toast.error("لطفا فیلد ها را با دقت پر کنید");
    }
  };
  
  const userToken = localStorage.getItem("token");
  if (userState.userData.user) {
    user_name = userState.userData.user.name
      ? userState.userData.user.name
      : "";
    user_email = userState.userData.user.email
      ? userState.userData.user.email
      : "";
  }
  const forceUpdate = userState.forceUpdate;
  useEffect(() => {
    selexboxData();
    if (userToken) {
      dispatch(coreUser());
      dispatch(getAllWorkSpace());
    }
  }, [forceUpdate]);

  return (
    <>
      {openChangeImageModal && (
        <ChangeImageModal
          close={() => setOpenChangeImageModal(false)}
          isOpen={openChangeImageModal}
        />
      )}
      {updatePass && (
        <PopUp
          clickHandler={() => setUpdatePass(false)}
          image={"./img/popUp/tik.svg"}
          type={"sucsess"}
          buttonText={"باشه، فهمیدم!"}
          text={"گذرواژه با موفقیت تغییر کرد"}
          title={"موفقیت آمیز"}
        />
      )}
      <div className="">
        <PageTitle title={"حساب کاربری"} />
        <div className="w-full flex flex-col justify-center items-center">
          <div className="m-h-[650px] mb-9">
            <div className="mt-12 flex justify-between">
              <ProfileInformation
                userName={user_name}
                userType={"کاربر طلایی"}
                email={user_email}
                changeUserImage={() => setOpenChangeImageModal(true)}
              />
              <button
                className="btn-style h-10 rounded-lg text-[14px] mr-[181px]"
                onClick={() => dispatch(logoutAction())}
              >
                خروج{" "}
                <img
                  src="./img/dashboard/header/logoutProfile.svg"
                  alt="logout"
                  className="mr-3"
                />
              </button>
            </div>
            {!changepassWord ? (
              <>
                <div className="mt-14 mb-9">
                  <span className="text-[#002145]">اطلاعات شخصی</span>
                  <div className="flex gap-4 my-9">
                    <AuthInput
                      textLabelInput="نام "
                      width={"310px"}
                      typeInput="text"
                      handleChange={handleNameInput}
                    />
                    <div className="flex flex-col items-start relative">
                      <AuthInput
                        textLabelInput=" نام خانوادگی"
                        width={"310px"}
                        typeInput="text"
                        handleChange={handlefamilyInput}
                      />
                      <div className="ErrorBadgeBox">
                        <img
                          sdivrc="/img/ErrorBadge.svg"
                          alt="ErrorBadge"
                          className="bg[#C42B1C] p-1 rounded-full"
                        />
                        <h5>گذرواژه همخوانی ندارد</h5>
                      </div>
                    </div>
                  </div>
                  <AuthInput
                    textLabelInput="آدرس ایمیل "
                    width={"100%"}
                    errorTextId="errRejesterFormatEmail"
                    disabled={true}
                  />
                  <div className="w-full flex justify-end mt-7">
                    {" "}
                    <button
                      className="third-btn"
                      onClick={() => setChangePassword(true)}
                    >
                      تغییر گذرواژه
                    </button>
                  </div>
                </div>
                <div className="border-b border-lightGray w-full m-auto" />
                <div className="mt-7 mb-9">
                  <span className="text-[#002145] mb-7">
                    {" "}
                    اطلاعات کسب و کار شما
                  </span>
                  <div className="flex flex-col gap-4 mt-7">
                    <SelectBox
                      optionItems={data ? data[0] : []}
                      title={"زمینه فعالیت شما (نوع سایت)"}
                      handlechange={handleSelectBox1}
                    />
                    <SelectBox
                      optionItems={data ? data[1] : []}
                      title={"تعداد اعضای شرکت"}
                      handlechange={handleSelectBox2}
                    />
                    <SelectBox
                      optionItems={data ? data[2] : []}
                      title={" تعداد متخصص سئو "}
                      handlechange={handleSelectBox3}
                    />
                    <SelectBox
                      optionItems={data ? data[3] : []}
                      title={" ترافیک ماهانه وب سایت شما "}
                      handlechange={handleSelectBox4}
                    />
                    <SelectBox
                      optionItems={data ? data[4] : []}
                      title={" سمت شما در تیم "}
                      handlechange={handleSelectBox5}
                    />
                    <SelectBox
                      optionItems={data ? data[5] : []}
                      title={" روش آشنایی با سگمنتو "}
                      handlechange={handleSelectBox6}
                    />{" "}
                    <div className="flex justify-end gap-7 mt-9">
                      <button className="btn-secondary">انصراف </button>
                      <button
                        className="btn-style"
                        onClick={() => handleSetNewProfile()}
                      >
                        ذخیره تغییرات
                      </button>
                    </div>
                    <div className="border-b border-lightGray w-full m-auto mt-7" />
                  </div>
                </div>
                <div className=" mb-10">
                  <span className="text-[#002145] mb-7">
                    {" "}
                    پیغام برای تیم سگمنتو{" "}
                  </span>
                </div>
                <Editor
                  toolbar={{
                    inline: { inDropdown: true ,className:"flex flex-col gap-2"},
                    list: { inDropdown: true },
                    textAlign: { inDropdown: true },
                    link: { inDropdown: true },
                    history: { inDropdown: true },
                  }}
                  wrapperClassName="border border-[#D9D9D9] w-full  mb-7 flex flex-col justify-center p-3 min-h-[280px] relative max-w-[636px] rounded"
                  toolbarClassName="flex w-full gap-7 absolute top-3 text-[#7D7D7D]  "
                  editorClassName="w-full h-full"
                />
                {/* <EditorComposer>
                  <Editor hashtagsEnables={true}>
                    <ToolbarPlugin>
                      <AlignDropdown />
                    </ToolbarPlugin>
                  </Editor>
                </EditorComposer> */}
                <div className="w-full flex justify-end ">
                  <button className="btn-style mb-9 w-[101px]">
                    ارسال پیام
                  </button>
                </div>
              </>
            ) : (
              <div className="w-full flex flex-col mt-14 gap-7">
                <span>تغییر گذرواژه</span>
                <AuthInput
                  textLabelInput=" گذرواژه فعلی"
                  typeInput="text"
                  width={"100%"}
                  isPassword={true}
                  handleChange={handleCurrentPass}
                />
                <AuthInput
                  textLabelInput="گذرواژه جدید"
                  typeInput="text"
                  width={"100%"}
                  isPassword={true}
                  handleChange={handleNewtPass}
                />
                <AuthInput
                  textLabelInput=" تکرار گذرواژه جدید "
                  typeInput="text"
                  width={"100%"}
                  isPassword={true}
                  errorTextId="errRejesterPasswordConfirm"
                  handleChange={handleConfrimationPass}
                />
                <div className="flex w-full justify-end gap-7">
                  <button
                    className="btn-secondary"
                    onClick={() => setChangePassword(false)}
                  >
                    انصراف{" "}
                  </button>
                  <button
                    className="btn-style"
                    onClick={() => handleUpdatePassword()}
                  >
                    تغییر گذرواژه
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {forceUpdates ? "" : ""}
    </>
  );
}
