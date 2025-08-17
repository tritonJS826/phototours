import {Route, Routes} from "react-router-dom";
import {AdminCreateTourForm} from "src/components/AdminCreateTourForm/AdminCreateTourForm";
import {AdminTourContinueForm} from "src/components/AdminTourContinueForm/AdminTourContinueForm";
import {AdminTourEdit} from "src/components/AdminTourEditForm/AdminTourEditForm";
import {Footer} from "src/components/Footer/Footer";
import {Header} from "src/components/Header/Header";
import {ProtectedRoute} from "src/components/ProtectedRoute/ProtectedRoute";
import {ScrollToTop} from "src/components/ScrollToTop/ScrollToTop";
import {PATHS} from "src/constants/routes";
import {AboutUs} from "src/pages/aboutUs/AboutUsPage";
import {AdminPage} from "src/pages/adminPage/AdminPage";
import {BookTours} from "src/pages/bookTours/BookTours";
import {Cart} from "src/pages/cart/Cart";
import {ContactUs} from "src/pages/contactUs/ContactUs";
import {ArticlePage} from "src/pages/exploreArticles/ArticlePage";
import {ExploreArticles} from "src/pages/exploreArticles/ExploreArticles";
import {HomePage} from "src/pages/homePage/HomePage";
import {NotFound} from "src/pages/notFound/notFound";
import {Profile} from "src/pages/profile/Profile";
import {TourPage} from "src/pages/tourPage/TourPage";

export function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      {" "}
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
          path={PATHS.ARTICLES_SLUG}
          element={<ArticlePage />}
        />
        <Route
          path={PATHS.PROFILE}
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path={PATHS.NOT_FOUND}
          element={<NotFound />}
        />
        <Route
          path={PATHS.ADMIN_CREATE_TOUR}
          element={<AdminCreateTourForm />}
        />
        <Route
          path={PATHS.ADMIN_EDIT_TOUR}
          element={<AdminTourEdit />}
        />
        <Route
          path={PATHS.ADMIN_TOUR_CONTINUE}
          element={<AdminTourContinueForm />}
        />
      </Routes>
      <Footer />
    </>
  );
}
