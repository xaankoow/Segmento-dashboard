import React from 'react'

export default function Checkbox(handleClick) {
  return (
    
        <input
                        type={"checkbox"}
                        className="checkbox rounded border border-[#D9D9D9] bg-[#0A65CD] w-[18px] h-[18px] cursor-pointer hover:border-[#0A65CD] hover:border"
                        onClick={(e) => handleClick(e)}
                      />
   
  )
}
