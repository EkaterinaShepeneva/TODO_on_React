import style from "./SignIn.module.css";
import { useState, useEffect } from "react";
import { postRegistration } from "../../api/http"

function Registration() {

    const [loginInput, setLoginInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')

    const verify = async () => {
        const login = loginInput.trim()
        const password = passwordInput.trim()

        const token = await postRegistration(login, password)
        if (!token) return
        localStorage.setItem('token', token.data)
        localStorage.setItem('login', login)
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
            <div className={style.logo}>TODOTODOT</div>
            <input className={style.input} placeholder="login" value={loginInput} onChange={changeLoginInput} />
            <input className={style.input} placeholder="password" value={passwordInput} onChange={changePasswordInput} type="password" />
            <button className={style.btnMain} onClick={() => { verify() }}>sign up</button>
            <button className={style.btnSign} onClick={() => { document.location.href = "/signin" }}>sign in</button>
        </div>
    );
}

export default Registration;