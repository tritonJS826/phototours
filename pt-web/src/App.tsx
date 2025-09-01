import {Route, Routes} from "react-router-dom";
import {Footer} from "src/components/Footer/Footer";
import {Header} from "src/components/Header/Header";
import {ProtectedRoute} from "src/components/ProtectedRoute/ProtectedRoute";
import {ScrollToTop} from "src/components/ScrollToTop/ScrollToTop";
import {AboutUs} from "src/pages/aboutUs/AboutUsPage";
import {AdminCreateTourForm} from "src/pages/AdminCreateTourForm/AdminCreateTourForm";
import {AdminPage} from "src/pages/adminPage/AdminPage";
import {AdminTourContinueForm} from "src/pages/AdminTourContinueForm/AdminTourContinueForm";
import {AdminTourEdit} from "src/pages/AdminTourEditForm/AdminTourEditForm";
import {Cart} from "src/pages/cart/Cart";
import {ContactUs} from "src/pages/contactUs/ContactUs";
import {Dashboard} from "src/pages/dashboard/Dashboard";
import {ArticlePage} from "src/pages/exploreArticles/ArticlePage";
import {ExploreArticles} from "src/pages/exploreArticles/ExploreArticles";
import {HomePage} from "src/pages/homePage/HomePage";
import {NotFound} from "src/pages/notFound/notFound";
import {Notifications} from "src/pages/notifications/Notifications";
import {EditProfile} from "src/pages/profile/EditProfile";
import {Profile} from "src/pages/profile/Profile";
import {PublicProfile} from "src/pages/profile/PublicProfile";
import {TourDetailsPage} from "src/pages/tourDetailsPage/TourDetailsPage";
import {ToursPage} from "src/pages/toursPage/ToursPage";
import {PATHS} from "src/routes/routes";

export function App() {
  return (
    <div className="app">
      <Header />
      <ScrollToTop />
      <main className="main-content">
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
            element={<ToursPage />}
          />
          <Route
            path={PATHS.TOUR_DETAILS}
            element={<TourDetailsPage />}
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
            element={<ProtectedRoute>
              <Profile />
            </ProtectedRoute>}
          />
          <Route
            path={PATHS.PROFILE_EDIT}
            element={<ProtectedRoute>
              <EditProfile />
            </ProtectedRoute>}
          />
          <Route
            path={PATHS.PROFILE_ID}
            element={<PublicProfile />}
          />
          <Route
            path={PATHS.DASHBOARD}
            element={<ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>}
          />
          <Route
            path={PATHS.NOTIFICATIONS}
            element={<ProtectedRoute>
              <Notifications />
            </ProtectedRoute>}
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
          <Route
            path={PATHS.NOT_FOUND}
            element={<NotFound />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
