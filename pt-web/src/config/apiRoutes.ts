// Centralized API routes configuration
export const API_ROUTES = {
  CONTACT: {SEND_MESSAGE: "/contact"},
  USERS: {
    CREATE: "/users/create",
    GET_ALL: "/users",
  },
} as const;
