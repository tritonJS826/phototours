export const PATHS = {
  HOME: "/",
  ABOUT: "/about",

  TOURS: "/tours",
  TOUR_DETAILS: "/tours/:slug",
  getTour: (slug: string) => `/tours/${slug}`,

  CART: "/cart",
  THANK_YOU: "/thank-you",
  CONTACT: "/contact",

  PRIVACY: "/privacy-policy",
  COOKIES: "/cookies-policy",

  ARTICLES: "/articles",
  ARTICLES_SLUG: "/articles/:slug",
  getArticle: (slug: string) => `/articles/${slug}`,

  PROFILE: "/profile",
  PROFILE_ID: "/profile/:id",
  PROFILE_EDIT: "/profile/edit",

  DASHBOARD: "/dashboard",
  NOTIFICATIONS: "/notifications",

  MY_PHOTOS: "/my-photos",

  ADMIN: "/admin",
  ADMIN_LOGIN: "/admin/login",
  ADMIN_CREATE_TOUR: "/admin/tours",
  ADMIN_EDIT_TOUR: "/admin/tours/:id",
  ADMIN_TOUR_CONTINUE: "/admin/tour/:id/continue",

  ADMIN_USERS: "/admin/users",
  ADMIN_USER_GALLERY: "/admin/users/:id/photos",
  ADMIN_ARTICLES: "/admin/articles",
  ADMIN_CREATE_ARTICLE: "/admin/articles/create",
  ADMIN_EDIT_ARTICLE: "/admin/articles/:id/edit",

  NOT_FOUND: "*",
} as const;

export const buildPath = {
  tourDetails: (slug: string | number) => `/tours/${slug}`,
  article: (slug: string) => `/articles/${slug}`,
  adminEditTour: (id: string | number) => `/admin/tours/${id}`,
  adminContinueTour: (id: string | number) => `/admin/tour/${id}/continue`,
  adminUserGallery: (id: string | number) => `/admin/users/${id}/photos`,
  adminUsers: () => PATHS.ADMIN_USERS,
  adminCreateArticle: () => PATHS.ADMIN_CREATE_ARTICLE,
  adminEditArticle: (id: string | number) => `/admin/articles/${id}/edit`,
  publicProfile: (id: string | number) => `/profile/${id}`,
} as const;
