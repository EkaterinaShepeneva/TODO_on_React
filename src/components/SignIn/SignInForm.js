import style from "./SignIn.module.css";
import { useState, useEffect } from "react";
import { postSignIn } from "../../api/http"
import Error from "../Error/Error";
import SignInInput from "./SignInInput";
import { postRegistration } from "../../api/http"
import SignInBtn from "./SignInBtn.js";
import SignUpBtn from "./SignUpBtn";
import { useNavigate } from "react-router-dom";

function SignInForm() {

    const [loginInput, setLoginInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')
    const [isError, setIsError] = useState(false);
    const [currentSection, setCurrentSection] = useState('signIn')
    let navigate = useNavigate();

    const verify = async () => {
        const login = loginInput.trim()
        const password = passwordInput.trim()

        const token = await postSignIn(login, password).catch((response) => {
            if (response) setIsError(true);
        });
        if (!token) return
        localStorage.setItem('token', token.data)
        localStorage.setItem('login', login)
        navigate("../app", { replace: true });
    }

    const signUp = async () => {
        const login = loginInput.trim()
        const password = passwordInput.trim()

        const response = await postRegistration(login, password).catch((response) => {
            if (response) setIsError(true);
        });
        if (!response) return
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('login', response.data.user.login)
        navigate("../app", { replace: true });
    }

    const movingSection = (section) => {
        setCurrentSection(section)
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
                form
                <div className={style.logo}>TODOTODOT</div>
                <SignInInput
                    input={loginInput}
                    changeInput={changeLoginInput}
                    typeInput='input'
                    placeholder='login' />
                <SignInInput
                    input={passwordInput}
                    changeInput={changePasswordInput}
                    typeInput='password'
                    placeholder='password' />
                {(currentSection === 'signIn') ? (<SignInBtn
                    verify={verify}
                    movingSection={movingSection}
                />) : (<SignUpBtn
                    signUp={signUp}
                    movingSection={movingSection}
                />)}



            </div>


        </div>
    );
}

export default SignInForm;