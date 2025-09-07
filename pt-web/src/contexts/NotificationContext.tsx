import React, {createContext, useContext, useEffect, useReducer} from "react";
import {CreateNotificationData, NotificationItem, notificationService} from "src/services/notificationService";
import {NotificationContextType, NotificationState} from "src/types/notifications";

const UNREAD_COUNT_MIN = 0;
const UNREAD_COUNT_DECREMENT = 1;

type NotificationAction =
  | { type: "ADD_NOTIFICATION"; payload: NotificationItem }
  | { type: "MARK_AS_READ"; payload: number }
  | { type: "MARK_ALL_AS_READ" }
  | { type: "DELETE_NOTIFICATION"; payload: number }
  | { type: "CLEAR_ALL" }
  | { type: "LOAD_NOTIFICATIONS"; payload: NotificationItem[] }
  | { type: "SET_LOADING"; payload: boolean };

const initialState: NotificationState = {
  notifications: [],
  unreadCount: 0,
  isLoading: false,
};

function notificationReducer(state: NotificationState, action: NotificationAction): NotificationState {
  switch (action.type) {
    case "ADD_NOTIFICATION":
      return {
        ...state,
        notifications: [action.payload, ...state.notifications],
        unreadCount: state.unreadCount + UNREAD_COUNT_DECREMENT,
      };

    case "MARK_AS_READ":
      return {
        ...state,
        notifications: state.notifications.map(notification =>
          notification.id === action.payload
            ? {...notification, isRead: true}
            : notification,
        ),
        unreadCount: Math.max(UNREAD_COUNT_MIN, state.unreadCount - UNREAD_COUNT_DECREMENT),
      };

    case "MARK_ALL_AS_READ":
      return {
        ...state,
        notifications: state.notifications.map(notification => ({...notification, isRead: true})),
        unreadCount: UNREAD_COUNT_MIN,
      };

    case "DELETE_NOTIFICATION": {
      const deletedNotification = state.notifications.find(n => n.id === action.payload);

      return {
        ...state,
        notifications: state.notifications.filter(notification => notification.id !== action.payload),
        unreadCount: deletedNotification?.isRead
          ? state.unreadCount
          : Math.max(UNREAD_COUNT_MIN, state.unreadCount - UNREAD_COUNT_DECREMENT),
      };
    }

    case "CLEAR_ALL":
      return {
        ...state,
        notifications: [],
        unreadCount: UNREAD_COUNT_MIN,
      };

    case "LOAD_NOTIFICATIONS":
      return {
        ...state,
        notifications: action.payload,
        // TODO: fix unread count check type
        // unreadCount: action?.payload?.filter(n => !n.isRead).length ?? 0,
        unreadCount: 0,
      };

    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };

    default:
      return state;
  }
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export function NotificationProvider({children}: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(notificationReducer, initialState);

  useEffect(() => {
    const loadNotifications = async () => {
      try {
        dispatch({type: "SET_LOADING", payload: true});
        const notifications = await notificationService.getNotifications();
        dispatch({type: "LOAD_NOTIFICATIONS", payload: notifications});
      } catch {
        // Failed to load notifications from server
      } finally {
        dispatch({type: "SET_LOADING", payload: false});
      }
    };

    loadNotifications();
  }, []);

  const addNotification = async (notification: CreateNotificationData) => {
    const newNotification = await notificationService.createNotification(notification);
    dispatch({type: "ADD_NOTIFICATION", payload: newNotification});
  };

  const markAsRead = async (id: number) => {
    await notificationService.markAsRead(id);
    dispatch({type: "MARK_AS_READ", payload: id});
  };

  const markAllAsRead = async () => {
    await notificationService.markAllAsRead();
    dispatch({type: "MARK_ALL_AS_READ"});
  };

  const deleteNotification = async (id: number) => {
    await notificationService.deleteNotification(id);
    dispatch({type: "DELETE_NOTIFICATION", payload: id});
  };

  const clearAll = async () => {
    await notificationService.deleteAllNotifications();
    dispatch({type: "CLEAR_ALL"});
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
