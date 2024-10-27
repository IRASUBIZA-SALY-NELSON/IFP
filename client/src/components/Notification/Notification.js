import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//@ts-ignore
import { FaArrowLeftLong } from "react-icons/fa6";
import NotificationCard from "./NotificationCard";
import { Link } from "react-router-dom";
const Notification = ({ notificationDay, notifications, }) => {
    return (_jsxs("div", { className: "p-3 pt-4", children: [_jsxs("div", { className: "d-flex justify-content-evenly", children: [_jsx(FaArrowLeftLong, { size: 30, color: "green" }), _jsxs("div", { className: "d-flex", children: [_jsx("h3", { className: "text-success fs-2 mx-4", children: "Notifications" }), _jsx(Link, { to: '/notifications', children: _jsx("p", { className: "mt-1", children: "mark all as read" }) })] })] }), _jsx("p", { className: "fs-4", children: notificationDay }), notifications.map((notification) => (_jsx(NotificationCard, { notificationParagraph: notification.text, notificationTime: notification.time }, notification.id)))] }));
};
export default Notification;
