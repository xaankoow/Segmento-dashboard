import React from "react";
import AuthButton from "../authButton/AuthButton";
import Navmenu from "../../navMenu/Navmenu";
import "./authmenu.css";
import { Link } from "react-router-dom";

export default function Authmenu({buttonLink}) {
   return (
    <div className="navBox">
      <Navmenu />
      <Link to={`${buttonLink}`}><AuthButton  bgcolor={"#0A65CD"} padding={"10px 17px"} /></Link>
    </div>
  );
}
