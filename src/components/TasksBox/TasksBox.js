import Task from "./Task";
import style from "./TasksBox.module.css";
import { useState } from "react";
import { deleteTasks } from "../../api/http.js";
import { checkTasks } from "../../api/http.js";

function TasksBox({ tasks, renderTask, setIsError }) {
  const [userInput, setUserInput] = useState("");

  const removeTask = (uuid) => {
    deleteTasks(uuid, renderTask).then((response) => {
      if (!response) {
        setIsError(true);
      }
    });
  };

  const checkTask = (uuid, event) => {
    const checkStatus = event.target.checked;
    checkTasks(uuid, renderTask, checkStatus).then((response) => {
      renderTask()
    }).catch(()=>{
      setIsError(true);
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
            userInput={userInput}
            setUserInput={setUserInput}
            renderTask={renderTask}
            setIsError={setIsError}
          />
        );
      })}
    </div>
  );
}

export default TasksBox;
