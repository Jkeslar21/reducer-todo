// import React, { useState } from 'react'

// export default function TodoForm(props) {
//     const [formState, setFormState] = useState({task: ''})

//     const handleChanges = e => {
//         setFormState({
//             ...formState,
//             [e.target.name]: e.target.value
//         })
//     }
    
//     const handleSubmit = e => {
//         e.preventDefault();
//         props.addTask(e, formState);
//         setFormState({task: ''})
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit} >
//                 <input placeholder='Enter Task' name='task' value={formState.task} onChange={handleChanges} />
//                 <button>Add Task</button>
//             </form>
//         </div>
//     )
// }


import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
        task: ""
        };
    }

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    submitTask = e => {
        e.preventDefault();
        this.props.addTask(e, this.state.task);
        this.setState({ task: "" });
    };

    render() {
        return (
        <form onSubmit={this.submitTask}>
            <input
            type="text"
            value={this.state.task}
            name="task"
            onChange={this.handleChanges}
            />
            <button>Add</button>
        </form>
        );
    }
}

export default TodoForm;