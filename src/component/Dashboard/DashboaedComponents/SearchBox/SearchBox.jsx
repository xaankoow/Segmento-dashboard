import React from 'react'

export default function SearchBox() {
  return (
    <div className='w-[97%] flex items-center gap-2 justify-between '>
        <input type="text" className='w-[95%] h-11 pr-4 border-2 border-[#D9D9D9] border-b-[#7D7D7D] placeholder-[#D9D9D9]' placeholder='درج کلمه کلیدی' />
        <button className='btn-style h-10'><img src='./img/dashboard/searchBox/search.svg' alt='search'/></button>
    </div>
  )
}
