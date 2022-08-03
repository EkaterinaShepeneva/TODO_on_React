import style from "./TasksBox.module.css";
import { useState } from "react";
import { validateInputTodo } from "../../utils/utils.js";
import { postTask } from "../../api/http.js";

function TodoInputForm({ renderTask }) {
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
    }
  };

  return (
    <div className={style.containerInput}>
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

      </div>
      <button className={style.inputBtn} onClick={handleSubmit}></button>
    </div>

  );
}

export default TodoInputForm;
