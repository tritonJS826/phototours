export const PATHS = {
  HOME: "/",
  ABOUT: "/about",
  ADMIN: "/admin",
  TOURS: "/tours",
  TOUR_DETAILS: "/tours/:id",
  CART: "/cart",
  CONTACT: "/contact",
  ARTICLES: "/articles",
  ARTICLES_SLUG: "/articles/:slug",
  PROFILE: "/profile",
  PROFILE_EDIT: "/profile/edit",
  PROFILE_ID: "/profile/:id",
  DASHBOARD: "/dashboard",
  NOTIFICATIONS: "/notifications",
  NOT_FOUND: "*",
  ADMIN_CREATE_TOUR: "/admin/tours",
  ADMIN_EDIT_TOUR: "/admin/tours/:id",
  ADMIN_TOUR_CONTINUE: "/admin/tour/:id/continue",
} as const;

export const buildPath = {
  tourDetails: (idOrSlug: string | number) => `/tours/${idOrSlug}`,
  article: (slug: string) => `/articles/${slug}`,
  adminEditTour: (id: string | number) => `/admin/tours/${id}`,
  adminContinueTour: (id: string | number) => `/admin/tour/${id}/continue`,
} as const;
