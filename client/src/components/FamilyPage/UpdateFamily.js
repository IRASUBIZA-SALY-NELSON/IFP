import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//@ts-ignore
import { PiCaretLeftBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import styles from "./UpdateFamily.module.css";
import PhotoUpload from "./PhotoUpload";
const UpdateFamily = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    };
    return (_jsxs("div", { className: `${styles.container}`, children: [_jsx("div", { className: `${styles["back-button"]}`, onClick: handleBack, children: _jsx(PiCaretLeftBold, { color: "green", size: 30 }) }), _jsx("h3", { className: "text-success mb-5 fw-semibold", children: "Update family" }), _jsxs("div", { children: [_jsx("p", { children: "Enjoy unlimited update about your family issues through using ifp update feature" }), _jsxs("form", { children: [_jsx("div", { className: "mb-3", children: _jsx("input", { type: "text", className: "form-control p-3 rounded-5", placeholder: "Enter your names" }) }), _jsx("div", { className: "mb-3", children: _jsx("input", { type: "text", className: "form-control p-3 rounded-5", placeholder: "Enter the names of the family leader" }) }), _jsx("div", { className: "mb-3", children: _jsx("input", { type: "text", className: "form-control p-3 rounded-5", placeholder: "Enter total family number" }) }), _jsx("p", { children: "Choose your family photos" }), _jsxs("div", { children: [_jsx(PhotoUpload, {}), _jsx(PhotoUpload, {}), _jsx(PhotoUpload, {})] }), _jsx("div", { children: _jsx("button", { type: "submit", className: "btn btn-success w-100 fw-semibold pt-2 p-2", children: "Submit" }) })] })] })] }));
};
export default UpdateFamily;
