import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from 'react-router-dom';
import './PageNotFound.css';
const PageNotFound = () => {
    const navigate = useNavigate();
    const goBackHome = () => {
        navigate(-1);
    };
    return (_jsxs("div", { className: "page-not-found p-3", children: [_jsx("h1", { children: "404" }), _jsx("h2", { children: "Oops! Page Not Found" }), _jsx("p", { children: "The page you are looking for does not exist or an error occurred." }), _jsx("button", { onClick: goBackHome, className: "btn btn-success", children: "Go Back Home" })] }));
};
export default PageNotFound;
