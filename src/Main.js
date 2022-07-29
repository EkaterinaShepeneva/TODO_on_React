import App from "./App";
import Registration from "./components/SignIn/Registration"
import SignIn from "./components/SignIn/SignIn"
import SignOut from "./components/SignIn/SignOut";
import { useState, useEffect } from "react";
import { validateSignIn } from "./utils/utils"


function Main() {
    const [page, setPage] = useState('App')

    const goToPage = (namePage) => {
        setPage(namePage)
    }

    const signIn = (login, password) => {
        validateSignIn(login)
        goToPage('App')
    }


    return (
        <div>

            {page === 'Registration' && (<Registration goToPage={goToPage} />)}
            {page === 'SignIn' && (<SignIn signIn={signIn} goToPage={goToPage} />)}
            {page === 'App' && (
                <div>
                    <SignOut goToPage={goToPage} />
                    <App />
                </div>
            )}
        </div>
    )
}

export default Main