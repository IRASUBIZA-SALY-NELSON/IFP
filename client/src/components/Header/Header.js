import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//@ts-ignore
import logo from "../../assets/Logo.svg";
import children from "../../assets/children.png";
import { IoGridOutline } from "react-icons/io5";
import { MdNotificationsNone } from "react-icons/md";
import { Link } from "react-router-dom";
const Header = () => {
    return (_jsxs("div", { className: "container-fluid bg-success p-3 d-flex justify-content-between align-items-center fixed-top", children: [_jsxs("div", { className: "text-white fw-bold fs-1 d-flex align-items-center", children: [_jsx(Link, { to: "/dashboard", className: "d-flex align-items-center", children: _jsx("img", { src: logo, alt: "A logo", className: "me-2" }) }), "IFP"] }), _jsxs("div", { className: "d-flex", children: [_jsx(Link, { to: "/notifications", children: _jsx("div", { children: _jsx(MdNotificationsNone, { size: 35, color: "white", className: "mt-2 mx-2" }) }) }), _jsx(Link, { to: "/menu", children: _jsx("div", { children: _jsx(IoGridOutline, { size: 30, color: "white", className: "mt-2 mx-2" }) }) }), _jsx("div", { className: "mx-2", children: _jsx(Link, { to: "/my-profile", children: _jsx("img", { src: children, alt: "Profile picture", className: "rounded-circle", style: { width: "40px", height: "40px" } }) }) })] })] }));
};
export default Header;
