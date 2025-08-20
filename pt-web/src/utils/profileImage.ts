import defaultProfilePic from "src/assets/userProfile/bird.png";

/**
 * Возвращает URL изображения профиля пользователя или изображение по умолчанию
 * @param profilePicUrl - URL изображения профиля пользователя (может быть null/undefined)
 * @returns URL изображения профиля или изображение по умолчанию
 */
export const getProfileImageUrl = (profilePicUrl?: string | null): string => {
  return profilePicUrl || defaultProfilePic;
};

/**
 * Проверяет, использует ли пользователь изображение по умолчанию
 * @param profilePicUrl - URL изображения профиля пользователя
 * @returns true, если используется изображение по умолчанию
 */
export const isDefaultProfileImage = (profilePicUrl?: string | null): boolean => {
  return !profilePicUrl || profilePicUrl === defaultProfilePic;
};

