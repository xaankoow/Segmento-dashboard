import React, { useState } from "react";

//==== IMAGEs
import CopyIcon from "../../../../../assets/img/ico/copy.svg";

const defaultRowClass = `px-6 py-4 text-xs font-normal text-center text-gray-500`;

const KeywordItem = ({ row, selected }) => {
  const [hovered, setHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  function handleCopy(word) {
    navigator.clipboard.writeText(word);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  }

  return (
    <td
      className={defaultRowClass}
      style={{ minWidth: "140px", textAlign: "right" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setShowTooltip(false);
      }}
    >
      <div className="flex gap-2 relative">
        <span
          style={
            !!selected && selected.uuid === row.uuid ? { color: "blue" } : {}
          }
        >
          {row.key}
        </span>
        <img
          src={CopyIcon}
          alt="copy"
          className={`opacity-${
            hovered ? "100" : "0"
          } transition-all cursor-pointer`}
          onClick={() => handleCopy(row.key)}
        />
        <div
          className={`w-[100px] h-[40px] text-sm bg-white rounded	absolute opacity-${
            showTooltip ? "100" : "0"
          } transition-all pointer-events-none border-solid bordre-2 border-slate-500 flex items-center justify-center shadow-md`}
          style={{ transform: "translate(-75%, -27% )" }}
        >
          <span>کپی شد!</span>
        </div>
      </div>
    </td>
  );
};

export default KeywordItem;
