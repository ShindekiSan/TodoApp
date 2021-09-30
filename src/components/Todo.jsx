import React, { useState } from "react";
import { AiOutlineCloseCircle, AiOutlineEdit } from 'react-icons/ai';
import { MdDone } from 'react-icons/md'
import { BiUndo } from 'react-icons/bi'
import TodoForm from './TodoForm'

function Todo(props) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = value => {
        props.updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

    return (
        <div className={props.todo.isComplete ? 'todo complete' : 'todo'}>
            <span className='todo-text'>{props.todo.text}</span>
            <div className='todo-buttons'>
                <AiOutlineCloseCircle 
                    className='todo__delete-button'
                    onClick={props.deleteTodo}
                />
                <AiOutlineEdit 
                    className={props.todo.isComplete ? 'todo__edit-button disable' : 'todo__edit-button'} onClick={() => setEdit({id:props.todo.id, value: props.todo.text})}
                />
                {props.todo.isComplete ? 
                <BiUndo className='todo__uncomplete-button' onClick={props.changeTodoState}/> : <MdDone className='todo__complete-button' onClick={props.changeTodoState}/>}
            </div>
        </div>
    )
}

export default Todo