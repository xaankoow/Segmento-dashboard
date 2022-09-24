import React from 'react'
import  Polygon  from 'react-polygon'
import { createRenderPoint } from './fun'

export default function CreateRotateLine({ array }) {
    return (
        <div>
            {array != undefined&typeof array=="object"? (
                <div className='polygone_line_style'>
                    <div className='polygone_parent'>
                        <Polygon renderPoint={() => createRenderPoint(array)} />
                    </div>
                </div>
            ) : (
                <>
                <p>لیستی برایه ترسیم خط یافت نشد!</p>
                <p>و یا نوع ورودی صحیح نمیباشد</p>
                </>
            )}

        </div>
    )
}
