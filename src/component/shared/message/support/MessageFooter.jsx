import React from 'react'
import HappyReactionImg from '../../../../assets/img/dashboard/support/messageBox/footer/mood_happy.svg'
import badReactionImg from '../../../../assets/img/dashboard/support/messageBox/footer/mood_bad.svg'

export default function MessageFooter({type,attachment}) {
  return (
    <div className=' border-t border-silver h-12 mx-4'>
      <div className={`${ type=="admin"?"float-left":"float-right"} h-full`}>
        <div className='flex justify-between items-center ml-5 h-full'>
          <span className=' text-xs text-title'>آیا از پاسخ کارشناس راضی بودید؟</span>
          <div>
            <img src={HappyReactionImg} alt="happy reaction" className='h-5 w-5 inline-block mr-5 grayscale hover:grayscale-0 cursor-pointer'/>
            <img src={badReactionImg} alt=" bad reaction" className='h-5 w-5 inline-block mr-5 grayscale hover:grayscale-0 cursor-pointer'/>
          </div>
        </div>
      </div>
    </div>
  )
}
