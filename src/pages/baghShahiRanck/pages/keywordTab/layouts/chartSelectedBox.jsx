import React from "react";

const ChartSelectedBox = ({ selected, onRemove }) => {
  console.log("SELECTED IN :", selected);

  return (
    <div className="chart-selected-box">
      <div className="left">
        <div
          className="color-picked"
          style={{ background: selected.borderColor }}
        />
        <span>{selected.label}</span>
      </div>
      <span className="clear-selected-box" onClick={onRemove}>
        ⨉
      </span>
    </div>
  );
};

export default ChartSelectedBox;
