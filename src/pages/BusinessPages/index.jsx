import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TabMenu from '../../component/Dashboard/DashboaedComponents/tabMenu/TabMenu'
import { getBusinessPageAction } from '../../component/Redux/Action/Business.action'
import BusinessPagesTab from './businessPagesTab/BusinessPagesTab'
import StatisticsAndReportsTab from './StatisticsAndReportsTab/StatisticsAndReportsTab'

export default function BusinessPages () {

  const uuid = useSelector((state) => state.workSpaceState.webAdressUuid)
  const dispatch = useDispatch()
  useEffect(() => {
    if (![null, undefined, ''].includes(uuid)) {
      dispatch(getBusinessPageAction())
    }
  }, [uuid])

  const tabContent = [
    {
      title: 'آمار و گزارش',
      content: <StatisticsAndReportsTab/>,
    },
    {
      title: 'صفحات تجاری',
      content: <BusinessPagesTab/>,
    },
  ]

  return (

    <TabMenu
      tabsContent={tabContent}
      title={'صفحات تجاری'}
      // amountOfData={"isKeyword"}
    />

  )
}


