import React, { useState } from 'react'
import PropTypes from 'prop-types'


const TodoForm = ({onSubmit, edit}) => {
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

        onSubmit(newTodo);
    
        setInput('');
    }

    return (
        <section className='tasks'>
            <form className='task-form' onSubmit={handleSubmit}>
                {edit ? (
                    <>
                        <input
                            className='task-input update'
                            placeholder='Update your item'
                            value={input}
                            onChange={handleChange}
                            name='text'
                            maxLength='30'
                        />
                        <button className='task-input__add-button update'>
                            Update
                        </button>
                    </>
                ) : (
                    <>
                        <input 
                            className='task-input'
                            type='text' 
                            placeholder='Your task' 
                            value={input}   
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

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
    edit: PropTypes.object,
}

export default TodoForm