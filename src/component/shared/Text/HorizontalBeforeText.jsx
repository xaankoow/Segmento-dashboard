import React from 'react'
import './style.css'

export default function HorizontalBeforeText({ text }) {
    return (
        <div>
            <div className={`flex border-right gap-2 items-center pr-4  py-3 relative`}>
                <span className="text-sm">{text}</span>
            </div>
        </div>
    )
}
