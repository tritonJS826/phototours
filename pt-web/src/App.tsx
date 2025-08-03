import {Route, Routes} from "react-router-dom";
import {Footer} from "src/components/Footer/Footer";
import {Header} from "src/components/Header/Header";
import {AboutUs} from "src/pages/aboutUs";
import {AdminPage} from "src/pages/adminPage";
import {BookTours} from "src/pages/bookTours";
import {Cart} from "src/pages/cartPage";
import {ContactUs} from "src/pages/contactUs";
import {ExploreArticles} from "src/pages/exploreArticles";
import {HomePage} from "src/pages/homePage";
import {NotFound} from "src/pages/notFound";
import {Profile} from "src/pages/profilePage";
import {TourPage} from "src/pages/tourPage";

export function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/about"
          element={<AboutUs />}
        />
        <Route
          path="/admin"
          element={<AdminPage />}
        />
        <Route
          path="/tours"
          element={<BookTours />}
        />
        <Route
          path="/cart"
          element={<Cart />}
        />
        <Route
          path="/contact"
          element={<ContactUs />}
        />
        <Route
          path="/articles"
          element={<ExploreArticles />}
        />
        <Route
          path="/profile"
          element={<Profile />}
        />
        <Route
          path="/tours/:id"
          element={<TourPage />}
        />
        {" "}
        {/*страница для конкретного тура */}
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
      <Footer />
    </div>
  );
}
