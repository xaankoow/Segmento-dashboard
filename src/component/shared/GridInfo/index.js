
// let items = [{
//     title: 'تعداد سایت مپ',
//     value: 0,
//     unit: 'مپ',
// }]

import './style.css'

const GridInfo = ({ items = [] }) => {

    const rows = items.map((x, i) => {
        return i % 3 === 0 ? items.slice(i, i + 3) : null;
    }).filter(x => x != null);

    return (
        items.length > 0 &&
        <div className="grid-info">
            <div className='border basis-full border-border py-1 px-1 rounded-lg'>
                {
                    rows.map((row, index) => {
                        return (
                            <>
                                <div className='flex justify-around'>
                                    {row.map((item, key) => {
                                        return (
                                            <div className='item'>
                                                <div key={key} className='border  border-right border-border inline-block'></div>
                                                <span className='text-xs py-4'>
                                                    {item.title}
                                                    <span className='text-title pr-2'>
                                                        {item.value}
                                                        {item.unit && ` ${item.unit}`}
                                                    </span>
                                                </span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </>
                        )
                    })
                }

            </div>
        </div>

    )
}

export default GridInfo