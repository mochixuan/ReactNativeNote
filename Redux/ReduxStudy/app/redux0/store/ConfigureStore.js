import {applyMiddleware,createStore} from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from '../reducers/index'

//相当于说接受到dispatch发送来的action先经过thunk再createStore相当于rx转换数据/函数类型
const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore)

export default ConfigureStore = (initialState) => {
    //相当于合并数据，就类似于Object.assign()
    const store = createStoreWithMiddleware(initialState,reducers)
    return store;
}