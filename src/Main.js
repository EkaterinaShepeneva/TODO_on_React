import App from "./App";
import Registration from "./components/SignIn/Registration"
import SignIn from "./components/SignIn/SignIn"
import SignOut from "./components/SignIn/SignOut";
import { useState, useEffect } from "react";
import { validateSignIn } from "./utils/utils"
import { Link } from "react-router-dom";


function Main() {




    const signIn = (login, password) => {
        validateSignIn(login)
        document.location.href = "/app";
    }


    return (
        <div>
            <h1>TODO</h1>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                }}
            >
                <Link to="/signin">signin</Link> |{" "}
                <Link to="/registration">Registration</Link>
            </nav>
        </div>
    )
}

export default Main