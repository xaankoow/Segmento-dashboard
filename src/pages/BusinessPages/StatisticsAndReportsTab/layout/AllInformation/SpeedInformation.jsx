import React from "react";
import { ImageContainer } from "../../../../../assets/img/IMG";

export default function index({
  timeToInteractive,
  totalBlockingTime,
  cumulativeLayoutShift,
  firstContentfulPaint,
  speedIndex,
  largestContentfulPaint,
}) {

    const detailsInfo=[
        {title:"Time to Interactive",data:timeToInteractive,img:ImageContainer.yellowSquare},
        {title:"First Contentful Paint",data:firstContentfulPaint,img:ImageContainer.redTriangle},
        {title:"Total Blocking Time",data:totalBlockingTime,img:ImageContainer.greenCircle},
        {title:"Speed Index",data:speedIndex,img:ImageContainer.redTriangle},
        {title:"Cumulative Layout Shift",data:cumulativeLayoutShift,img:ImageContainer.yellowSquare},
        {title:"Largest Contentful Paint",data:largestContentfulPaint,img:ImageContainer.redTriangle},
    ]
    
  return (
    <div className=" px-5">
      <p className="text-title text-sm py-4 text-right">معیار های سرعت صفحه</p>
      <div className=" grid grid-cols-2 gap-x-20 px-3">
        {detailsInfo.map((item) => (
          <div className="flex justify-between items-center py-7 border-y border-border">
            <div className="flex justify-center items-center">
              <img src={item.img} alt="square" />
              <span className="pr-5">{item.title}</span>
            </div>
            <div className="text-red text-sm">{item.data}</div>
          </div>
        ))}
        {/* <div className='flex justify-between items-center py-7 border-y border-border'>
                <div className='flex justify-center items-center'>
                    <img src={ImageContainer.yellowSquare} alt="square"/>
                    <span>Time to Interactive</span>
                </div>
                <div className='text-red text-sm'>
                3.4 ثانیه
                </div>
            </div> */}
      </div>
    </div>
  );
}
