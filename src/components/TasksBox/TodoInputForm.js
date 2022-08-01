import style from "./TasksBox.module.css";
import { useState } from "react";
import { validateInputTodo } from "../../utils/utils.js";
import { postTask } from "../../api/http.js";

function TodoInputForm({ renderTask, setIsError }) {
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
      const login = localStorage.getItem('login')
      postTask(login, userInput)
        .then(() => renderTask())
        .catch(() => setIsError(true));
    }
  };

  return (
    <div className={style.inputBox}>
      <input
        autoFocus
        className={style.inputBox__input}
        value={userInput}
        type="text"
        onChange={changeInput}
        onKeyDown={handleKeyPress}
        placeholder="Write something..."
      />
      <button onClick={handleSubmit}>+</button>
    </div>
  );
}

export default TodoInputForm;
