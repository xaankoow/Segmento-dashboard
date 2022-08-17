import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { usetLimit } from '../service/userLimit';

export default function BadgeLimitKeyWords({numFont}) {

    const [datas, setDatas] = useState("");

    const allWords = 100; // TODO : replace static num with api count

    const { resultSetWorkSpace } = useSelector((state) => state.workSpaceState);

    useEffect(() => {
        if (datas == "") pastSelexboxData();
    }, [resultSetWorkSpace.reportStatus])

    const pastSelexboxData = async () => {
        try {
            const { data, status } = await usetLimit();
            setDatas(data.data); //5

        } catch (error) {
            console.log(error);
        }
    };

    const numStyle=`text-[#7D7D7D] text-[${numFont!=undefined?numFont:"14px"}] pt-[5px] pb-[2px]`;
    return (
        <div className="flex items-center text-[#7D7D7D] bg-[#D9D9D9] rounded  px-2 w-full h-full">
            <span className={numStyle}>
                {datas.length != 0 && allWords - datas[4].count}
            </span>
            <hr className="w-4 bg-gray text-[#7D7D7D] rotate-90" />
            <span className={numStyle}>
                {allWords}
            </span>
        </div>
    )
}
