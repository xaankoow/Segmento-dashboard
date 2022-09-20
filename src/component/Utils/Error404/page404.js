import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

export default function Page404() {

  const navigate = useNavigate()
  const userToken = localStorage.getItem("token")

  useEffect(() => {

    if (userToken) {

      navigate("/dashboard", { replace: true })
    }else{
      navigate("/dashboard/accountOperations/login", { replace: true });
    }
  }, [])


  return (
    <div id='page-404'>
      {/* <p>داری دنبال زیر بغل مار میگردی؟</p>
        <img src='/images/404/snake_picture.jpg'/> */}
      {/* <p>صفحه مورد نظر پیدا نشد!</p> */}
    </div>
  )
}
