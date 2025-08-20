export interface NotificationItem {
  id: number;
  title: string;
  message: string;
  type: "INFO" | "SUCCESS" | "WARNING" | "ERROR";
  category: "TOUR" | "PAYMENT" | "SYSTEM" | "PROMO";
  isRead: boolean;
  createdAt: string;
  updatedAt: string;
  actionUrl?: string;
  actionText?: string;
}

export interface NotificationState {
  notifications: NotificationItem[];
  unreadCount: number;
  isLoading: boolean;
}

export interface NotificationContextType {
  notifications: NotificationItem[];
  unreadCount: number;
  isLoading: boolean;
  markAsRead: (id: number) => Promise<void>;
  markAllAsRead: () => Promise<void>;
  deleteNotification: (id: number) => Promise<void>;
  clearAll: () => Promise<void>;
  addNotification: (notification: {
    title: string;
    message: string;
    type: "INFO" | "SUCCESS" | "WARNING" | "ERROR";
    category: "TOUR" | "PAYMENT" | "SYSTEM" | "PROMO";
    actionUrl?: string;
    actionText?: string;
  }) => Promise<void>;
}
