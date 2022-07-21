import style from "./Error.module.css";
import { errorMessage, errorCode } from "../../api/http.js";

const Error = ({ setIsError }) => {
  const closeErrorWindow = () => {
    setIsError(false);
  };

  return (
    <main className={style.mainContainer}>
      <div className={style.nameContainer}>
        <div className={style.nameError}>ERROR {errorCode}!</div>
      </div>

      <div className={style.bodyError}>
        <div className={style.textError}>{errorMessage}</div>
      </div>
      <button onClick={closeErrorWindow} className={style.btnError}>
        Закрыть
      </button>
    </main>
  );
};

export default Error;
