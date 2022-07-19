import Task from "./Task";
import { useState } from "react";
import style from "./TasksBox.module.css";
import { deleteTasks } from "../../api/http.js";
import { checkTasks } from "../../api/http.js";

function TasksBox({ tasks, setTasks, filtredArray, renderTask }) {
  const [userInput, setUserInput] = useState("");

  const removeTask = (uuid) => {
    deleteTasks(uuid, renderTask);
  };

  const checkTask = (uuid, event) => {
    const checkStatus = event.target.checked;
    checkTasks(uuid, renderTask, checkStatus);
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
          />
        );
      })}
    </div>
  );
}

export default TasksBox;
