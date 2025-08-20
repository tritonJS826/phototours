import React, {useState} from "react";
import {X} from "lucide-react";
import styles from "src/components/BookTourModal/BookTourModal.module.scss";

// Constants for number validation
const MIN_PEOPLE = 1;
const MAX_PEOPLE = 20;

interface BookTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBook: (bookingData: BookingData) => void;
}

export interface BookingData {
  tourTitle: string;
  date: string;
  numberOfPeople: number;
  contactPhone: string;
}

export function BookTourModal({isOpen, onClose, onBook}: BookTourModalProps) {
  const [formData, setFormData] = useState<BookingData>({
    tourTitle: "",
    date: "",
    numberOfPeople: 1,
    contactPhone: "",
  });

  const [errors, setErrors] = useState<Partial<BookingData>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name, value} = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof BookingData]) {
      setErrors(prev => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<BookingData> = {};

    if (!formData.tourTitle.trim()) {
      newErrors.tourTitle = "Tour title is required";
    }

    if (!formData.date.trim()) {
      newErrors.date = "Date is required";
    }

    if (!formData.contactPhone.trim()) {
      newErrors.contactPhone = "Contact phone is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      onBook(formData);
      onClose();
      // Reset form
      setFormData({
        tourTitle: "",
        date: "",
        numberOfPeople: 1,
        contactPhone: "",
      });
    }
  };

  const handleClose = () => {
    onClose();
    setErrors({});
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={styles.modalOverlay}
      onClick={handleClose}
    >
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modalHeader}>
          <h2>
            Book a Tour
          </h2>
          <button
            className={styles.closeButton}
            onClick={handleClose}
          >
            <X className="icon" />
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className={styles.form}
        >
          <div className={styles.formGroup}>
            <label htmlFor="tourTitle">
              Tour Title
            </label>
            <input
              type="text"
              id="tourTitle"
              name="tourTitle"
              value={formData.tourTitle}
              onChange={handleInputChange}
              placeholder="Enter tour title"
              className={errors.tourTitle ? styles.error : ""}
            />
            {errors.tourTitle && (
              <span className={styles.errorMessage}>
                {errors.tourTitle}
              </span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="date">
              Tour Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className={errors.date ? styles.error : ""}
            />
            {errors.date && (
              <span className={styles.errorMessage}>
                {errors.date}
              </span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="numberOfPeople">
              Number of People
            </label>
            <div className={styles.numberInput}>
              <button
                type="button"
                className={styles.numberButton}
                onClick={() => {
                  if (formData.numberOfPeople > MIN_PEOPLE) {
                    setFormData(prev => ({...prev, numberOfPeople: prev.numberOfPeople - MIN_PEOPLE}));
                  }
                }}
              >
                -
              </button>
              <input
                type="number"
                id="numberOfPeople"
                name="numberOfPeople"
                value={formData.numberOfPeople}
                onChange={handleInputChange}
                min={MIN_PEOPLE}
                max={MAX_PEOPLE}
                className={styles.numberField}
              />
              <button
                type="button"
                className={styles.numberButton}
                onClick={() => {
                  if (formData.numberOfPeople < MAX_PEOPLE) {
                    setFormData(prev => ({...prev, numberOfPeople: prev.numberOfPeople + MIN_PEOPLE}));
                  }
                }}
              >
                +
              </button>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="contactPhone">
              Contact Phone
            </label>
            <input
              type="tel"
              id="contactPhone"
              name="contactPhone"
              value={formData.contactPhone}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
              className={errors.contactPhone ? styles.error : ""}
            />
            {errors.contactPhone && (
              <span className={styles.errorMessage}>
                {errors.contactPhone}
              </span>
            )}
          </div>

          <div className={styles.formActions}>
            <button
              type="button"
              className={styles.cancelButton}
              onClick={handleClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={styles.bookButton}
            >
              Book Tour
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
