import {Outlet} from "react-router-dom";
import {Footer} from "src/components/Footer/Footer";
import {Header} from "src/components/Header/Header";
import {ScrollToTop} from "src/components/ScrollToTop/ScrollToTop";

export function AppLayout() {
  return (
    <div className="app">
      <Header />
      <ScrollToTop />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
