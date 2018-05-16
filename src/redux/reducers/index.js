import { handleActions } from 'redux-actions'

const configState = {
  alert: {
    show: false,
    content: ''
  }
}
export const config = handleAction({
  SHOW_ALERT: (state, action) => {
    
  }
})