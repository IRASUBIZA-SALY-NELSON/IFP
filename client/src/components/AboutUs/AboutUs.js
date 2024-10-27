import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from "./AboutUs.module.css";
const AboutUs = () => {
    return (_jsxs("div", { children: [_jsx(Header, {}), _jsx("div", { className: `aboutUs ${styles.aboutUs} fs-4 fw-semibold px-5 p-3`, children: "About Us" }), _jsx("div", { className: `d-flex justify-content-center p-4`, children: _jsx("img", { src: "", alt: "", className: `${styles.profileImg}` }) }), _jsxs("div", { className: "px-5", children: [_jsx("h3", { className: "fw-semibold", children: "What we do" }), _jsx("p", { className: "fs-5", children: "We are dedicated software aiming to create a simple way of connecting farmers and their sponsors, making people happy and impressed." })] }), _jsx("div", { className: "Faq-section" }), _jsx(Footer, {})] }));
};
export default AboutUs;
