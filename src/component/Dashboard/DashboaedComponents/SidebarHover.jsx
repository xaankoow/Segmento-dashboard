import React from 'react';

const SidebarHover = () => {
    const items=["گزارش های منتخب","خرید اشتراک","شروع آسان","خبرخوان","آموزش","پیشنهادات و تخفیف ها","پشتیبانی و تیکت","انتخاب سرویس"]
    return (
        <>
           {
               items.map(item=> {
              return <div className='SidebarHoverBox'>
                        <span className='Icons'></span> 
                        <span>{item}</span>
                    </div>
            })
           }
        </>
    );
}

export default SidebarHover;
