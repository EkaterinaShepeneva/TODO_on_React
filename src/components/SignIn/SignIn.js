import style from "./SignIn.module.css";
import { useState, useEffect } from "react";
import { postSignIn } from "../../api/http"
import { Link } from "react-router-dom";

function SignIn() {
    const [loginInput, setLoginInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')

    const verify = async () => {
        const login = loginInput.trim()
        const password = passwordInput.trim()


        const token = await postSignIn(login, password)
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
        <div>

            <div className={style.container}>
                <input placeholder="login" value={loginInput} onChange={changeLoginInput} />
                <input placeholder="password" value={passwordInput} onChange={changePasswordInput} type="password" />
                <button onClick={() => { verify() }}>Войти</button>
            </div>

            <button onClick={() => { document.location.href = "/Registration" }}>Зарегистрироваться</button>
        </div>

    );
}

export default SignIn;