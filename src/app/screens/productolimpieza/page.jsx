"use client";
import { useRouter } from "next/navigation";
import CardProducto from "@/app/components/CardProducto";
import React, { useEffect, useState } from "react";
import { PATH_URL } from "../../../../constantes";

export default function Page() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const router = useRouter();
  const [curr, setCurr] = useState(0);
  // Función para cambiar al siguiente testimonio
  const next = () => setCurr(curr === testimonials.length - 1 ? 0 : curr + 1);

  const images = [
    {
      src: "/images/marcas/VIPER.png",
      alt: "Imagen 1",
      filter: "grayscale",
      marca: "VIPER",
    },

    {
      src: "/images/marcas/KARCHER.png",
      alt: "Imagen 3",
      filter: "grayscale",
      marca: "KARCHER",
    },

    {
      src: "/images/marcas/DUCATI.png",
      alt: "Imagen 4",
      filter: "grayscale",
      marca: "DUCATI",
    },
  ];
  const [numeroproductos, setnumeroproductos] = useState(9);

  const [productos, setproductos] = useState([]);
  useEffect(() => {
    listarproductos();
  }, []);

  const listarproductos = async () => {
    const res = await fetch(`${PATH_URL}/data/productos.json`);
    const data = await res.json();
    const filtrado = data.filter((j) => j.tipo == "Limpieza");
    setproductos(filtrado);
  };

  const filtrarmarca = async (image, index) => {
    setSelectedIndex(index);
    const res = await fetch(`${PATH_URL}/data/productos.json`);
    const data = await res.json();
    const filtrado = data.filter((p) => p.marca == image.marca);
    console.log(filtrado);
    setproductos(filtrado);
  };
  const vermas = async () => {
    const res = await fetch(`${PATH_URL}/data/productos.json`);
    const data = await res.json();
    console.log(data);
    let array = [];
    for (var i = 0; i < numeroproductos + 3; i++) {
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
        <div className=" text-center py-12 font-semibold sm:text-[25px] text-[18px] min-[1440px]:text-[30px] xl:mt-16">
          <p className="text-black">Haz ingresado a Limpieza Industrial</p>
        </div>
        <div className="flex flex-row justify-center  items-center px-6 ">
          <div className="bg-[#2AA0DF] rounded-[25px]   lg:px-12  lg:p-12">
            <div className=" flex flex-row   items-center">
              <div className="2xl:p-6 lg:w-6/12   lg:mr-11  min-[320px]:w-5/12  min-[320px]:p-4  lg:p-0 ">
                <h1 className="text-[10px]  sm:text-[12px] md:text-[18px]">
                  Productos
                </h1>
                <h1 className="text-[2px]  sm:text-[20px] md:text-2xl xl:text-4xl min-[320px]:text-[15px] font-bold">
                  Equipos de Limpieza Industrial
                </h1>
                <p className="text-[15px] md:text-[15px] mt-2">
                  Mira nuestros productos
                </p>
              </div>
              <div className=" md:w-full lg:h-64 min-[320px]:w-28 min-[425px]:mr-8 md:ml-12 sm:ml-6   ">
                <img
                  src="/images/banner-detalle/banner-limpiezadetalle.png"
                  alt="Limpieza object-contain w-full h-full"
                  className="object-contain w-full h-full  "
                />
              </div>
              <div className="md:w-6/12  flex flex-col items-end mr-4   ">
                <div className="flex flex-col items-end mb-4">
                  <div className="flex gap-1 mb-1">
                    <div className="sm:w-3 sm:h-3 w-2 h-2 bg-[#f0efef] rounded-full"></div>
                    <div className="sm:w-3 sm:h-3 w-2 h-2 bg-[#ffffff] rounded-full"></div>
                  </div>
                  <div className="w-12 flex flex-col items-end">
                    <div className=" sm:w-3 sm:h-3 w-2 h-2 bg-[#f0efef] rounded-full"></div>
                  </div>
                </div>
                <div className="min-[475px]:ml-12 min-[669px]:ml-16">
                  <img
                    src="/images/persona-cesped.png"
                    alt="Imagen Local"
                    className="md:w-28 sm:w-16 min-[320px]:w-16   "
                  />
                </div>
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
            <h1 className="text-3xl md:text-5xl text-black font-extrabold">
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
                className={`w-16 h-8 md:w-[78px] md:h-[38px] cursor-pointer ${
                  selectedIndex === index ? "" : image.filter
                }`}
                onClick={() => filtrarmarca(image, index)}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center px-4 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-3  min-[1440px]:gap-32 gap-8  ">
            {productos.map((item) => (
              <CardProducto item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
