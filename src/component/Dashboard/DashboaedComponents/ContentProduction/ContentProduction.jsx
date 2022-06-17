import React from 'react'
import SearchBox from '../SearchBox/SearchBox'
import Table from '../TableData/TableData'

export default function ContentProduction() {
  const tableData=[
    {
      row:1,
      content:" اشتراک 12 ماهه طلایی"
    },
    {
      row:2,
      content:" اشتراک 12 ماهه طلایی"
    },
    {
      row:3,
      content:" اشتراک 12 ماهه طلایی"
    },
    {
      row:1,
      content:" اشتراک 12 ماهه طلایی"
    },
    {
      row:2,
      content:" اشتراک 12 ماهه طلایی"
    },
    {
      row:3,
      content:" اشتراک 12 ماهه طلایی"
    },
    {
      row:1,
      content:" اشتراک 12 ماهه طلایی"
    },
    {
      row:2,
      content:" اشتراک 12 ماهه طلایی"
    },
    {
      row:3,
      content:" اشتراک 12 ماهه طلایی"
    },
  ]
  return (
    <>
      <div className='pt-3 flex flex-col justify-center items-center'>
          <SearchBox/>
          <Table data={tableData}/>
      </div>
      <button className='btn-style mr-5 mt-5 flex gap-3'><img src='./img/dashboard/table/cached.svg' alt=''/>تولید بیشتر</button>
    </>
  )
}
