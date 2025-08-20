/**
 * Newsletter Service
 *
 * This service handles newsletter subscription management:
 * - User subscription to newsletter
 * - Unsubscription from newsletter
 * - Getting list of subscribers (for admins)
 *
 * Used in:
 * - Footer (subscription form)
 * - Admin panel (subscriber management)
 * - Email campaigns
 */

// ====== TYPES ======
export interface NewsletterPreferences {
  categories?: string[];
  frequency?: "daily" | "weekly" | "monthly";
  language?: string;
  marketing?: boolean;
}

export interface NewsletterSubscription {
  id: number;
  email: string;
  isActive: boolean;
  subscribedAt: string;
  unsubscribedAt?: string;
  source: string;
  preferences?: NewsletterPreferences;
}

export interface NewsletterResponse {
  message: string;
  subscription?: NewsletterSubscription;
  error?: string;
}

// ====== CONSTANTS ======
const MESSAGES = {
  SUBSCRIPTION_SUCCESS: "Thank you for subscribing to our newsletter!",
  UNSUBSCRIPTION_SUCCESS: "Successfully unsubscribed from newsletter",
  VALIDATION_ERROR: "Please enter a valid email address",
  NETWORK_ERROR: "Network error occurred. Please try again.",
  SERVER_ERROR: "Server error occurred. Please try again later.",
} as const;

const MOCK_DELAY = 1000; // Simulate network delay

// ====== VALIDATION ======
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return emailRegex.test(email.trim());
};

// ====== MOCK IMPLEMENTATIONS ======
/**
 * Mock implementation for newsletter subscription
 * TODO: Replace with real API call when backend is ready
 */
const mockSubscribeToNewsletter = async (email: string, source: string): Promise<NewsletterResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        message: MESSAGES.SUBSCRIPTION_SUCCESS,
        subscription: {
          id: Date.now(),
          email,
          isActive: true,
          subscribedAt: new Date().toISOString(),
          source,
          preferences: {
            frequency: "weekly",
            marketing: true,
          },
        },
      });
    }, MOCK_DELAY);
  });
};

/**
 * Mock implementation for newsletter unsubscription
 * TODO: Replace with real API call when backend is ready
 */
const mockUnsubscribeFromNewsletter = async (email: string): Promise<NewsletterResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        message: MESSAGES.UNSUBSCRIPTION_SUCCESS,
        subscription: {
          id: Date.now(),
          email,
          isActive: false,
          subscribedAt: new Date().toISOString(),
          unsubscribedAt: new Date().toISOString(),
          source: "unsubscribe",
        },
      });
    }, MOCK_DELAY);
  });
};

/**
 * Mock implementation for getting newsletter subscriptions
 * TODO: Replace with real API call when backend is ready
 */
const mockGetNewsletterSubscriptions = async (): Promise<{
  subscriptions: NewsletterSubscription[];
  count: number;
}> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        subscriptions: [
          {
            id: 1,
            email: "test@example.com",
            isActive: true,
            subscribedAt: new Date().toISOString(),
            source: "footer",
            preferences: {
              frequency: "weekly",
              marketing: true,
            },
          },
        ],
        count: 1,
      });
    }, MOCK_DELAY);
  });
};

// ====== PUBLIC API ======
/**
 * Subscribe to newsletter
 * @param email - Email address to subscribe
 * @param source - Source of subscription (e.g., "footer", "popup")
 * @returns Promise with subscription result
 */
export const subscribeToNewsletter = async (email: string, source: string = "footer"): Promise<NewsletterResponse> => {
  // Validate email
  if (!email || !validateEmail(email)) {
    throw new Error(MESSAGES.VALIDATION_ERROR);
  }

  try {
    // TODO: Replace with real API call when backend is ready
    return await mockSubscribeToNewsletter(email, source);
  } catch (error) {
    // TODO: Replace with proper logger service
    throw error instanceof Error ? error : new Error(MESSAGES.SERVER_ERROR);
  }
};

/**
 * Unsubscribe from newsletter
 * @param email - Email address to unsubscribe
 * @returns Promise with unsubscription result
 */
export const unsubscribeFromNewsletter = async (email: string): Promise<NewsletterResponse> => {
  // Validate email
  if (!email || !validateEmail(email)) {
    throw new Error(MESSAGES.VALIDATION_ERROR);
  }

  try {
    // TODO: Replace with real API call when backend is ready
    return await mockUnsubscribeFromNewsletter(email);
  } catch (error) {
    // TODO: Replace with proper logger service
    throw error instanceof Error ? error : new Error(MESSAGES.SERVER_ERROR);
  }
};

/**
 * Get all newsletter subscriptions (admin only)
 * @returns Promise with list of subscriptions and count
 */
export const getNewsletterSubscriptions = async (): Promise<{
  subscriptions: NewsletterSubscription[];
  count: number;
}> => {
  try {
    // TODO: Replace with real API call when backend is ready
    return await mockGetNewsletterSubscriptions();
  } catch (error) {
    // TODO: Replace with proper logger service
    throw error instanceof Error ? error : new Error(MESSAGES.SERVER_ERROR);
  }
};
