import React from 'react'

export default function ContentText({ typeLimit }) {
  return (
    <div className="text-sm px-4 mt-7 mb-16">{typeLimit == "default" ? (
      <p className=' text-xl text-primaryV1'>کاربر گرامی برای دسترسی به امکانات بیشتر حساب خود را ارتقا دهید.</p>
    ) : typeLimit == "defaultBusiness" ? (
      <p className=' text-xl text-primaryV1'>کاربر گرامی زمان اشتراک شما به پایان رسیده، برای حفظ اطلاعات و تداوم دسترسی به امکانات سگمنتو اشتراک بخرید. </p>
    ) : typeLimit == "business" ? (
      <p className=' text-xl text-primaryV1'>کاربر گرامی منابع اشتراک فعلی شما به پایان رسیده، برای حفظ اطلاعات و تداوم دسترسی به امکانات سگمنتو اشتراک بخرید.</p>
    ) : "مشکل یافت نشد"
    }</div>
  )
}
