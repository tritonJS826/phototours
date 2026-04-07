import {useEffect, useState} from "react";
import {Helmet, HelmetProvider} from "react-helmet-async";
import {Route, Routes, useLocation} from "react-router-dom";
import {AppLayout} from "src/layouts/AppLayout";
import {PageLayout} from "src/layouts/PageLayout";
import {ProtectedPageLayout} from "src/layouts/ProtectedPageLayout";
import {AboutUs} from "src/pages/aboutUs/AboutUsPage";
import {AdminCreateTourForm} from "src/pages/adminCreateTourForm/AdminCreateTourForm";
import {AdminPage} from "src/pages/adminPage/AdminPage";
import {AdminTourContinueForm} from "src/pages/adminTourContinueForm/AdminTourContinueForm";
import {AdminTourEdit} from "src/pages/adminTourEditForm/AdminTourEditForm";
import {AdminUserGallery} from "src/pages/adminUserGallery/AdminUserGallery";
import {AdminUsersPage} from "src/pages/adminUsers/AdminUsersPage";
import {Cart} from "src/pages/cart/Cart";
import {ContactUs} from "src/pages/contactUs/ContactUs";
import {CookiesPolicy} from "src/pages/cookiesPolicy/CookiesPolicyPage";
import {Dashboard} from "src/pages/dashboard/Dashboard";
import {ArticlePage} from "src/pages/exploreArticles/ArticlePage/ArticlePage";
import {ArticlesPage} from "src/pages/exploreArticles/ArticlesPage/ArticlesPage";
import {HomePage} from "src/pages/homePage/HomePage";
import {NotFoundPage} from "src/pages/notFound/notFoundPage";
import {Notifications} from "src/pages/notifications/Notifications";
import {MyPhotosPage} from "src/pages/photos/MyPhotosPage";
import {PrivacyPolicy} from "src/pages/privacyPolicy/PrivacyPolicyPage";
import {EditProfile} from "src/pages/profile/EditProfile";
import {Profile} from "src/pages/profile/Profile";
import {ThankYouPage} from "src/pages/thankYouPage/ThankYouPage";
import {TourDetailsPage} from "src/pages/tourDetailsPage/TourDetailsPage";
import {ToursPage} from "src/pages/toursPage/ToursPage";
import {PATHS} from "src/routes/routes";
import {
  defaultMetadata,
  fetchMetadata,
  Metadata,
  MetaTag,
} from "src/services/metadataService";
import {useAnchorScroll} from "src/utils/pageUtils";
import * as CookieConsent from "vanilla-cookieconsent";
import "vanilla-cookieconsent/dist/cookieconsent.css";

const helmetContext = {};

export function App() {
  const location = useLocation();
  const [metadata, setMetadata] = useState<Metadata>(defaultMetadata);

  useAnchorScroll();

  // GDPR
  useEffect(() => {
    CookieConsent.run({
      categories: {
        necessary: {
          enabled: true,
          readOnly: true,
        },
        analytics: {},
      },
      language: {
        default: "en",
        translations: {
          en: {
            consentModal: {
              title: "We value your privacy",
              description:
                // eslint-disable-next-line max-len
                "We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking \"Accept All\", you consent to our use of cookies.",
              acceptAllBtn: "Accept All",
              acceptNecessaryBtn: "Reject All",
              showPreferencesBtn: "Customize",
            },
            preferencesModal: {
              title: "Cookie Preferences",
              acceptAllBtn: "Accept All",
              acceptNecessaryBtn: "Reject All",
              savePreferencesBtn: "Save Preferences",
              closeIconLabel: "Close",
              sections: [
                {
                  title: "Necessary Cookies",
                  description:
                    "These cookies are essential for the website to function properly and cannot be disabled.",
                },
                {
                  title: "Analytics Cookies",
                  description:
                    "These cookies help us understand how visitors interact with our website.",
                },
              ],
            },
          },
        },
      },
    });
  }, []);

  useEffect(() => {
    // Function to fetch metadata based on the current URL
    const getMetadata = async () => {
      try {
        const fetchedMetadata = await fetchMetadata(location.pathname);
        setMetadata(fetchedMetadata);
      } catch {
        setMetadata(defaultMetadata);
      }
    };

    getMetadata();
  }, [location]);

  return (
    <HelmetProvider context={helmetContext}>
      <Helmet prioritizeSeoTags>
        <title>
          {metadata.description}
        </title>
        <meta
          name="description"
          content={metadata.description}
        />
        <meta
          name="keywords"
          content={metadata.keywords}
        />
        {metadata.metaTags?.map((tag: MetaTag) => (
          <meta
            name={tag.name}
            content={tag.content}
            key={tag.name}
          />
        ))}
      </Helmet>
      <Routes>
        <Route
          path={PATHS.HOME}
          element={<HomePage />}
        />
        <Route element={<AppLayout />}>
          <Route element={<PageLayout />}>
            <Route
              path={PATHS.ABOUT}
              element={<AboutUs />}
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
              element={<ArticlesPage />}
            />
            <Route
              path={PATHS.ARTICLES_SLUG}
              element={<ArticlePage />}
            />
            <Route
              path={PATHS.THANK_YOU}
              element={<ThankYouPage />}
            />
            <Route
              path={PATHS.PRIVACY}
              element={<PrivacyPolicy />}
            />
            <Route
              path={PATHS.COOKIES}
              element={<CookiesPolicy />}
            />
          </Route>

          <Route element={<ProtectedPageLayout />}>
            <Route
              path={PATHS.PROFILE}
              element={<Profile />}
            />
            <Route
              path={PATHS.PROFILE_EDIT}
              element={<EditProfile />}
            />
            <Route
              path={PATHS.DASHBOARD}
              element={<Dashboard />}
            />
            <Route
              path={PATHS.NOTIFICATIONS}
              element={<Notifications />}
            />
            <Route
              path={PATHS.MY_PHOTOS}
              element={<MyPhotosPage />}
            />
            <Route
              path={PATHS.ADMIN}
              element={<AdminPage />}
            />
            <Route
              path={PATHS.ADMIN_USERS}
              element={<AdminUsersPage />}
            />
            <Route
              path={PATHS.ADMIN_USER_GALLERY}
              element={<AdminUserGallery />}
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
              path={PATHS.CART}
              element={<Cart />}
            />
            <Route
              path={PATHS.ADMIN_TOUR_CONTINUE}
              element={<AdminTourContinueForm />}
            />
          </Route>

          <Route element={<PageLayout />}>
            <Route
              path={PATHS.NOT_FOUND}
              element={<NotFoundPage />}
            />
          </Route>
        </Route>
      </Routes>
    </HelmetProvider>
  );
}
