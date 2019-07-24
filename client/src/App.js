import React, { useReducer } from 'react';
import './App.css';
import { reducer, initialState } from './reducers/reducer'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  const addTask = (e, task) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TASK', payload: task})
  }

  const toggleTask = taskId => {
    dispatch({ type: 'TOGGLE_TASK', payload: taskId })
  }

  const clearCompleted = e => {
    e.preventDefault();
    dispatch({ type: 'CLEAR_COMPLETED' })
  }

  return (
    <div className="App">
      <h2>Welcome to the Jungle 🌴</h2>
      <TodoForm addTask={addTask} />
      <TodoList state={state} toggleTask={toggleTask} clearCompleted={clearCompleted} />
    </div>
  );
}

export default App;
