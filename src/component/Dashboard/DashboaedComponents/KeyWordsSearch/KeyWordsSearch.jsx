import { data } from 'autoprefixer';
import React from 'react'
import { useState } from 'react'

export default function KeyWordsSearch({NothingSearch,dataItems,secoundSearch,radioClickedHandler}) {
    const[inputClick,setInputClick]=useState(false);
    const[buttonClick,setButtonClick]=useState(false);
    const[radioText,setRadioText]=useState("همه عبارات");
    const [clicked, setClicked] = React.useState(false);
    const toggle=(index)=>{
    if(clicked===index){
    // if active close
    return setClicked(null)
    }
    setClicked(index)
    }   
    
  return (
    <div className="flex flex-col items-center relative " id='keyWordSearch'>
    <div className='h-10 w-[334px] flex flex-col '>
        <div className="flex items-center relative searchBox">
             <input type="text" className={!radioText ? 'pr-2 w-[290px] h-11 border-2 border-[#D9D9D9] border-b-[#7D7D7D] placeholder-[#D9D9D9]':NothingSearch? "disableInput placeholder-[#7D7D7D] w-[290px] h-11 pr-24": `w-[290px] h-11 pr-24 border-2 border-[#D9D9D9] border-b-[#7D7D7D] placeholder-[#D9D9D9]`} disabled={NothingSearch ? true :false} placeholder='جستجو کلمه کلیدی' onChange={(e)=>secoundSearch(e)} onClick={()=>{setInputClick(true); setButtonClick(true)}} onBlur={()=>setInputClick(!inputClick)}/>
            <div className={!radioText ?"hidden" :"text-xs min-w-[49px] h-[30px] px-1 py-1 rounded flex flex-col items-center justify-center bg-[#D9D9D9] text-[#7D7D7D] absolute right-2" }>
              {radioText}
            </div>
             <button disabled={NothingSearch ? true :false} onClick={()=>setButtonClick(!buttonClick)} className={inputClick ? 'absolute left-1 h-11 border-2 border-[#D9D9D9] border-b-[#0A65CD] border-r-0 w-[44px] rounded-l flex justify-center items-center': NothingSearch? "bg-[#F2F5F7] placeholder-[#7D7D7D] border-0 absolute left-1 h-11 w-[44px] rounded-l flex justify-center items-center" :
         'absolute left-1 h-11 border-2 border-[#D9D9D9] border-b-[#7D7D7D] border-r-0 w-[44px] rounded-l flex justify-center items-center'}><img src={buttonClick ? "./img/dashboard/searchBox/arrow_down_ios_new.svg" :"./img/dashboard/searchBox/arrow_up_ios_new.svg"} alt="arrow" /></button>
        </div>

       
    </div>
    {
        buttonClick ? <div className={'flex flex-col w-full border border-t-0 pr-3 rounded z-20 top-[45px] border-[#0000000a] w-[330px] absolute bg-[#ffffff] h-[150px] overflow-y-scroll'}>
                <div className='flex gap-2 mt-3'>
                        <input type="radio"  className='w-3 h-3' name="radio" checked={radioText==="همه عبارات" && true}  onClick={(e)=>{setRadioText("همه عبارات"); radioClickedHandler(e)}} value="1" />
                        <span>همه عبارات</span>
                 </div>
                 <div className='flex gap-2 mt-3'>
                        <input type="radio" className='w-3 h-3' name="radio"  onClick={(e)=>{setRadioText("شامل این عبارت"); radioClickedHandler(e)}} value="2"/>
                        <span>شامل این عبارت </span>
                 </div>
                 <div className='flex gap-2 mt-3' >
                        <input type="radio" className='w-3 h-3' name="radio"  onClick={(e)=>{setRadioText("تکرار عینی این عبارت"); radioClickedHandler(e)}} value="3"/>
                        <span>تکرار عینی این عبارت </span>
                 </div>
                 <div className='flex gap-2 mt-3 mb-3' >
                        <input type="radio" className='w-3 h-3' name="radio"  onClick={(e)=>{setRadioText("بدون این عبارت"); radioClickedHandler(e)}} value="4"/>
                        <span>بدون این عبارت </span>
                 </div>
                 { dataItems && <div className='border-b border-lightGray w-11/12 m-auto' />}
                 {
                     dataItems.map((items,index)=>{
                          return  <div className='flex gap-2 mt-3 mb-3 pr-4' >
                                    <span> {items} </span>
                                  </div>
                     })
                 }
               
           </div> :null
    }
    </div>
  )
}
