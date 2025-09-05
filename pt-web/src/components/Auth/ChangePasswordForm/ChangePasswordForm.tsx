import React, {useState} from "react";
import {useAuth} from "src/hooks/useAuth";
import {ChangePasswordData} from "src/types/auth";
import styles from "src/components/Auth/shared/AuthForm.module.scss";

interface ChangePasswordFormProps {
  onSuccess?: () => void;
  onCancel?: () => void;
}

export const ChangePasswordForm: React.FC<ChangePasswordFormProps> = ({
  onSuccess,
  onCancel,
}) => {
  const {changePassword, isLoading} = useAuth();
  const MIN_PASSWORD_LENGTH = 6;
  const [formData, setFormData] = useState<ChangePasswordData>({
    currentPassword: "",
    newPassword: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData(prev => ({...prev, [name]: value}));
    setError(""); // Clear error when field changes
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (formData.newPassword !== confirmPassword) {
      setError("New password and confirmation do not match");

      return;
    }

    if (formData.newPassword.length < MIN_PASSWORD_LENGTH) {
      setError("New password must contain at least 6 characters");

      return;
    }

    try {
      await changePassword(formData);
      setSuccess("Password successfully changed");
      setFormData({currentPassword: "", newPassword: ""});
      setConfirmPassword("");
      onSuccess?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Password change error");
    }
  };

  return (
    <div className={styles.authForm}>
      <h2>
        Change Password
      </h2>
      {error && <div className={styles.error}>
        {error}
      </div>}
      {success && <div className={styles.success}>
        {success}
      </div>}

      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="currentPassword">
            Current Password
          </label>
          <input
            type="password"
            id="currentPassword"
            name="currentPassword"
            value={formData.currentPassword}
            onChange={handleChange}
            required
            disabled={isLoading}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="newPassword">
            New Password
          </label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            required
            minLength={MIN_PASSWORD_LENGTH}
            disabled={isLoading}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="confirmPassword">
            Confirm New Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            disabled={isLoading}
          />
        </div>

        <div className={styles.buttonGroup}>
          <button
            type="submit"
            className={styles.submitButton}
            disabled={isLoading}
          >
            {isLoading ? "Changing..." : "Change Password"}
          </button>

          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className={styles.cancelButton}
              disabled={isLoading}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
