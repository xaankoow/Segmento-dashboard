import { DateObject } from 'react-multi-date-picker'

export const ACTION_TYPES = {
  CHANGE_FILTER_NAME: 'CHANGE_FILTER_NAME',
  CHANGE_FILTER_VALUE: 'CHANGE_FILTER_VALUE',
  SUBMITTED_FILTER_VALUE: 'SUBMITTED_FILTER_VALUE',
  SET_MODAL_VALUE: 'SET_MODAL_VALUE',
  SET_DELETE_VALUE: 'SET_DELETE_VALUE',
  SET_DATE_PICKER_VALUE: 'SET_DATE_PICKER_VALUE',
}
export const initialState = {
  filters: {
    isDate: false,
    selectedFilterName: 'بدون فیلتر',
    selectedFilterValue: '',
    submittedFilterName: '',
    submittedFilterValue: '',
    submittedDatePicker: undefined,
  },
  modal: {
    key: [],
    showModal: false,
  },
  deleteItem: {
    data: [],
    showPopUp: false
  },
  datePicker: [
    new DateObject().subtract(4, 'days'),
    new DateObject().add(0, 'days')
  ]
}
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.CHANGE_FILTER_NAME:
      return { ...state, filters: { ...state.filters, selectedFilterName: payload } }
    case ACTION_TYPES.CHANGE_FILTER_VALUE:
      return { ...state, filters: { ...state.filters, selectedFilterValue: payload } }
    case ACTION_TYPES.SUBMITTED_FILTER_VALUE:
      return {
        ...state,
        filters: {
          ...state.filters,
          submittedFilterName: state.filters.selectedFilterName,
          submittedFilterValue: state.filters.selectedFilterValue,
          submittedDatePicker: state.datePicker,
        }
      }
    case ACTION_TYPES.SET_MODAL_VALUE:
      return { ...state, modal: payload }
    case ACTION_TYPES.SET_DELETE_VALUE:
      return { ...state, deleteItem: payload }
    case ACTION_TYPES.SET_DATE_PICKER_VALUE: {
      return { ...state, datePicker: payload }
    }
    default:
      return state
  }
}
