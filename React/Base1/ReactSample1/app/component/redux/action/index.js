let nextTodoId = 0;

/*
* action函数的调用通过dispatch(addT0do(a))将会出发reducer里的combineReducers()接收
* 所对应的数据的状态
* */

export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id:nextTodoId++,
        text
    }
}

export const setVisibility = (filter) => {
    return {
        type: 'SET_VISIBILITY',
        filter
    }
}

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}