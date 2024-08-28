import React from "react";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Animación suave
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className=" w-14 h-14 bottom-5 left-[1100px] bg-white  text-green-400 text-[35px]   rounded-full shadow-lg hover:bg-green-100 focus:outline-none"
    >
      ↑
    </button>
  );
};

export default ScrollToTopButton;
