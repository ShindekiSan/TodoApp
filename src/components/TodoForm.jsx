import React, { useState } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('');
    const [todoId, setTodoId] = useState(1);
    
    const newTodoId = () => {
        setTodoId(todoId + 1);
    }

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        newTodoId()
        const newTodo = {
            isComplete: false,
            id: todoId,
            text: input,
        };

        props.onSubmit(newTodo);
    
        setInput('');
    }

    return (
        <section className='tasks'>
            <form className='task-form' onSubmit={handleSubmit}>
                {props.edit ? (
                    <>
                        <input
                            placeholder='Update your item'
                            value={input}
                            onChange={handleChange}
                            name='text'
                            className='task-input update'
                            maxLength='30'
                        />
                        <button className='task-input__add-button update'>
                            Update
                        </button>
                    </>
                ) : (
                    <>
                        <input 
                            type='text' 
                            placeholder='Your task' 
                            value={input} 
                            className='task-input' 
                            onChange={handleChange}
                            maxLength='30'
                        />
                        <button className='task-input__add-button'>
                            Add to list
                        </button>
                    </>
                )}
            </form>
        </section>
    
    )
}

export default TodoForm