import React from 'react'

export default function HorizontalLineInBeforText({ text }) {
    return (
        <div>
            <div className={`flex gap-2 items-center pr-4  py-3 relative`}>
                <svg className='ml-1' width="10" height="10" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4" cy="4" r="4" fill="#0A65CD" />
                </svg>
                <span className="text-sm">{text}</span>
            </div>
        </div>
    )
}
