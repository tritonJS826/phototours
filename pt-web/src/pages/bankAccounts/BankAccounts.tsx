import React, {useEffect, useState} from "react";
import {Edit, Plus, Star, Trash2, X} from "lucide-react";
import {Container} from "src/components/Container/Container";
import {BankAccount, bankAccountService, CreateBankAccountData} from "src/services/bankAccountService";
import styles from "src/pages/bankAccounts/BankAccounts.module.scss";

export function BankAccounts() {
  const [bankAccounts, setBankAccounts] = useState<BankAccount[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAccount, setEditingAccount] = useState<BankAccount | null>(null);
  const [formData, setFormData] = useState<CreateBankAccountData>({
    accountHolder: "",
    bankName: "",
    accountType: "CHECKING",
    accountNumber: "",
    routingNumber: "",
    isDefault: false,
  });

  const resetForm = () => {
    setFormData({
      accountHolder: "",
      bankName: "",
      accountType: "CHECKING",
      accountNumber: "",
      routingNumber: "",
      isDefault: false,
    });
  };

  const loadBankAccounts = async () => {
    try {
      setIsLoading(true);
      const accounts = await bankAccountService.getBankAccounts();
      setBankAccounts(accounts);
    } catch {
      // Failed to load bank accounts
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadBankAccounts();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingAccount) {
        await bankAccountService.updateBankAccount(editingAccount.id, formData);
      } else {
        await bankAccountService.createBankAccount(formData);
      }
      setIsModalOpen(false);
      setEditingAccount(null);
      resetForm();
      loadBankAccounts();
    } catch {
      // Failed to save bank account
    }
  };

  const handleEdit = (account: BankAccount) => {
    setEditingAccount(account);
    setFormData({
      accountHolder: account.accountHolder,
      bankName: account.bankName,
      accountType: account.accountType,
      accountNumber: account.accountNumber,
      routingNumber: account.routingNumber || "",
      isDefault: account.isDefault,
    });
    setIsModalOpen(true);
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this bank account?")) {
      try {
        await bankAccountService.deleteBankAccount(id);
        loadBankAccounts();
      } catch {
      // Failed to delete bank account
      }
    }
  };

  const handleSetDefault = async (id: number) => {
    try {
      await bankAccountService.setDefaultBankAccount(id);
      loadBankAccounts();
    } catch {
      // Failed to set default bank account
    }
  };

  const openModal = () => {
    setEditingAccount(null);
    resetForm();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingAccount(null);
    resetForm();
  };

  const maskAccountNumber = (accountNumber: string) => {
    const MIN_LENGTH_FOR_MASKING = 4;
    const VISIBLE_DIGITS = 4;

    if (accountNumber.length <= MIN_LENGTH_FOR_MASKING) {
      return accountNumber;
    }

    return `****${accountNumber.slice(-VISIBLE_DIGITS)}`;
  };

  if (isLoading) {
    return (
      <div className={styles.bankAccountsContainer}>
        <Container>
          <div className={styles.loading}>
            Loading bank accounts...
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className={styles.bankAccountsContainer}>
      <Container>
        <div className={styles.bankAccountsContent}>
          <div className={styles.header}>
            <div className={styles.headerLeft}>
              <h1>
                Bank Details
              </h1>
              <p>
                Manage your bank accounts for payments
              </p>
            </div>
            <button
              className={styles.addButton}
              onClick={openModal}
            >
              <Plus size={16} />
              <span>
                Add Account
              </span>
            </button>
          </div>

          <div className={styles.accountsList}>
            {bankAccounts.length === 0
              ? (
                <div className={styles.emptyState}>
                  <p>
                    No bank accounts added yet.
                  </p>
                  <button
                    className={styles.addButton}
                    onClick={openModal}
                  >
                    <Plus size={16} />
                    <span>
                      Add Your First Account
                    </span>
                  </button>
                </div>
              )
              : (
                bankAccounts.map((account) => (
                  <div
                    key={account.id}
                    className={styles.accountCard}
                  >
                    <div className={styles.accountInfo}>
                      <div className={styles.accountHeader}>
                        <h3>
                          {account.accountHolder}
                        </h3>
                        {account.isDefault && (
                          <span className={styles.defaultBadge}>
                            <Star size={12} />
                            Default
                          </span>
                        )}
                      </div>
                      <p className={styles.bankName}>
                        {account.bankName}
                      </p>
                      <div className={styles.accountDetails}>
                        <span className={styles.accountType}>
                          {account.accountType}
                        </span>
                        <span className={styles.accountNumber}>
                          {maskAccountNumber(account.accountNumber)}
                        </span>
                      </div>
                    </div>
                    <div className={styles.accountActions}>
                      {!account.isDefault && (
                        <button
                          className={styles.actionButton}
                          onClick={() => handleSetDefault(account.id)}
                          title="Set as default"
                        >
                          <Star size={16} />
                        </button>
                      )}
                      <button
                        className={styles.actionButton}
                        onClick={() => handleEdit(account)}
                        title="Edit account"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        className={styles.actionButton}
                        onClick={() => handleDelete(account.id)}
                        title="Delete account"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))
              )}
          </div>
        </div>
      </Container>

      {/* Modal */}
      {isModalOpen && (
        <div
          className={styles.modalOverlay}
          onClick={closeModal}
        >
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <h2>
                {editingAccount ? "Edit Bank Account" : "Add Bank Account"}
              </h2>
              <button
                className={styles.closeButton}
                onClick={closeModal}
              >
                <X size={20} />
              </button>
            </div>
            <form
              onSubmit={handleSubmit}
              className={styles.form}
            >
              <div className={styles.formGroup}>
                <label htmlFor="accountHolder">
                  Account Holder
                </label>
                <input
                  type="text"
                  id="accountHolder"
                  value={formData.accountHolder}
                  onChange={(e) => setFormData({...formData, accountHolder: e.target.value})}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="bankName">
                  Bank Name
                </label>
                <input
                  type="text"
                  id="bankName"
                  value={formData.bankName}
                  onChange={(e) => setFormData({...formData, bankName: e.target.value})}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="accountType">
                  Account Type
                </label>
                <select
                  id="accountType"
                  value={formData.accountType}
                  onChange={(e) => setFormData({...formData, accountType: e.target.value as "CHECKING" | "SAVINGS"})}
                  required
                >
                  <option value="CHECKING">
                    Checking
                  </option>
                  <option value="SAVINGS">
                    Savings
                  </option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="accountNumber">
                  Account Number
                </label>
                <input
                  type="text"
                  id="accountNumber"
                  value={formData.accountNumber}
                  onChange={(e) => setFormData({...formData, accountNumber: e.target.value})}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="routingNumber">
                  Routing Number (Optional)
                </label>
                <input
                  type="text"
                  id="routingNumber"
                  value={formData.routingNumber}
                  onChange={(e) => setFormData({...formData, routingNumber: e.target.value})}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    checked={formData.isDefault}
                    onChange={(e) => setFormData({...formData, isDefault: e.target.checked})}
                  />
                  Set as default account
                </label>
              </div>
              <div className={styles.formActions}>
                <button
                  type="button"
                  onClick={closeModal}
                  className={styles.cancelButton}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className={styles.saveButton}
                >
                  {editingAccount ? "Update Account" : "Add Account"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
