import { useState } from "react";
import React from "react";
import TodoForm from "./TodoForm";
import ReactDOM from "react-dom/client";

function Task({ task, removeTask, checkTask, addTask, tasks }) {
  const [checked, setChecked] = useState(false);
  const [statusInput, setStatusInput] = useState(0);
  const [userInput, setUserInput] = useState();

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const changeStatusInput = (value, id) => {
    setUserInput(value);
    setStatusInput(1);
  };

  const handleSubmit = (event, id) => {
    event.preventDefault();
    tasks.find((task) => {
      if (task.id === id) {
        task.title = userInput;
        return true;
      }
    });
    setStatusInput(0);
  };

  const handleKeyPress = (event, id) => {
    if (event.key === "Enter") {
      handleSubmit(event, id);
    }
  };

  return (
    <div key={task.id} className="task">
      <section className="task__left">
        <input
          className="task__check"
          defaultChecked={task.check}
          onChange={() => setChecked(!checked)}
          onClick={() => checkTask(task)}
          type="checkbox"
        />
        {statusInput === 1 ? (
          <input
            className="editTask"
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
            onDoubleClick={() => {
              changeStatusInput(task.title, task.id);
            }}
          >
            {task.title}
          </div>
        )}
      </section>
      <section className="task__right">
        <div className="task__date">{task.date}</div>
        <button className="task__btnDelete" onClick={() => removeTask(task.id)}>
          del
        </button>
      </section>
    </div>
  );
}

export default Task;
