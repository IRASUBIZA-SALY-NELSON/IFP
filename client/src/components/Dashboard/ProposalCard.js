import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./Dashboard.module.css";
import farmer from "../../assets/farmer_1-removebg-preview.png";
import { Link } from "react-router-dom";
const ProposalCard = ({ proposalHeading, proposalDescription, projectId }) => {
    return (_jsxs("div", { className: "d-flex align-items-center bg-success rounded-4 p-1 px-2", children: [_jsx("img", { src: farmer, alt: "A farmer" }), _jsxs("div", { children: [_jsx("h6", { className: "fw-semibold text-white", children: proposalHeading }), _jsx("p", { className: "px-2 text-white-50", children: proposalDescription }), _jsx("div", { className: "d-flex justify-content-center", children: _jsx(Link, { to: `/project-description/${projectId}`, children: _jsx("button", { className: `btn btn-light ${styles.readMore} fs-5 fw-semibold text-success`, children: "Read more" }) }) })] })] }));
};
export default ProposalCard;
