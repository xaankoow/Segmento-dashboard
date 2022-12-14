
import React from 'react'
import "./style.css";

/* props.children is a text type */
/* props.title is a text type*/

const InfoPage = ({ title, children }) => {
    return (
        <div className="top-page-info p-5">
            <p class="tracking-tighter mb-4 text-[#7D7D7D]">{title}</p>
            <ul class="space-y-1 max-w-md list-disc list-inside text-[#7D7D7D]">
                {
                    React.Children.map(children, (child) =>
                        <>{child}</>
                    )
                }
            </ul>
        </div>
    )
}

export default InfoPage