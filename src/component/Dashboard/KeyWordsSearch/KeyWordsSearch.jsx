import React from 'react'
import { useState } from 'react'

export default function KeyWordsSearch() {
    const[inputClick,setInputClick]=useState(false);
    const[buttonClick,setButtonClick]=useState(false);
    const[radioText,setRadioText]=useState("");
    const [clicked, setClicked] = React.useState(false);
    const toggle=(index)=>{
    if(clicked===index){
    // if active close
    return setClicked(null)
    }
    setClicked(index)
    }   
  return (
    <div className="flex flex-col items-center">
    <div className='h-10 w-[334px] flex flex-col '>
        <div className="flex items-center relative">
             <input type="text" className={!radioText ? 'pr-2 w-[290px] h-11 border-2 border-[#D9D9D9] border-b-[#7D7D7D] placeholder-[#D9D9D9]':`w-[290px] h-11 pr-20 border-2 border-[#D9D9D9] border-b-[#7D7D7D] placeholder-[#D9D9D9]`} placeholder='جستجو کلمه کلیدی' onClick={()=>setInputClick(true)} onBlur={()=>setInputClick(!inputClick)}/>
            <div className={!radioText ?"hidden" :"text-xs min-w-[49px] h-[30px] px-1 py-1 rounded flex flex-col items-center justify-center bg-[#D9D9D9] text-[#7D7D7D] absolute right-2" }>
              {radioText}
            </div>
             <button onClick={()=>setButtonClick(!buttonClick)} className={inputClick ? 'absolute left-1 h-11 border-2 border-[#D9D9D9] border-b-[#0A65CD] border-r-0 w-[44px] rounded-l flex justify-center items-center' :
         'absolute left-1 h-11 border-2 border-[#D9D9D9] border-b-[#7D7D7D] border-r-0 w-[44px] rounded-l flex justify-center items-center'}><img src={buttonClick ? "./img/dashboard/searchBox/arrow_down_ios_new.svg" :"./img/dashboard/searchBox/arrow_up_ios_new.svg"} alt="arrow" /></button>
        </div>

       
    </div>
    {
        buttonClick ? <div className={'flex flex-col w-full border border-t-0 pr-3 rounded border-[#0000000a] w-[330px]'}>
                <div className='flex gap-2 mt-3'>
                        <input type="radio"  className='w-3 h-3' name="radio"  onClick={()=>setRadioText("همه عبارات")}/>
                        <span>همه عبارات</span>
                 </div>
                 <div className='flex gap-2 mt-3'>
                        <input type="radio" className='w-3 h-3' name="radio"  onClick={()=>setRadioText("شامل این عبارت")}/>
                        <span>شامل این عبارت </span>
                 </div>
                 <div className='flex gap-2 mt-3' >
                        <input type="radio" className='w-3 h-3' name="radio"  onClick={()=>setRadioText("تکرار عینی این عبارت")}/>
                        <span>تکرار عینی این عبارت </span>
                 </div>
                 <div className='flex gap-2 mt-3 mb-3' >
                        <input type="radio" className='w-3 h-3' name="radio"  onClick={()=>setRadioText("بدون این عبارت")}/>
                        <span>بدون این عبارت </span>
                 </div>
           </div> :null
    }
    </div>
  )
}
