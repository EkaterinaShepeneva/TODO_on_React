import Task from "./Task";
import { useState } from "react";
import "./TasksBox.css";
import { NUM_TASK } from "../../constants.js";

function TasksBox({ currentPage, tasks, setTasks, filtredArray }) {
  const [checked, setChecked] = useState(false);
  const [userInput, setUserInput] = useState("");

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const checkTask = (id) => {
    setChecked(!checked)
    const newTask = tasks.map((task) => ({...task,check: task.id === id ? !task.check : task.check,}))
    setTasks(newTask);
  };

  return (
    <div className="tasksBox">
      {filtredArray
        .slice((currentPage - 1) * NUM_TASK, NUM_TASK * currentPage)
        .map((task) => {
          return (
            <Task
              task={task}
              key={task.id}
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
