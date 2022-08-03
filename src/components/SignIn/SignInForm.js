import style from "./SignIn.module.css";
import { useState, useEffect } from "react";
import { postSignIn } from "../../api/http"
import SignInInput from "./SignInInput";
import { postRegistration } from "../../api/http"
import SignInBtn from "./SignInBtn.js";
import SignUpBtn from "./SignUpBtn";
import { useNavigate } from "react-router-dom";
import { errorMessage, errorCode } from "../../api/http.js";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function SignInForm() {

    const [loginInput, setLoginInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')
    const [currentSection, setCurrentSection] = useState('signIn')
    let navigate = useNavigate();

    const verify = async () => {
        const login = loginInput.trim()
        const password = passwordInput.trim()

        const response = await postSignIn(login, password)
        if (!response) return
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('login', response.data.user.login)
        navigate("../app", { replace: true });
    }

    const notify = () => toast(errorMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });;

    const signUp = async () => {
        const login = loginInput.trim()
        const password = passwordInput.trim()

        const response = await postRegistration(login, password)
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
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
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