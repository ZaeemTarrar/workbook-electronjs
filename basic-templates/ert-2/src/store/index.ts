import { createStore, combineReducers } from 'redux'
// import { createLogger } from 'redux-logger'

import { todosReducer } from './reducers/todos/todos'
import { trayReducer } from './reducers/tray/tray'

// const logger = createLogger()

export const rootReducer = combineReducers({
  todos: todosReducer,
  tray: trayReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export const Store = createStore(rootReducer)
