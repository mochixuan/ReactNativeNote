import * as ActionTypes from '../constants/ActionTypes'
import {put,call,takeEvery} from 'redux-saga/effects'

const user = {
    'name': 'mochixuan1',
    'age': 25,
}

function fetchApi() {
    return fetch('https://github.com/')
        .then(response => {
            return user
        })
        .catch(error => {
            return null
        })
}

//在 redux-saga 世界里，所有的 Effect 都必须被 yield 才会执行，所以有人写了
function* doLogin() {
    yield put(isLogining())
    const data = yield call(fetchApi)
    const response = true
    if (data)
        yield put(loginSuccess(true,data))
    else
        yield put(loginSuccess(false,data))
}

function* watchDoLogin1() {
    yield takeEvery('SAGA_LOGIN1',doLogin)
}

export default watchDoLogin1

const isLogining = ()=> {
    return {
        type: ActionTypes.LOGIN_DOING
    }
}

const  loginSuccess = (isSuccess,user) => {
    return {
        type: ActionTypes.LOGIN_DONE,
        isSuccess: isSuccess,
        user: user
    }
}