import { IActionType } from '../../impl/IStateTree'
import { USER_CHANGE_USER_INFO } from './actionTypes'

export const changeUserInfoAction = (name: string, password: string): IActionType => ({
  type: USER_CHANGE_USER_INFO,
  data: { name, password }
})
