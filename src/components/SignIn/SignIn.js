import style from "./SignIn.module.css";
import { useState, useEffect } from "react";
import { postSignIn } from "../../api/http"

function SignIn({ signIn, goToPage }) {
    const [loginInput, setLoginInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')

    const verify = async () => {
        const login = loginInput.trim()
        const password = passwordInput.trim()


        const token = await postSignIn(login, password)
        if (!token) return
        localStorage.setItem('token', token.data)
        localStorage.setItem('login', login)
        goToPage('App')
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

            <button onClick={() => { goToPage('Registration') }}>Зарегистрироваться</button>
        </div>

    );
}

export default SignIn;