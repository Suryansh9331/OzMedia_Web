import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // Scroll to top on all navigations, even if path doesn't change
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.key, navigationType]); // Trigger on each navigation

  return null;
};

export default ScrollToTop;
