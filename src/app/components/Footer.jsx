"use client";
import React from "react";
import ScrollToTopButton from "./ScrollToTopButton ";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#1A92EC] via-[#61CFB1] to-[#BBE265] py-6 lg:py-8">
      <div className="mx-auto max-w-screen-xl p-4">
        <div className=" flex">
          <img
            src="/images/LOGO-MOA-WHITE.png"
            className=" mx-auto "
            alt="MOA LOGO"
          />
          <div className=" ">
            <ScrollToTopButton />
          </div>
        </div>
        <hr className="border-gray-200 my-6 sm:my-8 dark:border-white" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h2 className="mb-6 text-xl font-bold text-gray-900 dark:text-white">
              Compañia
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a
                  href="https://flowbite.com/"
                  className="hover:underline text-white"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindcss.com/"
                  className="hover:underline text-white"
                >
                  Productos
                </a>
              </li>
              <li className="mt-4">
                <a
                  href="https://tailwindcss.com/"
                  className="hover:underline text-white"
                >
                  Servicios
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-xl font-bold text-gray-900 dark:text-white">
              Recursos
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a
                  href="https://github.com/themesberg/flowbite"
                  className="hover:underline text-white"
                >
                  Jardineria
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/4eeurUVvTy"
                  className="hover:underline text-white"
                >
                  Limpieza Industrial
                </a>
              </li>
              <li className="mt-4">
                <a
                  href="https://discord.gg/4eeurUVvTy"
                  className="hover:underline text-white"
                >
                  Soporte Tecnico
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4">
            <h2 className="text-xl mb-6 font-bold text-gray-900 dark:text-white">
              Síguenos en nuestras redes sociales
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline text-white">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-white">
                  Instagram
                </a>
              </li>
              <li className="mt-4">
                <a href="#" className="hover:underline text-white">
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
