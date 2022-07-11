function Task({task, removeTask}) {


    return (
        <div key={task.id} className="task">     
            <section className="task__left">
                <input className="task__check" defaultChecked={task.check} type="checkbox" />
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