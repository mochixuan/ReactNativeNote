import {applyMiddleware,createStore,compose} from 'redux'
import rootReducers from '../reducers/index'
import thunk from 'redux-thunk'
import storage from 'redux-persist/es/storage';  // default: localStorage if web, AsyncStorage if react-native
import {persistStore,persistCombineReducers} from 'redux-persist'
import persist from '../index'
import reconciler from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import createSagaMiddleware from 'redux-saga'
import sagas from '../sagas/index'

const logger = store => next => action => {
    if (typeof action === 'function') console.log('dispatching a function');
    else console.log('dispatch',action);
    let result = next(action);
    console.log('next state',store.getState());
    return result;
}

const crashReporter = store => next => action => {
    try {
        return next(action)
    } catch (err) {
        console.error('Caught an exception!', err)
        Raven.captureException(err, {
            extra: {
                action,
                state: store.getState()
            }
        })
        throw err
    }
}

const sagaMiddleware = createSagaMiddleware()

let middlewares = [
    logger,
    crashReporter,
    thunk,
    sagaMiddleware
]

const config = {
    key: 'root',
    storage,
    stateReconciler: reconciler,
    //blacklist: ['login'],
    debug: false //to get useful logging
}

const reducers = persistCombineReducers(config,persist)
const enhances = [applyMiddleware(...middlewares)]

export default configureStore = (initialState)=> {

    const store = createStore(reducers,initialState,compose(...enhances))
    persistStore(store)
    sagaMiddleware.run(sagas)
    return store
}