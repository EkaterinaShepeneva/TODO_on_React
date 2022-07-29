import style from "./SignIn.module.css";


function SignOut({ goToPage }) {

    return (
        <div className={style.container}>
            <h2>Kate</h2>
            <button onClick={() => { goToPage('SignIn') }}>Выйти</button>
        </div>
    );
}

export default SignOut;