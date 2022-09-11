import React from 'react'
import { Link } from 'react-router-dom'

export default function GuideBox({buttonName,text,linkTo,classname}) {
  return (
    <div className={`border border-sectionDisable rounded-lg h-20 px-3 flex items-center justify-between ${classname}`}>
         <span>{text}</span>
         <Link to={linkTo}><button className='btn-style'>{buttonName}</button></Link>
    </div>
  )
}
