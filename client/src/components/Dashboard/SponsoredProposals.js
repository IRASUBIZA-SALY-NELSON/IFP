import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//@ts-ignore
import styles from "./Dashboard.module.css";
import farmer from "../../assets/farmer_1-removebg-preview.png";
const SponsoredProposals = () => {
    return (_jsx("div", { children: _jsxs("div", { className: "d-flex align-items-center bg-success rounded-4 p-3", children: [_jsx("img", { src: farmer, alt: "A farmer" }), _jsxs("div", { children: [_jsx("h6", { className: "text-center text-white-50", children: "The animal food support project" }), _jsx("p", { className: "px-3 text-white-50", children: "This project aims at producing adequate food supplies to farmers and other users." }), _jsx("div", { className: "d-flex justify-content-center", children: _jsx("button", { className: `btn btn-light ${styles.readMore} fs-5 fw-semibold text-success`, children: "Read more" }) })] })] }) }));
};
export default SponsoredProposals;
