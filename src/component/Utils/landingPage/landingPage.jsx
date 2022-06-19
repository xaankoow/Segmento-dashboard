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
    const detail= await checkDetailUuid(uuidResulte);
    debugger
  }

  return (
    <div>لطفا صبر کنید...</div>
  )
}
