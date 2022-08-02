import React from "react";
import style from "./TasksBox.module.css";
import { validateInputTodo } from "../../utils/utils.js";
import { changeTask } from "../../api/http.js";

function Task({
  task,
  tasks,
  removeTask,
  checkTask,
  userInput,
  setUserInput,
  renderTask,
  setIsError,
  statusInput,
  setStatusInput,
}) {
  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const changeStatusInput = () => {
    setUserInput(task.name);
    setStatusInput({ idTask: task.uuid, status: true });
  };

  const blurInput = () => {
    setStatusInput({ idTask: task.uuid, status: false });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = userInput.trim();
    if (!validateInputTodo(name)) {
      setStatusInput({ idTask: task.uuid, status: false });
      return;
    }
    if (name) {
      const login = localStorage.getItem('login')
      changeTask(task.uuid, name, login)
        .then(() => {
          renderTask();
        })
        .catch(() => {
          setIsError(true);
          renderTask();
        });
      tasks.find((item) => {
        if (item.uuid === task.uuid) {
          item.name = name;
          return true;
        }
      });
    }
    setStatusInput({ idTask: task.uuid, status: false });
  };

  const handleKeyPress = (event) => {
    switch (event.key) {
      case "Enter":
        handleSubmit(event);
        break;
      case "Escape":
        setStatusInput({ idTask: task.uuid, status: false });
        break;
      default:
        break;
    }
  };

  return (
    <div key={task.uuid} className={task.done ? (style.task__checked) : (style.task)}>
      <div className={style.task__inputs}>
        <section className={style.task__left}>
          <label className={style.task__check}>
            <input

              defaultChecked={task.done}
              onClick={() => checkTask(task.uuid, task.done)}
              type="checkbox"
            />
            <span>Indigo</span>
          </label>
          <div className={style.task__containerText}>
            {statusInput.idTask === task.uuid && statusInput.status ? (
              <input
                className={style.editTask}
                autoFocus
                onBlur={() => blurInput()}
                onKeyDown={handleKeyPress}
                value={userInput}
                onChange={handleChange}
                type="text"
              />
            ) : (
              <div
                className={style.task__text}
                uuid={task.uuid}
                onDoubleClick={changeStatusInput}
              >
                {task.name}
              </div>
            )}
            <div className={style.task__date}>{task.updatedAt}</div>
          </div>

        </section>
        <button
          className={style.task__btnDelete}
          onClick={() => removeTask(task.uuid)}
        >
        </button>
      </div>
    </div>
  );
}

export default Task;
