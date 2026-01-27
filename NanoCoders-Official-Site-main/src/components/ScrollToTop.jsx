import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  //   here object destructuring and extracting pathname from location object
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
