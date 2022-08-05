import React from 'react'
import { useNavigate } from 'react-router'

export default function Page404() {
  const navigate =useNavigate()
  navigate("easyStart")
  
  return (
    <div id='page-404'>
        {/* <p>داری دنبال زیر بغل مار میگردی؟</p>
        <img src='/images/404/snake_picture.jpg'/> */}
        <p>صفحه مورد نظر پیدا نشد!</p>
    </div>
  )
}
