import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import ReactGA from "react-ga4";
import {BrowserRouter} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {persistQueryClient} from "@tanstack/react-query-persist-client";
import {App} from "src/App";
import {NotificationProvider} from "src/contexts/NotificationContext";
import {env} from "src/utils/env/env";
import {getUserInfo} from "src/utils/userInfo";
import "src/styles/main.scss";

const DB_NAME = "react-query-cache";
const DB_VERSION = 1;
const STORE_NAME = "cache";

// 10 minutes
// eslint-disable-next-line no-magic-numbers
const CACHE_DURATION_MS = 10 * 60 * 1000;

// 30 days before clearing indexdb
// eslint-disable-next-line no-magic-numbers
const CACHE_GC_DURATION_MS = 30 * 1440 * 60 * 1000;

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
  });
}

const idbStorage = {
  getItem: async (key: string): Promise<string | null> => {
    const db = await openDB();

    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, "readonly");
      const store = transaction.objectStore(STORE_NAME);
      const request = store.get(key);
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result ?? null);
    });
  },
  setItem: async (key: string, value: string): Promise<void> => {
    const db = await openDB();

    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, "readwrite");
      const store = transaction.objectStore(STORE_NAME);
      const request = store.put(value, key);
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  },
  removeItem: async (key: string): Promise<void> => {
    const db = await openDB();

    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, "readwrite");
      const store = transaction.objectStore(STORE_NAME);
      const request = store.delete(key);
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  },
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: CACHE_DURATION_MS,
      gcTime: CACHE_GC_DURATION_MS,
    },
  },
});

const persister = {
  persistClient: async (client: unknown) => {
    const serialized = JSON.stringify(client);
    await idbStorage.setItem("react-query-cache", serialized);
  },
  restoreClient: async () => {
    const cached = await idbStorage.getItem("react-query-cache");

    return cached ? JSON.parse(cached) : undefined;
  },
  removeClient: async () => {
    await idbStorage.removeItem("react-query-cache");
  },
};

const renderApp = () => {
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    throw new Error("Root element not found");
  }

  createRoot(rootElement).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <NotificationProvider>
            <App />
          </NotificationProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </StrictMode>,
  );
};

const [, persistPromise] = persistQueryClient({
  queryClient,
  persister,
  maxAge: CACHE_DURATION_MS,
});

persistPromise
  .catch(() => {})
  .finally(() => {
    ReactGA.initialize(env.VITE_API_BASE_URL);
    getUserInfo();
    renderApp();
  });
