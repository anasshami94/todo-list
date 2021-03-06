import React from 'react'
function TodoItem({todo, todoIndex, deleteTodo, editTodo}) {
    
    return (
        <li className="todo-item" key={todoIndex.toString()}>
            <span>{ todo.text }</span>
            <div className="operations">
                <input 
                    className="operation"
                    type="checkbox" value={todo.complete} 
                    onChange={() => editTodo(todoIndex, 'complete', !todo.complete)}
                />
                <img src='./trash.png' className="operation" width="20" height="20" alt="trash img" onClick={() => deleteTodo(todoIndex)}/>
                <img src='./pencil.png'className="operation" width="20" height="20" alt="trash img"/>
            </div>
        </li>
    )

}

export default TodoItem;