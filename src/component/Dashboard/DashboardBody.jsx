import React from 'react'
// import Modal from '../Utils/Modal'

export default function DashboardBody() {
  return (

    <div id='DASHBOARD'>
      <div className='nav_head'>

      </div>
      <div className='body'>
        <div className='main'></div>
        <div className='list_hover'></div>
        <div className='nav_right'>
          <div className='scroller'></div>
          <div className='top'>
            <div className='dashboard input_focus'>
              <div className='testBack'></div>
            </div>
            <div className='analyze'></div>
            <div className='news'></div>
            <div className='servise'></div>
            <div className='youtub'></div>
            <div className='linkedin'></div>
          </div>
          <div className='down'>
            <div className='support'></div>
            <div className='information'></div>
            <div className='line'></div>
            {/* <img src="./img/dashboard/nav_right/xaankoo-logo.svg" className='xaankoo_logo' alt="" /> */}
          </div>
          <div className='xaankoo_logo'></div>
        </div>
      </div>
      {/* <Modal/> */}
    </div>
  )
}
