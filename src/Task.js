import { useState } from "react";
import React from "react";

function Task({ task, removeTask, checkTask, tasks, validate }) {
  const [checked, setChecked] = useState(false);
  const [statusInput, setStatusInput] = useState(0);
  const [userInput, setUserInput] = useState();

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const changeStatusInput = (value, event) => {
    setUserInput(value);
    setStatusInput(1);
  };

  const blurInput = (event, id) => {
    handleSubmit(event, id);
  };

  const handleSubmit = (event, id) => {
    event.preventDefault();
    const title = String(userInput).trim();
    if (!validate(title)){setStatusInput(0); return}
    if (title) {
      tasks.find((task) => {
        if (task.id === id) {
          task.title = title;
          return true;
        }
      });
    }

    setStatusInput(0);
  };

  const handleKeyPress = (event, id) => {
    switch (event.key) {
      case "Enter":
        handleSubmit(event, id);
        break;
      case "Escape":
        setStatusInput(0);
        break;
      default:
        break;
    }
  };

  return (
    <div key={task.id} className="task">
      <div  className="task__inputs">
        <section className="task__left">
        <input
          className="task__check"
          defaultChecked={task.check}
          onChange={() => setChecked(!checked)}
          onClick={() => checkTask(task.id)}
          type="checkbox"
        />
        {statusInput === 1 ? (
          <input
            className="editTask"
            autoFocus
            onBlur={(event) => {
              blurInput(event, task.id);
            }}
            onKeyDown={(event) => {
              handleKeyPress(event, task.id);
            }}
            value={userInput}
            onChange={handleChange}
            type="text"
          />
        ) : (
          <div
            className="task__text"
            id={task.id}
            onDoubleClick={(event) => {
              changeStatusInput(task.title, event);
            }}
          >
            {task.title}
          </div>
        )}

      </section>
                      <button className="task__btnDelete" onClick={() => removeTask(task.id)}>
          del
        </button>
      </div>
      

        <div className="task__date">{task.date}</div>
    </div>
  );
}

export default Task;
