import React, { useState } from "react";
import { AiOutlineCloseCircle, AiOutlineEdit } from 'react-icons/ai';
import { MdDone } from 'react-icons/md'
import { BiUndo } from 'react-icons/bi'
import TodoForm from './TodoForm'
import PropTypes from 'prop-types'

const Todo = ({todo, deleteTodo, changeTodoState, updateTodo}) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = value => {
        value.id = edit.id
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

    return (
        <div className={todo.isComplete ? 'todo complete' : 'todo'}>
            <span className={todo.isComplete ? 'todo-text todo-text--complete' : 'todo-text'}>{todo.text}</span>
            <div className='todo-buttons'>
                <AiOutlineCloseCircle 
                    className='todo__delete-button'
                    onClick={deleteTodo}
                />
                <AiOutlineEdit 
                    className={todo.isComplete ? 'todo__edit-button disable' : 'todo__edit-button'} 
                    onClick={() => setEdit({id:todo.id, value: todo.text})}
                />
                {todo.isComplete
                    ? <BiUndo className='todo__uncomplete-button' onClick={changeTodoState}/>
                    : <MdDone className='todo__complete-button' onClick={changeTodoState}/>
                }
            </div>
        </div>
    )
}

Todo.propTypes = {
    updateTodo: PropTypes.func, 
    todo: PropTypes.object, 
    deleteTodo: PropTypes.func, 
    changeTodoState: PropTypes.func,
}

export default Todo