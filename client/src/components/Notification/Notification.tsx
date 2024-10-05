import { FaArrowLeftLong } from "react-icons/fa6";
import NotificationCard from "./NotificationCard";
import { Link } from "react-router-dom";

interface NotificationProps {
  notificationDay: string;
  notifications: Array<{
    id: string;
    text: string;
    time: string;
  }>;
}

const Notification = ({
  notificationDay,
  notifications,
}: NotificationProps) => {
  return (
    <div className="p-3 pt-4">
      <div className="d-flex justify-content-evenly">
        <FaArrowLeftLong size={30} color="green" />
        <div className="d-flex">
          <h3 className="text-success fs-2 mx-4">Notifications</h3>
          <Link to={'/notifications'}>
            <p className="mt-1">mark all as read</p>
          </Link>
        </div>
      </div>
      <p className="fs-4">{notificationDay}</p>
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

export default Notification;
