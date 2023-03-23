import React from "react";
import ReactTooltip from "react-tooltip";

export default function ToolTip({ ...props }) {
  return (
    <>
      <ReactTooltip delayHide={500} effect="solid" {...props} />
    </>
  );
}
