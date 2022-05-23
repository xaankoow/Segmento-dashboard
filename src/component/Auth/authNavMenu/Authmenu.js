import React from "react";
import AuthButton from "../authButton/AuthButton";
import Navmenu from "../../navMenu/Navmenu";
import "./authmenu.css";

export default function Authmenu() {
  return (
    <div className="navBox">
      <Navmenu />
      <AuthButton  bgcolor={"#0A65CD"} padding={"10px 17px"} />
    </div>
  );
}
