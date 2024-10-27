import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BsPlus } from 'react-icons/bs';
import { MdLogout } from 'react-icons/md';
import styles from '../../MyProfile/MyProfile.module.css';
const Account = () => {
    return (_jsxs("div", { children: [_jsxs("div", { className: "d-flex mb-3", children: [_jsx("div", { className: `bg-success-subtle rounded-5  d-flex justify-content-center ${styles.addAccount}`, children: _jsx(BsPlus, { color: "green", size: 40, className: "mt-1" }) }), _jsx("span", { className: "fs-5 fw-semibold mt-1 mx-3", children: "Add another account" })] }), _jsxs("div", { className: "d-flex", children: [_jsx("div", { className: `d-flex justify-content-center ${styles.addAccount}`, children: _jsx(MdLogout, { color: "red", size: 35, className: "mt-1" }) }), _jsx("span", { className: "text-danger fs-5 fw-semibold mt-1 mx-3", children: "Logout" })] })] }));
};
export default Account;
