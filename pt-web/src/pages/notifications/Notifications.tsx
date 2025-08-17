import React from "react";
import {Container} from "src/components/Container/Container";
import styles from "src/pages/notifications/Notifications.module.scss";

export function Notifications() {
  return (
    <div className={styles.notificationsContainer}>
      <Container>
        <div className={styles.notificationsContent}>
          <h1>
            Notifications
          </h1>
          <p>
            Welcome to your notifications center
          </p>

          <div className={styles.notificationsList}>
            <div className={styles.notificationItem}>
              <h3>
                Tour Confirmation
              </h3>
              <p>
                Your Golden Circle Photo Tour has been confirmed for January 15, 2025.
              </p>
              <span className={styles.notificationDate}>
                2 hours ago
              </span>
            </div>

            <div className={styles.notificationItem}>
              <h3>
                Payment Received
              </h3>
              <p>
                Payment of $299 for Northern Lights Adventure has been received.
              </p>
              <span className={styles.notificationDate}>
                1 day ago
              </span>
            </div>

            <div className={styles.notificationItem}>
              <h3>
                New Tour Available
              </h3>
              <p>
                New photo tour "Iceland Aurora" is now available for booking.
              </p>
              <span className={styles.notificationDate}>
                3 days ago
              </span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
