import React from 'react'

export default function RotateLine() {

    // 8 rotate
    // 55 top 
    // -5 right
    // 10 width
    return (
        <div>
            <div id="div-with-line" className=' bg-[#eee] w-[280px] relative h-10 right-[200px]'>
                <div id="line" className=' w-[279px]  bg-[#ddd] h-1 rotate-[7deg] absolute right-0 top-[18px]'></div>
            </div>
            <div id="div-with-line" className=' bg-[#eee] w-[280px] relative h-[80px] right-[200px] top-9'>
                <div id="line" className=' w-[290px]  bg-[#ddd] h-1 rotate-[15deg] absolute -right-[5px] top-[40px]'></div>
            </div>
            <div id="div-with-line" className=' bg-[#eee] w-[280px] relative h-[120px] right-[200px] top-16'>
                <div id="line" className=' w-[300px]  bg-[#ddd] h-1 rotate-[23deg] absolute -right-[10px] top-[60px]'></div>
            </div>
            <div id="div-with-line" className=' bg-[#eee] w-[280px] relative h-[160px] right-[200px] top-36'>
                <div id="line" className=' w-[310px]  bg-[#ddd] h-1 rotate-[31deg] absolute -right-[15px] top-[80px]'></div>
            </div>
            <div id="div-with-line" className=' bg-[#eee] w-[280px] relative h-[200px] right-[600px] top-16'>
                <div id="line" className=' w-[320px]  bg-[#ddd] h-1 rotate-[39deg] absolute -right-[20px] top-[100px]'></div>
            </div>
        </div>
    )
}
