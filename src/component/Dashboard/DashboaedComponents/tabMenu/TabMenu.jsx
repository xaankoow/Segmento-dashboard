import React, { useState } from 'react'
import { useEffect } from 'react';
import { Tab } from '@headlessui/react'

export default function TabMenu({tabsContent,title,numberRight,numberLeft}) {
// to select tab and show underline of that
const [activeTab, setActiveTab] = useState(0)
return (
<div class="text-sm font-medium text-center text-gray-500 text-gray-400 border-gray-700 mt-3">
    <div className='flex gap-6 items-center pr-4'>
        <div className='w-[20px] h-[2px] bg-[#001F43] rotate-90 rounded absolute -right-[9px]' />
        <span className='text-lg'>{title}</span>
        <div className='flex items-center text-[#7D7D7D] bg-[#D9D9D9] rounded  px-2 '>
            <span className='text-[#7D7D7D] text-sm pt-[5px] pb-[2px]'>{numberRight}</span>
            <hr className='w-4 bg-gray text-[#7D7D7D] rotate-90' />
            <span className='text-[#7D7D7D] text-sm pt-[5px] pb-[2px]'>{numberLeft}</span>
        </div>
    </div>
    <Tab.Group>
        <div className="flex  flex-col -mb-px items-right mt-3 ">
            <Tab.List class="mx-3 flex  items-center mb-5 ">
                {tabsContent.map((items,index)=>{
                return <>
                    <div className='flex flex-col justify-center items-center border-none'>
                        <Tab key={index} className={activeTab ===index
                            ? `tab_${index} border-none outline-0 inline-block px-4 mt-4 mb-[10px] text-blue-600 rounded-t-lg  focus:text-primary text-blue-500  hover:text-primary `
                            : "border-none outline-0 inline-block px-4 mt-4 mb-[10px] text-blue-600 rounded-t-lg  focus:text-primary text-blue-500  hover:text-primary "
                            } onClick={()=>setActiveTab(index)}>{items.title}</Tab>
                        <div className='w-[28px] h-[2px] bg-primary rounded  tabline hidden ' />
                    </div>
                    {index < tabsContent.length-1 && <hr className='w-[28px] bg-gray text-[#D9D9D9] rotate-90 mt-4' />}
                    
                </>
                })}
            </Tab.List>
            <Tab.Panels>
                {tabsContent.map((items,index)=>{
                return <Tab.Panel key={index}>{items.content}</Tab.Panel>
                })}
            </Tab.Panels>
        </div>
    </Tab.Group>
</div>

)
}