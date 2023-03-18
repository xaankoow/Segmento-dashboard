import React from 'react'
import BadgeLimitKeyWords from '../../../../../component/Utils/BadgeLimitKeyWords'
import { workSpaceTitle } from '../../../../../component/Utils/workSpaceModal/titleWorkSpaceModal'

export default function index() {
  return (
    <div className="flex gap-6 items-center relative">
    <div className="w-[20px] h-[2px] bg-primary rotate-90 rounded absolute -right-[10px]" />
    <span className="text-sm mr-3">
      {workSpaceTitle(3)}
    </span>
    <div className="h-5">
      <BadgeLimitKeyWords api={3} />
    </div>
  </div>
  )
}
