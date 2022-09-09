import React, { Fragment } from 'react'
import HappyReactionImg from '../../../../assets/img/dashboard/support/messageBox/footer/mood_happy.svg'
import badReactionImg from '../../../../assets/img/dashboard/support/messageBox/footer/mood_bad.svg'
import { useState } from 'react'

export default function MessageFooter({ type, attachment }) {

  const [moodSelected, setMoodSelected] = useState()
  
  return (
    <div className=' border-t border-silver h-12 mx-4'>
      <div className={`${type == "admin" ? "float-left" : "float-right"} h-full`}>
        <div className='flex justify-between items-center ml-5 h-full'>
          {type == "admin" ? (
            <Fragment>
              <span className=' text-xs text-title'>آیا از پاسخ کارشناس راضی بودید؟</span>
              <div>
                <img src={HappyReactionImg}  onClick={()=>setMoodSelected("happy")} alt="happy reaction" className={`h-5 w-5 inline-block mr-5  grayscale hover:contrast-150 hover:grayscale-0 cursor-pointer ${moodSelected=="happy"&&" grayscale-0"}`} />
                <img src={badReactionImg}  onClick={()=>setMoodSelected("bad")} alt=" bad reaction" className={`h-5 w-5 inline-block mr-5 grayscale hover:contrast-150 hover:grayscale-0 cursor-pointer ${moodSelected=="bad"&&" grayscale-0"}`} />
              </div>
            </Fragment>
          ) : (
            <Fragment>
              <span className=' mr-3 text-s text-silver'>پیوست فایل (1)</span>
              <span className=' mr-8 text-s text-silver'>پیوست فایل (2)</span>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  )
}
