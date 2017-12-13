import {applyMiddleware,createStore} from 'redux'
import reducers from '../reducers/index'
import thunk from 'redux-thunk'

/**
 * 自定义中间件
 * store 存储树 传入的参数 next应该是下一个中间件处理器
 * 类似于递归
 */
const logger = store => next => action => {
    if (typeof action === 'function') console.log('dispatching a function');
    else console.log('dispatch',action);
    let result = next(action);
    console.log('next state',store.getState());
    return result;
}

let middlewares = [
    logger,
    thunk
]
//相当于说接受到dispatch发送来的action先经过thunk再createStore相当于rx转换数据/函数类型
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)

export default configureStore = (initialState) => {

    //相当于合并数据，就类似于Object.assign()
    const store = createStoreWithMiddleware(reducers,initialState)
    return store
}