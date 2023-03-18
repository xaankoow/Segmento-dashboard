import React from 'react'
import { ImageContainer } from '../../../../../assets/img/IMG'

export default function index() {

  return (
    <div className=' px-5'>
        <p className='text-title text-sm py-4 text-right'>معیار های سرعت صفحه</p>
        <div className=' grid grid-cols-2 gap-x-20 px-3'>
            {[0,1,2,3,4,5].map(item=>(

            <div className='flex justify-between items-center py-7 border-y border-border'>
                <div className='flex justify-center items-center'>
                    <img src={ImageContainer.yellowSquare} alt="square"/>
                    <span className='pr-5'>Time to Interactive</span>
                </div>
                <div className='text-red text-sm'>
                3.4 ثانیه
                </div>
            </div>
            ))}
            {/* <div className='flex justify-between items-center py-7 border-y border-border'>
                <div className='flex justify-center items-center'>
                    <img src={ImageContainer.yellowSquare} alt="square"/>
                    <span>Time to Interactive</span>
                </div>
                <div className='text-red text-sm'>
                3.4 ثانیه
                </div>
            </div> */}
        </div>
    </div>
  )
}
