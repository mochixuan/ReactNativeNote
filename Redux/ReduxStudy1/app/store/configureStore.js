import {applyMiddleware,createStore,compose} from 'redux'
import rootReducers from '../reducers/index'
import thunk from 'redux-thunk'
import storage from 'redux-persist/es/storage'; // default: localStorage if web, AsyncStorage if react-native
import {persistStore,persistCombineReducers} from 'redux-persist'

let middlewares = [
    thunk
]

const config = {
    key: 'root',
    storage,
    debug: true //to get useful logging
}

const reducers = persistCombineReducers(config,rootReducers)
const enhances = [applyMiddleware(...middlewares)]
const initialState = {}
const persistConfig = {enhances}
const store = createStore(reducers,undefined,compose(...enhances))
const persistor = persistStore(store,persistConfig,()=>{

})

export default configureStore = (initialState) => {
    return {persistor,store}
}