import React from "react";

export default function Banner_jardineria() {
  return (
    <div className="w-full ">
      <div className="bg-[#9DDD58] rounded-[25px]   lg:px-16 ">
        <div className=" flex flex-row  bg-no-repeat bg-cover bg-center  items-center">
          <div className="2xl:p-6 lg:w-6/12   lg:mr-11  min-[320px]:w-5/12  min-[320px]:p-4  lg:p-0 ">
            <h1 className="text-[10px]  sm:text-[12px] md:text-[18px]">
              Productos
            </h1>
            <h1 className="text-[14px]  sm:text-[20px] md:text-2xl xl:text-4xl min-[320px]:text-[12px] font-bold">
              Equipos de Jardinería
            </h1>
            <p className="text-[10px] md:text-[15px] mt-2">
              Las mejores marcas para cada ocasión que necesites
            </p>
          </div>
          <div className=" md:w-full lg:h-64 min-[320px]:w-28 min-[425px]:mr-8 md:ml-12 sm:ml-6   ">
            <img
              src="/images/banner-detalle/banner-jarnideriadetalle.png"
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
  );
}
