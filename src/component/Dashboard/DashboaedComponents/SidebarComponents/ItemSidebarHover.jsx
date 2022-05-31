import React from 'react';
import { useState } from 'react';

const ItemSidebarHover = ({text,icon,textColor,textHover}) => {
    return (
       <div className='SidebarHoverBox'  >
            <img src={icon} alt='icon'/>
            <span>{text}</span>
        </div>
     );
}

export default ItemSidebarHover;
