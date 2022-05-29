import React from "react";
import { useState, useEffect } from "react";

const Timer = ({exsist,display,minutes,seconds}) => {
  return (
    <>
      {minutes === 0 && seconds === 0 ? null  && exsist===true : (
        <span style={{display:`${display}`}}>
          {" "}
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </span>
      )}
    </>
  );
};

export default Timer;
