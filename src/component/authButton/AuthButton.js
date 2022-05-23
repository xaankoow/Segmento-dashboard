import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { TextButton } from "../../pages/register/Register";
import "./authButton.css";

export default function AuthButton({ widthValue, bgcolor, handlerClick,disabled }) {
  const value = useContext(TextButton);
  return (
    <Button
      variant="contained"
      className="registerButton"
      disabled={disabled}
      style={{ width: `${widthValue}`, backgroundColor: `${bgcolor}` }}
      onClick={(e) =>  handlerClick()}
          >
      {value}
    </Button>
  );
}
