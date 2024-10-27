import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//@ts-ignore
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { MdOutlinePhone } from 'react-icons/md';
import CardInfoBadge from './CardInfoBadge';
import styles from './MyProfile.module.css';
const ProfileCard = () => {
    return (_jsxs("div", { className: `${styles.profileCard} m-3 p-3 rounded-4`, children: [_jsx("h4", { className: "text-white text-center", children: "NGABO Oreste" }), _jsxs("div", { className: "cardInfo d-flex justify-content-evenly", children: [_jsx(CardInfoBadge, { heading: "Profession", role: "middleman" }), _jsx(CardInfoBadge, { heading: "Location", role: "Kigali" }), _jsx(CardInfoBadge, { heading: "Experience", role: "5yrs" })] }), _jsxs("div", { className: "location mt-3", children: [_jsxs("div", { className: "mt-2", children: [_jsx("span", { children: _jsx(HiOutlineLocationMarker, { size: 30, color: "white", className: "mx-3" }) }), _jsx("span", { className: "fs-5 text-white mt-1", children: "Kigali Rwanda" })] }), _jsxs("div", { className: "mt-2", children: [_jsx("span", { children: _jsx(MdOutlinePhone, { size: 30, color: "white", className: "mx-3" }) }), _jsx("span", { className: "fs-5 text-white mt-1", children: "0738049975" })] })] })] }));
};
export default ProfileCard;
