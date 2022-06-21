import React, { useState } from 'react'
import AlphabetKeyWord from '../DashboaedComponents/AlphabetKeyWord/AlphabetKeyWord'
import SearchBox from '../DashboaedComponents/SearchBox/SearchBox'
import Table from '../DashboaedComponents/TableData/TableData'
import KeyWordsSearch from '../KeyWordsSearch/KeyWordsSearch'

export default function KeyWords() {
  
    const tableData=[
        {
          row:1,
          content: "کره محلی باعث چاقی میشود"
        },
        {
          row:2,
          content: "تعبیر خواب کره ی محلی",
        },
        {
          row:3,
          content: "ماندگاری کره محلی"
        },
        {
          row:1,
          content: "کره محلی میهن",
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
          content:  "کره حیوانی محلی قیمت",
        },
        {
          row:3,
          content:"فروش کره محلی گاو"
        },
      ]
      // searchBox Value
      const[searchBoxValue,setSearchBoxValue]=useState("");
      const SearchBoxChangeHandler=(e)=>{
        setSearchBoxValue(e.target.value);
        setSearchBoxHandleClick(false);
       }
       
      // search box click 
      const[searchBoxHandleClick,setSearchBoxHandleClick]=useState(false);
     //filter from searchBox  in table
     const tableDataFiltered=tableData.filter((item)=>{
      if (searchBoxHandleClick && searchBoxValue)
      return item.content.includes(searchBoxValue)
     
     })
    console.log(tableDataFiltered);
    //  secound search
    const[secoundSearchBoxValue,setSecoundSearchBoxValue]=useState("");
    const secoundSearchBoxChangeHandler=(e)=>{
      setSecoundSearchBoxValue(e.target.value);
     }

    //  filter from comboBox
     const[radioClickedHandler,setRadioClickedHandler]=useState("1");
     let comboboxFiltered=[];
     const radioButtonHandler=(e)=>{
          setRadioClickedHandler(e.target.value);
         
         }
         if (radioClickedHandler === "1") {
          comboboxFiltered= tableDataFiltered.filter((item)=>{
            return item.content.includes(searchBoxValue)
          })
        }
        else if (radioClickedHandler === "2") {
          comboboxFiltered= tableDataFiltered.filter((item)=>{
            return item.content.includes(secoundSearchBoxValue)
          })
        }
        else if (radioClickedHandler === "3") {
          comboboxFiltered= tableDataFiltered.filter((item)=>{
            return item.content.includes(searchBoxValue)
          })
        }
        else if (radioClickedHandler === "4") {
          comboboxFiltered= tableDataFiltered.filter((item)=>{
           return !item.content.includes(secoundSearchBoxValue)
          })
        }
        //  Alphabet filtering
    const filteredData=[];
    const[alphabetHandler,setAlphabetHandler]=useState("");
    const handleClick=(e)=>{
         setAlphabetHandler(e.target.innerText);
        }
    const tableAlphabetFiltering=comboboxFiltered.filter((item)=>{
         return item.content.startsWith(alphabetHandler)
       })  
       
     
         
  return (
    <>
        <div className='pt-3 flex flex-col justify-center items-center bg-[#ffffff]'>
            <SearchBox changeHandler={SearchBoxChangeHandler}  handlClick={()=>setSearchBoxHandleClick(true)}/>
         
              <div className="flex flex-col  w-[97%]">
                  {!searchBoxValue || !searchBoxHandleClick  ?<span className="text-right mt-4">هیچ کلمه ای جستجو نکردید!</span> :null}
                  <div  className="flex  justify-between w-full mt-5">
                      <Table data={tableAlphabetFiltering? tableAlphabetFiltering : comboboxFiltered ? comboboxFiltered : tableDataFiltered } NothingSearch={!searchBoxValue || !searchBoxHandleClick  ?  true:false} />
                      <div className='flex flex-col items-center w-[334px]'>
                          <KeyWordsSearch  NothingSearch={!searchBoxValue || !searchBoxHandleClick  ?  true:false} dataItems={comboboxFiltered} secoundSearch={secoundSearchBoxChangeHandler} radioClickedHandler={radioButtonHandler}/>
                          <AlphabetKeyWord handleclick={handleClick}/>
                      </div>
                  </div>
              </div>
            
        </div>
        <button className='btn-style mr-5 mt-5 flex gap-3'><img src='./img/dashboard/table/cached.svg' alt=''/>تولید بیشتر</button>
   </> 
  )
}
