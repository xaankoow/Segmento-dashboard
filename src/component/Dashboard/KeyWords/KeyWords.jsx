import React from 'react'
import AlphabetKeyWord from '../DashboaedComponents/AlphabetKeyWord/AlphabetKeyWord'
import SearchBox from '../DashboaedComponents/SearchBox/SearchBox'
import Table from '../DashboaedComponents/TableData/TableData'
import KeyWordsSearch from '../KeyWordsSearch/KeyWordsSearch'

export default function KeyWords() {
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
        <div className='pt-3 flex flex-col justify-center items-center bg-[#ffffff]'>
            <SearchBox/>
            <div className="flex mt-5 justify-between w-[97%]">
                <Table data={tableData}/>
                <div className='flex flex-col items-center w-[334px]'>
                    <KeyWordsSearch/>
                    <AlphabetKeyWord/>
                </div>
                
            </div>
        </div>
        <button className='btn-style mr-5 mt-5 flex gap-3'><img src='./img/dashboard/table/cached.svg' alt=''/>تولید بیشتر</button>
   </> 
  )
}
