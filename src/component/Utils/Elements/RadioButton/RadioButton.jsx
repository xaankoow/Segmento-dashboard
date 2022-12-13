import React from "react";

export default function RadioButton({ text ,handleclick,checked,value}) {
  return (
   <>
  
      <input
        type="radio"
        className="w-4 h-4"
        checked={checked}
        name="radio"
        onClick={(e) => {
          handleclick(e)
        }}
        value={value}
      />
       <span>{text}</span>
   </>
  );
}
