import React from 'react';

const PopUp = ({type,title,text,buttonText}) => {
    return (
        <div className='popUpContainer'>
            <div className='PopUpBox' 
            style={{
                backgroundColor:type==="error" ? "#FF0000" : type==="info" ? "info" : type==="aler" ? "info" :"#10CCAE"
            }}
            >
                <img src={type==="error" ? "../img/dashboard/EasyStartPage/EasySart.svg" : ""} alt="popUpImage" />
            </div>
            <div className='popUpContent'>
                <h3 className='title'>{title}</h3>
                <span className='text'>{text}</span>
                <span className='buttonText'>{buttonText}</span>
            </div>
        </div>
    );
}

export default PopUp;
