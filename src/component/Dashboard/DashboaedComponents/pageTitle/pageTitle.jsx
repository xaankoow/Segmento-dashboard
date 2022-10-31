import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import BadgeLimitKeyWords from "../../../Utils/BadgeLimitKeyWords";

export default function PageTitle({
  numberRight,
  numberLeft,
  title,
  hasLimit,
  closeIco,
  badgeApi
}) {

  const navigate = useNavigate();
  const userState = useSelector((state) => state.userState);
  //TODO: check ico problem (new adding)
  return (
    <div className={`flex ${!hasLimit && "justify-between"}  gap-6 items-center pr-4 w-full bg-[#FCFCFB] py-3`}>
      <div className="w-[20px] h-[2px] bg-[#001F43] rotate-90 rounded absolute -right-[9px]" />
      <span className="text-lg">{title}</span>
      {hasLimit &&  <div className="flex items-center h-6">
      {  userState.userData.package && <BadgeLimitKeyWords api={badgeApi} />}
      </div>}
      {closeIco&&(
      <div className='flex justify-center ml-6 items-center p-1 rounded-[3px] cursor-pointer hover:bg-[#F352421A]' onClick={() => navigate(-1)}>
        <div className='close_modal_ico' ></div>
      </div>
      )}
    </div>
  );
}
