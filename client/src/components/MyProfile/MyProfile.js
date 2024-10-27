import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//@ts-ignore
import Header from "../Header/Header";
import style from "../AboutUs/AboutUs.module.css";
import styles from "./MyProfile.module.css";
import farmer from "../../assets/farmer_1-removebg-preview.png";
import ProfileCard from "./ProfileCard";
import Account from "../Dashboard/SmallUsageComponents/Account";
const MyProfile = () => {
    return (_jsxs("div", { children: [_jsx("div", { className: "pb-4", children: _jsx(Header, {}) }), _jsx("div", { className: `d-flex justify-content-center mt-5 pt-5`, children: _jsx("img", { src: farmer, alt: "", className: `${style.profileImg}` }) }), _jsx(ProfileCard, {}), _jsxs("div", { children: [_jsxs("div", { className: "d-flex justify-content-between p-4", children: [_jsx("span", { className: "fs-5 fw-semibold", children: "Paterned Sponsors" }), _jsx("span", { className: "fw-semibold", children: "see all" })] }), _jsx("div", { className: "p-3", children: _jsxs("div", { className: `d-flex justify-content-evenly p-3 px-0 align-items-center sponsors ${styles.sponsors}`, children: [_jsx("img", { src: farmer, alt: "" }), _jsx("span", { className: "fw-semibold fs-5", children: "NGABO Oreste" })] }) }), _jsx("div", { className: "p-3", children: _jsx(Account, {}) })] })] }));
};
export default MyProfile;
