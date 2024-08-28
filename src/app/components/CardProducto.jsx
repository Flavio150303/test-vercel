"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function CardProducto({ item }) {
  const router = useRouter();
  const itemstring = encodeURIComponent(JSON.stringify(item));

  return (
    <div className=" max-w-sm text-[#ADADAD] border border-gray-200 rounded-3xl   dark:border-[#D9D9D9]">
      <div
        className={`${
          item?.tipo == "Jardinería" ? "bg-[#3BB77E]" : "bg-[#2AA0DF]"
        } p-4 w-4/12 rounded-br-3xl rounded-tl-3xl text-center`}
      >
        <h1 className="text-white">{item?.tipo}</h1>
      </div>
      <div>
        <a>
          <img
            className="rounded-t-lg "
            src={`/images/${item?.nameimage}`}
            alt="ImagenProducto"
          />
        </a>
      </div>
      <div className="p-5 ">
        <a>
          <h4>{item?.marca}</h4>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#2B2B2D] ">
            {item?.nombre}
          </h5>
        </a>
        <div
          onClick={() => router.push(`/screens/detalle?producto=${itemstring}`)}
          className={`${
            item?.tipo == "Jardinería"
              ? "bg-[#3BB77E] hover:bg-green-900 "
              : "bg-[#2AA0DF] hover:bg-blue-900"
          } inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white  rounded-3xl  focus:ring-4 focus:outline-none  hover:cursor-pointer focus:ring-blue-300 `}
        >
          Ver Detalle
        </div>
      </div>
    </div>
  );
}
