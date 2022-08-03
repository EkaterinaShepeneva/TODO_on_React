import style from "./SignIn.module.css";

const SignInInput = ({ input, changeInput, typeInput, placeholder, handleKeyPress }) => {

    return (
        <input className={style.input} onKeyDown={(event) => handleKeyPress(event)} placeholder={placeholder} value={input} onChange={changeInput} type={typeInput} />
    )
}

export default SignInInput