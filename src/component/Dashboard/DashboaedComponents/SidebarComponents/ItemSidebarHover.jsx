import React from 'react';
import { useState } from 'react';

const ItemSidebarHover = ({text,icon,textColor,textHover,iconClickHandler}) => {
    return (
       <div className='flex items-center gap-3 text-[#002145] my-5 mr-5 text-sm hover:cursor-pointer hover:text-blue SidebarHoverBox'  >
            <img src={icon} alt='icon' onClick={()=>iconClickHandler()}/>
            <span>{text}</span>
        </div>
     );
}

export default ItemSidebarHover;
