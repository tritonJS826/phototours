import React, {useState} from "react";
import {X} from "lucide-react";
import styles from "src/components/BankAccountModal/BankAccountModal.module.scss";

interface BankAccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (accountData: BankAccountData) => void;
}

export interface BankAccountData {
  accountHolderName: string;
  accountNumber: string;
  bankName: string;
  routingNumber: string;
  accountType: "checking" | "savings";
}

export function BankAccountModal({isOpen, onClose, onSave}: BankAccountModalProps) {
  const [formData, setFormData] = useState<BankAccountData>({
    accountHolderName: "",
    accountNumber: "",
    bankName: "",
    routingNumber: "",
    accountType: "checking",
  });

  const [errors, setErrors] = useState<Partial<BankAccountData>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name, value} = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof BankAccountData]) {
      setErrors(prev => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<BankAccountData> = {};

    if (!formData.accountHolderName.trim()) {
      newErrors.accountHolderName = "Account holder name is required";
    }

    if (!formData.accountNumber.trim()) {
      newErrors.accountNumber = "Account number is required";
    } else if (!/^\d{8,17}$/.test(formData.accountNumber.replace(/\s/g, ""))) {
      newErrors.accountNumber = "Account number must be 8-17 digits";
    }

    if (!formData.bankName.trim()) {
      newErrors.bankName = "Bank name is required";
    }

    if (!formData.routingNumber.trim()) {
      newErrors.routingNumber = "Routing number is required";
    } else if (!/^\d{9}$/.test(formData.routingNumber.replace(/\s/g, ""))) {
      newErrors.routingNumber = "Routing number must be 9 digits";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      onSave(formData);
      onClose();
      // Reset form
      setFormData({
        accountHolderName: "",
        accountNumber: "",
        bankName: "",
        routingNumber: "",
        accountType: "checking",
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
            Add Bank Account
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
            <label htmlFor="accountHolderName">
              Account Holder Name
            </label>
            <input
              type="text"
              id="accountHolderName"
              name="accountHolderName"
              value={formData.accountHolderName}
              onChange={handleInputChange}
              placeholder="Enter account holder name"
              className={errors.accountHolderName ? styles.error : ""}
            />
            {errors.accountHolderName && (
              <span className={styles.errorMessage}>
                {errors.accountHolderName}
              </span>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="bankName">
              Bank Name
            </label>
            <input
              type="text"
              id="bankName"
              name="bankName"
              value={formData.bankName}
              onChange={handleInputChange}
              placeholder="Enter bank name"
              className={errors.bankName ? styles.error : ""}
            />
            {errors.bankName && (
              <span className={styles.errorMessage}>
                {errors.bankName}
              </span>
            )}
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="accountNumber">
                Account Number
              </label>
              <input
                type="text"
                id="accountNumber"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleInputChange}
                placeholder="Enter account number"
                className={errors.accountNumber ? styles.error : ""}
              />
              {errors.accountNumber && (
                <span className={styles.errorMessage}>
                  {errors.accountNumber}
                </span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="routingNumber">
                Routing Number
              </label>
              <input
                type="text"
                id="routingNumber"
                name="routingNumber"
                value={formData.routingNumber}
                onChange={handleInputChange}
                placeholder="Enter routing number"
                className={errors.routingNumber ? styles.error : ""}
              />
              {errors.routingNumber && (
                <span className={styles.errorMessage}>
                  {errors.routingNumber}
                </span>
              )}
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="accountType">
              Account Type
            </label>
            <select
              id="accountType"
              name="accountType"
              value={formData.accountType}
              onChange={handleInputChange}
            >
              <option value="checking">
                Checking
              </option>
              <option value="savings">
                Savings
              </option>
            </select>
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
              className={styles.saveButton}
            >
              Save Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
