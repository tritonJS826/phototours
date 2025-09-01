export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const API_ROUTES = {
  CONTACT: {SEND_MESSAGE: "/contact"},
  USERS: {
    CREATE: "/users/create",
    GET_ALL: "/users",
  },
} as const;
