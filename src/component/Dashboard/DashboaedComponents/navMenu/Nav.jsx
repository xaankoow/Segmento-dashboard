import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter, Link } from 'react-router-dom'
import { findUserAction } from '../../../Redux/Action'
import getCookie from '../../../Utils/findUser'

export default function Nav({path}) {


  // const dispatch=useDispatch();
  // useEffect(() => {
  //     dispatch(findUserAction())
  // }, [])
  
  // let user=get
  const navigate=useNavigate();


  let user= getCookie("user_name")

  // debugger
  useEffect(() => {
    if (user) {
      navigate("/dashboard",{replace:true})
    }
  }, [user])
  
  
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

        {/* <Routes>
          <Route path={"login"} element={<Link to={"/"} className='btn-style'>ثبت نام</Link>} />
          <Route path={"forgotpassword"} element={<Link to={"/"} className='btn-style'>ثبت نام</Link>} />
          <Route exact path={"*"} element={<Link to={"/login"} className='btn-style'>ورود</Link>} />
        </Routes> */}

          {/* <Link to={"/"} className='btn-style'>ثبت نام</Link> */}
          {/* <Link to={"/"} className='btn-style'>ثبت نام</Link> */}
          <Link to={`/${path}`} className='btn-style'>{path==""?"ورود":"ثبت نام"}</Link>

      </div>
    </div>
  )
}
