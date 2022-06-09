import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
  const { checkRegisterComplete } = useSelector(state => state.userState)

  const navigate=useNavigate();


  let user= getCookie("user_name")
  //REGISTER COMPLETE => NAVIGATE TO VERIFY FORM
  useEffect(() => {
    debugger
    if (checkRegisterComplete == true) {
      navigate("/ValidateEmail")
    }
  }, [checkRegisterComplete])

  // debugger
  useEffect(() => {
    if (user) {
      navigate("/dashboard",{replace:true})
    }
  }, [user])
  
  
  console.log(window.location.pathname)
  return (
    <div id='nav-option-head' className='md:w-11/12 2xl:w-10/12 flex items-center justify-between'>
      <div className='flex justify-around items-center'>
        <div className="flex justify-center items-center pl-5">
          <span className='logo_nav option_segmento_logo' />
          <a href='#'>امکانات</a>
        </div>
        <div className="flex justify-center items-center pl-5">
          <span className='logo_nav course_video_logo' />
          <a href='#'>ویدئو آموزشی</a>
        </div>
        <div className="flex justify-center items-center pl-5">
          <span className='logo_nav diamond_price_logo' />
          <a href='#'>قیمت گذاری</a>
        </div>
        <di className="flex justify-center items-center pl-5"v>
          <span className='logo_nav cookie_communicate_logo' />
          <a href='#'>همکاری با آژانس ها</a>
        </di>
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
