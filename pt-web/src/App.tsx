import {Route, Routes} from "react-router-dom";
import {Footer} from "src/components/Footer/Footer";
import {Header} from "src/components/Header/Header";
import {PATHS} from "src/constants/routes";
import {AboutUs} from "src/pages/aboutUs";
import {AdminPage} from "src/pages/adminPage";
import {BookTours} from "src/pages/bookTours";
import {Cart} from "src/pages/cart";
import {ContactUs} from "src/pages/contactUs";
import {ExploreArticles} from "src/pages/exploreArticles";
import {HomePage} from "src/pages/homePage";
import {NotFound} from "src/pages/notFound";
import {Profile} from "src/pages/profile";
import {TourPage} from "src/pages/tourPage";

export function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route
          path={PATHS.HOME}
          element={<HomePage />}
        />
        <Route
          path={PATHS.ABOUT}
          element={<AboutUs />}
        />
        <Route
          path={PATHS.ADMIN}
          element={<AdminPage />}
        />
        <Route
          path={PATHS.TOURS}
          element={<BookTours />}
        />
        <Route
          path={PATHS.TOUR_DETAILS}
          element={<TourPage />}
        />
        <Route
          path={PATHS.CART}
          element={<Cart />}
        />
        <Route
          path={PATHS.CONTACT}
          element={<ContactUs />}
        />
        <Route
          path={PATHS.ARTICLES}
          element={<ExploreArticles />}
        />
        <Route
          path={PATHS.PROFILE}
          element={<Profile />}
        />
        <Route
          path={PATHS.NOT_FOUND}
          element={<NotFound />}
        />
      </Routes>
      <Footer />
    </div>
  );
}
