import style from "./SignIn.module.css";
import { useState } from "react";
import { postSignIn } from "../../api/http"
import Error from "../Error/Error";

function SignIn() {
    const [loginInput, setLoginInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')
    const [isError, setIsError] = useState(false);

    const verify = async () => {
        const login = loginInput.trim()
        const password = passwordInput.trim()

        const token = await postSignIn(login, password).catch((response) => {
            if (response) setIsError(true);
        });
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
                {isError && <Error setIsError={setIsError} />}
                <div className={style.logo}>TODOTODOT</div>
                <input className={style.input} placeholder="login" value={loginInput} onChange={changeLoginInput} />
                <input className={style.input} placeholder="password" value={passwordInput} onChange={changePasswordInput} type="password" />
                <button className={style.btnMain} onClick={() => { verify() }}>sign in</button>
                <button className={style.btnSign} onClick={() => { document.location.href = "/Registration" }}>sign up</button>
            </div>


        </div>

    );
}

export default SignIn;