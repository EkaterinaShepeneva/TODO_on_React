import { useState } from "react";
import moment from "moment";
import style from "./TasksBox.module.css";
import { validateInputTodo } from "../../utils/utils.js";

function TodoInputForm({ setTasks, tasks }) {
  const [userInput, setUserInput] = useState("");

  const changeInput = (event) => {
    setUserInput(event.currentTarget.value);
  };

  const handleSubmit = (event) => {
    const title = userInput.trim();
    event.preventDefault();
    addTask(title);
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
        title: userInput,
        id: Date.now(),
        check: false,
        date: moment().format("LLLL"),
      };
      setTasks([...tasks, newTask]);
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
