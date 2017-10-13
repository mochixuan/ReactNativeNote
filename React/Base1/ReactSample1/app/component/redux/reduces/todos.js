
const todo = (state,action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                id: action.id,
                text: action.text,
                completed: false,
            }
        case "TOGGLE_TODO":     //单机某个item是否主要是完成和未完成
            if (state.id !== action.id) {
                return state
            }
            return Object.assign({},state,{
                completed: !state.completed
            })
        default:
            return state
    }
}

/*切换footer时切换事件添加事件，和点击footer进行切换，记住每个事件的状态，这里是每个事件的list状态
* state是旧的状态集
* combineReducers应该是将dispatch(a()) a()是action state是旧的数据集 应该会在调用todos之前将上一个todos的数据集回给todos的state
* */
const todos = (state=[],action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                todo(undefined,action)
            ]
        case "TOGGLE_TODO":
            return state.map(t=>todo(t,action))
        default:
            return state
    }
}

export default todos