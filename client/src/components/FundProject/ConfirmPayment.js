import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//@ts-ignore
import { PiCaretLeftBold } from "react-icons/pi";
import styles from "./FundProject.module.css";
import { useNavigate } from "react-router-dom";
import SuccessPopUp from "../SuccessPopUp/SuccessPopup";
const ConfirmPayment = () => {
    const accordions = [
        { id: 1, className: "bg-success-subtle" },
        { id: 2, className: "bg-success-subtle" },
        { id: 3, className: "bg-success" },
    ];
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    };
    return (_jsxs("div", { className: styles.container, children: [_jsx("div", { className: `${styles["back-button"]}`, onClick: handleBack, children: _jsx(PiCaretLeftBold, { color: "green", size: 30 }) }), _jsx("h3", { className: "text-success mb-5 fw-semibold", children: "Fund Project" }), _jsx("div", { className: "d-flex mb-5", children: accordions.map((accordion) => (_jsx("div", { className: `${styles.accordion} ${accordion.className} rounded-2` }, accordion.id))) }), _jsxs("div", { children: [_jsx(SuccessPopUp, { confirmText: "Confirm Payment", buttonColor: "success" }), _jsx("div", { className: "d-flex justify-content-end mt-5", children: _jsx("button", { className: "btn btn-success fs-5 fw-semibold", children: "Done" }) })] })] }));
};
export default ConfirmPayment;
