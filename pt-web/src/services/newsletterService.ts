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

const MESSAGES = {
  SUBSCRIPTION_SUCCESS: "Thank you for subscribing to our newsletter!",
  UNSUBSCRIPTION_SUCCESS: "Successfully unsubscribed from newsletter",
  VALIDATION_ERROR: "Please enter a valid email address",
  NETWORK_ERROR: "Network error occurred. Please try again.",
  SERVER_ERROR: "Server error occurred. Please try again later.",
} as const;

const MOCK_DELAY = 1000;

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return emailRegex.test(email.trim());
};

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

export const subscribeToNewsletter = async (email: string, source: string = "footer"): Promise<NewsletterResponse> => {
  if (!email || !validateEmail(email)) {
    throw new Error(MESSAGES.VALIDATION_ERROR);
  }

  try {
    return await mockSubscribeToNewsletter(email, source);
  } catch (error) {
    throw error instanceof Error ? error : new Error(MESSAGES.SERVER_ERROR);
  }
};

export const unsubscribeFromNewsletter = async (email: string): Promise<NewsletterResponse> => {
  if (!email || !validateEmail(email)) {
    throw new Error(MESSAGES.VALIDATION_ERROR);
  }

  try {
    return await mockUnsubscribeFromNewsletter(email);
  } catch (error) {
    throw error instanceof Error ? error : new Error(MESSAGES.SERVER_ERROR);
  }
};

export const getNewsletterSubscriptions = async (): Promise<{
  subscriptions: NewsletterSubscription[];
  count: number;
}> => {
  try {
    return await mockGetNewsletterSubscriptions();
  } catch (error) {
    throw error instanceof Error ? error : new Error(MESSAGES.SERVER_ERROR);
  }
};
