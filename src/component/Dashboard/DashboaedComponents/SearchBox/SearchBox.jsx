import React from 'react'
import { useState } from 'react'
// import zarebin from "./img/dashboard/searchBox/search.svg"


export default function SearchBox({changeHandler,searchBoxValue,handlClick,className}) {
    return (
    <div className={className}>
        <input value={searchBoxValue} type="text" className='w-[95%] h-12  pr-4 border-2 border-[#D9D9D9] border-b-[#7D7D7D] placeholder-[#D9D9D9]' onChange={(e)=>changeHandler(e)} placeholder='درج کلمه کلیدی' />
        <button className='btn-style h-10' onClick={handlClick}><img src={"./img/dashboard/searchBox/search.svg"} alt='search'/></button>
    </div>
  )
}
