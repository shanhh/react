import { createAction } from 'redux-actions'
 
// 显示Alert
export const showAlert = createAction('SHOW_ALERT')
// 隐藏Alert
export const hideAlert = createAction('HIDE_ALERT')