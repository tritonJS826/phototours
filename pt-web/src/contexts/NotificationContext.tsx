import React, {createContext, useContext, useEffect, useReducer} from "react";
import {CreateNotificationData, NotificationItem, notificationService} from "src/services/notificationService";
import {NotificationContextType, NotificationState} from "src/types/notifications";

const UNREAD_COUNT_MIN = 0;
const STEP_ONE = 1;
const TYPE_ADD = "ADD_NOTIFICATION";
const TYPE_MARK = "MARK_AS_READ";
const TYPE_MARK_ALL = "MARK_ALL_AS_READ";
const TYPE_DELETE = "DELETE_NOTIFICATION";
const TYPE_CLEAR = "CLEAR_ALL";
const TYPE_LOAD = "LOAD_NOTIFICATIONS";
const TYPE_LOADING = "SET_LOADING";

type NotificationAction =
  | {type: typeof TYPE_ADD; payload: NotificationItem}
  | {type: typeof TYPE_MARK; payload: number}
  | {type: typeof TYPE_MARK_ALL}
  | {type: typeof TYPE_DELETE; payload: number}
  | {type: typeof TYPE_CLEAR}
  | {type: typeof TYPE_LOAD; payload: unknown}
  | {type: typeof TYPE_LOADING; payload: boolean};

const initialState: NotificationState = {
  notifications: [],
  unreadCount: 0,
  isLoading: false,
};

function asItems(value: unknown): NotificationItem[] {
  if (Array.isArray(value)) {
    return value as NotificationItem[];
  }

  if (typeof value === "object" && value !== null) {
    const obj = value as {data?: unknown};
    if (Array.isArray(obj.data)) {
      return obj.data as NotificationItem[];
    }
  }

  return [];
}

function notificationReducer(state: NotificationState, action: NotificationAction): NotificationState {
  if (action.type === TYPE_ADD) {
    return {
      ...state,
      notifications: [action.payload, ...state.notifications],
      unreadCount: state.unreadCount + STEP_ONE,
    };
  }

  if (action.type === TYPE_MARK) {
    return {
      ...state,
      notifications: state.notifications.map(n => {
        if (n.id === action.payload) {
          return {...n, isRead: true};
        }

        return n;
      }),
      unreadCount: Math.max(UNREAD_COUNT_MIN, state.unreadCount - STEP_ONE),
    };
  }

  if (action.type === TYPE_MARK_ALL) {
    return {
      ...state,
      notifications: state.notifications.map(n => ({...n, isRead: true})),
      unreadCount: UNREAD_COUNT_MIN,
    };
  }

  if (action.type === TYPE_DELETE) {
    const deleted = state.notifications.find(n => n.id === action.payload);

    return {
      ...state,
      notifications: state.notifications.filter(n => n.id !== action.payload),
      unreadCount: deleted?.isRead ? state.unreadCount : Math.max(UNREAD_COUNT_MIN, state.unreadCount - STEP_ONE),
    };
  }

  if (action.type === TYPE_CLEAR) {
    return {
      ...state,
      notifications: [],
      unreadCount: UNREAD_COUNT_MIN,
    };
  }

  if (action.type === TYPE_LOAD) {
    const list = asItems(action.payload);

    return {
      ...state,
      notifications: list,
      unreadCount: list.filter(n => !n.isRead).length,
    };
  }

  if (action.type === TYPE_LOADING) {
    return {...state, isLoading: action.payload};
  }

  return state;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export function NotificationProvider({children}: {children: React.ReactNode}) {
  const [state, dispatch] = useReducer(notificationReducer, initialState);

  useEffect(() => {
    const load = async () => {
      dispatch({type: TYPE_LOADING, payload: true});

      try {
        const data = await notificationService.getNotifications();
        dispatch({type: TYPE_LOAD, payload: data});
      } catch {
        dispatch({type: TYPE_LOAD, payload: []});
      } finally {
        dispatch({type: TYPE_LOADING, payload: false});
      }
    };

    load();
  }, []);

  const addNotification = async (input: CreateNotificationData) => {
    const created = await notificationService.createNotification(input);

    dispatch({type: TYPE_ADD, payload: created});
  };

  const markAsRead = async (id: number) => {
    await notificationService.markAsRead(id);

    dispatch({type: TYPE_MARK, payload: id});
  };

  const markAllAsRead = async () => {
    await notificationService.markAllAsRead();

    dispatch({type: TYPE_MARK_ALL});
  };

  const deleteNotification = async (id: number) => {
    await notificationService.deleteNotification(id);

    dispatch({type: TYPE_DELETE, payload: id});
  };

  const clearAll = async () => {
    await notificationService.deleteAllNotifications();

    dispatch({type: TYPE_CLEAR});
  };

  const value: NotificationContextType = {
    notifications: state.notifications,
    unreadCount: state.unreadCount,
    isLoading: state.isLoading,
    markAsRead,
    markAllAsRead,
    deleteNotification,
    clearAll,
    addNotification,
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotifications() {
  const context = useContext(NotificationContext);

  if (context === undefined) {
    throw new Error("useNotifications must be used within a NotificationProvider");
  }

  return context;
}

