import React, { useCallback, useEffect, useRef, useState } from "react";
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
import { RegisterUserAction } from "../../../../component/Redux/Action";
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
  getPastDatas,
  getSelectBoxData,
} from "../../../service/editProfile";
import { EditorCustomizedToolbarOption } from "./components/Editor/Editor";
import { showToast } from "../../../Utils/toastifyPromise";
import SetTitleTabBrowser from "../../../Utils/SetTitleTabBrowser";
import AuthButton from "../../../Auth/authButton/AuthButton";
import { TextButton } from "../../../../pages/register/Register";
import { ClearInputs } from "../../../Utils/ClearInputs/ClearInputs";
import { CheckFormat } from "../../../Utils/Auth/CheckFormtValue";
import { Link, useLocation } from "react-router-dom";

export default function EditUserProfile() {
  const { canRequest } = useSelector((state) => state.loadingState);

  const location = useLocation();

  const [selectDatas, setSelectDtas] = useState([]);
  const [nameInputValue, setNameInputValue] = useState("");
  const [familyInputValue, setfamilyInputValue] = useState("");
  // user Image

  const [image, setUserImage] = useState([]);
  const userImageProf = image.map((file) => file.preview);

  //
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
  var user_package_type_text = "";
  if (userState.userData.package) {
    user_package_type_text = userState.userData.package.type_text
      ? userState.userData.package.type_text
      : "";
  }
  var user_name = "";
  var user_email = "";
  const nameEmpty = useRef(null);
  const familyEmpty = useRef(null);
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
    setNameInputValue(e);
  };
  const handlefamilyInput = (e) => {
    setfamilyInputValue(e);
  };
  // data of select box
  const selexboxData = async () => {
    try {
      const { data, status } = await getSelectBoxData();
      // setcontent(data.data); //5
      setSelectDtas(data.data);
    } catch (error) {
      // console.log(error);
    }
  };

  const loadingState = useSelector((state) => state.loadingState);

  const handleSetNewProfile = async () => {
    var toastMessage = "";
    //handle show loadin
    {
      loadingState.ProcessingDelay.push("editProfile");
      loadingState.canRequest = false;
      await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState });
    }

    let family = "";
    try {
      let formdata = new FormData();
      if (nameInputValue || familyInputValue) {
        family = nameInputValue + " " + familyInputValue;
      } else {
        family = user_name;
      }
      // debugger
      // const [file] = acceptedFiles;
      const imgData = userState.image[0] != "" ? userState.image[0] : "";
      // const imgData1 = imgData != "" ? URL.revokeObjectURL(imgData) : "";

      formdata.append("name", family);
      formdata.append("bio", "من یک برنامه نویس هستم");
      formdata.append("avatar", imgData);
      formdata.append(
        "website_type",
        selectBoxValue1 ? selectBoxValue1 : pastData ? pastData.website_type : 1
      );
      formdata.append(
        "company_scale",
        selectBoxValue2 ? selectBoxValue2 : pastData ? pastData.website_type : 1
      );
      formdata.append(
        "seo_experts",
        selectBoxValue3 ? selectBoxValue3 : pastData ? pastData.seo_experts : 1
      );
      formdata.append(
        "website_traffic",
        selectBoxValue4
          ? selectBoxValue4
          : pastData
            ? pastData.website_traffic
            : 1
      );
      formdata.append(
        "role_in_company",
        selectBoxValue5
          ? selectBoxValue5
          : pastData
            ? pastData.role_in_company
            : 1
      );
      formdata.append(
        "dating_method",
        selectBoxValue6
          ? selectBoxValue6
          : pastData
            ? pastData.dating_method
            : 1
      );
      // const { data, status } = await keywordService(searchBoxValue);
      const { data } = await editProfile(formdata);
      if ((data.code == 200) & (data.status == true)) {
        dispatch(coreUser());
        toast.success("اطلاعات شما با موفقیت ویرایش شد");
        ClearInputs();
        setForceUpdate(!forceUpdates);
      }
      // setcontent(data.data); //5
    } catch (error) {
      data.errors.forEach((element) => {
        toastMessage += element + " / ";
      });
      showToast(toastMessage, "error");
      // console.log(error);
      // toast.error("اطلاعات شما ذخیره نشد !");
    }

    //handle hide loading
    {
      var removeProcessingItem = loadingState.ProcessingDelay.filter(
        (item) => item != "editProfile"
      );
      loadingState.ProcessingDelay = removeProcessingItem;
      loadingState.canRequest = removeProcessingItem > 0 ? false : true;
      await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState });
    }
  };

  // data of select box thet is related to the past info
  const [pastData, setPastData] = useState("");
  useEffect(() => {
    if (!pastData) {
      pastSelexboxData();
    }
  });

  const pastSelexboxData = async () => {
    // debugger
    if (userState.userData.user != undefined) {
      var uuidUser = userState.userData.user.uuid;

      // console.log(uuidUser);
      try {
        // const { data, status } = await getPastDatas(uuidUser); // ---------
        const { data, status } = await getPastDatas(uuidUser); // --------- ایمپورت اشتباه
        setPastData(data.data); //5
      } catch (error) {
        // console.log(error);
      }
    }
  };

  // select box data
  const data = [];
  // console.log(data)
  Object.keys(selectDatas).map((item) => {
    data.push(selectDatas[item]);
  });

  const handleUpdatePassword = async () => {
    
    if (
      CheckFormat("password", newPass, "errEditUserProfilePassword") &&
      CheckFormat(
        "passwordConfirm",
        { pass1: newPass, pass2: confrimPass },
        "errEditUserProfilePasswordConfirm"
      )
    ) {
      //handle show loadin
      {
        loadingState.ProcessingDelay.push("editPassword");
        loadingState.canRequest = false;
        await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState });
      }

      try {
        let formdata = new FormData();
        formdata.append("last_pass", currentPass);
        formdata.append("password", newPass);
        formdata.append("password_confirmation", confrimPass);
        // const { data, status } = await keywordService(searchBoxValue);
        const { data, status } = await editPassword(formdata);
        // setcontent(data.data); //5
    
        if (data.errors.length != 0) {
          toast.error(data.errors[0]);
        } else {
          setUpdatePass(true);
          ClearInputs("password");
        }
        setForceUpdate(!forceUpdates);
      } catch (error) {
        // console.log(error);
        toast.error("لطفا فیلد ها را با دقت پر کنید");
      }

      //handle hide loading
      {
        var removeProcessingItem = loadingState.ProcessingDelay.filter(
          (item) => item != "editPassword"
        );
        loadingState.ProcessingDelay = removeProcessingItem;
        loadingState.canRequest = removeProcessingItem > 0 ? false : true;
        await dispatch({ type: "SET_PROCESSING_DELAY", payload: loadingState });
      }
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
    // pastSelexboxData();
    if (selectDatas.length == 0) {
      selexboxData();
    }
    // debugger
    // if (userToken) { ------------ این مورد اضافی به نظر میاد و نیازی نیست چونکه داخل هدر داشبورد صدا زدم
    // dispatch(coreUser());
    //   dispatch(getAllWorkSpace());
    // }
  }, [forceUpdate]);

  //

  return (
    <>
      {openChangeImageModal && (
        <ChangeImageModal
          close={() => setOpenChangeImageModal(false)}
          isOpen={openChangeImageModal}
          setUserImage={setUserImage}
          userImage={
            (userState.userData.user != undefined) &
              (userState.userData.user.img != "")
              ? userState.userData.user.img
              : "/../img/dashboard/userProfile/profileImage.png"
          }
        />
      )}
      {updatePass && (
        <PopUp
          clickHandler={() => setUpdatePass(false)}
          image={"/img/popUp/tik.svg"}
          type={"sucsess"}
          buttonText={" باشه، بزن بریم"}
          text={" حالا می‌توانید کارتان را شروع کنید.   "}
          title={" گذرواژه جدید ذخیره شد."}
        />
      )}
      <div className="">
        <PageTitle title={"حساب کاربری"} />
        {/* <AuthButton textButton={"test api"} handlerClick={pastSelexboxData()}/> */}
        <div className="w-full flex flex-col justify-center items-center">
          <div className="m-h-[650px] mb-9">
            <div className="mt-12 flex justify-between">
              <ProfileInformation
                userName={user_name}
                userType={
                  userState.userData.package != undefined
                    ? userState.userData.package.title
                    : "بدون پکیج"
                }
                type={  userState.userData.package != undefined
                  ? userState.userData.package.type_text: "بدون پکیج"
                }
                email={user_email}
                changeUserImage={() => setOpenChangeImageModal(true)}

              // userState.image != "" ? userState.image : userState.userData.user.image
              />
              {/* //  userState.userData.user.image != undefined ?userState.userData.user.image : */}
              <button
                className="btn-style h-10 rounded-lg text-[14px] mr-[181px] "
                onClick={() => dispatch(logoutAction())}
              >
                خروج{" "}
                <img
                  src="/img/dashboard/header/logoutProfile.svg"
                  alt="logout"
                  className="mr-3"
                />
              </button>
            </div>
            {!changepassWord ? (
              <>
                <div className="mt-14 mb-9">
                  <div className="flex justify-between">
                    <span className="text-title">اطلاعات شخصی من </span>
                    <Link
                      to={"/dashboard/phoneNumberOperations"}
                      state={{ background: location }}
                      className={"text-primary"}
                    >
                      تغییر شماره همراه
                    </Link>
                  </div>
                  <div className="flex gap-4 my-9 justify-between">
                    <AuthInput
                      textLabelInput="نام "
                      classes={"w-[100%]"}
                      typeInput="text"
                      handleChange={handleNameInput}
                      ref={nameEmpty}
                    />

                    <AuthInput
                      textLabelInput=" نام خانوادگی"
                      classes={"w-[100%]"}
                      typeInput="text"
                      handleChange={handlefamilyInput}
                      ref={familyEmpty}
                    />
                  </div>
                  <AuthInput
                    textLabelInput="آدرس ایمیل "
                    width={"100%"}
                    errorTextId="errRejesterFormatEmail"
                    disable={true}
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
                    اطلاعات کسب و کار من
                  </span>
                  <div className="flex flex-col gap-4 mt-7">
                    <SelectBox
                      optionItems={data ? data[0] : []}
                      title={"زمینه فعالیت شما (نوع سایت)"}
                      handlechange={handleSelectBox1}
                      select={pastData ? pastData.website_type : 0}
                    />
                    <SelectBox
                      optionItems={data ? data[1] : []}
                      title={"تعداد اعضای شرکت"}
                      handlechange={handleSelectBox2}
                      select={pastData ? pastData.website_type : 0}
                    />
                    <SelectBox
                      optionItems={data ? data[2] : []}
                      title={" تعداد متخصص سئو "}
                      handlechange={handleSelectBox3}
                      select={pastData ? pastData.seo_experts : 0}
                    />
                    <SelectBox
                      optionItems={data ? data[3] : []}
                      title={" ترافیک ماهانه وب سایت شما "}
                      handlechange={handleSelectBox4}
                      select={pastData ? pastData.website_traffic : 0}
                    />
                    <SelectBox
                      optionItems={data ? data[4] : []}
                      title={" سمت شما در تیم "}
                      handlechange={handleSelectBox5}
                      select={pastData ? pastData.role_in_company : 0}
                    />
                    <SelectBox
                      optionItems={data ? data[5] : []}
                      title={" روش آشنایی با سگمنتو "}
                      handlechange={handleSelectBox6}
                      select={pastData ? pastData.dating_method : 0}
                    />{" "}
                    <div className="flex justify-end gap-7 mt-9">
                      <button className="btn-secondary" onClick={ClearInputs}>
                        انصراف{" "}
                      </button>
                      <AuthButton
                        handlerClick={handleSetNewProfile}
                        setOnclickValue={userState.image[0]}
                        textButton={"ذخیره تغییرات"}
                      />
                    </div>
                    {/* <div className="border-b border-lightGray w-full m-auto mt-7" /> */}
                  </div>
                </div>
                {/* <div className=" mb-10">
                  <span className="text-[#002145] mb-7">
                    {" "}
                    پیغام برای تیم سگمنتو{" "}
                  </span>
                </div>

                <EditorCustomizedToolbarOption />

                <div className="w-full flex justify-end ">
                  <button className="btn-style mb-9 w-[101px]">
                    ارسال پیام
                  </button>
                </div> */}
              </>
            ) : (
              <div className="w-full flex flex-col mt-14 gap-7">
                <span>تغییر گذرواژه</span>
                <AuthInput
                  textLabelInput=" گذرواژه فعلی"
                  typeInput="password"
                  width={"100%"}
                  isPassword={true}
                  handleChange={setcurrentPass}
                />
                <AuthInput
                  textLabelInput="گذرواژه جدید"
                  typeInput="password"
                  width={"100%"}
                  isPassword={true}
                  errorTextId="errEditUserProfilePassword"
                  handleChange={setnewPass}
                  wrapperClass="mt-2"
                  checkStrongPass
                // reduxHandleChange={handleNewtPass}
                />
                <AuthInput
                  textLabelInput=" تکرار گذرواژه جدید "
                  typeInput="password"
                  width={"100%"}
                  isPassword={true}
                  errorTextId="errEditUserProfilePasswordConfirm"
                  handleChange={setconfrimPass}
                  wrapperClass="mt-2"
                // reduxHandleChange={handleConfrimationPass}
                />
                <div className="flex w-full justify-end gap-7">
                  <button
                    className="btn-secondary"
                    onClick={() => setChangePassword(false)}
                  >
                    انصراف{" "}
                  </button>
                  {/* <TextButton.Provider value={"  تغییر گذرواژه"}>
                  <AuthButton
                  disabled={!canRequest}
                    classes={"btn-style"}
                    reduxHandleClick={RegisterUserAction}
                  />
                </TextButton.Provider> */}
                  <button
                    disabled={!canRequest}
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
      <SetTitleTabBrowser nameSection={"حساب کاربری"} />
      {forceUpdates ? "" : ""}
    </>
  );
}
