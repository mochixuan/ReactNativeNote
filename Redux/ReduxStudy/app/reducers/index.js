import {combineReducers} from 'redux'
import login from './login'
import navReducer from './navReducer'

const reducers = combineReducers({
    login,
    navReducer
})

export default reducers

