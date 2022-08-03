import style from "./SignIn.module.css";
import { useNavigate } from "react-router-dom";

function SignOut() {
    let navigate = useNavigate();

    const signOut = () => {
        localStorage.removeItem('login')
        localStorage.removeItem('token')
        navigate("../", { replace: true });
    }

    return (
        <div className={style.signOut}>
            <h2>Hello, {localStorage.getItem('login')}</h2>
            <button className={style.btnOut} onClick={signOut}></button>
        </div>
    );
}

export default SignOut;