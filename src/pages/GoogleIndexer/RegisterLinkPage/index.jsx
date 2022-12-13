import React from 'react'
import { useState } from 'react'
import AutoSection from '../AddIndexerLink/AutoSection'
import ManualSection from '../AddIndexerLink/ManualSection'
import HeaderRegisterLinkPage from './HeaderRegisterLinkPage'

export default function Index() {
  const [selectedSection, setSelectedSection] = useState("manual")
  return (
    <div>
      <HeaderRegisterLinkPage />
      <div className=' mt-7'>
        <div className=' inline-block'>
          <div className='flex items-center pr-6 cursor-pointer' onClick={() => setSelectedSection("manual")}>
            <input type="radio" name="sectionSelecting" id="" checked={selectedSection == "manual" ? true : false} />
            <span>ایندکسر دستی</span>
          </div>
        </div>
        <ManualSection disableSection={selectedSection != "manual" ? true : false} />
      </div>
      <div className=' mt-7'>
        <div className='inline-block'>
          <div className='flex items-center pr-6 cursor-pointer' onClick={() => setSelectedSection("auto")}>
            <input type="radio" name="sectionSelecting" id="" checked={selectedSection == "auto" ? true : false} />
            <span>ایندکسر خودکار</span>
          </div>
        </div>
        <AutoSection disableSection={selectedSection != "auto" ? true : false} />
      </div>
    </div>
  )
}
