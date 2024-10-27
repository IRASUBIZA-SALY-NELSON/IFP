import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//@ts-ignore
import { useState } from "react";
import { PiCaretLeftBold } from "react-icons/pi";
import styles from "./FundProject.module.css";
import { useNavigate } from "react-router-dom";
const FundProject = () => {
    const [formData, setFormData] = useState({
        account: "",
        expiryDate: "",
        cvv: "",
        names: "",
    });
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        navigate("/funds/deposit/amount");
        setFormData({
            names: "",
            expiryDate: "",
            cvv: "",
            account: "",
        });
    };
    const accordions = [
        { id: 1, className: "bg-success" },
        { id: 2, className: "bg-success-subtle" },
        { id: 3, className: "bg-success-subtle" },
    ];
    return (_jsxs("div", { className: `${styles.container}`, children: [_jsx("div", { className: `${styles["back-button"]}`, onClick: handleBack, children: _jsx(PiCaretLeftBold, { color: "green", size: 30 }) }), _jsx("h3", { className: "text-success mb-5 fw-semibold", children: "Fund Project" }), _jsx("div", { className: "d-flex mb-5", children: accordions.map((accordion) => (_jsx("div", { className: `${styles.accordion} ${accordion.className} rounded-2` }, accordion.id))) }), _jsxs("form", { onSubmit: handleFormSubmit, children: [_jsxs("div", { className: "mb-3", children: [_jsx("label", { htmlFor: "account", className: "form-label fs-5", children: "Enter your Bank Account" }), _jsx("input", { type: "text", name: "account", className: "fs-5 text-dark", value: formData.account, onChange: (e) => setFormData({ ...formData, account: e.target.value }), required: true })] }), _jsxs("div", { className: "d-flex", children: [_jsxs("div", { className: "mb-3 me-3", children: [_jsx("label", { htmlFor: "account", className: "form-label fs-5", children: "Expiry date" }), _jsx("input", { type: "date", name: "expiryDate", className: "fs-5 text-dark", value: formData.expiryDate, onChange: (e) => setFormData({ ...formData, expiryDate: e.target.value }), required: true })] }), _jsxs("div", { className: "mb-3", children: [_jsx("label", { htmlFor: "account", className: "form-label fs-5", children: "Cvv" }), _jsx("input", { name: "cvv", type: "text", className: "fs-5 text-dark", value: formData.cvv, onChange: (e) => setFormData({ ...formData, cvv: e.target.value }), required: true })] })] }), _jsxs("div", { className: "mb-3", children: [_jsx("label", { htmlFor: "account", className: "form-label fs-5", children: "Enter your names" }), _jsx("input", { name: "names", type: "text", className: "fs-5 text-dark", value: formData.names, onChange: (e) => setFormData({ ...formData, names: e.target.value }), required: true })] }), _jsx("div", { className: "d-flex justify-content-end", children: _jsx("button", { type: "submit", className: "btn btn-success fw-semibold fs-5", children: "Next" }) })] })] }));
};
export default FundProject;
