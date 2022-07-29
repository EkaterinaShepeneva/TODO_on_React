import style from "./SignIn.module.css";


function SignOut({ goToPage }) {

    //const login = localStorage.getItem('login')
    return (
        <div className={style.container}>
            <h2>{localStorage.getItem('login')}</h2>
            <button onClick={() => { goToPage('SignIn') }}>Выйти</button>
        </div>
    );
}

export default SignOut;