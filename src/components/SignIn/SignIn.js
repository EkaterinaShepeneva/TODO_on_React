import style from "./SignIn.module.css";

function SignIn({ goToPage }) {

    return (
        <div>

            <div className={style.container}>
                <input placeholder="login" />
                <input placeholder="password" />
                <button onClick={() => { goToPage('App') }}>Войти</button>
            </div>

            <button onClick={() => { goToPage('Registration') }}>Зарегистрироваться</button>
        </div>

    );
}

export default SignIn;