import React from 'react';
import {connect} from 'react-redux'
import {toggleTodo} from "../action"
import TodoList from '../component/TodoList'

const getVisibleTodos = (todos,filter) => {
    switch (filter) {
        case "SHOW_ALL":
            return todos
        case "SHOW_COMPLETED":
            return todos.filter(t=>t.completed)
        case "SHOW_ACTIVE":
            return todos.filter(t=>!t.completed)
    }
}

/*state是reduces里的状态集*/
const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos,state.visibilityFilter)
    }
}

/*动作集合*/
const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoList)

export default VisibleTodoList