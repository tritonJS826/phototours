export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const API_ROUTES = {
  CONTACT: {SEND_MESSAGE: "general/contact"},
  USERS: {
    CREATE: "general/users/create",
    GET_ALL: "general/users",
  },
} as const;
