import { useState } from "react"

function Task({task, removeTask, checkTask}) {
    const [checked, setChecked] = useState(false);

    return (
        <div key={task.id} className="task">     
            <section className="task__left">
                <input className="task__check" defaultChecked={task.check} onChange={() => setChecked(!checked)} onClick={() => checkTask(task.id)} type="checkbox" />
                <div className="task__text">{task.title}</div>
            </section>
            <section className="task__right">
                <div className="task__date">{task.date}</div>
                <button className="task__btnDelete" onClick={() => removeTask(task.id)} >del</button>
            </section>
        </div>
    )
}

export default Task