import Task from "./Task";
import "./TasksBox.css";
import {NUM_TASK } from "../../constants.js";

function TasksBox({  currentPage, tasks, setTasks, filtredArray, validateInputTodo }) {
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const checkTask = (id) => {
    setTasks(
      tasks.map((task) => ({
        ...task,
        check: task.id === id ? !task.check : task.check,
      }))
    );
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
              validateInputTodo={validateInputTodo}
            />
          );
        })}
    </div>
  );
}

export default TasksBox;
