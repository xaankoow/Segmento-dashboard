import React, { useEffect } from "react";

export default function ProfileInformation({ userName, userType, email ,changeUserImage,imageSource}) {
  // useEffect(() => {
  //   URL.revokeObjectURL(imageSource);
  // }, [])
  
  return (
    <div className="flex gap-3 items-center">
      <div className="relative">
        <img
          src={imageSource}
          className="rounded-full"
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
        <span className={userType == "طلایی"? "text-xs bg-[#FFCE47] rounded-3xl py-1 px-2 text-center " : userType == "نقره ای"? "text-xs bg-[#F2F5F7] rounded-3xl py-1 px-2 text-center " : userType == "برنزی"? "text-xs bg-[#E99991] rounded-3xl py-1 px-2 text-center " :"text-xs bg-[#FFCE47] rounded-3xl py-1 px-2 text-center "}>
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
