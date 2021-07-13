import * as ActionTypes from './../../actionTypes/index'
import { T_StoreActionResponse } from './../../../contracts/base/index'
import { Dispatch } from 'redux'

export const FetchTodos = (dispatch: Dispatch): T_StoreActionResponse => {
  return dispatch({
    type: ActionTypes.GET_TODOS,
    payload: {
      todos: null,
    },
  })
}
