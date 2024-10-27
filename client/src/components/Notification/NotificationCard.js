import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//@ts-ignore
import { useState } from 'react';
import { IoClose } from "react-icons/io5";
import profile from "../../assets/farmer_1-removebg-preview.png";
import styles from "./Notification.module.css";
const NotificationCard = ({ notificationParagraph, notificationTime }) => {
    const [closeNotification, setCloseNotification] = useState(true);
    const handleCloseNotification = () => {
        setCloseNotification((close) => !close);
    };
    return (_jsx("div", { children: closeNotification && (_jsxs("div", { className: `notificationCard ${styles.notificationCard} p-1 pb-0`, children: [_jsxs("div", { className: `notification ${styles.notification} px-3`, children: [_jsx("img", { src: profile, alt: "", className: `image ${styles.image}` }), _jsx("p", { className: "mt-4 mx-3", children: notificationParagraph }), _jsx(IoClose, { size: 30, className: `notificationClose ${styles.notificationClose}`, onClick: handleCloseNotification })] }), _jsx("p", { className: "text-end notificationTime mx-3 pb-2", children: notificationTime })] })) }));
};
export default NotificationCard;
