import login from './reducers/login'
import navReducer from './reducers/navReducer'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/es/storage';

const loginConfig = {
    key: 'login',
    storage,
    //blacklist: ['user'],
    debug: false //to get useful logging
}

const navReducerConfig = {
    key: 'navReducer',
    storage,
    debug: false //to get useful logging
}

export default {
    login: persistReducer(loginConfig,login),
    navReducer: persistReducer(navReducerConfig,navReducer)
}