import {useState} from "react";
import {CreateUserRequest, User, UserService} from "src/services/userService";
import styles from "src/components/CreateUserButton/CreateUserButton.module.scss";

export function CreateUserButton() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCreateUser = async () => {
    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const PHONE_NUMBER_LENGTH = 6;
      const MAX_RANDOM_NUMBER = 1000000;

      const userData: CreateUserRequest = {
        firstName: `Test${Date.now()}`,
        lastName: `User${Date.now()}`,
        email: `test${Date.now()}@example.com`,
        phone: `+38099${Math.floor(Math.random() * MAX_RANDOM_NUMBER).toString().padStart(PHONE_NUMBER_LENGTH, "0")}`,
        company: `Test Company ${Date.now()}`,
      };

      const createdUser = await UserService.createUser(userData);
      setResult(createdUser);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error occurred";
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>
        Create User Test
      </h2>
      <p className={styles.subtitle}>
        Click the button to create a test user via API
      </p>

      <button
        className={styles.createButton}
        onClick={handleCreateUser}
        disabled={isLoading}
      >
        {isLoading ? "Creating User..." : "Create Test User"}
      </button>

      {error && (
        <div className={styles.error}>
          <strong>
            Error:
          </strong>
          {" "}
          {error}
        </div>
      )}

      {result && (
        <div className={styles.success}>
          <strong>
            User Created Successfully!
          </strong>
          <div>
            ID:
            {result.id}
          </div>
          <div>
            Name:
            {result.firstName}
            {" "}
            {result.lastName}
          </div>
          <div>
            Email:
            {result.email}
          </div>
          <div>
            Phone:
            {result.phone}
          </div>
          <div>
            Company:
            {result.company || "Not specified"}
          </div>
          <div>
            Password:
            <strong>
              {result.password}
            </strong>
          </div>
          <div>
            Role:
            {result.role}
          </div>
          <div>
            Created:
            {new Date(result.createdAt).toLocaleString()}
          </div>
        </div>
      )}
    </div>
  );
}
