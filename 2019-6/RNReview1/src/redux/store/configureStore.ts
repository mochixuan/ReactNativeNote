import { applyMiddleware, compose, createStore } from 'redux'
import { persistStore } from 'redux-persist'
import createSageMiddleware from 'redux-saga'
import { allReducers } from '../reducers'
import { allSages } from '../saga'

const sageMiddleware = createSageMiddleware()

const middleWares = [
  // logger,
  // crashReporter,
  sageMiddleware
]

const enhances = [applyMiddleware(...middleWares)]

const configureStore = (initialState?: any) => {
  const store = createStore(allReducers, initialState, compose(...enhances))
  persistStore(store)
  sageMiddleware.run(allSages)
  return store
}

export { configureStore }
