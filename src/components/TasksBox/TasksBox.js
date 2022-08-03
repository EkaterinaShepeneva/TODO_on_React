import Task from "./Task";
import style from "./TasksBox.module.css";
import { useState } from "react";
import { deleteTask } from "../../api/http.js";
import { checkPatchTask } from "../../api/http.js";

function TasksBox({ tasks, renderTask }) {
  const [userInput, setUserInput] = useState("");
  const [statusInput, setStatusInput] = useState({
    idTask: null,
    status: false,
  });

  const removeTask = (uuid) => {
    deleteTask(uuid)
      .then(() => {
        renderTask();
      })
  };

  const checkTask = (uuid, done) => {
    checkPatchTask(uuid, done).then(() => renderTask()).catch(() => renderTask());
  };

  return (
    <div className={style.tasksBox}>
      {tasks.map((task) => {
        return (
          <Task
            task={task}
            tasks={tasks}
            key={task.uuid}
            removeTask={removeTask}
            checkTask={checkTask}
            userInput={userInput}
            setUserInput={setUserInput}
            renderTask={renderTask}
            statusInput={statusInput}
            setStatusInput={setStatusInput}
          />
        );
      })}
    </div>
  );
}

export default TasksBox;
