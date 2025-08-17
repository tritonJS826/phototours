import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Edit, Eye, MessageSquare, Plus} from "lucide-react";
import {useAuth} from "src/hooks/useAuth";
import styles from "src/pages/dashboard/Dashboard.module.scss";

interface Booking {
  id: number;
  tourTitle: string;
  date: string;
  status: string;
  price: number;
}

export function Dashboard() {
  const {user} = useAuth();
  const [bookings] = useState<Booking[]>([
    {
      id: 1,
      tourTitle: "Golden Circle Photo Tour",
      date: "2025-01-15",
      status: "Confirmed",
      price: 299,
    },
    {
      id: 2,
      tourTitle: "Northern Lights Adventure",
      date: "2025-02-20",
      status: "Pending",
      price: 399,
    },
  ]);

  if (!user) {
    return (
      <div>
        User not found
      </div>
    );
  }

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.dashboardHeader}>
        <h1>
          Welcome,
          {" "}
          {user.firstName}
          !
        </h1>
      </div>

      <div className={styles.dashboardContent}>
        <div className={styles.profileSection}>
          <div className={styles.sectionHeader}>
            <h2>
              Profile
            </h2>
            <div className={styles.sectionActions}>
              <Link
                to="/profile/edit"
                className={styles.actionButton}
              >
                <Edit className="icon" />
                <span>
                  Edit
                </span>
              </Link>
              <Link
                to={`/profile/${user.id}`}
                className={styles.actionButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Eye className="icon" />
                <span>
                  View Profile
                </span>
              </Link>
            </div>
          </div>

          <div className={styles.profileInfo}>
            <div className={styles.avatarSection}>
              {user.profilePicUrl
                ? (
                  <img
                    src={user.profilePicUrl}
                    alt={`${user.firstName} ${user.lastName}`}
                    className={styles.avatar}
                  />
                )
                : (
                  <div className={styles.avatarPlaceholder}>
                    {user.firstName.charAt(0)}
                    {user.lastName.charAt(0)}
                  </div>
                )}
            </div>

            <div className={styles.userDetails}>
              <div className={styles.detailRow}>
                <label>
                  First Name:
                </label>
                <span>
                  {user.firstName}
                </span>
              </div>
              <div className={styles.detailRow}>
                <label>
                  Last Name:
                </label>
                <span>
                  {user.lastName}
                </span>
              </div>
              <div className={styles.detailRow}>
                <label>
                  Email:
                </label>
                <span>
                  {user.email}
                </span>
              </div>
              {user.phone && (
                <div className={styles.detailRow}>
                  <label>
                    Phone:
                  </label>
                  <span>
                    {user.phone}
                  </span>
                </div>
              )}
              <div className={styles.detailRow}>
                <label>
                  Role:
                </label>
                <span>
                  {user.role === "ADMIN" ? "Administrator" : "Client"}
                </span>
              </div>
              <div className={styles.detailRow}>
                <label>
                  Registration Date:
                </label>
                <span>
                  {new Date(user.createdAt).toLocaleDateString("en-US")}
                </span>
              </div>
              {user.bio && (
                <div className={styles.detailRow}>
                  <label>
                    About:
                  </label>
                  <span>
                    {user.bio}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className={styles.bankingSection}>
          <div className={styles.sectionHeader}>
            <h2>
              Bank Details
            </h2>
            <button className={styles.actionButton}>
              <Plus className="icon" />
              <span>
                Add Account
              </span>
            </button>
          </div>
          <div className={styles.bankingInfo}>
            <p className={styles.noData}>
              Bank details not added
            </p>
          </div>
        </div>

        <div className={styles.bookingsSection}>
          <div className={styles.sectionHeader}>
            <h2>
              My Tours
            </h2>
            <Link
              to="/tours"
              className={styles.actionButton}
            >
              <Plus className="icon" />
              <span>
                Book a Tour
              </span>
            </Link>
          </div>

          {bookings.length > 0
            ? (
              <div className={styles.bookingsList}>
                {bookings.map((booking) => (
                  <div
                    key={booking.id}
                    className={styles.bookingCard}
                  >
                    <div className={styles.bookingInfo}>
                      <h3>
                        {booking.tourTitle}
                      </h3>
                      <p className={styles.bookingDate}>
                        Date:
                        {" "}
                        {new Date(booking.date).toLocaleDateString("en-US")}
                      </p>
                      <p className={styles.bookingPrice}>
                        Price: $
                        {booking.price}
                      </p>
                    </div>
                    <div className={styles.bookingStatus}>
                      <span className={`${styles.status} ${styles[booking.status.toLowerCase()]}`}>
                        {booking.status === "Confirmed" ? "Confirmed" : "Pending"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )
            : (
              <div className={styles.noBookings}>
                <p>
                  You don't have any booked tours yet
                </p>
                <Link
                  to="/tours"
                  className={styles.browseButton}
                >
                  Browse Available Tours
                </Link>
              </div>
            )}
        </div>

        <div className={styles.quickActions}>
          <h2>
            Quick Actions
          </h2>
          <div className={styles.actionsGrid}>
            <Link
              to="/messages"
              className={styles.quickAction}
            >
              <MessageSquare className="icon" />
              <span>
                Messages
              </span>
            </Link>
            <Link
              to="/notifications"
              className={styles.quickAction}
            >
              <MessageSquare className="icon" />
              <span>
                Notifications
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
