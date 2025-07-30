import React, { useEffect, useState } from "react";
import { BackTopIcon } from "../utils/icon";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 cursor-pointer bg-purple-blue hover:bg-white text-white hover:text-purple-blue border border-white p-3 rounded-full shadow-lg transition-all duration-300"
        aria-label="Back to top"
      >
        <BackTopIcon />
      </button>
    )
  );
};

export default BackToTop;
