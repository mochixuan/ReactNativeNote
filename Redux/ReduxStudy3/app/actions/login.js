import * as ActionTypes from '../constants/ActionTypes'

const user = {
    'name': 'mochixuan',
    'age': 24,
}

/**
 * dispatch是上一个函数redux-thunk传来的参数
 *
 * export default function thunkMiddleware({ dispatch, getState }) {
       return next => action => {
          if (typeof action === 'function') {
              return action(dispatch, getState);
          }
        return next(action);
      };
 }
 // redux-thunk的源码
 *
 * 管道机制（pipeline）的例子
 * @returns {function(*)}
 */
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