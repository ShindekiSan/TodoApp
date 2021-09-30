import React, { useEffect, useState } from 'react';
import { BiListUl } from 'react-icons/bi'
import { CgPlayListCheck, CgPlayListRemove } from 'react-icons/cg'

function TodoFilters({ todos, setTodos }) {
    const [doneCount, setDoneCount] = useState(0);
    const [undoneCount, setUndoneCount] = useState(0);
    const [allCount, setAllCount] = useState(0);

    const countTodosStates = () => {
        todos.forEach(todo => {
            todo.isComplete ? setDoneCount(doneCount+1) : setUndoneCount(undoneCount+1)
        })
    }

    const countAllTodos = () => {
        setAllCount(todos.length)
    }

    // useEffect(() => {   
    //     countTodosStates();
    //     countAllTodos();
    // }, [doneCount, undoneCount, allCount])

    return ( 
        <ul className='filters'>
            <li>
                <CgPlayListCheck className='filter-button filter-done' />
                <span className='counter counter-done'>{doneCount}</span>
            </li>
            <li>
                <CgPlayListRemove className='filter-button filter-undone' />
                <span className='counter counter-undone'>{undoneCount}</span>
            </li>
            <li>
                <BiListUl className='filter-button filter-all' />
                <span className='counter counter-all' >{allCount}</span>
            </li>
        </ul>
    );
}

export default TodoFilters;