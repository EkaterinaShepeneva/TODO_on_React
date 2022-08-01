import style from "./SignIn.module.css";


function SignOut() {

    const signOut = () => {
        localStorage.removeItem('login')
        localStorage.removeItem('token')
        document.location.href = "/"
    }

    return (
        <div className={style.container}>
            <h2>{localStorage.getItem('login')}</h2>
            <button onClick={signOut}>Выйти</button>
        </div>
    );
}

export default SignOut;