import './App.css';
import React, { useState } from 'react'
import Header from './components/Header'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
function App() {
  const [todos, setTodos] = useState([]);
  // hook, [variable, function_change]
  const addTodo = (todo) => {
    const todosCopy = [...todos] // take copy of the state !  
    todosCopy.push({text: todo, complete: false})
    setTodos(todosCopy)
    // setTodos([...todos, {text: todo, complete: false}])
  }
  return (
    <div className="App">
      <Header title="Todo App" logo="logo192.png"/>
      <TodoForm  addTodoCallback={addTodo}/>
      <TodoList todosList={todos} setTodosCallback={setTodos} />
    </div>
  );
}

export default App;
