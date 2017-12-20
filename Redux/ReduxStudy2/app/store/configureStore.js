import {applyMiddleware,createStore,compose} from 'redux'
import rootReducers from '../reducers/index'
import thunk from 'redux-thunk'
import {AsyncStorage} from 'react-native'
import storage from 'redux-persist/es/storage';  // default: localStorage if web, AsyncStorage if react-native
import {persistStore,persistCombineReducers} from 'redux-persist'

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

let middlewares = [
    logger,
    crashReporter,
    thunk
]

const config = {
    key: 'root',
    storage,
    debug: false //to get useful logging
}

const reducers = persistCombineReducers(config,rootReducers)
const enhances = [applyMiddleware(...middlewares)]

const testAsgn = async() => {
    await storage.getItem("persist:root")
        .then((data)=>{
            console.log("======root1",data)
        }).catch((error)=>{
        console.log("======root2",error)
    })
}



export default configureStore = (initialState)=> {
    testAsgn()
    const store = createStore(reducers,initialState,compose(...enhances))
    persistStore(store,null,null)
    return store
}