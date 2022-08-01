import style from "./SignIn.module.css";


function SignOut({ goToPage }) {

    const signOut = () => {
        localStorage.removeItem('login')
        localStorage.removeItem('token')
        goToPage('SignIn')
    }

    return (
        <div className={style.container}>
            <h2>{localStorage.getItem('login')}</h2>
            <button onClick={signOut}>Выйти</button>
        </div>
    );
}

export default SignOut;