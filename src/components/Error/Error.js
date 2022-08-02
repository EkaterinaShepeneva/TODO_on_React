import style from "./Error.module.css";
import { errorMessage, errorCode } from "../../api/http.js";

const Error = ({ setIsError }) => {

  let timer = 100

  const timeError = () => {
    if (timer > 0) document.getElementsByClassName(style.timeLine)[0].style.width = `${timer}%`;
    if (timer <= -5) {
      setIsError(false);
      clearInterval(interval)
    }

    timer = timer - 1
  }

  const interval = setInterval(timeError, 100);

  return (
    <main className={style.mainContainer}>
      <div className={style.nameContainer}>
        <div className={style.nameError}>ERROR {errorCode}!</div>
      </div>

      <div className={style.bodyError}>
        <div className={style.textError}>{errorMessage}</div>
      </div>
      <div className={style.timeLine}></div>
    </main>
  );
};

export default Error;
