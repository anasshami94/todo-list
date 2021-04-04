import React from 'react'
import TodoItem from './TodoItem'
import './TodoList.css'

function TodoList({ todosList, setTodosCallback }) {
    const deleteTodo = (todoIndex) => {
        // TODO: Implement delete todo
    }
    const editTodo = (todoIndex, todo_key, todo_value) => {
        const todosCopy = [...todosList] // take copy of the state !  
        todosCopy[todoIndex][todo_key] = todo_value
        setTodosCallback(todosCopy)
    }
    return (
        <ul className="todo-list">
        {
            todosList.map((todo, index) => (
                        <TodoItem 
                            key={index.toString()}
                            todo={todo}
                            todoIndex={index}
                            deleteTodo={deleteTodo}
                            editTodo={editTodo}
                        />)
                    )
        }
        </ul>
    )

}

export default TodoList;