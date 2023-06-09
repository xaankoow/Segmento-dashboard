import React from 'react'
import { ImageContainer } from '../../../../../assets/img/IMG'
import AuthButton from '../../../../../component/Auth/authButton/AuthButton'
import ComboBox from '../../../../../component/shared/comboBox/ComboBox'
import Table from '../../../../../component/shared/table/Table'
import {
  BUSINESS_PAGE_FILTER_TABEL_BUSINESS_TAB,
  BUSINESS_PAGE_TABEL_HEADER_ITEM_BUSINESS_TAB,
} from '../../../../../variables/businessPages'
import FilterData from './FilterData'
import MultiProgress from 'react-multi-progress'
import { sampleChartColors } from '../../../../baghShahiRanck/configs/sampleChartData'
import PopUp from '../../../../../component/Utils/PopUp/PopUp'
import SetKeyWordsModal from '../../../addKeyWordModal'
import dayjs from 'dayjs'
import { useBusiness } from '../../../../../hooks'

export default function Index () {
  const {
    actions,
    state,
    business
  } = useBusiness()

  const arrayOfTickets = business.data.map((item, index) => {
    return {
      id: (
        <div className="">
          <div className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">
            <input
              type={'checkbox'}
              className="checkbox rounded border border-[#D9D9D9] bg-[#0A65CD] w-[18px] h-[18px] cursor-pointer hover:border-[#0A65CD] hover:border"
              // className="checkbox rounded border border-[#D9D9D9] bg-[#FCFCFB] w-[18px] h-[18px] cursor-pointer hover:border-[#0A65CD] hover:border"
              onClick={(e) => {
                if (e.target.checked) {
                  actions.setDeleteValue({ data: [...state.deleteItem.data, item], showPopUp: false })
                } else {
                  actions.setDeleteValue(
                    {
                      data: state.deleteItem.data.filter((copyItems) => copyItems != item),
                      showPopUp: false
                    }
                  )
                }

                // handleCheckingInput(e.target.checked, item);
              }}
            />
          </div>
        </div>
      ),
      index: index + 1,
      link:<div className="text-left">{item.link}</div>,
      addingKeyWord: item.keyword === 'ثبت نشده' ? (
        <AuthButton
          textButton={
            <img
              src={ImageContainer.bluePlus}
              alt="blue plus"
              // className="w-4 h-4"
            />
          }
          disabled
          handlerClick={actions.setModalValue}
          setOnclickValue={{ key: [item], showModal: true }}
          classes="btn-secondary m-auto py-3 px-6"
        />
      ) : item.keyword,
      position: <div className="flex justify-center"> {item.position || <AuthButton
        textButton={<img src={ImageContainer.bluePlus}/>}
        classes="btn-secondary py-4 px-6 w-20 h-14"/>}
      </div>,
      updated_at: dayjs(item.updated_at).calendar('jalali').format('YYYY/MM/DD') || 'ثبت نشده',
      pageStatus: (
        <div className={'flex flex-col items-end pb-4'}>
          <span className="text-s">{item.page_status} درصد</span>
          <MultiProgress
            transitionTime={1.2}
            height="10px"
            className={"w-[100px]"}
            elements={[
              {
                // actual:65,
                value: 100 - item.page_status || 0,
                color: '#D9D9D9',
                showPercentage: false,
                fontSize: 9,
                textColor: 'black',
                isBold: false,
              },
              {
                actual: 65,

                value: item.page_status || 0,
                color: item.page_status < 33 ? '#F35242' : item.page_status < 66 ? '#FFCE47' : '#10CCAE',
                showPercentage: false,
                // textColor: "white",
                fontSize: 9,
                isBold: false,
              },
            ]}
            component={({ children, element, ...rest }) => {

              return (
                <>
                  <div

                    {...rest} // adds all styles for rendering the progress bar
                    style={{
                      fontWeight: element.isBold ? 900 : 300,
                    }}>
                    {children}
                    <div className="text-xs">
                    <span className="ml-3 text-s absolute left-0 -top-6">
                      {element?.actual}
                    </span>
                      <i
                        className={` inline-block ${
                          element.color === sampleChartColors.failure
                            ? 'borderBT--red triangle-down'
                            : element.color === sampleChartColors.success
                              ? 'triangle-up'
                              : 'dot'
                        }`}></i>
                    </div>
                  </div>
                </>
              )
            }}
          />
        </div>
      ),
      moreInfo: (
        <div className="flex justify-center">
        <AuthButton
          textButton={<img src={ImageContainer.blueArrowBtn}/>}
          classes="btn-secondary w-20 h-14 mx-0"
        />
        </div>
      ),
    }
  })

  const rowKey = [
    'row.id',
    'row.index',
    'row.link',
    // 'row.addingKeyWord',
    'row.position',
    'row.updated_at',
    'row.pageStatus',
    'row.moreInfo',
  ]

  return (
    <div>
      <header className="flex items-center justify-between h-10 w-full mb-7 mt-10">
        <div className=" w-96">
          <ComboBox
            placeholder={'فیلد جستجو'}
            radioTextItems={BUSINESS_PAGE_FILTER_TABEL_BUSINESS_TAB}
            radioClickedHandler={actions.changeFilterName}
          />
        </div>
        <div className="flex items-center ">
          {state.filters.selectedFilterName !== 'بدون فیلتر' && (
            <span className=" ml-2">مرتب سازی بر اساس</span>
          )}

          <div className=" inline">
            <FilterData
              radioTarget={state.filters.selectedFilterName}
              datePickerValues={state.datePicker}
              setDatePickerValues={actions.setDatepickerValue}
              inputWidth="300px"
              onChange={actions.changeFilterValue}
            />
          </div>

        </div>

        <div className=" inline-block">
          <AuthButton textButton={'اعمال'} handlerClick={actions.submitFilter} classes={"btn-secondary"}/>
        </div>
      </header>

      <Table
        columnItem={BUSINESS_PAGE_TABEL_HEADER_ITEM_BUSINESS_TAB}
        rowsItem={arrayOfTickets}
        rowKey={rowKey}

      />
      {/* <div className=""> */}
      {state.deleteItem.data.length > 0 ? (
        <div className={"mb-16"}>
        <AuthButton
          textButton={
            <>
              <img src={ImageContainer.deleteBtn} className=" ml-4"/>
              توقف رهیگیری
            </>
          }
          handlerClick={actions.setDeleteValue}
          setOnclickValue={{ data: state.deleteItem.data, showPopUp: true }}

          classes="btn-delete mr-auto mt-4"
        />
        </div>
      ) : null}
      {state.deleteItem.showPopUp ? <PopUp

        secoundText={'برای حذف کلی این صفحه باید به بخش مدیریت ورک‌اسپیس مراجعه کنید.'}
        image={ImageContainer.popupError}
        type={'error'}
        title="توجه !"
        text="آیا برای متوقف کردن رهگیری این صفحه تجاری مطمعن هستید؟"
        createFooterTag={
          <div className="flex justify-between items-center mt-14 mb-2 w-full px-4">
            <span
              className=" cursor-pointer text-sm text-shortText"
              onClick={() => actions.setDeleteValue({ ...state.deleteItem, showPopUp: false })}>
              نه! پشیمون شدم
            </span>
            <AuthButton textButton={'باشه، متوقف کن'}/>
          </div>
        }
      /> : null}
      {state.modal.showModal ? <SetKeyWordsModal showModal={actions.setModalValue}/> : null}

      {/* </div> */}
    </div>
  )
}
