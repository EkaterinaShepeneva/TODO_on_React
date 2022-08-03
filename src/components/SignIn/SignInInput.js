import style from "./SignIn.module.css";

const SignInInput = ({ input, changeInput, typeInput, placeholder }) => {

    return (
        <input className={style.input} placeholder={placeholder} value={input} onChange={changeInput} type={typeInput} />
    )
}

export default SignInInput