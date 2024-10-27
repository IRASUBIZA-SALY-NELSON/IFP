 //@ts-ignore
import { useEffect, useState } from "react";
import NotificationCard from "./NotificationCard";
import { PiCaretLeftBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import logo from "../../assets/Logo.svg";
import empty from '../../assets/empty.6a6fd042-removebg-preview.png'

interface NotificationProps {
  notificationDay: string;
}

interface NotificationItem {
  id: string;
  text: string;
  time: string;
  isRead: boolean;
}

const NotificationList = ({ notificationDay }: NotificationProps) => {
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);
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
      } else {
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
    return (
      <div
        className="p-3 pt-4 d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div
          className="spinner-container"
          style={{ position: "relative", width: "100px", height: "100px" }}
        >
          <Spinner
            animation="border"
            role="status"
            variant="success"
            style={{ position: "absolute", width: "100%", height: "100%" }}
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <img
            src={logo}
            alt="Logo"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "50px",
              height: "50px",
            }}
          />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-3 pt-4">
        <div className="d-flex justify-content-between">
          <div className="back-button" onClick={handleBack}>
            <PiCaretLeftBold color="green" size={30} />
          </div>
          <h1 className="mx-5 px-5">Notifications</h1>
        </div>
        <div className="d-flex justify-content-center mt-5 pt-5">
          <img src={empty} alt="" style={{ height: "200px", width: "200px"}} />
        </div>
        <h4 className="text-center fw-semibold mt-4">No notification found.</h4>
      </div>
    );
  }

  return (
    <div className="p-3 pt-4">
      <div className="d-flex justify-content-evenly">
        <div className="back-button" onClick={handleBack}>
          <PiCaretLeftBold color="green" size={30} />
        </div>
        <h1>Notifications</h1>
        <div className="d-flex">
          <p
            className="mt-1"
            onClick={markAllAsRead}
            style={{ cursor: "pointer" }}
          >
            Mark all as read
          </p>
        </div>
      </div>
      <p className="fs-4 fw-semibold text-end">{notificationDay}</p>
      {notifications.map((notification) => (
        <NotificationCard
          key={notification.id}
          notificationParagraph={notification.text}
          notificationTime={notification.time}
        />
      ))}
    </div>
  );
};

export default NotificationList;
