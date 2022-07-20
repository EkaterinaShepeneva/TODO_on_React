import Task from "./Task";
import { useState } from "react";
import style from "./TasksBox.module.css";
import { deleteTasks } from "../../api/http.js";
import { checkTasks } from "../../api/http.js";

function TasksBox({ tasks, setTasks, filtredArray, renderTask, setError }) {
  const [userInput, setUserInput] = useState("");

  const removeTask = (uuid) => {
    deleteTasks(uuid, renderTask).then((response) => {
      if (!response) {
        setError(true);
      }
    });
  };

  const checkTask = (uuid, event) => {
    const checkStatus = event.target.checked;
    checkTasks(uuid, renderTask, checkStatus).then((response) => {
      if (!response) {
        setError(true);
      }
    });
  };

  return (
    <div className={style.tasksBox}>
      {tasks.map((task) => {
        return (
          <Task
            task={task}
            key={task.uuid}
            removeTask={removeTask}
            checkTask={checkTask}
            tasks={tasks}
            userInput={userInput}
            setUserInput={setUserInput}
            renderTask={renderTask}
            setError={setError}
          />
        );
      })}
    </div>
  );
}

export default TasksBox;
