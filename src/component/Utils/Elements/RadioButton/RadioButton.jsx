import React from "react";

export default function RadioButton({ label ,handleclick}) {
  return (
    <label className="flex items-center gap-2 ">
      {label}
      <input
        type="radio"
        className="w-4 h-4"
        name="radio"
        onClick={(e) => {
          handleclick(e)
        }}
        value="4"
      />
    </label>
  );
}
