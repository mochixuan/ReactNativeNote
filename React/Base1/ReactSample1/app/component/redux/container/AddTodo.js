import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from "../action"

/*
* 逻辑化添加并绑定事件
* */
let AddTodo = ({dispatch})=>{
    let input;
    return (
        <div>
            <form onSubmit={e=>{
                e.preventDefault();
                if(!input.value.trim()) {return}
                //提供的 connect() 帮助器来调用
                dispatch(addTodo(input.value))
                input.value=""
            }}>
                <input ref={node=>{input=node}}/>
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}

AddTodo = connect()(AddTodo)

export default AddTodo