import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { TextButton } from "../../pages/register/Register";
import "./authButton.css";
import { useDispatch } from "react-redux";

export default function AuthButton({
   widthValue, 
   bgcolor, 
   handlerClick,
   reduxHandleClick,
   disabled }
   ) {
  const value = useContext(TextButton);
  const dispatch=useDispatch()
  return (
    <Button
      variant="contained"
      className="registerButton"
      disabled={disabled}
      style={{ width: `${widthValue}`, backgroundColor: `${bgcolor}` }}
      onClick={(e) =>  {
        // handlerClick();
        dispatch(reduxHandleClick())
      }}
          >
      {value}
    </Button>
  );
}
