import {fetchData} from "src/api/http";
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
    let response: NotificationItem[] = [];
    try {
      response = await fetchData<NotificationItem[]>("general/notifications", {
        method: "GET",
        headers: this.getAuthHeaders(),
      });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }

    return response;
  }

  public async getUnreadCount(): Promise<number> {
    const data = await fetchData<{ unreadCount: number }>("general/notifications/unread-count", {
      method: "GET",
      headers: this.getAuthHeaders(),
    });

    return data.unreadCount;
  }

  public async createNotification(data: CreateNotificationData): Promise<NotificationItem> {
    return await fetchData<NotificationItem>("general/notifications", {
      method: "POST",
      headers: this.getAuthHeaders(),
      body: JSON.stringify(data),
    });
  }

  public async markAsRead(id: number): Promise<void> {
    await fetchData(`general/notifications/${id}/read`, {
      method: "PATCH",
      headers: this.getAuthHeaders(),
    });
  }

  public async markAllAsRead(): Promise<void> {
    await fetchData("general/notifications/mark-all-read", {
      method: "PATCH",
      headers: this.getAuthHeaders(),
    });
  }

  public async deleteNotification(id: number): Promise<void> {
    await fetchData(`general/notifications/${id}`, {
      method: "DELETE",
      headers: this.getAuthHeaders(),
    });
  }

  public async deleteAllNotifications(): Promise<void> {
    await fetchData("general/notifications", {
      method: "DELETE",
      headers: this.getAuthHeaders(),
    });
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

