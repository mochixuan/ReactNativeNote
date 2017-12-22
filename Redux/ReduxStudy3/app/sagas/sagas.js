import * as ActionTypes from '../constants/ActionTypes'
import {put,call,takeEvery} from 'redux-saga/effects'

const user = {
    'name': 'mochixuan',
    'age': 24,
}

function fetchApi() {
    return fetch('https://github.com/')
        .then(response => {response})
        .catch(error => {error})
}

//在 redux-saga 世界里，所有的 Effect 都必须被 yield 才会执行，所以有人写了
function* doLogin() {
    yield put(isLogining())
    const data = yield call(fetchApi)
    const response = true
    if (response)
        yield put(loginSuccess(true,user))
    else
        yield put(loginSuccess(false,null))
    console.log('====test',data)
}

function* watchDoLogin() {
    yield takeEvery('SAGA_LOGIN',doLogin)
}

export default watchDoLogin

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