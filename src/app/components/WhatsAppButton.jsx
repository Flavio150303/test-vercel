import React, { useState, useEffect } from "react";
import Whatsapp from "../icons/Whatsapp";
import { NUMEROASESOR } from "../../../constantes";

const WhatsAppButton = () => {
  const [isScrolled, setIsScrolled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSpanClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <div className="relative">
      <a
        href={`https://wa.me/${NUMEROASESOR}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed 
        max-[499px]:right-2
        max-[499px]:bottom-40
        min-[500px]:bottom-[300px]
        min-[500px]:right-0
        md:bottom-20
        md:right-2
        xl:bottom-28 
        xl:right-28 text-white  rounded-full flex items-center"
      >
        {/* Icono SVG */}
        <span
          className={`flex right-[80px] font-semibold bg-white text-[#80D697] text-sm xl:p-3 p-1 rounded-full shadow-lg transition-opacity duration-300 ${
            isScrolled ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleSpanClick}
          style={{ cursor: "default" }} // Cambia el cursor a una flecha normal
        >
          <p className="mr-1">Comunicate</p>
          <p className="mr-1">con</p>
          <p className="mr-1">un</p>
          <p className="mr-1">asesor</p>
        </span>
        <Whatsapp />
      </a>
    </div>
  );
};

export default WhatsAppButton;
