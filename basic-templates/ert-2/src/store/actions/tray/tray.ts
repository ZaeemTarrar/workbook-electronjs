import * as ActionTypes from './../../actionTypes/index'
import { T_StoreActionResponse } from './../../../contracts/base/index'
import { Dispatch } from 'redux'

export const SetTraySection = (
  dispatch: Dispatch,
  tray: string,
): T_StoreActionResponse => {
  return dispatch({
    type: ActionTypes.SET_TRAY_SECTION,
    payload: {
      traySection: tray,
    },
  })
}
