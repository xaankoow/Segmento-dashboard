import React, { useEffect } from "react";
import { useSelector } from "react-redux";
export default function ProfileInformation({ userName, userType, email ,changeUserImage}) {
  const userState = useSelector((state) => state.userState);
  // const imgData = userState.image[0] != "" ? URL.createObjectURL(userState.image[0]) : "../img/dashboard/userProfile/profileImage.png"
  const imgData = userState.image[0] != "" ? URL.createObjectURL(userState.image[0]) : userState.userData.user!=undefined?userState.userData.user.img!=""?userState.userData.user.img:"../img/dashboard/userProfile/profileImage.png":"../img/dashboard/userProfile/profileImage.png"
  
  return (
    <div className="flex gap-3 items-center">
      <div className="relative">
        <img
          src={imgData}
          onLoad={imgData!=""?() => URL.revokeObjectURL(imgData):""}
          className="rounded-full w-24 h-24"
          alt="userImage"
        />
        <div className="bg-primary rounded-full absolute -bottom-1 right-0 p-2 border-[3px] border-[#ffffff] cursor-pointer" onClick={()=>changeUserImage()}>
        <img
          src="/img/dashboard/userProfile/changeImageIcon.png"
          alt="userImagechange"
          className="w-3 h-3"
        />
        </div>
      </div>
      <div className="mr-2">
        <span className="text-[20px] ml-5 ">{userName}</span>
        <span className={userType == "طلایی"? "text-xs bg-yellow rounded-3xl py-1 px-2 text-center " : userType == "نقره ای"? "text-xs bg-secondary rounded-3xl py-1 px-2 text-center " : userType == "برنزی"? "text-xs bg-[#E99991] rounded-3xl py-1 px-2 text-center " :"text-xs bg-yellow rounded-3xl py-1 px-2 text-center "}>
          {"  "}
          {userType}
          {"  "}
        </span>
        <div className="flex items-center justify-right mt-5 gap-3">
          <span className="text-[#7D7D7D] bg-[#FCFCFB] rounded-3xl py-1 px-2">{email}</span>
        </div>
      </div>
    </div>
  );
}
