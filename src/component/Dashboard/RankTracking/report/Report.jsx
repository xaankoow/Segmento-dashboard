import './report.css';
import React, { Fragment, useEffect, useState } from "react";
import pishkhan_svg from "../../../../assets/img/dashboard/nav_right/pishkhan.svg";
import segmento_logofa_svg from "../../../../assets/img/dashboard/header/segmento-logofa.svg";
import startEasyStartArrow_svg from '../../../../assets/img/dashboard/EasyStartPage/startEasyStartArrow.svg'


export default function Report() {

  return (
    <>
      <div className="rankReport">
        <div className='rankReport__container'>
          <div className="header">
            <div className='header__title'>
              <div>سگمنتو; ابزار سئو ایرانی</div>
              <div>segmento.ir</div>
            </div>
            <img src={segmento_logofa_svg} className='header__logo' />
            <div className='header__date'>
              <div className='kv'>
                <div className='kv__key'>تاریخ گزارش:</div>
                <div className='kv__value'>1401/03/26</div>
              </div>
              <div className='kv'>
                <div className='kv__key'>تاریخ انقضا:</div>
                <div className='kv__value'>1401/03/26</div>
              </div>
            </div>

          </div>
          <div className="rankReport__content">

            <div className="rankReport__table">
              <div className='table__row'>

                <div className='kv'>
                  <div className='kv__key'>آدرس وبسایت:</div>
                  <div className='kv__value'>www.example.ir</div>
                </div>

                <div className='kv'>
                  <div className='kv__key'>تعداد کلمات کلیدی:</div>
                  <div className='kv__value'>10 کلمه</div>
                </div>

                <div className='kv'>
                  <div className='kv__key'>میانگین رتبه کلمات کلیدی:</div>
                  <div className='kv__value'>رتبه 8</div>
                </div>

                <div className='kv'>
                  <div className='kv__key'>تعداد سایت رقبا:</div>
                  <div className='kv__value'>10 سایت</div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="rankReport__actions">
          <button class="action btn-style w-50 flex justify-between">
            <img src={startEasyStartArrow_svg} />
            <div> اشتراک گزاری</div>
          </button>
          <button class="action btn-style w-50 flex justify-between">
            <img src={startEasyStartArrow_svg} />
            <div> ذخیره</div>
          </button>
        </div>
      </div>

    </>
  );
}
