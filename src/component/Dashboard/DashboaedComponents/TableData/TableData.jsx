import React, { useState } from 'react'

export default function Table({data,headerButton,NothingSearch}) {
const[selectColumnTitle,setSelectColumnTitle]=useState("انتخاب");
const[handleClickButton,setHandleClickButton]=useState(false);
const[handleClickCopy,setHandleClickCopy]=useState(false);
const[handleClickCopyIndex,SetHandleCopyIndex]=useState(false);
const [checkCkeckBox,setCheckCkeckBox]=useState([]);
// row of table
const [activeRow, setActiveRow] = useState(0);
const [activeCheckBox,setActiveCheckBox] = useState([0]);
const [isActive, setActive] = useState(false); // <-- set class name when checkbox is checking
const handleCheckingInput = event => {
    if (event.target.checked) {
        setSelectColumnTitle("کپی")
        setCheckCkeckBox([...checkCkeckBox,true])
        navigator.clipboard.writeText(data.map(item=>{if(event.target.checked===activeCheckBox){return item.content}}))
        setActive(true)
    } else  {
        setCheckCkeckBox([...checkCkeckBox,false])
        for (let index = 0; index < checkCkeckBox.length; index++) {
            if(checkCkeckBox[index]!==true){
                setActive(false)
                setSelectColumnTitle("انتخاب")
                
            }
         }
    }
   
  };
// 👇️ removes tooltip from DOM


return (
<div class="w-[796px] flex flex-col border border-[#D9D9D9] p-0 " id='TABLE'>

    <div class="min-w-full">
        <div className='flex items-center justify-between bg-[#FCFCFB] w-full px-2'>
            <div className='flex gap-5'>
                <div className="text-sm font-medium text-gray-900 pr-2  text-right text-[#D9D9D9] relative" onClick={()=>{setHandleClickCopy(true);
                 setTimeout(() => {
                    setHandleClickCopy(false)
                
                },500)
                }}>
                <span class={selectColumnTitle==="کپی" && handleClickCopy ?"flex tooltip tooltipTop absolute -right-[60%] rounded bg-[#D9D9D9] -top-11" :"tooltip -right-[60%]  tooltipTop hidden absolute -top-11  rounded bg-[#D9D9D9]"}>کپی شد!</span>
                   {selectColumnTitle}
                </div>
                <div className={NothingSearch?"text-[#D9D9D9] text-sm font-medium pr-2 text-right":"text-sm font-medium text-gray-900 pr-2  text-right"}>
                    ردیف
                </div>
                <div className={NothingSearch?"text-[#D9D9D9] text-sm font-medium pr-2 text-right":"text-sm font-medium text-gray-900 pr-2  text-right"}>
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
                   <span id='box' class={handleClickButton ?"flex tooltip tooltipTop absolute  rounded bg-[#D9D9D9] -top-[29px] left-[70%]" :"-top-[29px] tooltip tooltipTop left-[70%] hidden absolute  rounded bg-[#D9D9D9]"}>کپی شد!</span>
                   <button className={isActive ? "copyAllButton rounded-[9px] py-[8px] px-5 text-[#ffffff] bg-[#0A65CD] flex items-center " : NothingSearch ? 'copyAllButtondisabled rounded-[9px] py-[8px] px-5 text-[#ffffff] bg-[#F2F5F7] flex items-center' :'copyAllButton rounded-[9px] py-[8px] px-5 text-[#488CDA] bg-[#F2F5F7] flex items-center hover:bg-[#0A65CD] hover:text-[#ffffff]'} disabled={NothingSearch ? true :false} onClick={()=>{setHandleClickButton(true);navigator.clipboard.writeText(data.map(item=>item.content));
                   setTimeout(() => {
                    setHandleClickButton(false)
                
                },500)}}> 
                         <div className="imageIcon ml-3 w-5 h-5"></div>کپی
                 همه </button>
                </div>
            </div>
        </div>
        {
           NothingSearch ?
           <div className="w-full flex flex-col items-center justify-center gap-3 min-h-[401px]">
                          <img src={"./img/dashboard/table/add_chart.svg"} alt="imgNothingSearch"/>
                          <span className="text-[#E5E5E5]">اطلاعاتی برای نمایش وجود ندارد!</span>
           </div>   
           :
            <div className="bg-white text-right w-full overflow-y-scroll max-h-[401px] " id='table'>
            {data.map((item,index)=>{
            return <div key={index} className={index < data.length-1 ?'tableRow relative border-b border-[#D9D9D9] flex gap-5 mx-2 items-center' :"tableRow relative border-0 flex gap-5 mx-2 items-center"}>
                <div class="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">
                    <input type={"checkbox"} className="checkbox rounded border border-[#D9D9D9] bg-[#FCFCFB] w-[18px] h-[18px] cursor-pointer hover:border-[#0A65CD] hover:border" onChange={handleCheckingInput} onClick={()=>setActiveCheckBox(...activeCheckBox,index)}/>
                </div>
                <div class="text-sm text-gray-900 font-light pr-4 py-4 whitespace-nowrap"> {item.row} </div>
                <div class="text-sm text-gray-900 font-light px-5 py-4 whitespace-nowrap">{item.content} </div>
                        {activeRow ===index ? <span class={handleClickCopyIndex ?"flex tooltip tooltip-right absolute left-[100px] rounded bg-[#D9D9D9] " :"tooltip tooltip-right  hidden absolute   rounded bg-[#D9D9D9]"}>کپی شد!</span> :null}
                        <div className=" absolute left-[14px] content_copy_blue w-4 h-5 " onClick={()=>{SetHandleCopyIndex(true);navigator.clipboard.writeText(item.content);setActiveRow(index);
                         setTimeout(() => {
                            SetHandleCopyIndex(false)
                        },500)
                        }}></div>
                 </div>
            })}
        </div>
        }
       
    </div>

</div>
)
}