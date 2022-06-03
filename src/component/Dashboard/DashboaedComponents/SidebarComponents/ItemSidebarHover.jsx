import React from 'react';
import { useState } from 'react';

const ItemSidebarHover = ({text,icon,textColor,textHover,iconClickHandler}) => {
    return (
       <div className='SidebarHoverBox'  >
            <img src={icon} alt='icon' onClick={()=>iconClickHandler()}/>
            <span>{text}</span>
        </div>
     );
}

export default ItemSidebarHover;
