export type GuideWithUser = {
  id: number;
  experience: string | null;
  specializations: string[];
  createdAt: Date;
  updatedAt: Date;
  user: {
    id: number;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    profilePicUrl: string | null;
    bio: string | null;
    role: string | null;
  } | null;
};

export const toSafeGuide = (guide: GuideWithUser) => ({
  id: guide.id,
  experience: guide.experience ?? '',
  specializations: Array.isArray(guide.specializations) ? guide.specializations : [],
  createdAt: guide.createdAt,
  updatedAt: guide.updatedAt,
  user: guide.user
    ? {
      id: guide.user.id,
      firstName: guide.user.firstName ?? '',
      lastName: guide.user.lastName ?? '',
      email: guide.user.email ?? '',
      profilePicUrl: guide.user.profilePicUrl ?? '',
      bio: guide.user.bio ?? '',
      role: guide.user.role ?? 'USER',
    }
    : null,
});
