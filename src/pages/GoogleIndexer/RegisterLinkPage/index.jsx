import React from 'react'
import { useState } from 'react'
import AutoSection from '../AddIndexerLink/AutoSection'
import ManualSection from '../AddIndexerLink/ManualSection'
import HeaderRegisterLinkPage from './HeaderRegisterLinkPage'

import InfoPage from '../../../component/shared/InfoPage'


export default function Index() {
  const [selectedSection, setSelectedSection] = useState("manual")
  return (
    <div>
      <InfoPage title="برای ابزار ایندکسر گوگل  لطفا به نکات زیر توجه کنید: ">
        <li>نمونه متن برای نوشتن نکات مهم برای ابزار ایندکسر گوگل</li>
        <li>نمونه متن برای نوشتن نکات مهم برای ابزار ایندکسر گوگل</li>
      </InfoPage>
      <HeaderRegisterLinkPage />
      <div className='mt-7'>
        <ManualSection disableSection={selectedSection != "manual" ? true : false} />
      </div>
    </div>
  )
}
