import * as ActionTypes from '../constants/ActionTypes'

const user = {
    'name': 'mochixuan',
    'age': 24,
}

export function doLogin() {
    return dispatch => {
        dispatch(isLogining())
        fetch('https://github.com/')
            .then((res)=>{
                dispatch(loginSuccess(true,user))
            }).catch((err)=>{
                dispatch(loginSuccess(false,null))
            })
    }
}

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