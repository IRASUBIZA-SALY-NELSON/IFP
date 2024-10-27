import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//@ts-ignore
import { useState } from "react";
import styles from "../SignUp/SignUp.module.css";
import { FaApple, FaRegUser } from "react-icons/fa6";
import { MdLockOutline } from "react-icons/md";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import SignUpWith from "../SignUp/SignUpWith";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        rememberMe: false,
    });
    const [isChecked, setChecked] = useState(false);
    const navigate = useNavigate();
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/login", {
                email: formData.email,
                password: formData.password,
                rememberMe: formData.rememberMe,
            });
            console.log(response.data); // Log the entire response
            const { token } = response.data;
            console.log(token); // Log the token
            if (!token) {
                throw new Error("Token not received");
            }
            localStorage.setItem("token", token);
            setTimeout(() => {
                navigate("/user-dashboard");
            }, 100); // Delay for 100ms
        }
        catch (error) {
            alert("Incorrect credentials");
            console.error(error);
        }
    };
    const handleCheckBoxClick = () => {
        setChecked((prevCheck) => !prevCheck);
        setFormData({ ...formData, rememberMe: !isChecked });
    };
    return (_jsxs("div", { className: styles.signupForm, children: [_jsx("p", { className: "text-success fs-2 fw-bold text-right", children: "Login" }), _jsx("p", { className: "text-black fs-5", children: "Welcome back to the app" }), _jsxs("form", { className: "mt-5", onSubmit: handleFormSubmit, children: [_jsxs("div", { className: styles.inputGroup, children: [_jsx(FaRegUser, { className: styles.icon, size: 20 }), _jsx("input", { type: "text", className: "form-control", placeholder: "Email", name: "email", value: formData.email, onChange: (e) => setFormData({ ...formData, email: e.target.value }), required: true })] }), _jsxs("div", { className: styles.inputGroup, children: [_jsx(MdLockOutline, { className: styles.icon, size: 20 }), _jsx("input", { type: "password", className: "form-control", placeholder: "Password", name: "password", value: formData.password, onChange: (e) => setFormData({ ...formData, password: e.target.value }), required: true })] }), _jsxs("div", { className: `${styles.inputGroup} d-flex justify-content-between`, children: [_jsxs("div", { children: [_jsx("span", { onClick: handleCheckBoxClick, className: styles.icon, children: !isChecked ? (_jsx(ImCheckboxUnchecked, { size: 20, color: "green" })) : (_jsx(ImCheckboxChecked, { size: 20, color: "green" })) }), _jsx("p", { className: "mx-5", children: "Remember me" })] }), _jsx("p", { className: "text-danger", children: "Forgot password?" })] }), _jsx("button", { type: "submit", className: `btn btn-success ${styles.submitButton} fw-semibold fs-4`, children: "Login" }), _jsx("h4", { className: "text-center mt-3", children: "or" }), _jsxs("div", { className: "d-flex justify-content-between px-5 mt-3", children: [_jsx(SignUpWith, { Icon: FcGoogle }), _jsx(SignUpWith, { Icon: FaApple })] })] })] }));
};
export default Login;
