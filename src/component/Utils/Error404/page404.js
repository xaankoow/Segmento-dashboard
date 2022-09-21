import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

export default function Page404() {

  const navigate = useNavigate()

  useEffect(() => {

    navigate("/dashboard", { replace: true })
  }, [])


  return (
    <div id='page-404'>

{/* <svg width="3000" height="2000">
<svg width="3000" height="2000">
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
</svg>
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
      {/* <p>صفحه مورد نظر پیدا نشد!</p> */}
    </div>
  )
}
