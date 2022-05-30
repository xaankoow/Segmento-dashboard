import React, { useEffect } from "react";
import Register from "./pages/register/Register";
import "./App.css";
import Forgetpass from "./pages/forgetPassword/Forgetpass";
import { Routes, Route } from "react-router-dom";
import ValidateEmail from "./pages/validateEmail/ValidateEmail";
import { ToastContainer } from "react-toastify";
import Login from "./pages/login/Login.jsx";
import DashboardBody from "./component/Dashboard/DashboardBody";
import Nav from "./component/navMenu/Nav";


export default function App() {




  //HANDLE SELECT NEXT INPUT IN FORM FORGOTPASSWORD AND VERIFYEMAIL
  // useEffect(() => {
  //   handleNextInput(0)
  // }, [codVerifyEmail_1])
  // useEffect(() => {
  //   handleNextInput(4)
  // }, [codVerifyEmail_2])
  // useEffect(() => {
  //   handleNextInput(3)
  // }, [codVerifyEmail_3])
  // useEffect(() => {
  //   handleNextInput(2)
  // }, [codVerifyEmail_4])

  return (
    <div className="app">
      {/* <Nav /> */}
      <Routes>
        <Route exact path="/" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="forgetPassword" element={<Forgetpass />} />
        <Route path="ValidateEmail" element={<ValidateEmail />} />
        <Route path="dashboard" element={<DashboardBody />} />
      </Routes>

      <ToastContainer rtl />
    </div>
  );
}
