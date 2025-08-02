import {Route, Routes} from "react-router-dom";
import {Link} from "src/components/ui/link/Link";
import {Homepage} from "src/pages/Homepage/Homepage";
import {NotFound} from "src/pages/notFound";

const App = () => {
  return (
    <div className="App">
      <Link href="https://www.google.com">
        Go to google
      </Link>
      <Routes>
        <Route
          path="/"
          element={<Homepage />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </div>
  );
};

export {App};