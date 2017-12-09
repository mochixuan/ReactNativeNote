import * as ActionTypes from '../constants/ActionTypes'

const initialState = {
    status: ActionTypes.LOGIN_INIT,
    isSuccess: false,
    user: null
}

export default login = (state = initialState,action) =>{
    switch (action.type) {
        case ActionTypes.LOGIN_INIT:
            return Object.assign({},state,{
                status: ActionTypes.LOGIN_INIT,
                isSuccess: false,
                user: null
            });
        case ActionTypes.LOGIN_DOING:
            return Object.assign({},state,{
                status: ActionTypes.LOGIN_DOING,
                isSuccess: false,
                user: null
            });
        case ActionTypes.LOGIN_DONE:
            return Object.assign({},state,{
                status: ActionTypes.LOGIN_DONE,
                isSuccess: true,
                user: action.user
            });
        default:
            return state;
    }
}