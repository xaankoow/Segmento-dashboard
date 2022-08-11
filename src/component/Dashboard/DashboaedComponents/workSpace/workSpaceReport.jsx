import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import AuthButton from '../../../Auth/authButton/AuthButton';
import SetTitleTabBrowser from '../../../Utils/SetTitleTabBrowser';

export default function WorkSpaceReport({ stepWorkSpace }) {

    const {
        webAdress,
        keyWord1,
        keyWord2,
        keyWord3,
        keyWord4,
        keyWord5,
        keyWord6,
        keyWord7,
        keyWord8,
        keyWord9,
        keyWord10,
        commercialPage1,
        commercialPage2,
        commercialPage3,
        commercialPage4,
        commercialPage5,
        commercialPage6,
        commercialPage7,
        commercialPage8,
        commercialPage9,
        commercialPage10,
        websitePage1,
        websitePage2,
        websitePage3,
        websitePage4,
        websitePage5,
        websitePage6,
        websitePage7,
        websitePage8,
        websitePage9,
        websitePage10
    } = useSelector(state => state.workSpaceState)

    var keyWords = [keyWord1, keyWord2, keyWord3, keyWord4, keyWord5, keyWord6, keyWord7, keyWord8, keyWord9, keyWord10];
    keyWords = keyWords.filter(value => value.key != "");
    const commercialPages = [commercialPage1, commercialPage2, commercialPage3, commercialPage4, commercialPage5, commercialPage6, commercialPage7, commercialPage8, commercialPage9, commercialPage10].filter(value => value != "");
    const websitePages = [websitePage1, websitePage2, websitePage3, websitePage4, websitePage5, websitePage6, websitePage7, websitePage8, websitePage9, websitePage10].filter(value => value != "");
    // var competitorSite=keyWords.map(value=>value.competitorSite.filter(competitor=>competitor.replace("",null)));
    var competitorSite = keyWords;
    competitorSite.forEach(element => {
        const filterCompetitors = element.competitorSite.filter(value => value != "")
        element.competitorSite = filterCompetitors;
    });
    // debugger

    const numMap = [0, 2, 4, 6, 8]

    // const [{site:"https://example.ir/page1",key:"a"}]
    const data = [{ site: "https://example.ir/page1", key: "a" }, { site: "https://example.ir/page1", key: "a" }]

    const handleCommercialTextPriority = index => {
        switch (index) {
            case 0:
                return "یک"
            case 1:
                return "دو"
            case 2:
                return "سه"
            case 3:
                return "چهار"
            case 4:
                return "پنج"
            case 5:
                return "شیش"
            case 6:
                return "هفت"
            case 7:
                return "هشت"
            case 8:
                return "نه"
            case 9:
                return "ده"

            default:
                break;
        }
    }

    return (
        <Fragment>

            <div>
                <div className='flex gap-6 items-center relative mt-3'>
                    <div className='w-[20px] h-[2px] bg-primary rotate-90 rounded absolute -right-[10px]' />
                    <span className=' text-lg mr-3'>پیکربندی ورک‌اسپیس جدید</span>
                </div>
            </div>
            <div className='p-9'>
                <div className='flex justify-between pl-10 pr-4 py-5 bg-[#10CCAE] rounded-lg'>
                    <div>
                        <p className=' text-xl font-bold text-[#fff] mb-3'>موفقیت آمیز!</p>
                        <p className=' text-xl font-bold text-[#fff]'>کاربر عزیز ورک‌اسپیس جدید شما با موفقیت ایجاد شد!</p>
                    </div>
                    <img src="/img/dashboard/workSpace/headMessageReport/workSpace_report_ico.svg" alt="" className='' />
                </div>
                {/* web site name */}
                <div className='w-full px-48 pb-7'>
                    <div className=' pl-5 py-2 border border-[#D9D9D9] mt-7'>
                        <div className='flex gap-6 justify-between items-center relative'>
                            <div className='w-[20px] h-[2px] bg-primary rotate-90 rounded absolute -right-[10px]' />
                            <span className=' text-sm mr-3'>آدرس وبسایت شما: </span>
                            <span className='text-sm float-left'>{webAdress}</span>
                        </div>
                    </div>
                    {/* site key words */}
                    {stepWorkSpace >= 2 ? (
                        <div className=' pl-5 py-2 border border-[#D9D9D9] mt-7'>
                            <div className='flex gap-6 justify-between items-center relative'>
                                <div className='w-[20px] h-[2px] bg-primary rotate-90 rounded absolute -right-[10px]' />
                                <span className=' text-sm mr-3'>کلمات کلیدی وبسایت:</span>
                            </div>
                            {keyWords.map(item => (
                                <div className=' flex justify-between px-5 mt-2'>
                                    <div className=' w-2/4 pl-3'>
                                        <div className='pl-2'>
                                            <p className=' w-full text-right text-xs'>کلمه کلیدی</p>
                                            <p className=' w-full text-left text-sm mt-3'>{item.key}</p>
                                        </div>
                                    </div>
                                    <div className=' w-2/4 pr-3'>
                                        <div className='pr-2'>
                                            <p className=' w-full text-right text-xs'>سایت مرتبط</p>
                                            <p className=' w-full text-left text-sm mt-3'>{"https://" + webAdress + "/" + item.site}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : null}

                    {/* site commercial page */}
                    {stepWorkSpace >= 3 ? (
                        <div className=' pl-5 py-2 border border-[#D9D9D9] mt-7'>
                            <div className='flex gap-6 justify-between items-center relative'>
                                <div className='w-[20px] h-[2px] bg-primary rotate-90 rounded absolute -right-[10px]' />
                                <span className=' text-sm mr-3'>صفحات تجاری وبسایت:</span>
                            </div>
                            {commercialPages.map((item, index) => (
                                <div className='px-5 mt-2 w-full'>
                                    <div className=''>
                                        <p className=' w-full text-right text-xs'>صفحه تجاری با اولویت {handleCommercialTextPriority(index)} </p>
                                        <p className=' w-full text-left text-sm mt-3'>{"https://" + webAdress + "/" + item}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : null}



                    {/* check speed page */}
                    {stepWorkSpace >= 4 ? (
                        <div className=' pl-5 py-2 border border-[#D9D9D9] mt-7'>
                            <div className='flex gap-6 justify-between items-center relative'>
                                <div className='w-[20px] h-[2px] bg-primary rotate-90 rounded absolute -right-[10px]' />
                                <span className=' text-sm mr-3'>رهگیری سرعت صفحات</span>
                            </div>
                            {websitePages.map(item => (
                                <div className='px-5 mt-2 w-full'>
                                    <div className=''>
                                        <p className=' w-full text-right text-xs'>آدرس صفحه</p>
                                        <p className=' w-full text-left text-sm mt-3'>{"https://" + webAdress + "/" + item}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : null}

                    {/* competitor site */}
                    {stepWorkSpace >= 5 ? (
                        <div className=' pl-5 py-2 border border-[#D9D9D9] mt-7'>
                            <div className='flex gap-6 justify-between items-center relative'>
                                <div className='w-[20px] h-[2px] bg-primary rotate-90 rounded absolute -right-[10px]' />
                                <span className=' text-sm mr-3'>وب‌سایت رقبا</span>
                            </div>
                            <div className=' px-5 mt-2'>
                                {competitorSite.map((item, index) => (
                                    <div className={`flex justify-between ${index > 0 ? "mt-14" : ""}`}>
                                        <div className=' w-2/4 pl-3'>
                                            <div className='pl-2'>
                                                <p className=' w-full text-right text-xs'>کلمه کلیدی</p>
                                                <p className=' w-full text-left text-sm mt-3'>{item.key}</p>
                                            </div>
                                        </div>
                                        <div className=' w-2/4 pr-3'>
                                            {item.competitorSite.map(site => (
                                                <div className='pr-2'>
                                                    <p className=' w-full text-right text-xs'>سایت مرتبط</p>
                                                    <p className=' w-full text-left text-sm mt-3'>{"https://" + webAdress + "/" + site}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : null}


                    <div>
                        <Link to={"/dashboard/easyStart"} className="btn-style mt-7 inline-block"><img className=' ml-3 inline-block' src='/img/dashboard/workSpace/footer/button_ico.svg' />پیشخان</Link>
                    </div>
                </div>
            </div>
            <SetTitleTabBrowser nameSection={"رسید ورک اسپیس"}/>
        </Fragment>
    )
}
