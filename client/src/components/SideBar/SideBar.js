import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { CiGrid42 } from "react-icons/ci";
import { FaPhoneAlt, FaUser, FaRegQuestionCircle } from "react-icons/fa";
import { RiMessage2Line } from "react-icons/ri";
import styles from "./Dashboard.module.css";
const SideBar = () => {
    return (_jsx("div", { className: `container ${styles.container} d-flex justify-content-center`, children: _jsxs("div", { children: [_jsx("div", { className: "d-flex", children: _jsx(IoMdCloseCircleOutline, { size: 40, color: "green" }) }), _jsxs("button", { className: `dashboard ${styles.dashboard} text-success fw-normal fs-4 d-block`, children: [_jsx(CiGrid42, { size: 30, color: "green", className: "me-3" }), "Dashboard"] }), _jsxs("button", { className: `contacts ${styles.contacts} text-success fw-normal fs-4 d-block`, children: [_jsx(FaPhoneAlt, { size: 30, color: "green", className: "me-3" }), "Contacts"] }), _jsxs("button", { className: `about ${styles.about} text-success fw-normal fs-4 d-block`, children: [_jsx(RiMessage2Line, { size: 30, color: "green", className: "me-3" }), "About"] }), _jsxs("button", { className: `profile ${styles.profile} text-success fw-normal fs-4 d-block`, children: [_jsx(FaUser, { size: 30, color: "green", className: "me-3" }), "Profile"] }), _jsxs("div", { className: "text-success fs-3  text-center mt-5", children: [_jsx(FaRegQuestionCircle, { size: 30, color: "green" }), "Settings"] })] }) }));
};
export default SideBar;
