import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//@ts-ignore
import Header from "../Header/Header";
import ProfileCard from "../MyProfile/ProfileCard";
import ProjectsCard from "./ProjectsCard";
import farm1 from "../../assets/wat 1.png";
import Account from "../Dashboard/SmallUsageComponents/Account";
import styles from "./UserProfile.module.css";
const UserProfile = () => {
    return (_jsx("div", { children: _jsxs("div", { children: [_jsx(Header, {}), _jsxs("div", { className: "mt-5 pt-5", children: [_jsx("div", { className: `d-flex justify-content-center mt-3`, children: _jsx("img", { src: farm1, alt: "", className: `rounded-4 ${styles.profileImg}` }) }), _jsx(ProfileCard, {}), _jsxs("div", { children: [_jsx("h5", { className: "mx-3 fw-semibold text-body", children: "My Projects" }), _jsxs("div", { className: "my-projects d-flex justify-content-evenly", children: [_jsx(ProjectsCard, { projectImg: farm1, projectName: "Land Caring" }), _jsx(ProjectsCard, { projectImg: farm1, projectName: "Land Caring" })] })] })] }), _jsx("div", { className: "p-3 mt-3", children: _jsx(Account, {}) })] }) }));
};
export default UserProfile;
