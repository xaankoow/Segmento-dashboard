import React, { useMemo, useState } from 'react'
import { ImageContainer } from '../../../assets/img/IMG'
import DeletedIcon from '../../../assets/img/delete.svg'
import InfoPage from '../../../component/shared/InfoPage'
import GridInfo from '../../../component/shared/GridInfo'
import DataTable from '../../../component/shared/DataTable'
import FilterComponent from './filter'

/* load style component */
import "./style.css";

/* load a icon svg */
import eye_icon from "../../../assets/img/visibility.svg";


export default function FirstTimePage() {

    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);


    const subHeaderComponentMemo = useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };

        return (
            <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
        );
    }, [filterText, resetPaginationToggle]);

    const data = [
        {
            id: 1,
            name: 'ایندکسر خودکار',
            address: '۲۰ آدرس',
            countSend: 'هر روز ۲ بار',
            date: '1401/02/02',
            time: '1401/02/02',
            state: 'درحال بروزرسانی',
        },
    ]
    const columns = [
        {
            id: 'id',
            selector: "id",
            width: "60px",
            name: 'ردیف',
        },
        {
            id: 'name',
            selector: "name",
            name: 'نوع ایندکسر',
        },
        {
            id: 'address',
            selector: "address",
            name: 'تعداد آدرس',
        },
        {
            id: 'countSend',
            selector: "countSend",
            name: 'تناوب ارسال',
        },
        {
            id: 'date',
            selector: "date",
            name: 'تاریخ و ساعت ایجاد',
        },
        {
            id: 'time',
            selector: "time",
            name: 'تاریخ و آخرین بروزرسانی',
        },
        {
            id: 'state',
            selector: "state",
            name: 'وضعیت',
            cell: (row) => (<div className='label' id={row.id}>{row.state}</div>)
        }, {
            id: 'action',
            name: 'عملیات',
            button: true,
            cell: (row) => (<button className='' id={row.id}><img src={eye_icon} alt="مشاهده" className="cursor-pointer" /></button>)
        },
    ]

    return (
        <div className='indexer-wrapper'>
            <InfoPage title="برای ابزار ایندکسر گوگل  لطفا به نکات زیر توجه کنید: ">
                <li>نمونه متن برای نوشتن نکات مهم برای ابزار ایندکسر گوگل</li>
                <li>نمونه متن برای نوشتن نکات مهم برای ابزار ایندکسر گوگل</li>
            </InfoPage>
            <GridInfo
                items={
                    [{
                        title: 'ورک اسپیس:',
                        value: 'https://segmento.ir',
                    },
                    {
                        title: 'کل آدرس‌های ایندکس شده:',
                        value: '150',
                        unit: 'آدرس'
                    },
                    {
                        title: 'باقی مانده اشتراک:',
                        value: '150',
                        unit: 'آدرس'
                    },
                    {
                        title: 'تعداد سایت مپ:',
                        value: '1',
                        unit: 'مپ'
                    },
                    {
                        title: 'سهم ایندکسر خودکار:',
                        value: '150',
                        unit: 'آدرس'
                    },
                    {
                        title: 'سهم ایندکسر دستی:',
                        value: '150',
                        unit: 'آدرس'
                    }
                    ]
                }
            />
            <DataTable
                headerComponent={subHeaderComponentMemo}
                cells={columns} pagination rows={data} />
            <button type="button" class="text-white mt-5  float-left text-[#F35242] bg-[#F35242]/20 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 mr-2 mb-2">
                <img className='ml-2' src={DeletedIcon} alt="" />
                حذف
            </button>
        </div>
    )
}
