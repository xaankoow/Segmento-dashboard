import React, { useEffect } from 'react'
import { checkDetailUuid } from '../../service/paymentService';
import './style.css'
export default function LandingPage() {
  useEffect(() => {

    const pathBrowserOrg = window.location.search;
    const urlParams = new URLSearchParams(pathBrowserOrg);
    const uuid = urlParams.get("uuid");
    checkUuid(uuid);
  }, [])


  const checkUuid = async (uuidResulte) => {
    console.log(uuidResulte);
    const { data } = await checkDetailUuid(uuidResulte);
    if (data.data.payment_status_text == "پرداخت نشده") {

    } else {

    }
    debugger
  }

  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div>
        <div id="loading-container-segmento-logo">
          <div class="segmento_logo_1"></div>
          <div class="segmento_logo_2"></div>
          <div class="segmento_logo_3"></div>
          <div class="segmento_logo_4"></div>
          <div class="segmento_logo_5"></div>
          <div class="segmento_logo_6"></div>
          <div class="segmento_logo_7"></div>
        </div>
        <p className=' mt-7 text-center'>درحال برسی اطلاعات...</p>
      </div>
    </div>
  )
}
