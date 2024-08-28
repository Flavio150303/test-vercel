"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import CardProducto from "@/app/components/CardProducto";
import Banner_limpieza from "@/app/components/banner/banner_limpieza";
import Banner_jardineria from "@/app/components/banner/banner_jardineria";
import { PATH_URL } from "../../../../constantes";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  const parametro = useSearchParams();
  const producto = parametro.get("producto");
  const data = producto ? JSON.parse(decodeURIComponent(producto)) : null;
  const itemstring = encodeURIComponent(JSON.stringify(data));

  if (!data) return <div>No se encontraron datos</div>;

  const [productos, setProductos] = useState([]);
  useEffect(() => {
    listarproductos();
  }, []);

  const listarproductos = async () => {
    const res = await fetch(`${PATH_URL}/data/productos.json`);
    const resultado = await res.json();
    if (data.tipo == "Jardinería") {
      const jardineria = resultado.filter(
        (p) => p.tipo == "Jardinería" && p.marca == data.marca
      );
      console.log(jardineria);
      let interes = [];

      for (let i = 0; i < 3; i++) {
        if (jardineria[i]) {
          interes[i] = jardineria[i];
        }
      }
      setProductos(interes);
    } else {
      const limpieza = resultado.filter(
        (p) => p.tipo == "Limpieza" && p.marca == data.marca
      );
      console.log(limpieza);
      let interes = [];
      for (let i = 0; i < 3; i++) {
        if (limpieza[i]) {
          interes[i] = limpieza[i];
        }
      }
      setProductos(interes);
    }
  };

  return (
    <div className="w-screen bg-white">
      <div className="flex flex-col items-center justify-center">
        <div className="lg:w-9/12 w-10/12 ">
          {data.tipo == "Jardinería" ? (
            <Banner_jardineria />
          ) : (
            <Banner_limpieza />
          )}
        </div>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 text-black lg:pl-48 py-10">
        <div className="flex flex-col justify-center items-center">
          <img
            src={`/images/${data?.nameimage}`}
            alt="ProductoImagen"
            className="w-8/12 lg:w-full min-[1280px]:w-8/12"
          />
        </div>
        <div>
          <div className="lg:text-left text-center font-extrabold text-2xl ">
            {data.titulo}
          </div>
          <div className=" flex flex-col justify-center items-center lg:items-start">
            <img src={`/images/${data?.imagenmarca}`} alt="ImagenMarca" />
          </div>
          <div className="max-lg:text-center font-extrabold text-xl lg:py-2 ">
            {data.subtitulo}
          </div>
          <div className="max-lg:text-center">{data.descripcion}</div>
          <div className="py-4 max-lg:text-center">
            <button
              type="submit"
              className={`${
                data.tipo == "Jardinería" ? "bg-[#3BB77E]" : "bg-[#2AA0DF]"
              } transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 py-2 px-5 text-white  rounded-full shadow-md focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-75`}
            >
              Descargar Ficha Tecnica
            </button>
          </div>
          <div>
            <div className="flex place-content-between mb-2">
              <h1 className="text-[15px] font-extrabold md:ml-10 ml-2 lg:ml-0">
                Detalle de Producto
              </h1>
              <h1 className="font-extrabold text-[15px]  md:mr-10 lg:mr-40 text-cyan-500">
                Información adicional
              </h1>
            </div>
            <div className="md:ml-10 lg:ml-0 ml-2">
              {data.detalle.map((d, index) => {
                return <li key={index.toString()}>{d}</li>;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className=" text-black  ">
        <div>
          <div className="flex place-content-between ">
            <h1 className="font-extrabold lg:text-2xl text-[15px]  lg:px-10">
              Productos que te pueden interesar
            </h1>
            <a>
              <div className="lg:mr-12">
                <div
                  onClick={() =>
                    router.push(`/screens/productos?sebitas=${itemstring}`)
                  }
                  className={`${
                    data?.tipo == "Jardinería"
                      ? "bg-[#3BB77E] hover:bg-green-900 "
                      : "bg-[#2AA0DF] hover:bg-blue-900"
                  } inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white  rounded-3xl  focus:ring-4 focus:outline-none  hover:cursor-pointer focus:ring-blue-300 `}
                >
                  Ver Detalle
                </div>
              </div>
            </a>
          </div>
          {
            <div className="flex justify-center items-center px-4 py-14">
              <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  min-[1440px]:gap-32 gap-8  ">
                {productos.map((item, index) => (
                  <CardProducto item={item} key={index.toString()} />
                ))}
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
}
