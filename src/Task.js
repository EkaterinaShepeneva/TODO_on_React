import { useState } from "react"
import React from 'react';
import TodoForm from "./TodoForm";
import ReactDOM from 'react-dom/client';

function Task({task, removeTask, checkTask, addTask}) {
    const [checked, setChecked] = useState(false);

    function changeTask(event) {
        const taskCheck = ReactDOM.createRoot(document.getElementById(event.target.id));
        
        taskCheck.render (<TodoForm addTask={addTask}/>)
        
    }

    return (
        <div key={task.id} className="task">     
            <section className="task__left">
                <input className="task__check"  defaultChecked={task.check} onChange={() => setChecked(!checked)} onClick={() => checkTask(task)} type="checkbox" />
                <div className="task__text"id={task.id} onDoubleClick={changeTask}>{task.title}</div>
            </section>
            <section className="task__right">
                <div className="task__date">{task.date}</div>
                <button className="task__btnDelete" onClick={() => removeTask(task.id)} >del</button>
            </section>
        </div>
    )
}

export default Task