import {applyMiddleware,createStore,compose} from 'redux'
import reducers from '../reducers/index'
import thunk from 'redux-thunk'

/**
 * 自定义中间件
 * store 存储树 传入的参数 next应该是下一个中间件处理器
 * let next = store.dispatch
 * createStore() 的第二个参数是可选的, 用于设置 state 初始状态
 * 类似于递归
 * 每个 middleware 接受 Store 的 dispatch 和 getState 函数作为命名参数，并返回一个函数。该函数会被传入 被称为 next 的下一个 middleware 的 dispatch 方法，并返回一个接收 action 的新函数，这个函数可以直接调用 next(action)，或者在其他需要的时刻调用，甚至根本不去调用它。调用链中最后一个 middleware 会接受真实的 store 的 dispatch 方法作为 next 参数，并借此结束调用链。所以，middleware 的函数签名是 ({ getState, dispatch }) => next => action
 */
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
//相当于说接受到dispatch发送来的action先经过thunk再createStore相当于rx转换数据/函数类型
//const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)

export default configureStore = (initialState) => {

    //相当于合并数据，就类似于Object.assign()
    //const store = createStoreWithMiddleware(reducers,initialState)

    const store = createStore(reducers,undefined,compose(applyMiddleware(...middlewares)))

    return store
}