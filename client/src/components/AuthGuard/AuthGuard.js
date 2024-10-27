import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Navigate } from "react-router-dom";
const AuthGuard = ({ children }) => {
    const isAuthenticated = !!localStorage.getItem("token");
    if (!isAuthenticated) {
        return _jsx(Navigate, { to: "/PageNotFound", replace: true });
    }
    return _jsx(_Fragment, { children: children });
};
export default AuthGuard;
