import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//@ts-ignore
import styles from "./SuccessPopup.module.css";
const SuccessPopUp = ({ confirmText, buttonColor }) => {
    return (_jsx("div", { className: `d-flex justify-content-center mt-5`, children: _jsxs("div", { className: `notification ${styles.notification} p-4`, children: [_jsx("p", { className: "fw-semibold fs-2 text-center", children: confirmText }), _jsx("div", { className: "d-flex justify-content-center", children: _jsx("button", { className: `${styles.buttonOk} btn btn-${buttonColor} text-white pt-1 pb-1 px-3 fs-3`, children: "Ok" }) })] }) }));
};
export default SuccessPopUp;
