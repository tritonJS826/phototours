import defaultProfilePic from "/bird.png";

export const getProfileImageUrl = (profilePicUrl?: string | null): string => {
  return profilePicUrl || defaultProfilePic;
};

export const isDefaultProfileImage = (profilePicUrl?: string | null): boolean => {
  return !profilePicUrl || profilePicUrl === defaultProfilePic;
};
