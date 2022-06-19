import React, { useState } from 'react'

export default function Table({data,headerButton}) {
const[selectColumnTitle,setSelectColumnTitle]=useState("انتخاب");
const[handleClickButton,setHandleClickButton]=useState(false);
const[handleClickCopy,setHandleClickCopy]=useState(false);
const checkCkeckBox=[];
var check=0;
const handleCheckingInput = event => {
    if (event.target.checked) {
        setSelectColumnTitle("کپی")
        checkCkeckBox.append(true)
    } else {
        setSelectColumnTitle("انتخاب")
        checkCkeckBox.append(false)
    }
  
  };
 for (let index = 0; index < checkCkeckBox.length; index++) {
    if(!checkCkeckBox[index]){
        
    }
 }
return (
<div class="w-[796px] flex flex-col border border-[#D9D9D9] p-0 " id='TABLE'>

    <div class="min-w-full">
        <div className='flex items-center justify-between bg-[#FCFCFB] w-full px-2'>
            <div className='flex gap-5'>
                <div className="text-sm font-medium text-gray-900 pr-2  text-right text-[#D9D9D9] relative" onClick={()=>setHandleClickCopy(true)}>
                <span class={selectColumnTitle==="کپی" && handleClickCopy ?"flex tooltip tooltipTop absolute -right-[60%] rounded bg-[#D9D9D9] -top-11" :"tooltip -right-[60%]  tooltipTop hidden absolute -top-11  rounded bg-[#D9D9D9]"}>کپی شد!</span>
                   {selectColumnTitle}
                </div>
                <div className="text-sm font-medium text-gray-900 pr-2  text-right">
                    ردیف
                </div>
                <div className="text-sm font-medium text-gray-900 pr-2  text-right">
                    ایده های پیشنهادی
                </div>
            </div>
            <div className='flex gap-4'>
                {headerButton &&
                  <div class="text-sm font-medium text-gray-900 pr-2 py-4 text-right">
                    <button className='btn-style'><img src='./img/dashboard/table/bookmark.svg' alt='bookmark'
                            className='ml-3' /> ذخیره پیشنهادات</button>
                  </div>}
               
                <div class="text-sm font-medium text-gray-900 pr-2 py-4 text-right relative">
                   <span class={handleClickButton ?"flex tooltip tooltipTop absolute  rounded bg-[#D9D9D9] -top-[29px] left-[70%]" :"-top-[29px] tooltip tooltipTop left-[70%] hidden absolute  rounded bg-[#D9D9D9]"}>کپی شد!</span>
                   <button className='copyAllButton rounded-[9px] py-[8px] px-5 text-[#488CDA] bg-[#F2F5F7] flex items-center hover:bg-[#0A65CD] hover:text-[#ffffff]' onClick={()=>setHandleClickButton(true)}> 
                         <div className="imageIcon ml-3 w-5 h-5"></div>کپی
                 همه </button>
                </div>
            </div>
        </div>
        <div className="bg-white text-right w-full overflow-y-scroll max-h-[401px] " id='table'>
            {data.map((item,index)=>{
            return <div key={index} className={index < data.length-1 ?'tableRow relative border-b border-[#D9D9D9] flex gap-5 mx-2 items-center' :"tableRow relative border-0 flex gap-5 mx-2 items-center"}>
                <div class="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">
                    <input type={"checkbox"} className="checkbox rounded border border-[#D9D9D9] bg-[#FCFCFB] w-[18px] h-[18px] cursor-pointer hover:border-[#0A65CD] hover:border" onChange={handleCheckingInput}/>
                </div>
                <div class="text-sm text-gray-900 font-light pr-4 py-4 whitespace-nowrap"> {item.row} </div>
                <div class="text-sm text-gray-900 font-light px-5 py-4 whitespace-nowrap">{item.content} </div>
                <div className="left-[14px] absolute content_copy_blue w-4 h-5 "></div>
            </div>

            })}
        </div>
    </div>

</div>
)
}