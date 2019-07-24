import React from 'react'
import Todo from './Todo'

export default function TodoList(props) {
    return (
        <div>
            {props.state.todos.map((todo, index) => <Todo key={index} todo={todo} toggleTask={props.toggleTask} />)}
            <button onClick={props.clearCompleted} >Clear Completed</button>
        </div>
    )
}
