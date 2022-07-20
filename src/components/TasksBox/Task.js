import React from "react";
import style from "./TasksBox.module.css";
import { useState } from "react";
import { validateInputTodo } from "../../utils/utils.js";
import { changeTasks } from "../../api/http.js";

function Task({
  task,
  removeTask,
  checkTask,
  userInput,
  setUserInput,
  renderTask,
  setError,
}) {
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
    const name = userInput.trim();
    if (!validateInputTodo(name)) {
      setStatusInput(false);
      return;
    }
    if (name) {
      changeTasks(task.uuid, renderTask, name, setStatusInput).then(
        (response) => {
          if (!response) {
            setError(true);
          }
        }
      );
      task.name = name;
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
    <div key={task.uuid} className= {task.done?(style.task__checked):(style.task)}>
      <div className={style.task__inputs}>
        <section className={style.task__left}>
          <label className={style.task__check}>
          <input
            defaultChecked={task.done}
            onClick={(event) => checkTask(task.uuid, event)}
            type="checkbox"
          />
          <span>Indigo</span>
          </label>
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
              className={task.done?(style.task__text__checked):(style.task__text)}
              uuid={task.uuid}
              onDoubleClick={changeStatusInput}
            >
              {task.name}
            </div>
          )}
        </section>
        <button
          className={style.task__btnDelete}
          onClick={() => removeTask(task.uuid)}
        >
          del
        </button>
      </div>

      <div className={style.task__date}>{task.updatedAt}</div>
    </div>
  );
}

export default Task;
