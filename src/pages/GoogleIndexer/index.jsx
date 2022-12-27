import React, { useState, useEffect } from 'react'
import PageTitle from '../../component/Dashboard/DashboaedComponents/pageTitle/pageTitle'
import FirstTimePage from './FirstTimePage'
import RegisterLinkPage from './RegisterLinkPage'
import WorkSpaceInfo from './WorkSpacesInfoPage'
import ManagementIndexerWorkSpace from './ManagementIndexerWorkSpace'


export default function GoogleIndexer() {

  const [step, setStep] = useState(4);

  const handleTabChange = (e) => {
    e.preventDefault()
    let pageIndex = parseInt(e.target.dataset.page)
    setStep(pageIndex)
  }

  const handleShowPage = (step) => {
    switch (step) {
      case 1:
        return <FirstTimePage />
      case 2:
        return <RegisterLinkPage />
      case 3:
        return <WorkSpaceInfo />
      case 4:
        return <ManagementIndexerWorkSpace />

      default:
        break;
    }
  }



  return (
    <>
      <PageTitle title={"‌ایندکسر گوگل"} badgeApi={"GOOGLE_INDEXER_LIMIT"} />
      <div class="text-sm font-medium mb-5 text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul class="flex flex-wrap -mb-px">
          <li class="mr-2">
            <a data-page="1" onClick={(e) => handleTabChange(e)} className={`${step == 1 ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600'} page-tab inline-block p-4 rounded-t-lg border-b-2  dark:text-blue-500 dark:border-blue-500`}>لیست کل درخواست ها</a>
          </li>
          <li class="mr-2">
            <a data-page="3" onClick={(e) => handleTabChange(e)} className={`${step == 3 || step == 4 ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600'} page-tab inline-block p-4  rounded-t-lg border-b-2  dark:text-blue-500 dark:border-blue-500`} aria-current="page">ایندکسر خودکار</a>
          </li>
          <li class="mr-2">
            <a data-page="2" onClick={(e) => handleTabChange(e)} className={`${step == 2 ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-600'} page-tab inline-block p-4  rounded-t-lg border-b-2  dark:text-blue-500 dark:border-blue-500`} aria-current="page">ایندکسر دستی</a>
          </li>
        </ul>
      </div>
      <div className='px-10 '>
        {handleShowPage(step)}
      </div>
    </>
  )
}
