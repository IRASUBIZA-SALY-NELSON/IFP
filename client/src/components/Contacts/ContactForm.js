import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import "./ContactForm.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import contactImage from "../../assets/contactImage.png";
const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, email, message });
        setName("");
        setEmail("");
        setMessage("");
    };
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsx("h2", { className: "contact-header", children: "Contact us" }), _jsx("hr", {}), _jsx("img", { src: contactImage, alt: "Contact illustration", className: "contact-form-image" }), _jsx("p", { className: "talk", children: "Eagerly want to talk with us" }), _jsx("div", { className: "contact-form-container", children: _jsxs("form", { onSubmit: handleSubmit, className: "contact-form", children: [_jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "name", children: "Name" }), _jsx("input", { type: "text", id: "name", value: name, onChange: (e) => setName(e.target.value), required: true })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "email", children: "Email" }), _jsx("input", { type: "text", id: "email", value: email, onChange: (e) => setEmail(e.target.value), required: true })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "message", children: "Message" }), _jsx("textarea", { name: "message", id: "message", value: message, onChange: (e) => setMessage(e.target.value), required: true })] }), _jsx("button", { type: "submit", className: "contact-form-submit d-flex justify-content-center", children: "Send" })] }) }), _jsx(Footer, {})] }));
};
export default ContactForm;
