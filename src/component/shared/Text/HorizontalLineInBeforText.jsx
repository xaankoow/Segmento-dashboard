import React from 'react'

export default function HorizontalLineInBeforText({ text }) {
    return (
        <div>
            <div className={`flex gap-6 items-center pr-4  py-3 relative`}>
                <div className="w-[20px] h-[2px] bg-primary rotate-90 rounded absolute -right-[9px]" />
                <span className="text-sm">{text}</span>
            </div>
        </div>
    )
}
