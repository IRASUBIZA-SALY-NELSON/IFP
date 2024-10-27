import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//@ts-ignore
import styles from "./WelcomePage.module.css";
import logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
const WelcomePage = () => {
    return (_jsxs("div", { className: `welcomePage ${styles.welcomePage}`, children: [_jsx("div", { className: "d-flex justify-content-center pt-5", children: _jsxs("span", { className: "text-white fw-bold fs-1", children: [_jsx("img", { src: logo, alt: "A logo" }), "IFP"] }) }), _jsxs("div", { className: "mt-5 pt-5", children: [_jsx("p", { className: "text-center text-white fw-bold fs-1", children: "Get In Touch with Farmers" }), _jsx("p", { className: "text-center text-white fw-bold fs-1", children: "Sponsors and Middleman" })] }), _jsxs("div", { className: "mt-5", children: [_jsx("div", { className: "text-center", children: _jsx(Link, { to: "/register", className: `button ${styles.button} text-white text-decoration-none fs-5 d-block fw-semibold mx-5 rounded-5`, children: "Sign Up" }) }), _jsx("div", { className: "text-center mt-5", children: _jsx(Link, { to: "/login", className: `button ${styles.button} text-white text-decoration-none fs-5 d-block fw-semibold mx-5 rounded-5`, children: "Login" }) })] })] }));
};
export default WelcomePage;
