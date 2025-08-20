import {API_BASE_URL} from "src/config/apiRoutes";

export interface BankAccount {
  id: number;
  accountHolder: string;
  bankName: string;
  accountType: "CHECKING" | "SAVINGS";
  accountNumber: string;
  routingNumber?: string;
  isDefault: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateBankAccountData {
  accountHolder: string;
  bankName: string;
  accountType: "CHECKING" | "SAVINGS";
  accountNumber: string;
  routingNumber?: string;
  isDefault?: boolean;
}

export interface UpdateBankAccountData {
  accountHolder?: string;
  bankName?: string;
  accountType?: "CHECKING" | "SAVINGS";
  accountNumber?: string;
  routingNumber?: string;
  isDefault?: boolean;
}

class BankAccountService {

  // Получить все банковские счета пользователя
  public async getBankAccounts(): Promise<BankAccount[]> {
    const response = await fetch(`${API_BASE_URL}/general/bank-accounts`, {
      method: "GET",
      headers: this.getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  }

  // Получить основной банковский счет пользователя
  public async getDefaultBankAccount(): Promise<BankAccount | null> {
    const response = await fetch(`${API_BASE_URL}/general/bank-accounts/default`, {
      method: "GET",
      headers: this.getAuthHeaders(),
    });

    if (!response.ok) {
      const NOT_FOUND_STATUS = 404;
      if (response.status === NOT_FOUND_STATUS) {
        return null; // Нет основного счета
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  }

  // Создать новый банковский счет
  public async createBankAccount(data: CreateBankAccountData): Promise<BankAccount> {
    const response = await fetch(`${API_BASE_URL}/general/bank-accounts`, {
      method: "POST",
      headers: this.getAuthHeaders(),
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  }

  // Обновить банковский счет
  public async updateBankAccount(id: number, data: UpdateBankAccountData): Promise<BankAccount> {
    const response = await fetch(`${API_BASE_URL}/general/bank-accounts/${id}`, {
      method: "PUT",
      headers: this.getAuthHeaders(),
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  }

  // Установить банковский счет как основной
  public async setDefaultBankAccount(id: number): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/general/bank-accounts/${id}/default`, {
      method: "PATCH",
      headers: this.getAuthHeaders(),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  }

  // Удалить банковский счет
  public async deleteBankAccount(id: number): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/general/bank-accounts/${id}`, {
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

export const bankAccountService = new BankAccountService();
