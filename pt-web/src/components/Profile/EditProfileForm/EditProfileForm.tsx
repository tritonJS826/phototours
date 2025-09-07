import React, {useRef, useState} from "react";
import {useAuth} from "src/hooks/useAuth";
import {getProfileImageUrl} from "src/utils/profileImage";
import styles from "src/components/Profile/EditProfileForm/EditProfileForm.module.scss";

type EditProfileData = {
  firstName: string;
  lastName: string;
  bio?: string;
}

const KB_IN_BYTES = 1024;
const MB_IN_BYTES = KB_IN_BYTES * KB_IN_BYTES;
const MAX_FILE_SIZE_MB = 5;
const BIO_ROWS = 4;
const FOCUS_OUTLINE_PX = 3;

export const EditProfileForm: React.FC = () => {
  const {user, refreshProfile} = useAuth();
  const [formData, setFormData] = useState<EditProfileData>({
    firstName: user?.firstName ?? "",
    lastName: user?.lastName ?? "",
    bio: user?.bio ?? "",
  });
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(user?.profilePicUrl ?? getProfileImageUrl());
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
    const files = event.currentTarget.files;
    const picked = files && files.length > 0 ? files.item(0) : null;
    if (picked === null) {
      return;
    }
    if (!picked.type.startsWith("image/")) {
      setError("Please select an image file");

      return;
    }
    if (picked.size > MAX_FILE_SIZE_MB * MB_IN_BYTES) {
      setError("Image size should be less than 5MB");

      return;
    }
    setAvatarFile(picked);
    setError("");
    const reader = new FileReader();
    reader.onload = ev => {
      const res = ev.target && typeof ev.target.result === "string" ? ev.target.result : null;
      setAvatarPreview(res);
    };
    reader.readAsDataURL(picked);
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
      const fd = new FormData();
      const nextFirst = formData.firstName.trim();
      const nextLast = formData.lastName.trim();
      const nextBio = (formData.bio ?? "").trim();

      if (nextFirst !== (user.firstName ?? "") && nextFirst.length > 0) {
        fd.append("firstName", nextFirst);
      }
      if (nextLast !== (user.lastName ?? "") && nextLast.length > 0) {
        fd.append("lastName", nextLast);
      }
      if (nextBio !== (user.bio ?? "")) {
        fd.append("bio", nextBio);
      }
      if (avatarFile) {
        fd.append("avatar", avatarFile);
      }

      if ([...fd.keys()].length === 0) {
        setIsLoading(false);
        setError("No changes to save");

        return;
      }

      const FALLBACK_API = "http://localhost:8000";
      const base = (import.meta as unknown as { env?: { VITE_API_BASE_URL?: string } }).env?.VITE_API_BASE_URL ?? FALLBACK_API;

      const res = await fetch(`${base}/auth/profile`, {
        method: "PUT",
        headers: {Authorization: `Bearer ${localStorage.getItem("token") ?? ""}`},
        body: fd,
      });

      if (!res.ok) {
        let msg = "Failed to update profile";
        try {
          const data = await res.json();
          msg = typeof data?.error === "string" && data.error.length > 0 ? data.error : msg;
        } catch {
          msg = "Failed to update profile";
        }
        throw new Error(msg);
      }

      const updated = await res.json();
      const currentStr = localStorage.getItem("user");
      const currentObj = currentStr ? JSON.parse(currentStr) : {};
      const merged = {...currentObj, ...(updated?.user ? updated.user : {})};
      localStorage.setItem("user", JSON.stringify(merged));

      await refreshProfile();

      setSuccess("Profile updated successfully!");
      setAvatarFile(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update profile");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.editProfileContainer}>
      <h2 className={styles["edit-form-heading-2"]}>
        Edit Profile
      </h2>

      {error && <div className={styles.error}>
        {error}
      </div>}
      {success && <div className={styles.success}>
        {success}
      </div>}

      <form
        onSubmit={handleSubmit}
        className={styles.editForm}
      >
        <div className={styles.avatarSection}>
          <label>
            Profile Picture
          </label>
          <div
            className={styles.avatarContainer}
            onClick={handleAvatarClick}
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === "Enter" || e.key === " ") {
                handleAvatarClick();
              }
            }}
            style={{outlineWidth: FOCUS_OUTLINE_PX}}
          >
            <img
              src={avatarPreview ?? getProfileImageUrl()}
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

        <div className={styles.formFields}>
          <div className={styles.formField}>
            <label htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              disabled={isLoading}
            />
          </div>

          <div className={styles.formField}>
            <label htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
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
              rows={BIO_ROWS}
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
