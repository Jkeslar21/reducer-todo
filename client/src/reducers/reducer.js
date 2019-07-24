export const initialState = {
    todos: [
        {
            task: 'Acoustic Guitar Session 🎵',
            completed: false,
            id: 10211991
        }
    ]
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            const newTask = {
                task: action.payload,
                id: Date.now(),
                completed: false
            }
            return {
                ...state,
                todos: [...state.todos, newTask]
            };
        case 'TOGGLE_TASK':
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (action.payload === todo.id) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        }
                    }
                    return todo;
                })
            }
        case 'CLEAR_COMPLETED':
            return {
                ...state,
                todos: state.todos.filter(todo => !todo.completed)
            }
        default:
            return state
    }
}