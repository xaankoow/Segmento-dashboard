import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import CreateRotateLine from '../../shared/RotateLines'
export default function Page404() {

  const navigate = useNavigate()
  const userToken = localStorage.getItem("token")

  useEffect(() => {
    if (userToken) {
      navigate("/dashboard", { replace: true })
    } else {
      navigate("/dashboard/accountOperations/login", { replace: true });
    }
  }, [])


  return (
    <div id='page-404' className=' bg-red-600'>
    </div >
  )
}
