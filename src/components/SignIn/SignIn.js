import style from "./SignIn.module.css";
import { useState, useEffect } from "react";
import { postSignIn } from "../../api/http"

function SignIn({ signIn, goToPage }) {
    const [loginInput, setLoginInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')

    const verify = () => {
        const login = loginInput.trim()
        const password = passwordInput.trim()
        const token = { 'value': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6IkphbGUiLCJpYXQiOjE2NTkwNzkxNDV9.1Tq31ujDJ7tNbSMVt1umBzlNPnyZ9UCW9KfESIr1PYA' }

        postSignIn(login, password, token)
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
                <button onClick={verify}>Войти</button>
            </div>

            <button onClick={() => { goToPage('Registration') }}>Зарегистрироваться</button>
        </div>

    );
}

export default SignIn;