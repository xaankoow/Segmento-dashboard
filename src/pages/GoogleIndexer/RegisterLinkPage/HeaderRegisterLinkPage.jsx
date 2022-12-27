import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import ComboBox from '../../../component/shared/comboBox/ComboBox';
import HorizontalBeforeText from '../../../component/shared/Text/HorizontalBeforeText'
import { parentHorizontalLineInBeforTextStyleIndexer } from '../../../variables/indexer';

export default function HeaderRegisterLinkPage() {

    const { allWorkSpace } = useSelector((state) => state.workSpaceState);

    const [workSpaceComboSelected, setWorkSpaceComboSelected] = useState("")
    return (
        <div className=' '>
            <div className=' border border-border m-auto py-7 pl-4 rounded-lg mt-10'>
                <div>
                    <div className={parentHorizontalLineInBeforTextStyleIndexer}>
                        <HorizontalBeforeText text={"ورک‌اسپیس انتخاب  شده "} />
                    </div>
                    <div className=' w-80 inline-block'>
                        https://segmento.ir
                    </div>
                </div>
                <br />
                <div className='flex justify-evenly items-center'>
                    <div className=' w-60 min-w-[240px]'>
                        <div className=' -mb-2'>
                            <HorizontalBeforeText text={`تعداد لینک های اضافه شده `} />
                        </div>
                        <span className='text-gray-500 pr-4 -mt-1 text-sm'>( در هر درخواست ) </span>
                    </div>
                    <div className='flex justify-around border basis-full border-border py-1 px-1 rounded-lg'>
                        <span className='text-xs py-4 text-gray-500'>
                            اضافه شده:
                            <span className='text-title pr-2'>
                                {5} لینک
                            </span>
                        </span>
                        <div className='  border border-border inline-block'></div>
                        <span className='text-xs py-4 text-gray-500'>
                            باقی مانده مجاز روزانه:
                            <span className='text-title pr-2'>
                                {5} آدرس
                            </span>
                        </span>
                        <div className='text-gray-500 border border-border inline-block'></div>
                        <span className='text-gray-500  text-xs py-4'>
                            باقی مانده اشتراک:
                            <span className='text-title pr-2'>
                                {5} لینک
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
