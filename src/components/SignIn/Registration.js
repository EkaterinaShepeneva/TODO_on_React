import style from "./SignIn.module.css";


function Registration({ goToPage }) {

    return (
        <div className={style.container}>
            <input placeholder="login" />
            <input placeholder="password" />
            <button onClick={() => { goToPage('SignIn') }}>Зарегистрироваться</button>
        </div>
    );
}

export default Registration;