import React, { useState } from 'react'
import PageTitle from '../../component/Dashboard/DashboaedComponents/pageTitle/pageTitle'
import FirstTimePage from './FirstTimePage'
import RegisterLinkPage from './RegisterLinkPage'
import WorkSpaceInfo from './WorkSpacesInfoPage'
import ManagementIndexerWorkSpace from './ManagementIndexerWorkSpace'


export default function GoogleIndexer() {

  const [step, setStep] = useState(4);

  const handleShowPage=(step)=>{
    switch (step) {
      //صفحه ای که کاربر برایه اولین بار مشاهده میکند
      case 1:
        return <FirstTimePage/>
        //صفحه ثبت لینک ها
        case 2:
        return <RegisterLinkPage/>
        case 3:
        return <WorkSpaceInfo/>
        case 4:
        return <ManagementIndexerWorkSpace/>
      default:
        break;
    }
  }
  return (
    <>
        <PageTitle title={"‌ایندکسر گوگل"} badgeApi={"GOOGLE_INDEXER_LIMIT"} hasLimit/>
        <div className='px-10 '>
        {handleShowPage(step)}
        </div>
        <index/>
        
    </>
  )
}
