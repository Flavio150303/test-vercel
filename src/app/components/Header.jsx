"use client";
import React, { useState, useEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  useEffect(() => {
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";
  }, []);

  return (
    <header className="bg-fixed w-full  box-border">
      <nav className="px-4 lg:px-6 py-12 dark:bg-white max-w-full overflow-hidden">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl  ">
          <img src="/images/LOGO-MOA.png" className="mr-4" alt="MOA LOGO" />

          <div className="flex items-center lg:order-2 relative">
            <div className="relative flex items-center">
              <button
                className="flex items-center justify-center p-2 rounded-full hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                onClick={toggleSearch}
              >
                <img
                  src="/search.svg"
                  alt="Search_Icon"
                  className="h-6 w-6 text-blue-500"
                />
              </button>
              <div
                className={`absolute right-full mr-2 transition-all duration-300 ease-in-out ${
                  isSearchOpen ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
                style={{ transformOrigin: "right center" }}
              >
                <input
                  type="text"
                  className="border border-gray-300 rounded text-black px-4 py-2 w-32 sm:w-48 md:w-64 lg:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Buscar..."
                />
              </div>
            </div>
            <a
              href="https://api.whatsapp.com/send?phone=51938855329"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2 rounded-full hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-green-500 ml-2"
            >
              <img
                src="/cart.svg"
                alt="Cart_Icon"
                className="h-6 w-6 text-green-500"
              />
            </a>
            <button
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`w-6 h-6 ${isOpen ? "hidden" : "block"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className={`w-6 h-6 ${isOpen ? "block" : "hidden"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div
            className={`lg:flex lg:justify-between lg:items-center w-full lg:w-auto lg:order-1 transition-all duration-300 ease-in-out transform ${
              isOpen
                ? "max-h-screen opacity-100 scale-100"
                : "max-h-0 opacity-0 scale-95 lg:opacity-100"
            }`}
            id="mobile-menu"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="/"
                  className="block py-2 pr-4 pl-3 text-gray-700   lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-700 lg:dark:hover:text-barra-seleccion dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/screens/nosotros"
                  className="block py-2 pr-4 pl-3 text-gray-700  lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-700 lg:dark:hover:text-barra-seleccion dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="/screens/productos"
                  className="block py-2 pr-4 pl-3 text-gray-700  lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-700 lg:dark:hover:text-barra-seleccion dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Productos
                </a>
              </li>
              <li>
                <a
                  /* href="/screens/servicios" */
                  className="block py-2 pr-4 pl-3 text-gray-700  lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-700 lg:dark:hover:text-barra-seleccion dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="/screens/contactenos"
                  className="block py-2 pr-4 pl-3 text-gray-700  lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-700 lg:dark:hover:text-barra-seleccion dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contáctenos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
