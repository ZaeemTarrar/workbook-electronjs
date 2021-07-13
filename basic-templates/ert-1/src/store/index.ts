import { createStore, combineReducers } from 'redux'
// import { createLogger } from 'redux-logger'

import { todosReducer } from './reducers/todos/todos'

// const logger = createLogger()

export const rootReducer = combineReducers({
  todos: todosReducer,
})

export type AppState = ReturnType<typeof rootReducer>

export const Store = createStore(rootReducer)
