import * as ActionTypes from '../../actionTypes/index'
import { Reducer } from 'redux'
import { I_TrayStore } from '../../../contracts/others/tray/index'
import { T_StoreActionResponse } from './../../../contracts/base/index'

const initialState: I_TrayStore = {
  activeTraySection: ``,
}

export const trayReducer: Reducer<I_TrayStore, T_StoreActionResponse> = (
  state = initialState,
  action,
): I_TrayStore => {
  switch (action?.type) {
    case ActionTypes.SET_TRAY_SECTION:
      {
        return { ...state, activeTraySection: action?.payload?.activeTray }
      }
      break
    default: {
      return state
    }
  }
}
