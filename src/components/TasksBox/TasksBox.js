import Task from "./Task";
import "./TasksBox.css";

function TasksBox({ NUM_TASK, page, tasks, setTasks, filtredArray, validate }) {
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
        .slice((page - 1) * NUM_TASK, NUM_TASK * page)
        .map((task) => {
          return (
            <Task
              task={task}
              key={task.id}
              removeTask={removeTask}
              checkTask={checkTask}
              tasks={tasks}
              validate={validate}
            />
          );
        })}
    </div>
  );
}

export default TasksBox;
