import React, {useRef, useState} from "react";
import {useAuth} from "src/hooks/useAuth";
import {getProfileImageUrl} from "src/utils/profileImage";
import styles from "src/components/Auth/EditProfileForm.module.scss";

interface EditProfileData {
  firstName: string;
  lastName: string;
  bio?: string;
}

const MAX_FILE_SIZE_MB = 5;
const KB_IN_BYTES = 1024;
const BYTES_IN_MB = KB_IN_BYTES * KB_IN_BYTES;

export const EditProfileForm: React.FC = () => {
  const {user, refreshProfile} = useAuth();
  const [formData, setFormData] = useState<EditProfileData>({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    bio: user?.bio || "",
  });
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(user?.profilePicUrl || getProfileImageUrl());
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!user) {
    return (
      <div>
        User not found
      </div>
    );
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setFormData(prev => ({...prev, [name]: value}));
    setError("");
  };

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        setError("Please select an image file");

        return;
      }

      if (file.size > MAX_FILE_SIZE_MB * BYTES_IN_MB) {
        setError("Image size should be less than 5MB");

        return;
      }

      setAvatarFile(file);
      setError("");

      const reader = new FileReader();
      reader.onload = (loadEvent) => {
        setAvatarPreview(loadEvent.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("firstName", formData.firstName);
      formDataToSend.append("lastName", formData.lastName);
      if (formData.bio) {
        formDataToSend.append("bio", formData.bio);
      }
      if (avatarFile) {
        formDataToSend.append("avatar", avatarFile);
      }

      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/general/auth/profile`, {
        method: "PUT",
        headers: {Authorization: `Bearer ${localStorage.getItem("token")}`},
        body: formDataToSend,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to update profile");
      }

      const updatedUser = await response.json();
      setSuccess("Profile updated successfully!");

      const currentUser = JSON.parse(localStorage.getItem("user") || "{}");
      const updatedUserData = {...currentUser, ...updatedUser.user};
      localStorage.setItem("user", JSON.stringify(updatedUserData));

      await refreshProfile();

      setAvatarFile(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update profile");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.editProfileContainer}>
      <h2>
        Edit Profile
      </h2>

      {error && (
        <div className={styles.error}>
          {error}
        </div>
      )}

      {success && (
        <div className={styles.success}>
          {success}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className={styles.editForm}
      >
        {/* Аватар */}
        <div className={styles.avatarSection}>
          <label>
            Profile Picture
          </label>
          <div
            className={styles.avatarContainer}
            onClick={handleAvatarClick}
          >
            <img
              src={avatarPreview || getProfileImageUrl()}
              alt="Profile preview"
              className={styles.avatarPreview}
            />
            <div className={styles.avatarOverlay}>
              <span>
                Click to change
              </span>
            </div>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            style={{display: "none"}}
          />
          <p className={styles.avatarHint}>
            Click on the avatar to upload a new image (max 5MB)
          </p>
        </div>

        {/* Форма */}
        <div className={styles.formFields}>
          <div className={styles.formField}>
            <label htmlFor="firstName">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </div>

          <div className={styles.formField}>
            <label htmlFor="lastName">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </div>

          <div className={styles.formField}>
            <label htmlFor="bio">
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows={4}
              placeholder="Tell us about yourself..."
              disabled={isLoading}
            />
          </div>
        </div>

        <div className={styles.formActions}>
          <button
            type="submit"
            className={styles.submitButton}
            disabled={isLoading}
          >
            {isLoading ? "Updating..." : "Update Profile"}
          </button>
        </div>
      </form>
    </div>
  );
};
