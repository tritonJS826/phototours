import {useEffect} from "react";
import {useLocation} from "react-router-dom";

const DEFAULT_OFFSET = 20;

export function useAnchorScroll() {
  const location = useLocation();

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) {
        return;
      }

      const id = hash.replace("#", "");

      setTimeout(() => {
        const el = document.getElementById(id);
        if (!el) {
          return;
        }

        const y =
          el.getBoundingClientRect().top +
          window.pageYOffset -
          DEFAULT_OFFSET;

        window.scrollTo({
          top: y,
          behavior: "smooth",
        });
      }, 0);
    };

    scrollToHash();

  }, [location]);
}
