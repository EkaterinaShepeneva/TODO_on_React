import style from "./SignIn.module.css";

const SignUpBtn = ({ signUp, movingSection }) => {
    return (
        <div className={style.btnContainer}>
            <button className={style.btnMain} onClick={() => { signUp() }}>sign up</button>
            <button className={style.btnSign} onClick={() => { movingSection("signIn") }}>sign in</button>
        </div>)
}

export default SignUpBtn 