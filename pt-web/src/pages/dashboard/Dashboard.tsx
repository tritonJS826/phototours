import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Edit, Eye, MessageSquare, Plus, X} from "lucide-react";
import {BankAccountData, BankAccountModal} from "src/components/BankAccountModal/BankAccountModal";
import {BookingData, BookTourModal} from "src/components/BookTourModal/BookTourModal";
import {useNotifications} from "src/contexts/NotificationContext";
import {useAuth} from "src/hooks/useAuth";
import {PublicProfile} from "src/pages/profile/PublicProfile";
import {getProfileImageUrl} from "src/utils/profileImage";
import modalStyles from "src/components/Auth/AuthModal/AuthModal.module.scss";
import styles from "src/pages/dashboard/Dashboard.module.scss";

const ACCOUNT_NUMBER_MASK_LENGTH = 4;
const UNREAD_COUNT_DECREMENT = 1;
const FIRST_CHAR_INDEX = 0;
const SLICE_START_INDEX = 1;
const STATUS_CYCLE_INCREMENT = 1;
const STATUS_CYCLE_MODULO = 3;
const HISTORY_BACK_STEP = 1;

interface Booking {
  id: number;
  tourTitle: string;
  date: string;
  status: "Confirmed" | "Pending" | "Cancelled";
  price: number;
}

export function Dashboard() {
  const navigate = useNavigate();
  const {user} = useAuth();
  const {addNotification} = useNotifications();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBookTourModalOpen, setIsBookTourModalOpen] = useState(false);
  const [isViewProfileOpen, setIsViewProfileOpen] = useState(false);

  const [bankAccounts, setBankAccounts] = useState<BankAccountData[]>(() => {
    const savedAccounts = localStorage.getItem("bankAccounts");

    return savedAccounts ? JSON.parse(savedAccounts) : [];
  });

  const [bookings, setBookings] = useState<Booking[]>(() => {
    const savedBookings = localStorage.getItem("bookings");

    return savedBookings
      ? JSON.parse(savedBookings)
      : [
        {id: 1, tourTitle: "Golden Circle Photo Tour", date: "2025-01-15", status: "Confirmed", price: 299},
        {id: 2, tourTitle: "Northern Lights Adventure", date: "2025-02-20", status: "Pending", price: 399},
        {id: 3, tourTitle: "South Coast Adventure", date: "2025-03-10", status: "Pending", price: 349},
        {id: 4, tourTitle: "Reykjavik City Tour", date: "2025-04-05", status: "Cancelled", price: 199},
        {id: 5, tourTitle: "Blue Lagoon Experience", date: "2025-05-12", status: "Confirmed", price: 449},
        {id: 6, tourTitle: "Glacier Hiking Tour", date: "2025-06-18", status: "Pending", price: 599},
      ];
  });

  const handleAddAccount = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSaveAccount = (accountData: BankAccountData) => {
    const updatedAccounts = [...bankAccounts, accountData];
    setBankAccounts(updatedAccounts);
    localStorage.setItem("bankAccounts", JSON.stringify(updatedAccounts));

    const accountEnding = accountData.accountNumber.slice(-ACCOUNT_NUMBER_MASK_LENGTH);
    addNotification({
      title: "Bank Account Added",
      message: `Successfully added ${accountData.bankName} account ending in ${accountEnding}`,
      type: "SUCCESS",
      category: "PAYMENT",
      actionUrl: "/dashboard",
      actionText: "View Details",
    });
  };

  const handleRemoveAccount = (index: number) => {
    const accountToRemove = bankAccounts[index];
    const updatedAccounts = bankAccounts.filter((_, i) => i !== index);
    setBankAccounts(updatedAccounts);
    localStorage.setItem("bankAccounts", JSON.stringify(updatedAccounts));

    const accountEnding = accountToRemove.accountNumber.slice(-ACCOUNT_NUMBER_MASK_LENGTH);
    addNotification({
      title: "Bank Account Removed",
      message: `Successfully removed ${accountToRemove.bankName} account ending in ${accountEnding}`,
      type: "INFO",
      category: "PAYMENT",
      actionUrl: "/dashboard",
      actionText: "View Details",
    });
  };

  const handleBookTour = () => setIsBookTourModalOpen(true);
  const handleCloseBookTourModal = () => setIsBookTourModalOpen(false);

  const handleBookTourSubmit = (bookingData: BookingData) => {
    const newBooking: Booking = {
      id: bookings.length + UNREAD_COUNT_DECREMENT,
      tourTitle: bookingData.tourTitle,
      date: bookingData.date,
      status: "Pending",
      price: 299,
    };
    const updatedBookings = [...bookings, newBooking];
    setBookings(updatedBookings);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));

    addNotification({
      title: "Tour Booked Successfully",
      message: `Your ${bookingData.tourTitle} tour has been booked for ${new Date(bookingData.date).toLocaleDateString()}`,
      type: "SUCCESS",
      category: "TOUR",
      actionUrl: "/dashboard",
      actionText: "View Booking",
    });
  };

  const handleStatusChange = (bookingId: number, newStatus: "Confirmed" | "Pending" | "Cancelled") => {
    const updatedBookings = bookings.map((booking) =>
      booking.id === bookingId ? {...booking, status: newStatus} : booking,
    );
    setBookings(updatedBookings);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
  };

  const handleRemoveTour = (bookingId: number) => {
    const updatedBookings = bookings.filter((booking) => booking.id !== bookingId);
    setBookings(updatedBookings);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
  };

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
        <div className={styles.sectionActions}>
          <button
            type="button"
            className={styles.actionButton}
            onClick={() => navigate(-HISTORY_BACK_STEP)}
          >
            ← Back
          </button>
        </div>
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

              <button
                type="button"
                className={styles.actionButton}
                onClick={() => setIsViewProfileOpen(true)}
              >
                <Eye className="icon" />
                <span>
                  View Profile
                </span>
              </button>
            </div>
          </div>

          <div className={styles.profileInfo}>
            <div className={styles.avatarSection}>
              <img
                src={getProfileImageUrl(user.profilePicUrl)}
                alt={`${user.firstName} ${user.lastName}`}
                className={styles.avatar}
              />
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
            <button
              className={styles.actionButton}
              onClick={handleAddAccount}
            >
              <Plus className="icon" />
              <span>
                Add Account
              </span>
            </button>
          </div>

          <div className={styles.bankingInfo}>
            {bankAccounts.length === 0
              ? (
                <p className={styles.noData}>
                  Bank details not added
                </p>
              )
              : (
                <div className={styles.bankAccountsList}>
                  {bankAccounts.map((account, index) => (
                    <div
                      key={index}
                      className={styles.bankAccountInfo}
                    >
                      <button
                        className={styles.closeButton}
                        onClick={() => handleRemoveAccount(index)}
                        title="Remove account"
                      >
                        <X size={16} />
                      </button>

                      <div className={styles.accountRow}>
                        <label>
                          Account Holder:
                        </label>
                        <span>
                          {account.accountHolderName}
                        </span>
                      </div>
                      <div className={styles.accountRow}>
                        <label>
                          Bank:
                        </label>
                        <span>
                          {account.bankName}
                        </span>
                      </div>
                      <div className={styles.accountRow}>
                        <label>
                          Account Type:
                        </label>
                        <span className={styles.accountType}>
                          {account.accountType.charAt(FIRST_CHAR_INDEX).toUpperCase() +
                          account.accountType.slice(SLICE_START_INDEX)}
                        </span>
                      </div>
                      <div className={styles.accountRow}>
                        <label>
                          Account Number:
                        </label>
                        <span className={styles.maskedNumber}>
                          ****
                          {account.accountNumber.slice(-ACCOUNT_NUMBER_MASK_LENGTH)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
          </div>
        </div>

        <div className={styles.bookingsSection}>
          <div className={styles.sectionHeader}>
            <h2>
              My Tours
            </h2>
            <button
              className={styles.actionButton}
              onClick={handleBookTour}
            >
              <Plus className="icon" />
              <span>
                Book a Tour
              </span>
            </button>
          </div>

          {bookings.length > 0
            ? (
              <div className={styles.bookingsList}>
                {bookings.map((booking) => (
                  <div
                    key={booking.id}
                    className={styles.bookingCard}
                  >
                    <button
                      className={styles.closeButton}
                      onClick={() => handleRemoveTour(booking.id)}
                      title="Remove tour"
                    >
                      <X size={16} />
                    </button>

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
                      <div className={styles.statusDropdown}>
                        <button
                          className={`${styles.statusButton} ${styles[booking.status.toLowerCase()]}`}
                          onClick={() => {
                            const statusOptions = ["Confirmed", "Pending", "Cancelled"];
                            const currentIndex = statusOptions.indexOf(booking.status);
                            const nextIndex = (currentIndex + STATUS_CYCLE_INCREMENT) % STATUS_CYCLE_MODULO;
                            const nextStatus = statusOptions[nextIndex] as "Confirmed" | "Pending" | "Cancelled";
                            handleStatusChange(booking.id, nextStatus);
                          }}
                        >
                          {booking.status}
                        </button>
                      </div>
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

      <BankAccountModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveAccount}
      />
      <BookTourModal
        isOpen={isBookTourModalOpen}
        onClose={handleCloseBookTourModal}
        onBook={handleBookTourSubmit}
      />

      {isViewProfileOpen && user && (
        <div
          className={modalStyles.modalOverlay}
          onClick={() => setIsViewProfileOpen(false)}
        >
          <div
            className={modalStyles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={styles.sectionActions}
              style={{justifyContent: "space-between"}}
            >
              <button
                className={styles.actionButton}
                onClick={() => setIsViewProfileOpen(false)}
              >
                ← Back
              </button>
              <button
                className={modalStyles.closeButton}
                onClick={() => setIsViewProfileOpen(false)}
              >
                ×
              </button>
            </div>

            <div className={modalStyles.authContainer}>
              <PublicProfile userId={user.id} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
