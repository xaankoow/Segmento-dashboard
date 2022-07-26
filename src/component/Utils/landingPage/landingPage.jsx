import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import { checkDetailUuid } from '../../service/paymentService';

export default function LandingPage() {
  useEffect(() => {
    const pathBrowserOrg=window.location.search;
    const urlParams=new URLSearchParams(pathBrowserOrg);
    const uuid=urlParams.get("uuid");
    checkUuid(uuid);
  }, [])
  
  const navigate=useNavigate();
  
  const checkUuid= async (uuidResulte)=>{
    // console.log(uuidResulte);
    const {data}= await checkDetailUuid(uuidResulte);
    if (data.data.payment_status_text=="پرداخت نشده") {
    localStorage.setItem("statusBuyPlna",false)
  }else{
      localStorage.setItem("statusBuyPlna",true)
    }
    navigate('/dashboard',{replace:true});
  }

  return (
    <div>لطفا صبر کنید...</div>
  )
}
