import style from "./SignIn.module.css";
import { useState } from "react";
import { postRegistration } from "../../api/http"
import Error from "../Error/Error";

function Registration() {
    const [isError, setIsError] = useState(false);
    const [loginInput, setLoginInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')

    const verify = async () => {
        const login = loginInput.trim()
        const password = passwordInput.trim()

        const response = await postRegistration(login, password).catch((response) => {
            if (response) setIsError(true);
        });
        if (!response) return
        console.log('response = ', response);
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('login', response.data.user.login)
        document.location.href = "/app";
    }

    const changeLoginInput = (event) => {
        setLoginInput(event.currentTarget.value);
    };

    const changePasswordInput = (event) => {
        setPasswordInput(event.currentTarget.value);
    };

    return (

        <div className={style.container}>
            {isError && <Error setIsError={setIsError} />}
            <div className={style.logo}>TODOTODOT</div>
            <input className={style.input} placeholder="login" value={loginInput} onChange={changeLoginInput} />
            <input className={style.input} placeholder="password" value={passwordInput} onChange={changePasswordInput} type="password" />
            <button className={style.btnMain} onClick={() => { verify() }}>sign up</button>
            <button className={style.btnSign} onClick={() => { document.location.href = "/signin" }}>sign in</button>
        </div>
    );
}

export default Registration;