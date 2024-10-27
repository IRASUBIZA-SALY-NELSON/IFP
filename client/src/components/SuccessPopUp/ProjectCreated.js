import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./ProjectCreated.module.css";
const ProjectCreated = ({ confirmText, buttonColor }) => {
    return (_jsx("div", { className: `container ${styles.container} d-flex align-items-center justify-content-center`, children: _jsxs("div", { className: `notification ${styles.notification} p-3`, children: [_jsx("p", { className: "fw-semibold fs-2 text-center", children: confirmText }), _jsx("div", { className: "d-flex justify-content-center", children: _jsx("button", { className: `buttonOk ${styles.buttonOk} ${buttonColor} text-white pt-1 pb-1 px-3 fs-3`, children: "Ok" }) })] }) }));
};
export default ProjectCreated;
