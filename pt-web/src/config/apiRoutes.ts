// Centralized API routes configuration
export const API_ROUTES = {
  USERS: {
    CREATE: "/users",
    GET_ALL: "/users",
    GET_BY_ID: (id: number) => `/users/${id}`,
    UPDATE: (id: number) => `/users/${id}`,
    DELETE: (id: number) => `/users/${id}`,
  },
  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    LOGOUT: "/auth/logout",
  },
  TOURS: {
    GET_ALL: "/tours",
    GET_BY_ID: (id: number) => `/tours/${id}`,
    CREATE: "/tours",
    UPDATE: (id: number) => `/tours/${id}`,
    DELETE: (id: number) => `/tours/${id}`,
  },
} as const; 
