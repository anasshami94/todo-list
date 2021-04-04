import React, { useState } from 'react'

function TodoForm({addTodoCallback}) {
    const [todo_text, setTodoText] = useState("")
    return (
        <form 
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '10px 0'
            }}
        >
            <input 
                placeholder="Insert Your Task"
                value={todo_text}
                onChange={(ev) => setTodoText(ev.target.value)}
                style={{
                    border: 'none',
                    borderBottom: '1px solid',
                    padding: '5px 10px',
                    outline: 'none'
                }}
            />
            <button 
                onClick={(ev) => {
                    ev.preventDefault();
                    addTodoCallback(todo_text)
                    setTodoText('');
                }} 
                style={{
                    width: 80,
                    height: 30,
                    backgroundColor: 'purple',
                    color: 'white',
                    outline: 'none',
                    border: 'none',
                    padding: 3,
                    marginLeft: 5
                }}
            >
                Submit
            </button>
        </form>
    )

}

export default TodoForm;