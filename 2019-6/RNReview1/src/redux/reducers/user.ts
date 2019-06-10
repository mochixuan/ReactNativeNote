import { IActionType, IUserTree } from '../../impl/IStateTree'

const initialState: IUserTree = {
  name: undefined,
  password: undefined
}

export const user = (state = initialState, action: IActionType) => {
  return state
}
