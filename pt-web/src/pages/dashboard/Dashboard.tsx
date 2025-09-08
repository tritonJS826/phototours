import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Edit, MessageSquare, Plus, X} from "lucide-react";
import {BankAccountData, BankAccountModal} from "src/components/BankAccountModal/BankAccountModal";
import {BookingData, BookTourModal} from "src/components/BookTourModal/BookTourModal";
import {Button} from "src/components/Button/Button";
import {useNotifications} from "src/contexts/NotificationContext";
import {useAuth} from "src/hooks/useAuth";
import {PATHS} from "src/routes/routes";
import {getProfileImageUrl} from "src/utils/profileImage";
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
      actionUrl: PATHS.DASHBOARD,
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
      actionUrl: PATHS.DASHBOARD,
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
      actionUrl: PATHS.DASHBOARD,
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
        <h1>
          Welcome,
          {" "}
          {user.firstName}
          !
        </h1>

        <div className={styles.sectionActions}>
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate(-HISTORY_BACK_STEP)}
          >
            ← Back
          </Button>

          <Button
            as={Link}
            to={PATHS.MY_PHOTOS}
            size="sm"
            className={styles.myPhotosButton}
          >
            Manage Photos
          </Button>

          <Button
            as={Link}
            to={PATHS.PROFILE}
            size="sm"
            className={styles.myPhotosButton}
          >
            My Photos
          </Button>
        </div>
      </div>

      <div className={styles.dashboardContent}>
        <div className={styles.profileSection}>
          <div className={styles.sectionHeader}>
            <h2>
              Profile
            </h2>
            <div className={styles.sectionActions}>
              <Button
                as={Link}
                to={PATHS.PROFILE_EDIT}
                size="sm"
                variant="outline"
                className={styles.iconBtn}
              >
                <Edit className={styles.icon16} />
                Edit
              </Button>
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
            <Button
              size="sm"
              className={styles.iconBtn}
              onClick={handleAddAccount}
            >
              <Plus className={styles.icon16} />
              Add Account
            </Button>
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
                  {bankAccounts.map((account, index) => {
                    const formattedType =
                    account.accountType.charAt(FIRST_CHAR_INDEX).toUpperCase() +
                    account.accountType.slice(SLICE_START_INDEX);

                    return (
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
                            {formattedType}
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
                    );
                  })}
                </div>
              )}
          </div>
        </div>

        <div className={styles.bookingsSection}>
          <div className={styles.sectionHeader}>
            <h2>
              My Tours
            </h2>
            <Button
              size="sm"
              className={styles.iconBtn}
              onClick={handleBookTour}
            >
              <Plus className={styles.icon16} />
              Book a Tour
            </Button>
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
                            const options = ["Confirmed", "Pending", "Cancelled"];
                            const idx = options.indexOf(booking.status);
                            const next = (idx + STATUS_CYCLE_INCREMENT) % STATUS_CYCLE_MODULO;
                            const nextStatus = options[next] as "Confirmed" | "Pending" | "Cancelled";
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
                  to={PATHS.TOURS}
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
            <Button
              as={Link}
              to="/messages"
              variant="outline"
              className={styles.quickAction}
            >
              <MessageSquare className={styles.icon24} />
              Messages
            </Button>
            <Button
              as={Link}
              to={PATHS.NOTIFICATIONS}
              variant="outline"
              className={styles.quickAction}
            >
              <MessageSquare className={styles.icon24} />
              Notifications
            </Button>
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
    </div>
  );
}
