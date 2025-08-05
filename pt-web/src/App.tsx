import {Route, Routes} from "react-router-dom";
import {Link} from "src/components/ui/link/Link";
import {HomePage} from "src/pages/homePage";
import {NotFound} from "src/pages/notFound";

export function App() {
  return (
    <div>
      <Link href="https://www.google.com">
        Go to google
      </Link>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </div>
  );
}
