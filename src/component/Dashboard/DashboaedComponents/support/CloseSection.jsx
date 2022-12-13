import React from 'react'

export default function CloseSection({ showCloseBaner }) {
  return (
    <>
      {
        showCloseBaner ?
          <div className='m-auto rounded-lg my-5 bg-red max-w-5xl'>
            <p className=' py-7 text-xl text-center text-[#fff]'>این تیکت بسته شده است. جهت بازگشایی آن، باید پاسخی ارسال کنید.</p>
          </div> : null
      }
    </>
  )
}
