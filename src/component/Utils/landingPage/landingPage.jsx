import React, { useEffect } from 'react'
import { checkDetailUuid } from '../../service/paymentService';

export default function LandingPage() {
  useEffect(() => {

    const pathBrowserOrg=window.location.search;
    const urlParams=new URLSearchParams(pathBrowserOrg);
    const uuid=urlParams.get("uuid");
    checkUuid(uuid);
  }, [])
  
  
  const checkUuid= async (uuidResulte)=>{
    console.log(uuidResulte);
    const {data}= await checkDetailUuid(uuidResulte);
    if (data.data.payment_status_text=="پرداخت نشده") {
      
    }else{
      
    }
    debugger
  }

  return (
    <div>لطفا صبر کنید...</div>
  )
}
