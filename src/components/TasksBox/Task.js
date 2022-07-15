import React from "react";
import { useState } from "react";
import { validateInputTodo } from "../../utils/utils.js";
import style from "./TasksBox.module.css";

function Task({ task, removeTask, checkTask, tasks, userInput, setUserInput }) {
  const [statusInput, setStatusInput] = useState(false);

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const changeStatusInput = () => {
    setUserInput(task.name);
    setStatusInput(true);
  };

  const blurInput = () => {
    setStatusInput(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const title = userInput.trim();
    if (!validateInputTodo(title)) {
      setStatusInput(false);
      return;
    }
    if (title) {
      tasks.find((item) => {
        if (item.id === task.id) {
          item.name = title;
          return true;
        }
      });
    }

    setStatusInput(false);
  };

  const handleKeyPress = (event) => {
    switch (event.key) {
      case "Enter":
        handleSubmit(event);
        break;
      case "Escape":
        setStatusInput(false);
        break;
      default:
        break;
    }
  };

  return (
    <div key={task.userId} className={style.task}>
      <div className={style.task__inputs}>
        <section className={style.task__left}>
          <input
            className={style.task__check}
            defaultChecked={task.done}
            onClick={() => checkTask(task.userId)}
            type="checkbox"
          />
          {statusInput ? (
            <input
              className={style.editTask}
              autoFocus
              onBlur={blurInput}
              onKeyDown={handleKeyPress}
              value={userInput}
              onChange={handleChange}
              type="text"
            />
          ) : (
            <div
              className={style.task__text}
              id={task.id}
              onDoubleClick={changeStatusInput}
            >
              {task.name}
            </div>
          )}
        </section>
        <button
          className={style.task__btnDelete}
          onClick={() => removeTask(task.userId)}
        >
          del
        </button>
      </div>

      <div className={style.task__date}>{task.date}</div>
    </div>
  );
}

export default Task;
