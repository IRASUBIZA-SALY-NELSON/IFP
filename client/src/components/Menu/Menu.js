import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//@ts-ignore
import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { RiMessage2Line } from "react-icons/ri";
import styles from "./Dashboard.module.css";
import { BsGrid } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const Menu = () => {
    const navigate = useNavigate();
    const menuItems = [
        {
            id: 1,
            label: "Dashboard",
            icon: _jsx(BsGrid, { size: 30, color: "#198754" }),
            className: styles.dashboard,
            path: "/dashboard",
        },
        {
            id: 2,
            label: "Contact",
            icon: _jsx(FaPhoneAlt, { size: 30, color: "#198754" }),
            className: styles.contacts,
            path: "/contacts",
        },
        {
            id: 3,
            label: "About",
            icon: _jsx(RiMessage2Line, { size: 30, color: "#198754" }),
            className: styles.about,
            path: "/about-us",
        },
        {
            id: 4,
            label: "Profile",
            icon: _jsx(FaUser, { size: 30, color: "#198754" }),
            className: styles.profile,
            path: "/my-profile",
        },
    ];
    const handleBack = () => {
        navigate(-1);
    };
    return (_jsx("div", { className: `container ${styles.container} d-flex justify-content-center`, children: _jsxs("div", { children: [_jsx("div", { className: "d-flex", onClick: handleBack, children: _jsx(IoMdCloseCircleOutline, { size: 40, color: "#198754" }) }), menuItems.map((item) => (_jsxs("button", { className: `text-success fw-normal fs-4 d-block ${item.className}`, onClick: () => navigate(item.path), children: [_jsx("span", { className: "icon", children: item.icon }), _jsx("span", { children: item.label })] }, item.id)))] }) }));
};
export default Menu;
