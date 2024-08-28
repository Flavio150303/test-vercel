"use client";
import { useRouter, useSearchParams } from "next/navigation";
import CardProducto from "@/app/components/CardProducto";
import React, { useEffect, useRef, useState } from "react";
import { ChevronRight } from "react-feather";
import { PATH_URL } from "../../../../constantes";

export default function Page() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const router = useRouter();
  const [curr, setCurr] = useState(0);
  const [esfiltrado, setesfiltrado] = useState(false);
  const parametro = useSearchParams();
  const producto = parametro.get("sebitas");
  const data = producto ? JSON.parse(decodeURIComponent(producto)) : null;
  const sectionRef = useRef(null);
  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    if (data) {
      const image = { marca: data.marca };
      const index = images.findIndex((i) => i.marca == data.marca);
      filtrarmarca(image, index);
      console.log("ingreso al if", image.marca);
      scrollToSection();
    }
  }, []);

  // Función para cambiar al siguiente testimonio
  const next = () => setCurr(curr === testimonials.length - 1 ? 0 : curr + 1);

  // Configuración del intervalo para el cambio automático
  useEffect(() => {
    const interval = setInterval(next, 4000); // Cambia automáticamente cada 2 segundos
    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
  }, [curr]);

  const testimonials = [
    {
      text: "Libero diam auctor tristique hendrerit in eu vel id. Nec leo amet suscipit nulla. Nullam vitae sit tempus diam. Libero diam auctor tristique hendrerit in eu vel id. Nec leo amet suscipit nulla. Nullam vitae sit tempus diam bero diam auctor tristique hendrerit in eu vel id. Nec leo amet suscipit nulla. ",
      name: "Theresa J. Jones",
      image: "/images/Nuestro-clientes-chica.png",
    },
    {
      text: "Un placer trabajar con ellos, el servicio fue excelente y los productos son de la mejor calidad Un placer trabajar con ellos, el servicio fue excelente y los productos son de la mejor calidad Un placer trabajar con ellos, el servicio fue excelente y los productos son de la mejor calidad Un placer trabajar con ellos, el servicio fue excelente y los productos son de la mejor calidad.",
      name: "Michael B. Jordan",
      image: "/images/Nuestro-clientes-chica.png",
    },
    {
      text: "La atención al cliente es inmejorable, resolvieron todas mis dudas y el envío fue rápido. La atención al cliente es inmejorable, resolvieron todas mis dudas y el envío fue rápido. La atención al cliente es inmejorable, resolvieron todas mis dudas y el envío fue rápido. La atención al cliente es inmejorable, resolvieron todas mis dudas y el envío fue rápido.",
      name: "Jessica Alba",
      image: "/images/Nuestro-clientes-chica.png",
    },
  ];

  const images = [
    {
      src: "/images/marcas/VIPER.png",
      alt: "Imagen 1",
      filter: "grayscale",
      marca: "VIPER",
    },
    {
      src: "/images/marcas/HUSQVARNA.png",
      alt: "Imagen 2",
      filter: "grayscale",
      marca: "HUSQVARNA",
    },
    {
      src: "/images/marcas/KARCHER.png",
      alt: "Imagen 3",
      filter: "grayscale",
      marca: "KARCHER",
    },
    {
      src: "/images/marcas/JACTO.png",
      alt: "Imagen 4",
      filter: "grayscale",
      marca: "JACTO",
    },
    {
      src: "/images/marcas/NYLON.png",
      alt: "Imagen 1",
      filter: "grayscale",
      marca: "NYLON",
    },
    {
      src: "/images/marcas/HONDA.png",
      alt: "Imagen 2",
      filter: "grayscale",
      marca: "HONDA",
    },
    {
      src: "/images/marcas/TRAPP.png",
      alt: "Imagen 3",
      filter: "grayscale",
      marca: "TRAPP",
    },
    {
      src: "/images/marcas/DUCATI.png",
      alt: "Imagen 4",
      filter: "grayscale",
      marca: "DUCATI",
    },
    {
      src: "/images/marcas/NILFISK.png",
      alt: "Imagen 4",
      filter: "grayscale",
      marca: "NILFISK",
    },
  ];
  const [numeroproductos, setnumeroproductos] = useState(9);

  const [productos, setproductos] = useState([]);
  useEffect(() => {
    if (data == null) {
      listarproductos();
    }
  }, []);

  const listarproductos = async () => {
    const res = await fetch(`${PATH_URL}/data/productos.json`);
    const data = await res.json();

    let array = [];
    for (var i = 0; i < 9; i++) {
      array[i] = data[i];
    }
    setproductos(array);
  };

  const filtrarmarca = async (image, index) => {
    setesfiltrado(true);
    setSelectedIndex(index);
    const res = await fetch(`${PATH_URL}/data/productos.json`);
    const data = await res.json();
    console.log(image.marca);

    const filtrado = data.filter((p) => p.marca == image.marca);
    console.log(filtrado);
    setproductos(filtrado);
  };
  const vermas = async () => {
    const res = await fetch(`${PATH_URL}/data/productos.json`);
    const data = await res.json();

    let array = [];
    for (var i = 0; i < numeroproductos + 9; i++) {
      if (data[i]) {
        array[i] = data[i];
      }
    }
    setnumeroproductos(numeroproductos + 3);
    setproductos(array);
  };
  return (
    <div className="bg-white">
      <div className="bg-[url('/images/productos/rectangulo-nuestroproductos.png')] bg-cover  grid grid-cols-1 lg:grid-cols-2 ">
        <div className=" flex flex-row  justify-center">
          <img
            src="/images/productos/image-productosbanner.png"
            alt="image-productosbanner"
          />
        </div>
        <div className="max-lg:text-center flex flex-col justify-center max-lg:items-center">
          <div className=" ">
            <h1 className="text-3xl xl:mr-72 min-[1440px]:mr-6 min-[1440px]:text-[45px]  lg:text-[33px]  md:text-[45px] font-extrabold 2xl:-ml-1  text-contactenos mb-6 mt-6  ">
              Nuestros Productos
            </h1>

            <p className=" text-lg md:text-[23px] tracking-wide text-black  mb-6 md:mb-4 min-[1440px]:text-[25px]  ">
              Nuestros Productos son una gama de marcas de alta calidad que en
              el mercado son los mejores utensilios para la Jardinería
              industrial y Limpieza Industrial
            </p>
            <div className="max-lg:w-12/12">
              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("target-section")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="transition ease-in-out delay-150 bg-[#2AA0DF] hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 py-2 px-6 min-[1440px]:py-2 min-[1440px]:px-6 text-white font-semibold rounded-full shadow-2xl focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-75 mt-5 mb-12 md:mb-16 lg:mb-6"
              >
                Descúbrelo
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url('/images/productos/fondo-productos.png')] bg-cover  bg-no-repeat">
        <div className=" text-center py-12 font-semibold sm:text-[25px] text-[18px] min-[1440px]:text-[30px] xl:mt-24">
          <p className="text-black">
            Presiona el botón según los equipos que estás buscando
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 lg:px-36 2xl:px-60 px-8 min-[1440px]:px-16  xl:grid-cols-2">
          <div className="bg-[#9DDD58] rounded-[40px] hover:border-2 hover:border-green-800 hover:cursor-pointer   sm:p-4 ">
            <div
              className=" flex flex-row  bg-no-repeat bg-cover bg-center w-full h-full items-center"
              onClick={() => router.push("/screens/productojardineria")}
            >
              <div className=" p-4 md:p-6">
                <h1 className="text-[20px] sm:text-[30px] md:text-[38px]">
                  Productos
                </h1>
                <h1 className="text-[23px] sm:text-[34px] font-extrabold">
                  Equipos de Jardinería
                </h1>
                <p className="text-[16px] md:text-[25px] mt-2">
                  Mira nuestros productos
                </p>
              </div>
              <div className="md:w-6/12 flex flex-col items-end p-4 md:p-8  ">
                <div className="flex flex-col items-end mb-4">
                  <div className="flex gap-1 mb-1">
                    <div className="sm:w-6 sm:h-6 w-4 h-4 bg-[#f0efef] rounded-full"></div>
                    <div className="sm:w-6 sm:h-6 w-4 h-4 bg-[#ffffff] rounded-full"></div>
                  </div>
                  <div className="w-12 flex flex-col items-end">
                    <div className=" sm:w-6 sm:h-6 w-4 h-4 bg-[#f0efef] rounded-full"></div>
                  </div>
                </div>
                <img
                  src="/images/persona-cesped.png"
                  alt="Imagen Local"
                  className="w-40 sm:w-48  "
                />
              </div>
            </div>
          </div>
          <div className="bg-[#2AA0DF] rounded-[40px] hover:border-2 hover:border-green-800 hover:cursor-pointer   sm:p-4 ">
            <div
              className="flex flex-row  bg-no-repeat bg-cover bg-center w-full h-full items-center"
              onClick={() => router.push("/screens/productolimpieza")}
            >
              <div className=" p-4 md:p-6">
                <h1 className="text-[20px] sm:text-[30px] md:text-[38px]">
                  Productos
                </h1>
                <h1 className="text-[23px] sm:text-[34px] font-extrabold">
                  Equipos de Limpieza
                </h1>
                <p className="text-[16px] md:text-[25px] mt-2">
                  Mira nuestros productos
                </p>
              </div>
              <div className="md:w-6/12 flex flex-col items-end p-4 md:p-8  ">
                <div className="flex flex-col items-end mb-4">
                  <div className="flex gap-1 mb-1">
                    <div className="sm:w-6 sm:h-6 w-4 h-4 bg-[#f0efef] rounded-full"></div>
                    <div className="sm:w-6 sm:h-6 w-4 h-4 bg-[#ffffff] rounded-full"></div>
                  </div>
                  <div className="w-12 flex flex-col items-end">
                    <div className=" sm:w-6 sm:h-6 w-4 h-4 bg-[#f0efef] rounded-full"></div>
                  </div>
                </div>
                <img
                  src="/images/persona-cesped.png"
                  alt="Imagen Local"
                  className="w-40 sm:w-48  "
                />
              </div>
            </div>
          </div>
        </div>
        <section id="target-section">
          <div className="  text-center py-10 px-4 mt-24">
            <div className="flex justify-center space-x-3 mb-6">
              <div className="w-4 h-4 md:w-6 md:h-6 bg-[#3BB77E] rounded-full"></div>
              <div className="w-4 h-4 md:w-6 md:h-6 bg-[#2AA0DF] rounded-full"></div>
            </div>
            <h1
              ref={sectionRef}
              className="text-3xl md:text-5xl text-black font-extrabold"
            >
              Productos Generales
            </h1>
            <p className="text-black mt-6 font-bold ">
              Cada logo abrirá los equipos según estés buscando
            </p>
          </div>
        </section>
        <div className="px-4 py-6">
          <div className="flex flex-wrap justify-center gap-3 md:gap-8 min-[1440px]:gap-20 2xl:gap-28">
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={image.alt}
                className={`w-16 h-8 md:w-[73px] md:h-[38px] cursor-pointer ${
                  selectedIndex === index ? "" : image.filter
                }`}
                onClick={() => filtrarmarca(image, index)}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center px-4 py-14">
          <div className="grid min-[320px]:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20  ">
            {productos.map((item, index) => (
              <CardProducto item={item} key={index.toString()} />
            ))}
          </div>
        </div>

        {!esfiltrado && (
          <div className="text-center">
            <button
              type="submit"
              onClick={() => vermas()}
              className="transition ease-in-out delay-150 bg-[#2AA0DF] hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 py-2 px-6 min-[1440px]:py-2 min-[1440px]:px-6  text-white font-semibold rounded-full shadow-2xl focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-75 mt-5 mb-12 md:mb-16 lg:mb-6  "
            >
              Ver más
            </button>
          </div>
        )}
      </div>
      <div>
        <div className="flex flex-row items-end justify-center space-x-3 mt-24">
          <div className="w-4 h-4 sm:w-6 sm:h-6 bg-[#3BB77E] rounded-full"></div>
          <div className="w-4 h-4 sm:w-6 sm:h-6 bg-[#2AA0DF] rounded-full"></div>
        </div>
        <h2 className=" min-[320px]:text-center flex flex-col items-center text-xl sm:text-4xl lg:text-4xl xl:text-5xl font-extrabold text-contactenos  mb-12 sm:mb-16">
          Nuestros clientes nos recomiendan
        </h2>
        <div className=" grid grid-cols-1 sm:grid-cols-2 py-2 px-4 text-xl sm:text-2xl md:text-2xl ">
          <h1 className=" text-[#2AA0DF] font-bold text-2xl text-center sm:text-2xl mb-4 lg:text-4xl md:text-3xl  2xl:px-60">
            Clientes de MOA
          </h1>
          <p className=" w-full sm:w-full text-[#0D0D0D] lg:w-10/12 text-xl sm:text-lg lg:text-2xl mb-12 2xl:w-7/12 ">
            Libero diam auctor tristique hendrerit in eu vel id. Nec leo amet
            suscipit nulla. Nullam vitae sit tempus diam.
          </p>
        </div>
      </div>
      {/* Sección de testimonios */}
      <div className="relative h-auto mb-40 px-4 sm:px-8 md:px-16 lg:px-32">
        <div className="flex items-center justify-center">
          <div className="relative max-w-2xl mx-4 overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${curr * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="min-w-full flex flex-col items-center"
                >
                  <div className="w-full mb-5">
                    <img
                      src={testimonial.image}
                      alt="Imagen Local"
                      className="w-24 h-24 object-cover rounded-full "
                    />
                  </div>
                  <div className="w-full ">
                    <img
                      src="/images/comillas-clientes.png"
                      alt="Imagen Local"
                      className="w-[17.15px] h-[14.34px]"
                    />
                  </div>
                  <p className="text-left text-xl sm:text-xl lg:text-2xl text-[#292929] mb-8">
                    {testimonial.text}
                  </p>
                  <p className="mt-2 text-xl sm:text-base lg:text-xl text-[#3BB77E] font-extrabold">
                    {testimonial.name}
                  </p>
                  <div className="flex space-x-1">
                    <div className="w-4 h-4 md:w-6 md:h-6 bg-[#3BB77E] rounded-full"></div>
                    <div className="w-4 h-4 md:w-6 md:h-6 bg-[#2AA0DF] rounded-full"></div>
                    <div className="w-4 h-4 md:w-6 md:h-6 bg-[#888888] rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <ChevronRight
            onClick={next}
            className="cursor-pointer text-2xl sm:text-3xl text-[#292929] hover:text-[#3BB77E] transition duration-200"
          />
        </div>
      </div>
    </div>
  );
}
