import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//@ts-ignore
import { useState } from "react";
import styles from "./FundProject.module.css";
import { PiCaretLeftBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
const ChooseAmount = () => {
    const [formData, setFormData] = useState({
        amount: "",
    });
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        navigate('/funds/deposit/confirm-payment');
        setFormData({
            amount: ""
        });
    };
    const accordions = [
        { id: 1, className: "bg-success-subtle" },
        { id: 2, className: "bg-success" },
        { id: 3, className: "bg-success-subtle" },
    ];
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    };
    return (_jsxs("div", { className: `${styles.container}`, children: [_jsx("div", { className: `${styles["back-button"]}`, onClick: handleBack, children: _jsx(PiCaretLeftBold, { color: "green", size: 30 }) }), _jsx("h3", { className: "text-success mb-5 fw-semibold", children: "Fund Project" }), _jsx("div", { className: "d-flex mb-5", children: accordions.map((accordion) => (_jsx("div", { className: `${styles.accordion} ${accordion.className} rounded-2` }, accordion.id))) }), _jsxs("form", { onSubmit: handleFormSubmit, children: [_jsxs("div", { className: "mb-3", children: [_jsx("label", { htmlFor: "account", className: "form-label fs-5", children: "Enter your Bank Account" }), _jsx("input", { type: "text", name: "account", className: "fs-5 text-dark", value: formData.amount, onChange: (e) => setFormData({ ...formData, amount: e.target.value }) })] }), _jsx("div", { className: "d-flex justify-content-end", children: _jsx("button", { type: "submit", className: "btn btn-success fw-semibold fs-5", children: "Next" }) })] })] }));
};
export default ChooseAmount;
