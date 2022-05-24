import React from "react";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import "./App.css";
import Forgetpass from "./pages/forgetPassword/Forgetpass";
import{Routes,Route} from "react-router-dom";
import ValidateEmail from "./pages/validateEmail/ValidateEmail";
import { ToastContainer } from "react-toastify";


export default function App() {
  return (
    <div className="app">
      
      <Routes>
        <Route exact path="/" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/forgetPassword" element={<Forgetpass/>}/>
        <Route path="/ValidateEmail" element={<ValidateEmail/>}/>
      </Routes>

      <ToastContainer/>
    </div>
  );
}
