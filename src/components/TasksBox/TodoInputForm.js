import { useState } from "react";
import moment from "moment";
import style from "./TasksBox.module.css";
import { validateInputTodo } from "../../utils/utils.js";
import { postTasks } from "../../api/http.js";

function TodoInputForm({ setTasks, tasks, renderTask }) {
  const [userInput, setUserInput] = useState("");

  const changeInput = (event) => {
    setUserInput(event.currentTarget.value);
  };

  const handleSubmit = (event) => {
    const name = userInput.trim();
    event.preventDefault();
    addTask(name);
    setUserInput("");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  const addTask = (userInput) => {
    if (!validateInputTodo(userInput)) return;
    if (userInput) {
      const newTask = {
        name: userInput,
        done: false,
        createdAt: Date.now(),
        updatedAt: moment().format("LLLL"),
      };

      postTasks(newTask, renderTask);
    }
  };

  return (
    <form className={style.inputBox} onSubmit={handleSubmit}>
      <input
        autoFocus
        className={style.inputBox__input}
        value={userInput}
        type="text"
        onChange={changeInput}
        onKeyDown={handleKeyPress}
        placeholder="Write something..."
      />
      <button>+</button>
    </form>
  );
}

export default TodoInputForm;
