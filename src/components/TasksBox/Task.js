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
  setStatusInput
}) {

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const changeStatusInput = () => {
    setUserInput(task.name);
    setStatusInput({idTask: task.uuid, status:true});
  };

  const blurInput = () => {
    setStatusInput({idTask: task.uuid, status:false});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = userInput.trim();
    if (!validateInputTodo(name)) {
      setStatusInput({idTask: task.uuid, status:false});
      return;
    }
    if (name) {
      changeTask(task.uuid, name).then(
        (response) => {
          renderTask()
          if (!response) {
            setIsError(true);
          }
        }
      );
      tasks.find((item) => {
        if (item.uuid === task.uuid) {
          item.name = name;
          return true;
        }
      });
    }
    setStatusInput({idTask: task.uuid, status:false});
  };

  const handleKeyPress = (event) => {
    switch (event.key) {
      case "Enter":
        handleSubmit(event);
        break;
      case "Escape":
        setStatusInput({idTask: task.uuid, status:false});
        break;
      default:
        break;
    }
  };

  return (
    <div key={task.uuid} className={style.task}>
      <div className={style.task__inputs}>
        <section className={style.task__left}>
          <input
            className={style.task__check}
            defaultChecked={task.done}
            onClick={(event) => checkTask(task.uuid, event)}
            type="checkbox"
          />
          {(statusInput.idTask === task.uuid && statusInput.status) ? (
            <input
              className={style.editTask}
              autoFocus
              onBlur={()=>blurInput()}
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
