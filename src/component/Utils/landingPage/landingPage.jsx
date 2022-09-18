import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import { checkDetailUuid } from '../../service/paymentService';

export default function LandingPage() {
  useEffect(() => {
    const pathBrowserOrg = window.location.href;
    // const urlParams = new URLSearchParams(pathBrowserOrg);
    const urlParams = new URLSearchParams("uuid=avc");
    const uuid = urlParams.get("uuid");
    checkUuid(uuid);
  }, [])

  const navigate = useNavigate();

  const checkUuid = async () => {

    const getAndSplitHash=window.location.hash.split("?")   //?filter=a  a0ed15bb-3ba6-433a-ae2b-47249f60cf55
    const uuidResulte=getAndSplitHash[1].substring(5,41)

    try {
      debugger
      const { data } = await checkDetailUuid(uuidResulte);
      if (data.data.payment_status_text == "پرداخت نشده") {
        localStorage.setItem("statusBuyPlna", false)
      } else {
        localStorage.setItem("statusBuyPlna", true)
      }
      navigate('/dashboard', { replace: true });
    } catch (error) {

    }
  }

  return (
    <div>لطفا صبر کنید...</div>
  )
}
