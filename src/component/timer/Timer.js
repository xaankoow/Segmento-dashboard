import React from "react";
import { useState, useEffect } from "react";

const Timer = ({exsist,display}) => {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(59);
  
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
      
    };
    
  });

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
