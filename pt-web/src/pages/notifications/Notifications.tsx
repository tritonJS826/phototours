import React, {useState} from "react";
import {Bell, Check, Filter, Trash2} from "lucide-react";
import {Container} from "src/components/Container/Container";
import {NotificationCard} from "src/components/NotificationCard/NotificationCard";
import {useNotifications} from "src/contexts/NotificationContext";
import styles from "src/pages/notifications/Notifications.module.scss";

type FilterType = "all" | "unread" | "TOUR" | "PAYMENT" | "SYSTEM" | "PROMO";

export function Notifications() {
  const {notifications, unreadCount, markAsRead, markAllAsRead, deleteNotification, clearAll} = useNotifications();
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredNotifications = notifications.filter(notification => {
    if (filter === "all") {
      return true;
    }
    if (filter === "unread") {
      return !notification.isRead;
    }

    return notification.category === filter;
  });

  const handleMarkAllAsRead = () => {
    markAllAsRead();
  };

  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to clear all notifications?")) {
      clearAll();
    }
  };

  const getFilterLabel = (filterType: FilterType) => {
    switch (filterType) {
      case "all": return "All";
      case "unread": return `Unread (${unreadCount})`;
      case "TOUR": return "Tours";
      case "PAYMENT": return "Payments";
      case "SYSTEM": return "System";
      case "PROMO": return "Promotions";
      default: return "All";
    }
  };

  return (
    <div className={styles.notificationsContainer}>
      <Container>
        <div className={styles.notificationsContent}>
          <div className={styles.notificationsHeader}>
            <div className={styles.headerLeft}>
              <h1>
                Notifications
              </h1>
              <p>
                Manage your notifications and stay updated
              </p>
            </div>
            <div className={styles.headerActions}>
              {unreadCount > 0 && (
                <button
                  className={styles.actionButton}
                  onClick={handleMarkAllAsRead}
                  title="Mark all as read"
                >
                  <Check size={16} />
                  <span>
                    Mark all read
                  </span>
                </button>
              )}
              {notifications.length > 0 && (
                <button
                  className={`${styles.actionButton} ${styles.clearButton}`}
                  onClick={handleClearAll}
                  title="Clear all notifications"
                >
                  <Trash2 size={16} />
                  <span>
                    Clear all
                  </span>
                </button>
              )}
            </div>
          </div>

          <div className={styles.filterSection}>
            <div className={styles.filterLabel}>
              <Filter size={16} />
              <span>
                Filter:
              </span>
            </div>
            <div className={styles.filterButtons}>
              {(["all", "unread", "TOUR", "PAYMENT", "SYSTEM", "PROMO"] as FilterType[]).map(filterType => (
                <button
                  key={filterType}
                  className={`${styles.filterButton} ${filter === filterType ? styles.active : ""}`}
                  onClick={() => setFilter(filterType)}
                >
                  {getFilterLabel(filterType)}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.notificationsList}>
            {filteredNotifications.length > 0
              ? (
                filteredNotifications.map((notification) => (
                  <NotificationCard
                    key={notification.id}
                    notification={notification}
                    onMarkAsRead={markAsRead}
                    onDelete={deleteNotification}
                  />
                ))
              )
              : (
                <div className={styles.emptyState}>
                  <Bell size={48} />
                  <h3>
                    No notifications
                  </h3>
                  <p>
                    {filter === "all"
                      ? "You're all caught up! No notifications to show."
                      : `No ${filter} notifications to show.`
                    }
                  </p>
                </div>
              )}
          </div>
        </div>
      </Container>
    </div>
  );
}
