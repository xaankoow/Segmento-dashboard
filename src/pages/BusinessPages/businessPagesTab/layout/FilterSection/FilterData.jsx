import DatePicker from 'react-multi-date-picker'
import persian from 'react-date-object/calendars/persian'
import persian_fa from 'react-date-object/locales/persian_fa'

import React from 'react'
import StaticInputText from '../../../../../component/Utils/staticInputText/textInput'
import AuthInput from '../../../../../component/Auth/authInput/AuthInput'
import { ImageContainer } from '../../../../../assets/img/IMG'

export default function FilterData ({
  radioTarget,
  datePickerValues,
  setDatePickerValues,
  inputWidth,
  onChange
}) {
  switch (radioTarget) {
    case 'بدون فیلتر':
      return ''
    case 'آدرس صفحات URLs':
      return (
        <StaticInputText typeInput={'text'} textLabelInput={'آدرس صفحه مورد نظر را وارد کنید:'} staticText={'https://'}
                         placeholder={'www.example.ir'} width={inputWidth} handleChange={onChange}/>
      )

    case 'کلمه کلیدی':
      return (
        <AuthInput typeInput={'text'} placeholder={'کلمه کلیدی مورد نظر را وارد کنید:'} width={inputWidth}
                   handleChange={onChange}/>
      )

    case 'رتبه کلمه کلیدی':

      return (
        <AuthInput
          placeholder={'رتبه کلمه کلیدی مورد نظر را وارد کنید:'}
          maxlength={10}
          pressNumber={true}
          width={inputWidth}
          handleChange={onChange}
        />
      )

    case 'تاریخ بروزرسانی':
      return (
        <div className="flex flex-col">
          <DatePicker
            range
            value={datePickerValues || ''}
            calendar={persian}
            locale={persian_fa}
            calendarPosition="bottom-right"
            onChange={(v) => {
              setDatePickerValues?.(v)
              onChange?.(v)
            }}
            format="YYYY/MM/DD"
            // maxDate={new DateObject()}
            render={(value, openCalendar) => (
              <div
                className="flex justify-start items-center px-3 h-10 border-[1.5px] border-[#D9D9D9] rounded-sm text-center border-b-[#7D7D7D] hover:border-[#7D7D7D] active:border-b-[#0A65CD]"
                onClick={openCalendar}
              >
                <img
                  src={ImageContainer.calendarIco}
                  alt="file_download"
                />
                <span className="text-xs mr-3">{value}</span>
              </div>
            )}
          />
          {datePickerValues?.length < 2 ? <span className="text-red text-s">تاریخ انتخاب شده صحیح نیست</span> : null
          }
        </div>
      )

    case 'وضعیت صفحه':
      return (
        <AuthInput
          placeholder={'عدد درصد وضعیت مورد نظر را وارد کنید:'}
          maxlength={10}
          pressNumber={true}
          width={inputWidth}
        />

      )
    default:
      break
  }
};
