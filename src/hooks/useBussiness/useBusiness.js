import { useReducer } from 'react'
import { ACTION_TYPES, initialState, reducer } from './reducer'
import { useSelector } from 'react-redux'
import { BUSINESS_PAGE_FILTER_TABEL_BUSINESS_TAB as lableEnum } from '../../variables/businessPages'
import dayjs from 'dayjs'

export const useBusiness = () => {
  const [state, localDispatch] = useReducer(reducer, initialState)
  const { businessPages } = useSelector(state => state.businessPagesState)

  const changeFilterName = (name) => {
    localDispatch({ type: ACTION_TYPES.CHANGE_FILTER_NAME, payload: name })
  }

  const changeFilterValue = (value) => {
    localDispatch({ type: ACTION_TYPES.CHANGE_FILTER_VALUE, payload: value })
  }

  const submitFilter = () => {
    localDispatch({ type: ACTION_TYPES.SUBMITTED_FILTER_VALUE })
  }

  const setDeleteValue = (value) => {
    localDispatch({ type: ACTION_TYPES.SET_DELETE_VALUE, payload: value })
  }

  const setModalValue = (value) => {
    localDispatch({ type: ACTION_TYPES.SET_MODAL_VALUE, payload: value })
  }

  const setDatepickerValue = (value) => {
    localDispatch({ type: ACTION_TYPES.SET_DATE_PICKER_VALUE, payload: value })
  }

  const filterResponse = () => {
    const data = businessPages.response?.data?.data
    const { submittedFilterValue: value, submittedFilterName: name, submittedDatePicker: date } = state.filters
    if ((!['', undefined, null].includes(value) || name === lableEnum[3]) && businessPages.status === 'success') {
      return data.filter((item) => {
        switch (name) {
          case lableEnum[0]:
            return item.link?.includes(value?.target?.value || '')
          case lableEnum[1]:
            return item.keyword?.includes(value)
          case lableEnum[2]:
            return item.position?.toString().includes(value)
          case lableEnum[3]: {
            const [a, b] = date
            const dateA = dayjs(`${a.year}/${a.month}/${a.day}`, { jalali: true }).calendar('gregory').format()
            const dateB = dayjs(`${b.year}/${b.month}/${b.day}`, { jalali: true }).calendar('gregory').format()
            return dayjs(item.update_at).isBetween(dateA, dateB)
          }
          case lableEnum[4]:
            return item.page_status?.toString().includes(value)

        }
        return false
      })
    }
    return data || []
  }
  return {
    state,
    actions: {
      changeFilterName,
      changeFilterValue,
      submitFilter,
      setDeleteValue,
      setModalValue,
      setDatepickerValue
    },
    business: {
      status: businessPages.status,
      data: filterResponse()
    }
  }
}
