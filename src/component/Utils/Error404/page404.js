import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import Polygon from 'react-polygon'
import image1 from './img.svg'
export default function Page404() {

  const navigate = useNavigate()
  const userToken = localStorage.getItem("token")

  useEffect(() => {

    if (userToken) {

      // navigate("/dashboard", { replace: true })
    } else {
      // navigate("/dashboard/accountOperations/login", { replace: true });
    }
  }, [])

  

  const  myRenderPoint =(point)=> {
    return (
      <>
      <polygon points='30,400 370,200'  className='polygone_line_style1'/>
      </>
    )
  }

  // height: 492px;
  //   width: 293px;
  //   position: absolute;
  //   right: 87px;

  return (
    <div id='page-404' className=' bg-red-600'>


<div className='polygone_line_style'>
      {/* <img src={image1}/> */}
      <svg width="400" height="650" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="550" r="3"
            fill="#D9D9D9" />
          <circle cx="30" cy="520" r="3"
            fill="#D9D9D9" />
          <circle cx="30" cy="490" r="3"
            fill="#D9D9D9" />
          <circle cx="30" cy="460" r="3"
            fill="#D9D9D9" />
          <circle cx="30" cy="430" r="3"
            fill="#D9D9D9" />
          <circle cx="30" cy="400" r="3"
            fill="#D9D9D9" />
        <Polygon renderPoint={myRenderPoint}/>
        </svg>
         {/* <svg width="3000" height="2000" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="30,550 370,200"
          style="stroke:#D9D9D9;stroke-width:1;" />
        <polygon points="30,520 370,200"
          style="stroke:#D9D9D9;stroke-width:1;" />
        <polygon points="30,490 370,200"
          style="stroke:#D9D9D9;stroke-width:1;" />
        <polygon points="30,460 370,200"
          style="stroke:#D9D9D9;stroke-width:1;" />
        <polygon points="30,430 370,200"
          style={"stroke:#D9D9D9;stroke-width:1;"} />
        <polygon points="30,400 370,200"
          style="stroke:#D9D9D9;stroke-width:1;" />
      </svg> */}
      {/* <img src={image1} width="500" height={"500"}/> */}
      </div>
      {/* <svg width="3000" height="2000">
        <polygon points="30,550 370,200"
          style="stroke:#D9D9D9;stroke-width:1;" />
        <polygon points="30,520 370,200"
          style="stroke:#D9D9D9;stroke-width:1;" />
        <polygon points="30,490 370,200"
          style="stroke:#D9D9D9;stroke-width:1;" />
        <polygon points="30,460 370,200"
          style="stroke:#D9D9D9;stroke-width:1;" />
        <polygon points="30,430 370,200"
          style="stroke:#D9D9D9;stroke-width:1;" />
        <polygon points="30,400 370,200"
          style="stroke:#D9D9D9;stroke-width:1;" />
      </svg> */}

      {/* <p>داری دنبال زیر بغل مار میگردی؟</p>
        <img src='/images/404/snake_picture.jpg'/> */}
  {/* <p>صفحه مورد نظر پیدا نشد!</p> */ }
    </div >
  )
}
