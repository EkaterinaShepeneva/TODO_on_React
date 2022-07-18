import Task from "./Task";
import { useState } from "react";
import style from "./TasksBox.module.css";
import { deleteTasks } from "../../api/http.js";

function TasksBox({ tasks, setTasks, filtredArray, renderTask }) {
  const [checked, setChecked] = useState(false);
  const [userInput, setUserInput] = useState("");

  const removeTask = (uuid) => {
    deleteTasks(uuid, renderTask);
  };

  const checkTask = (uuid) => {
    setChecked(!checked);
    const newTask = tasks.map((task) => ({
      ...task,
      check: task.uuid === uuid ? !task.done : task.done,
    }));
    setTasks(newTask);
  };

  return (
    <div className={style.tasksBox}>
      {filtredArray.map((task) => {
        return (
          <Task
            task={task}
            key={task.uuid}
            removeTask={removeTask}
            checkTask={checkTask}
            tasks={tasks}
            userInput={userInput}
            setUserInput={setUserInput}
          />
        );
      })}
    </div>
  );
}

export default TasksBox;
