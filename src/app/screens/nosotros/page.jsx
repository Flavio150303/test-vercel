"use client";
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

export default function Page() {
  // Estado para el carrusel de testimonios
  const [curr, setCurr] = useState(0);

  // Lista de testimonios
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
  // Función para cambiar al siguiente testimonio
  const next = () => setCurr(curr === testimonials.length - 1 ? 0 : curr + 1);

  // Configuración del intervalo para el cambio automático
  useEffect(() => {
    const interval = setInterval(next, 4000); // Cambia automáticamente cada 2 segundos
    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
  }, [curr]);

  return (
    <div className="bg-[#ECF0FD]">
      <div className="bg-[url('/images/MOA-Fondo-Nosotros.png')] bg-cover bg-no-repeat bg-center text-4xl lg:bg-[length:1905px_450px] flex flex-col items-center justify-end h-60 sm:h-80 md:h-96 lg:h-96 text-contactenos">
        <h1 className="sm:text-5xl text-3xl mb-8 sm:mb-10 md:mb-12 font-extrabold">
          ¿Quienes Somos?
        </h1>
      </div>

      <div className="h-auto mb-40 px-4 sm:px-8 md:px-16 lg:px-32">
        <div className="flex flex-row items-end justify-center space-x-3 mt-6 sm:mt-8 md:mt-12">
          <div className="w-4 h-4 sm:w-6 sm:h-6 bg-[#3BB77E] rounded-full"></div>
          <div className="w-4 h-4 sm:w-6 sm:h-6 bg-[#2AA0DF] rounded-full"></div>
        </div>
        <h1 className="flex flex-col items-center text-3xl sm:text-5xl text-contactenos mb-8 sm:mb-10 font-extrabold">
          Somos MOA
        </h1>

        <div className="grid place-items-center">
          <div className="w-full md:w-11/12">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#292929] mb-12">
              <strong>MOA. A SAC</strong> Es una empresa peruana con más de 8
              años en el mercado; dedicada a la comercialización de equipos,
              insumos, repuestos, reparación y servicios para el ámbito
              agroindustrial, jardinería, limpieza, construcción y minería.
              Brindamos soluciones innovadoras y de calidad a través de nuestros
              socios y proveedores de importantes marcas a nivel mundial como
              Husqvarna, Stihl, Honda, Ducati, Karcher, Makita, Nilfisk, Viper,
              entre otras. <br />
              <br />
              Contamos con un centro de Servicio Técnico para dar mantenimiento
              y reparación, garantizando la confiabilidad y eficiencia de
              acuerdo a las necesidades de nuestros clientes.
            </p>
          </div>
        </div>

        <div className="flex flex-row items-end justify-center space-x-3">
          <div className="w-4 h-4 sm:w-6 sm:h-6 bg-[#3BB77E] rounded-full"></div>
          <div className="w-4 h-4 sm:w-6 sm:h-6 bg-[#2AA0DF] rounded-full"></div>
        </div>
        <h2 className="flex flex-col items-center text-2xl sm:text-4xl lg:text-5xl text-contactenos text-center font-extrabold mb-8 sm:mb-10 md:mb-12">
          ¿Quieres saber <br />
          por qué elegirnos?
        </h2>

        <div className="relative flex items-center justify-center">
          <div className="bg-white bg-[url('/images/”.png')] bg-no-repeat bg-center text-center w-full max-w-[320px] sm:max-w-[374px] h-auto max-h-[215px] rounded-2xl text-black text-sm sm:text-base flex flex-col justify-center shadow-2xl shadow-green-400 relative p-4">
            Gracias a todas las marcas con las que contamos hemos logrado un
            favorable posicionamiento en el mercado. MOA. A está preparado para
            atender al mercado con equipos altamente calificados con la garantía
            y compromiso.
          </div>
          <div>
            <div className="space-y-2 sm:space-y-4">
              <div
                className="absolute -left-[15px] -top-[36px] w-14 h-14  
              sm:left-[10px] sm:top-[-80px] sm:w-16 sm:h-16 
               md:left-[20px] md:-top-[100px] md:w-20 md:h-20 
               lg:left-[50px] lg:-top-[95px] lg:w-20 lg:h-20 
               xl:left-[210px] xl:-top-[95px] xl:w-20 xl:h-20  
               2xl:left-[380px] 2xl:-top-[95px] 2xl:w-20 2xl:h-20 
               bg-[#B5DA38]  rounded-full "
              ></div>
              <div
                className="absolute -left-[15px] top-[110px] w-16 h-16 
               sm:left-[10px] sm:top-[20px] sm:w-16 sm:h-16 
                md:left-[-40px] md:-top-[-35px] md:w-16 md:h-16 
                lg:left-[80px] lg:-top-[-35px] lg:w-20 lg:h-20 
                xl:left-[200px] xl:-top-[-35px] xl:w-20 xl:h-20 
                2xl:left-[230px]  2xl:-top-[-45px] 2xl:w-20 2xl:h-20
                 bg-[#B5DA38] rounded-full"
              ></div>
              <div
                className="absolute left-[56px] top-[170px] w-16 h-16 
               sm:left-[10px] sm:top-[180px] sm:w-16 sm:h-16 
               md:left-[70px] md:-top-[-195px] md:w-16 md:h-16 
               lg:left-[180px] lg:-top-[-220px] lg:w-20 lg:h-20 
               xl:left-[280px] xl:-top-[-195px] xl:w-20 xl:h-20 
               2xl:left-[380px] 2xl:-top-[-195px]  2xl:w-20 2xl:h-20
                bg-[#B5DA38] rounded-full"
              ></div>
            </div>
          </div>
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="space-y-2 sm:space-y-4">
              <div
                className="absolute -left-[15px] -top-[36px] w-14 h-14  
              sm:left-[10px] sm:top-[-80px] sm:w-16 sm:h-16 
               md:left-[20px] md:-top-[100px] md:w-20 md:h-20 
               lg:left-[50px] lg:-top-[95px] lg:w-20 lg:h-20 
               xl:left-[210px] xl:-top-[95px] xl:w-20 xl:h-20  
               2xl:left-[380px] 2xl:-top-[95px] 2xl:w-20 2xl:h-20 
               bg-[#B5DA38] bg-[url('/images/tractor-elipse.png')] bg-no-repeat bg-center rounded-full "
              ></div>
              <div
                className="absolute -left-[15px] top-[110px] w-16 h-16 
               sm:left-[10px] sm:top-[20px] sm:w-16 sm:h-16 
                md:left-[-40px] md:-top-[-35px] md:w-16 md:h-16 
                lg:left-[80px] lg:-top-[-35px] lg:w-20 lg:h-20 
                xl:left-[200px] xl:-top-[-35px] xl:w-20 xl:h-20 
                2xl:left-[230px]  2xl:-top-[-45px] 2xl:w-20 2xl:h-20
                 bg-[#B5DA38] bg-[url('/images/podadora-pequeña-elipse.png')] bg-no-repeat bg-center rounded-full"
              ></div>
              <div
                className="absolute left-[56px] top-[170px] w-16 h-16 
               sm:left-[10px] sm:top-[180px] sm:w-16 sm:h-16 
               md:left-[70px] md:-top-[-195px] md:w-16 md:h-16 
               lg:left-[180px] lg:-top-[-220px] lg:w-20 lg:h-20 
               xl:left-[280px] xl:-top-[-195px] xl:w-20 xl:h-20 
               2xl:left-[380px] 2xl:-top-[-195px]  2xl:w-20 2xl:h-20
                bg-[#B5DA38] bg-[url('/images/cierra-elipse.png')] bg-no-repeat bg-center rounded-full"
              ></div>
            </div>
            <div className="space-y-2 sm:space-y-4 ml-6 sm:ml-10">
              <div
                className="absolute -right-[15px] -top-[36px] w-14 h-14 
               sm:right-[10px] sm:top-[-80px] sm:w-16 sm:h-16  
               md:right-[20px] md:-top-[100px] md:w-20 md:h-20 
               lg:right-[50px] lg:-top-[95px] lg:w-20 lg:h-20
                xl:right-[210px] xl:-top-[95px] xl:w-20 xl:h-20  
                2xl:right-[380px] 2xl:-top-[95px] 2xl:w-20 2xl:h-20 
                 bg-[#1788D6] bg-[url('/images/podadora-grande-elipse.png')] bg-no-repeat bg-center rounded-full"
              ></div>
              <div
                className="absolute -right-[15px] top-[110px] w-16 h-16 
               sm:right-[10px] sm:top-[20px] sm:w-16 sm:h-16  
               md:right-[-40px] md:-top-[-35px] md:w-16 md:h-16 
               lg:right-[80px] lg:-top-[-35px] lg:w-20 lg:h-20 
               xl:right-[200px] xl:-top-[-35px] xl:w-20 xl:h-20 
               2xl:right-[230px]  2xl:-top-[-45px] 2xl:w-20 2xl:h-20
                bg-[#1788D6] bg-[url('/images/pulidora-elipse.png')] bg-no-repeat bg-center rounded-full"
              ></div>
              <div
                className="absolute right-[56px] top-[170px] w-16 h-16 
               sm:right-[10px] sm:top-[180px] sm:w-16 sm:h-16  
               md:right-[70px] md:-top-[-195px] md:w-16 md:h-16 
               lg:right-[180px] lg:-top-[-220px] lg:w-20 lg:h-20 
               xl:right-[280px] xl:-top-[-195px] xl:w-20 xl:h-20 
               2xl:right-[380px] 2xl:-top-[-195px]  2xl:w-20 2xl:h-20 
               bg-[#1788D6] bg-[url('/images/maquina-gorda-elipse.png')] bg-no-repeat bg-center rounded-full"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-auto bg-[url('/images/nosotros/rectangulo-nostros.png')] bg-cover bg-no-repeat py-28 sm:py-32 relative">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center px-4 sm:px-8 md:px-16 lg:px-32">
          <div className="lg:h-[400px]">
            <img
              src="/images/Cortadora-Cesped.png"
              alt="Imagen Local"
              className="w-[280px] sm:w-[320px] lg:w-[400px] lg:h-[500px] h-auto rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] shadow-2xl mb-8 lg:mb-0 transform lg:-translate-x-10 lg:-translate-y-32"
            />
          </div>
          <div className="w-full lg:w-1/2 lg:ml-16 text-center lg:text-left">
            <h1 className="font-bold text-3xl sm:text-4xl mb-4 sm:mb-5">
              Visión
            </h1>
            <p className="text-base sm:text-lg lg:text-xl 2xl:text-2xl lg:w-8/12">
              Ser una empresa líder y competitiva en el mercado local, regional
              y nacional. Ofreciendo soluciones a las necesidades y desafíos de
              nuestros clientes.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center px-4 sm:px-8 md:px-16 lg:px-32 mt-12 sm:mt-16">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="font-bold text-3xl sm:text-4xl mb-4 sm:mb-5">
              Misión
            </h1>
            <p className="text-base sm:text-lg lg:text-xl 2xl:text-2xl lg:w-full">
              Tenemos la misión de cubrir las necesidades de nuestros clientes
              mediante productos de alta calidad. Además de brindar un servicio
              especializado de post-venta con la garantia y disposición de
              nuestros colaboradores, atendiendo sus demandas con rapidez y
              eficacia a nivel nacional.
            </p>
          </div>
          <div className="lg:h-[200px]">
            <img
              src="/images/Cortadora-Cesped.png"
              alt="Imagen Local"
              className="w-[280px] sm:w-[320px] lg:w-[400px] lg:h-[500px] h-auto rounded-[20px] sm:rounded-[30px] lg:rounded-[40px] shadow-2xl mt-8 lg:mt-0 lg:ml-16 transform lg:translate-x-2 lg:-translate-y-12 2xl:-translate-y-32 min-[1440px]:-translate-y-32"
            />
          </div>
        </div>
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
                    <div className="w-5 h-5 bg-[#3BB77E] rounded-full"></div>
                    <div className="w-5 h-5 bg-[#2AA0DF] rounded-full"></div>
                    <div className="w-5 h-5 bg-[#888888] rounded-full"></div>
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
