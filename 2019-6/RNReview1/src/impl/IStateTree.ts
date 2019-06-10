export interface IActionType {
  type: string,
  data?: any
}

export interface IUserTree {
  name?: string,
  password?: string
}

export interface IStateTree {
  user: IUserTree
}
