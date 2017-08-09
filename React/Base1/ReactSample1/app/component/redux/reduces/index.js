import todos from './todos'
import visibilityFilter from './visibilityFilter'
import {combineReducers} from 'redux'

/*
* 所有的 state 都被保存在一个单一对象中
* */
const todoApp = combineReducers({
    todos,
    visibilityFilter,
})

export default todoApp