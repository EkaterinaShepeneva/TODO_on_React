import style from "./SignIn.module.css";

const SignInBtn = ({ verify, movingSection }) => {
    return (
        <div className={style.btnContainer}>
            <button className={style.btnMain} onClick={() => { verify() }}>sign in</button>
            <button className={style.btnSign} onClick={() => { movingSection("signUp") }}>sign up</button>
        </div>)
}

export default SignInBtn 