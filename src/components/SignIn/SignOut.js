import style from "./SignIn.module.css";


function SignOut() {

    const signOut = () => {
        localStorage.removeItem('login')
        localStorage.removeItem('token')
        document.location.href = "/TODO_on_React"
    }

    return (
        <div className={style.signOut}>
            <h2>Hello, {localStorage.getItem('login')}</h2>
            <button className={style.btnOut} onClick={signOut}></button>
        </div>
    );
}

export default SignOut;