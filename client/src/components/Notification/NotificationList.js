import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//@ts-ignore
import { useEffect, useState } from "react";
import NotificationCard from "./NotificationCard";
import { PiCaretLeftBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import logo from "../../assets/Logo.svg";
import empty from '../../assets/empty.6a6fd042-removebg-preview.png';
const NotificationList = ({ notificationDay }) => {
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            const success = Math.random() > 0.2;
            if (success) {
                const fakeNotifications = [
                    {
                        id: "1",
                        text: "Your account was created successfully!",
                        time: "10:00 AM",
                        isRead: false,
                    },
                    {
                        id: "2",
                        text: "You have a new message from John.",
                        time: "11:30 AM",
                        isRead: false,
                    },
                    {
                        id: "3",
                        text: "Your password was changed.",
                        time: "1:15 PM",
                        isRead: false,
                    },
                ];
                setNotifications(fakeNotifications);
            }
            else {
                setError(true);
            }
            setLoading(false);
        }, 1500);
    }, []);
    const markAllAsRead = () => {
        setNotifications(notifications.map((n) => ({ ...n, isRead: true })));
    };
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    };
    if (loading) {
        return (_jsx("div", { className: "p-3 pt-4 d-flex justify-content-center align-items-center", style: { height: "100vh" }, children: _jsxs("div", { className: "spinner-container", style: { position: "relative", width: "100px", height: "100px" }, children: [_jsx(Spinner, { animation: "border", role: "status", variant: "success", style: { position: "absolute", width: "100%", height: "100%" }, children: _jsx("span", { className: "visually-hidden", children: "Loading..." }) }), _jsx("img", { src: logo, alt: "Logo", style: {
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "50px",
                            height: "50px",
                        } })] }) }));
    }
    if (error) {
        return (_jsxs("div", { className: "p-3 pt-4", children: [_jsxs("div", { className: "d-flex justify-content-between", children: [_jsx("div", { className: "back-button", onClick: handleBack, children: _jsx(PiCaretLeftBold, { color: "green", size: 30 }) }), _jsx("h1", { className: "mx-5 px-5", children: "Notifications" })] }), _jsx("div", { className: "d-flex justify-content-center mt-5 pt-5", children: _jsx("img", { src: empty, alt: "", style: { height: "200px", width: "200px" } }) }), _jsx("h4", { className: "text-center fw-semibold mt-4", children: "No notification found." })] }));
    }
    return (_jsxs("div", { className: "p-3 pt-4", children: [_jsxs("div", { className: "d-flex justify-content-evenly", children: [_jsx("div", { className: "back-button", onClick: handleBack, children: _jsx(PiCaretLeftBold, { color: "green", size: 30 }) }), _jsx("h1", { children: "Notifications" }), _jsx("div", { className: "d-flex", children: _jsx("p", { className: "mt-1", onClick: markAllAsRead, style: { cursor: "pointer" }, children: "Mark all as read" }) })] }), _jsx("p", { className: "fs-4 fw-semibold text-end", children: notificationDay }), notifications.map((notification) => (_jsx(NotificationCard, { notificationParagraph: notification.text, notificationTime: notification.time }, notification.id)))] }));
};
export default NotificationList;
