import React from "react";
import {AlertCircle, CheckCircle, ExternalLink, Info, X} from "lucide-react";
import {NotificationItem} from "src/types/notifications";
import styles from "src/components/NotificationCard/NotificationCard.module.scss";

// Constants for time calculations
const MILLISECONDS_IN_SECOND = 1000;
const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
const DAYS_IN_WEEK = 7;
const SINGULAR_THRESHOLD = 1;

interface NotificationCardProps {
  notification: NotificationItem;
  onMarkAsRead: (id: number) => void;
  onDelete: (id: number) => void;
}

const getTypeIcon = (type: NotificationItem["type"]) => {
  switch (type) {
    case "SUCCESS":
      return <CheckCircle size={20} />;
    case "ERROR":
      return <AlertCircle size={20} />;
    case "WARNING":
      return <AlertCircle size={20} />;
    default:
      return <Info size={20} />;
  }
};

const getTypeColor = (type: NotificationItem["type"]) => {
  switch (type) {
    case "SUCCESS":
      return styles.success;
    case "ERROR":
      return styles.error;
    case "WARNING":
      return styles.warning;
    default:
      return styles.info;
  }
};

const formatTimeAgo = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / MILLISECONDS_IN_SECOND);

  if (diffInSeconds < SECONDS_IN_MINUTE) {
    return "Just now";
  }

  const diffInMinutes = Math.floor(diffInSeconds / SECONDS_IN_MINUTE);
  if (diffInMinutes < MINUTES_IN_HOUR) {
    return `${diffInMinutes} minute${diffInMinutes > SINGULAR_THRESHOLD ? "s" : ""} ago`;
  }

  const diffInHours = Math.floor(diffInMinutes / MINUTES_IN_HOUR);
  if (diffInHours < HOURS_IN_DAY) {
    return `${diffInHours} hour${diffInHours > SINGULAR_THRESHOLD ? "s" : ""} ago`;
  }

  const diffInDays = Math.floor(diffInHours / HOURS_IN_DAY);
  if (diffInDays < DAYS_IN_WEEK) {
    return `${diffInDays} day${diffInDays > SINGULAR_THRESHOLD ? "s" : ""} ago`;
  }

  return date.toLocaleDateString();
};

export function NotificationCard({notification, onMarkAsRead, onDelete}: NotificationCardProps) {
  const handleMarkAsRead = () => {
    if (!notification.isRead) {
      onMarkAsRead(notification.id);
    }
  };

  const handleDelete = () => {
    onDelete(notification.id);
  };

  const handleActionClick = () => {
    if (notification.actionUrl) {
      window.open(notification.actionUrl, "_blank");
    }
  };

  return (
    <div
      className={`${styles.notificationCard} ${getTypeColor(notification.type)} ${!notification.isRead ? styles.unread : ""}`}
      onClick={handleMarkAsRead}
    >
      <div className={styles.notificationHeader}>
        <div className={styles.notificationIcon}>
          {getTypeIcon(notification.type)}
        </div>
        <div className={styles.notificationMeta}>
          <h3 className={styles.notificationTitle}>
            {notification.title}
          </h3>
          <span className={styles.notificationTime}>
            {formatTimeAgo(notification.createdAt)}
          </span>
        </div>
        <div className={styles.notificationActions}>
          {!notification.isRead && (
            <button
              className={styles.markReadButton}
              onClick={(e) => {
                e.stopPropagation();
                handleMarkAsRead();
              }}
              title="Mark as read"
            >
              <CheckCircle size={16} />
            </button>
          )}
          <button
            className={styles.deleteButton}
            onClick={(e) => {
              e.stopPropagation();
              handleDelete();
            }}
            title="Delete notification"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      <div className={styles.notificationContent}>
        <p className={styles.notificationMessage}>
          {notification.message}
        </p>

        {notification.actionUrl && notification.actionText && (
          <button
            className={styles.actionButton}
            onClick={(e) => {
              e.stopPropagation();
              handleActionClick();
            }}
          >
            {notification.actionText}
            <ExternalLink size={14} />
          </button>
        )}
      </div>

      {!notification.isRead && <div className={styles.unreadIndicator} />}
    </div>
  );
}
