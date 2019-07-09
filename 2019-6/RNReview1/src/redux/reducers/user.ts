import { IActionType, IUserTree } from '../../impl/IStateTree'
import { USER_CHANGE_USER_INFO } from '../action/actionTypes'

const initialState: IUserTree = {
  name: undefined,
  password: undefined
}

export const user = (state = initialState, action: IActionType) => {
  switch (action.type) {
    case USER_CHANGE_USER_INFO:
      return Object.assign({}, state, { name: action.data.name, password: action.data.password })
  }
  return state
}
