import App from "./App";
import Registration from "./components/SignIn/Registration"
import SignIn from "./components/SignIn/SignIn"
import SignOut from "./components/SignIn/SignOut";
import { useState, useEffect } from "react";

function Main() {
    const [page, setPage] = useState('SignIn')

    const goToPage = (namePage) => {
        setPage(namePage)
    }

    return (
        <div>

            {page === 'Registration' && (<Registration goToPage={goToPage} />)}
            {page === 'SignIn' && (<SignIn goToPage={goToPage} />)}
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