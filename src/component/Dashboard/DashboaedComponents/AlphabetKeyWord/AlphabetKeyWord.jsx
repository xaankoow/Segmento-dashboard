import React from 'react'

export default function AlphabetKeyWord({handleclick,NothingSearch}) {

    const [clicked, setClicked] = React.useState(0);
    const letter=["الف","ب","پ","ت","ث","ج","چ","ح","خ","د","ذ","ر","ز","ژ","س","ش","ص","ض","ط","ظ","ع","غ","ف","ق","ک","گ","ل","م","ن","و","ه","ی"];
  return (
    <div className="flex flex-wrap gap-3 p-3 pt-0 items-center justify-center rounded w-full mt-3">
       {
        letter.map((item,index)=>{
          return  <button onClick={(e)=>{if(!NothingSearch){setClicked(index);handleclick(e)}}}  className={clicked===index ?"rounded-lg py-2 px-5 bg-[#0a65cd26] focus:text-[#ffffff] hover:bg-primary hover:text-[#ffffff] active:bg-[#0B4B94] focus:bg-[#0B4B94] w-[61px] h-[41px] hover:cursor-pointer  text-[#0a65cdb3]" : "hover:cursor-pointer rounded-lg py-2 px-5 bg-[#0a65cd26] text-[#0a65cdb3] hover:bg-primary hover:text-[#ffffff]  w-[61px] h-[41px]"} key={index}>
          {item}
              </button>
        })
       }
    </div>
  )
}
