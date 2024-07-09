import { useEffect, useState } from "react";
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="scrollToTop">
      {isVisible && (
        <button onClick={scrollToTop} className="scroll-btn">
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24.00 24.00"
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#CCCCCC"
              strokeWidth="0.192"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <defs>
                <style>{`.cls-1{fill:none;stroke:#004D9E;stroke-miterlimit:10;stroke-width:2px;}`}</style>
              </defs>
              <polyline
                className="cls-1"
                points="20 8.5 20 22.5 4 22.5 4 8.5"
              ></polyline>
              <polyline
                className="cls-1"
                points="23 10.5 12 1.5 1 10.5"
              ></polyline>
            </g>
          </svg>
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
