import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import ReactGA from "react-ga4";
import {BrowserRouter} from "react-router-dom";
import {App} from "src/App";
import {NotificationProvider} from "src/contexts/NotificationContext";
import {env} from "src/utils/env/env";
import {getUserInfo} from "src/utils/userInfo";
import "src/styles/main.scss";

ReactGA.initialize(env.VITE_API_BASE_URL);

getUserInfo();

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <NotificationProvider>
        <App />
      </NotificationProvider>
    </BrowserRouter>
  </StrictMode>,
);
