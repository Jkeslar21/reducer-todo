import React from 'react'

export default function Todo(props) {
    return (
        <div className={`${props.todo.completed && ' completed'}`} onClick={() => props.toggleTask(props.todo.id)} >
            <p><strong>Task:</strong> {props.todo.task}</p>
        </div>
    )
}
