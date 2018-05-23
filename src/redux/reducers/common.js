import { handleActions } from 'redux-actions'

const configState = {
  alert: {
    show: false,
    content: ''
  }
}
export const config = handleActions({
  SHOW_ALERT: (state, action) => {
    state.alert.show = true
    state.alert = Object.assign({}, state.alert, action.payload)
    return {...state}
  },
  HIDE_ALERT: (state, action) => {
    state.alert = {
      show: false,
      content: ''
    }
    return {...state}
  }
}, configState)