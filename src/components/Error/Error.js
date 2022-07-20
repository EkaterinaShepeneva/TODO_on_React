import Lottie from "lottie-web";
import anim from "./anim.json";
import { useEffect, useRef } from "react";
import { errorMessage, errorCode } from "../../api/http.js";

import style from "./Error.module.css";

const Error = ({ setError }) => {
  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: require("./anim.json"),
    });
  }, []);

  const closeErrorWindow = () => {
    setError(false);
  };

  return (
    <main className={style.mainContainer}>
      {/* <container className={style.mainContainer} ref={container}>
      </container> */}
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
