import React, { useState } from 'react'
import { Line,Bar } from 'react-chartjs-2';
import { ImageContainer } from '../../../../../assets/img/IMG';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import ToolTip from '../../../../Utils/ToolTip';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export default function MiniChartCardView({
  options,
  data,
  toolTipText="toolTipText",
  title="title",
  footerRightBoxTitle="right title",
  footerLeftBoxTitle="left title",
  footerRightBoxContentText="RContent",
  footerLeftBoxContentText="LContent",

}) {
    const [showToolTip, setShowToolTip] = useState(true);
  return (
    <div className="well well--active border  border-border relative hover:shadow-[0px_4px_8px_0px_rgb(0,0,0,0.14)] hover:border-orgWhite transition-all">
    <div className=" absolute left-1 top-1">
      <img 
      src={ImageContainer.infoUtils}
       alt="section info"
        className=" w-3 h-3"
        data-tip={toolTipText}
      data-type="light"
      data-place="top"
      data-class="sizeClass"
      onMouseEnter={() => setShowToolTip(true)}
      onMouseLeave={() => {
        setShowToolTip(false);
        setTimeout(() => setShowToolTip(true), 0);
      }}
        />
    </div>
    <div className="well__content">
      <div className="well__header">
        <div className="m-auto text-sm text-title">{title}</div>
        {/* <div className="well__date">روزانه</div> */}
      </div>
      <div className="well__chart">
      <Line options={options} data={data} height="200px"/>
      {/* <Bar /> */}
      
      </div>
      <div className="well__more mb-3">

<div className=''>
<span className=' text-s text-gray'>{footerRightBoxTitle}</span>
<div className=' w-20 h-8 flex flex-row justify-around rounded-lg items-center bg-lightBlue'>
  <span className='text-xs text-gray'>{footerRightBoxContentText}</span>
  <img src={ImageContainer.directionOfTheGreenValue} alt="green value" className=' '/>
  {/* <img src={ImageContainer.directionOfTheRedValue} alt="red value" /> */}
</div>
</div>
<div className=''>
<span className=' text-s text-gray'>{footerLeftBoxTitle}</span>
<div className=' w-20 h-8 flex flex-row justify-around rounded-lg items-center bg-lightBlue'>
  <span className='text-xs text-gray'>{footerLeftBoxContentText}</span>
  <img src={ImageContainer.directionOfTheGreenValue} alt="green value" />
</div>
</div>
      </div>
    </div>
    <div className="w-full py-1 bg-sectionDisable absolute bottom-0 cursor-pointer">
      <img src={ImageContainer.moveDownArrow} alt="arrow bottom" className='m-auto '/>
    </div>
    {showToolTip && <ToolTip />}
  </div>
  )
}
