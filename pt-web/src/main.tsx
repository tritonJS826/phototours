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

// 10 minutes
// eslint-disable-next-line no-magic-numbers
const CACHE_DURATION_MS = 10 * 60 * 1000;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: CACHE_DURATION_MS,
      gcTime: CACHE_DURATION_MS,
    },
  },
});

const localStoragePersister = {
  persistClient: (client: unknown) => {
    localStorage.setItem("react-query-cache", JSON.stringify(client));
  },
  restoreClient: () => {
    const cached = localStorage.getItem("react-query-cache");

    return cached ? JSON.parse(cached) : undefined;
  },
  removeClient: () => {
    localStorage.removeItem("react-query-cache");
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
  persister: localStoragePersister,
  maxAge: CACHE_DURATION_MS,
});

persistPromise
  .catch(() => {})
  .finally(() => {
    ReactGA.initialize(env.VITE_API_BASE_URL);
    getUserInfo();
    renderApp();
  });
