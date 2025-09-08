// Src/routes/routes.ts
export const PATHS = {
  HOME: "/",
  ABOUT: "/about",

  TOURS: "/tours",
  TOUR_DETAILS: "/tours/:id",

  CART: "/cart",
  CONTACT: "/contact",

  ARTICLES: "/articles",
  ARTICLES_SLUG: "/articles/:slug",

  PROFILE: "/profile",
  PROFILE_ID: "/profile/:id",
  PROFILE_EDIT: "/profile/edit",

  DASHBOARD: "/dashboard",
  NOTIFICATIONS: "/notifications",

  MY_PHOTOS: "/my-photos",

  ADMIN: "/admin",
  ADMIN_CREATE_TOUR: "/admin/tours",
  ADMIN_EDIT_TOUR: "/admin/tours/:id",
  ADMIN_TOUR_CONTINUE: "/admin/tour/:id/continue",

  ADMIN_USERS: "/admin/users",
  ADMIN_USER_GALLERY: "/admin/users/:id/photos",

  NOT_FOUND: "*",
} as const;

export const buildPath = {
  tourDetails: (idOrSlug: string | number) => `/tours/${idOrSlug}`,
  article: (slug: string) => `/articles/${slug}`,
  adminEditTour: (id: string | number) => `/admin/tours/${id}`,
  adminContinueTour: (id: string | number) => `/admin/tour/${id}/continue`,
  adminUserGallery: (id: string | number) => `/admin/users/${id}/photos`,
  adminUsers: () => PATHS.ADMIN_USERS,
  publicProfile: (id: string | number) => `/profile/${id}`,
} as const;
