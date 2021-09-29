import React from "react";
import TodoList from "./components/TodoList";

function App() {
    return (
        <section>
            <div className='main-block__info'>
                <h1 className='main-block__title'>Welcome to React TODO App!</h1>
                <p>Enter a task below for adding it to list of todo's</p>
            </div>
            <TodoList />
        </section>     
    )
}

export default App