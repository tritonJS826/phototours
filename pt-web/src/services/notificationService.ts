import {API_BASE_URL} from "src/config/apiRoutes";

export interface NotificationItem {
  id: number;
  title: string;
  message: string;
  type: "INFO" | "SUCCESS" | "WARNING" | "ERROR";
  category: "TOUR" | "PAYMENT" | "SYSTEM" | "PROMO";
  isRead: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateNotificationData {
  title: string;
  message: string;
  type: "INFO" | "SUCCESS" | "WARNING" | "ERROR";
  category: "TOUR" | "PAYMENT" | "SYSTEM" | "PROMO";
  actionUrl?: string;
  actionText?: string;
}

class NotificationService {

  public async getNotifications(): Promise<NotificationItem[]> {
    const response = await fetch(`${API_BASE_URL}/notifications`, {
      method: "GET",
      headers: this.getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  }

  public async getUnreadCount(): Promise<number> {
    const response = await fetch(`${API_BASE_URL}/notifications/unread-count`, {
      method: "GET",
      headers: this.getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data.unreadCount;
  }

  public async createNotification(data: CreateNotificationData): Promise<NotificationItem> {
    const response = await fetch(`${API_BASE_URL}/notifications`, {
      method: "POST",
      headers: this.getAuthHeaders(),
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  }

  public async markAsRead(id: number): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/notifications/${id}/read`, {
      method: "PATCH",
      headers: this.getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  }

  public async markAllAsRead(): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/notifications/mark-all-read`, {
      method: "PATCH",
      headers: this.getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  }

  public async deleteNotification(id: number): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/notifications/${id}`, {
      method: "DELETE",
      headers: this.getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  }

  public async deleteAllNotifications(): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/notifications`, {
      method: "DELETE",
      headers: this.getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  }

  private getAuthHeaders(): HeadersInit {
    const token = localStorage.getItem("token");

    return {
      "Content-Type": "application/json",
      ...(token && {Authorization: `Bearer ${token}`}),
    };
  }

}

export const notificationService = new NotificationService();
