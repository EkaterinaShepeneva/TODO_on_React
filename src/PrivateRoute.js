import { Navigate } from "react-router-dom";
const PrivateRoute = ({ Component }) => {
    let token = window.localStorage.getItem("token");
    if (token) { return Component }
    return <Navigate to='/' />
};
export default PrivateRoute;