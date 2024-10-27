import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//@ts-ignore
import { useState, useContext } from "react";
import { FaRegUser, FaRegEnvelope, FaApple } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import styles from "./SignUp.module.css";
import SignUpWith from "./SignUpWith";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { SignUpContext } from '../../contexts/SignUpContext';
const SignupForm = () => {
    const [isChecked, setChecked] = useState(false);
    const { formData, setFormData } = useContext(SignUpContext);
    const navigate = useNavigate();
    const handleCheckBoxClick = () => {
        setChecked((prevCheck) => {
            const newCheck = !prevCheck;
            setFormData({ ...formData, termsAndConditions: newCheck });
            return newCheck;
        });
    };
    const handleNextClick = () => {
        if (formData.username &&
            formData.email &&
            formData.password &&
            formData.confirmPassword &&
            formData.termsAndConditions) {
            navigate("/complete-profile");
        }
        else {
            alert("Please fill in all fields and accept the terms and conditions.");
        }
    };
    return (_jsxs("div", { className: styles.signupForm, children: [_jsx("p", { className: "text-success fs-2 fw-bold text-right", children: "Sign Up" }), _jsx("p", { className: "fw-semibold text-black fs-5 mb-3", children: "Welcome to the app" }), _jsxs("form", { onSubmit: (e) => e.preventDefault(), children: [_jsxs("div", { className: styles.inputGroup, children: [_jsx(FaRegUser, { className: styles.icon, size: 20 }), _jsx("input", { type: "text", className: "form-control", placeholder: "Username", name: "username", value: formData.username, onChange: (e) => setFormData({ ...formData, username: e.target.value }), required: true })] }), _jsxs("div", { className: styles.inputGroup, children: [_jsx(FaRegEnvelope, { className: styles.icon, size: 20 }), _jsx("input", { type: "email", className: "form-control", placeholder: "Email", name: "email", value: formData.email, onChange: (e) => setFormData({ ...formData, email: e.target.value }), required: true })] }), _jsxs("div", { className: styles.inputGroup, children: [_jsx(MdLockOutline, { className: styles.icon, size: 20 }), _jsx("input", { type: "password", className: "form-control", placeholder: "Password", name: "password", value: formData.password, onChange: (e) => setFormData({ ...formData, password: e.target.value }), required: true })] }), _jsxs("div", { className: styles.inputGroup, children: [_jsx(MdLockOutline, { className: styles.icon, size: 20 }), _jsx("input", { type: "password", className: "form-control", placeholder: "Confirm Password", name: "confirmPassword", value: formData.confirmPassword, onChange: (e) => setFormData({ ...formData, confirmPassword: e.target.value }), required: true })] }), _jsxs("div", { className: styles.inputGroup, children: [_jsx("span", { onClick: handleCheckBoxClick, className: styles.icon, children: !isChecked ? (_jsx(ImCheckboxUnchecked, { className: styles.icon, size: 20, color: "green" })) : (_jsx(ImCheckboxChecked, { className: styles.icon, size: 20, color: "green" })) }), _jsx("p", { className: "mx-5", children: "I understood the terms and conditions" })] }), _jsx("button", { type: "button", className: `btn btn-success ${styles.submitButton} fw-semibold fs-4`, onClick: handleNextClick, children: "Next" }), _jsx("h4", { className: "text-center mt-3", children: "or" }), _jsxs("div", { className: "d-flex justify-content-between px-5 mt-3", children: [_jsx(SignUpWith, { Icon: FcGoogle }), _jsx(SignUpWith, { Icon: FaApple })] })] })] }));
};
export default SignupForm;
