import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router'
import { BrowserRouter, Link } from 'react-router-dom'

export default function Nav() {
  console.log(window.location.pathname)
  return (
    <div id='nav-option-head'>
      <div className='container_nav_logo'>
        <div>
          <span className='logo_nav option_segmento_logo' />
          <a href='#'>امکانات</a>
        </div>
        <div>
          <span className='logo_nav course_video_logo' />
          <a href='#'>ویدئو آموزشی</a>
        </div>
        <div>
          <span className='logo_nav diamond_price_logo' />
          <a href='#'>قیمت گذاری</a>
        </div>
        <div>
          <span className='logo_nav cookie_communicate_logo' />
          <a href='#'>همکاری با آژانس ها</a>
        </div>
      </div>
      <div>

        <Routes>
          <Route exact path={"login"} element={<Link to={"/"} className='btn-style'>ثبت نام</Link>} />
          <Route path={"forgotpassword"} element={<Link to={"/"} className='btn-style'>ثبت نام</Link>} />
          <Route exact path={"*"} element={<Link to={"/login"} className='btn-style'>ورود</Link>} />
        </Routes>
      </div>
    </div>
  )
}
