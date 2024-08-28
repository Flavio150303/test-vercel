"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import CardProducto from "@/app/components/CardProducto";
import { ChevronRight } from "react-feather";
import WhatsAppButton from "./components/WhatsAppButton";
import ImageCarousel from "./components/ImageCarousel";

//HOMEEEEEEEEEEEEEEEEE
export default function Home({
  children: slides = ["/images/1.png", "/images/2.png"],
  autoSlide = true,
  autoSlideInterval = 4000,
}) {
  const router = useRouter();
  const [curr, setCurr] = useState(0);
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);

  const productos = [
    {
      nombre: "VN 1715",
      marca: "VIPER",
      tipo: "Limpieza",
      nameimage: "/viper/VN 1715.png",
      titulo: "Lustradora VN 1715",
      imagenmarca: "/marcas/VIPER.png",
      descripcion:
        "La VN 1715 es una abrillantadora de pisos de 17″, ideal para pulir cualquier superficie con alta exigencia, y equipada con una construcción metálica robusta y transmisión triple planetaria.",
      detalle: [
        "Fácil manejo con encendido suave",
        "Interruptor de seguridad",
        "Cable de seguridad amarillo de 15 metros",
        "Relación precio-calidad inmejorable",
        "Potencia: 1.5 hp",
        "Bajo nivel de ruido",
        "Construcción totalmente metálica con caja de engranajes de acero",
        "Transmisión triple planetaria para mayor durabilidad",
        "Ruedas para fácil transporte",
        "Instalación automática de cepillo",
        'Tamaño del pad: 43.2 cm / 17"',
        'Tamaño porta pad: 40.6 cm / 16"',
        "Voltaje: 220 V",
        "Potencia: 1500 W",
        "Velocidad de Rotación: 175 rpm",
        "Frecuencia: 50-60 Hz",
        "Longitud del cable: 15 m / amarillo",
        "Dimensiones: 65.6 x 43.2 x 122 cm",
        "Peso Neto: 45.8 kg",
      ],
    },
    {
      nombre: "TRR260",
      marca: "TRAPP",
      tipo: "Jardinería",
      nameimage: "/trapp/TRR-260.png",
      titulo: "Trituradora de Ramas y Residuos TRR260",
      imagenmarca: "/marcas/TRAPP.png",
      descripcion:
        "El TRR260 es un triturador de ramas de hasta una pulgada de diámetro, con cuchillas fijadas directamente al eje del motor y un embudo de alimentación con cortina de protección para evitar el retorno de fragmentos. Su tratamiento anticorrosivo y pintura de polvo de poliéster polimerizado aseguran durabilidad y un acabado de calidad.",
      detalle: [
        "Motor: Gasolina",
        "Capacidad del tanque: 3 litros",
        "Capacidad de aceite en el cárter: 830 ml",
        "Tipo de aceite: SAE 20W50",
        "Consumo medio: 2,3 L/h",
        'Dimensiones del embudo de alimentación: 40 x 59 cm (15,3/4" x 23,15/64")',
        "Sistema de alimentación: Manual-gravedad",
        'Abertura de alimentación: 13,5 x 18,5 cm (5,5/16" x 7,9/32")',
        "Cantidad de cuchillas: 2",
        "Número de partes móviles: 8",
        'Rotación del disco: 36 cm (14,11/64")',
        "Producción: 5 a 6 m³/h",
        "Peso: 121 kg",
      ],
    },
    {
      nombre: "LSU 135",
      marca: "VIPER",
      tipo: "Limpieza",
      nameimage: "/viper/LSU 135.png",
      titulo: "Aspirador Profesional LSU 135",
      imagenmarca: "/marcas/VIPER.png",
      descripcion:
        "El LSU 135 es un aspirador robusto para agua y polvo con una capacidad de tanque de 35 litros y un excelente poder de aspiración.",
      detalle: [
        "Capacidad máx. de tanque: 35 litros",
        "Voltaje: 220-240 V",
        "Frecuencia: 50 - 60 Hz",
        "Potencia: 1000 W",
        "Motor de aspirado: 2 etapas",
        "Flujo de Aire: 1869 L/min",
        "Nivel sonoro: 74 dB(A)",
        "Longitud cable: 7 m / color naranja",
        "Dimensiones: 47 x 45 x 80 cm",
        "Peso: 13 kg",
        "Enchufe para herramientas: No",
      ],
    },
    {
      nombre: "HD 6/13 C",
      marca: "KARCHER",
      tipo: "Limpieza",
      nameimage: "/karcher/HD-613-C.png",
      titulo: "HD 6/13 C",
      imagenmarca: "/marcas/KARCHER.png",
      descripcion:
        "Manejable, móvil y polivalente: la limpiadora de alta presión con agua fría HD 6/13 C para un servicio en vertical y horizontal. Con almacenaje de accesorios gracias a la culata de latón y la descarga de presión automática.",
      detalle: [
        "Tipo de corriente: 1 / 220 / 60",
        "Caudal: 590 l/h",
        "Temperatura de entrada: 60 °C",
        "Presión de trabajo: 130/13 MPa",
        "Presión máxima: 190 bar",
        "Potencia de conexión: 2.9 kW",
        "Cable de conexión: 5 m",
        "Tamaño de la boquilla: 42 mm",
        "Peso (con accesorios): 25.5 kg",
        "Peso con embalaje incluido: 28 kg",
        "Dimensiones (la. × an. × al.): 380 × 360 × 930 mm",
      ],
    },
    {
      nombre: "TS138",
      marca: "HUSQVARNA",
      tipo: "Jardinería",
      nameimage: "/husqvarna/ts138l.png",
      titulo: "TS138",
      imagenmarca: "/marcas/HUSQVARNA.png",
      descripcion:
        "TS 138L es el tractor cortacésped de Husqvarna sencillo de manejar. Se ha desarrollado para los propietarios de jardines pequeños o de tamaño medio. Eficiente, con descarga lateral, diseño inteligente y gran ergonomía. El TS 138L está equipado con un potente motor con arranque sin estrangulamiento, transmisión hidrostática accionada por pedal y volante ergonómico.",
      detalle: [
        "Anchura de corte: 97 cm",
        "Altura de corte, mín.-máx. max: 102 mm",
        "Altura de corte, mín.-máx. min: 38 mm",
        "Rodillo delantero: No",
        "Llantas Anti-deslizante: 0",
        "Método de conducción: Lever-operated",
        "Velocidad hacia delante, mín.-máx. max: 8.4 km/h",
        "Velocidad marcha atrás, máx.: 3.5 km/h",
        "Cilindrada: 452 cm³",
        "Fabricante del motor: Husqvarna",
        "Nombre del motor: Husqvarna Engine",
        "Potencia de energía Neta a RPM establecidas: 10.96 kW",
        "Potencia neta rpm: 3,600 rpm",
        "Cilindros: 1",
        "Generador: 12 A",
        "Tipo de combustible: Petrol",
        "Filtro de combustible: Sí",
        "Material del asiento: Vinyl",
        "Protecciones delantera/trasera: Available as accessory",
        "Panel indicador de horas de trabajo: Digital with pre-programmed service intervals",
        'Altura del respaldo de asiento: Low 11"',
        "Tipo de volante: Deluxe Overmolded",
        "Recogedor: Disponible como accesorio",
        "Tipo de Transmisión: Hydrostatic",
        "Fabricante de la transmisión: Tuff Torq",
        "Nivel de potencia de sonido garantizado (LWA): 105 dB(A)",
        "Medición de emisiones de ruido: 105 dB(A)",
      ],
    },
    {
      nombre: "VN 2015",
      marca: "VIPER",
      tipo: "Limpieza",
      nameimage: "/viper/VN2015.png",
      titulo: "Lustradora VN 2015",
      imagenmarca: "/marcas/VIPER.png",
      descripcion:
        "La VN 2015 es una abrillantadora de pisos de 20″, robusta y de gran desempeño, ideal para pulir casi cualquier superficie del piso con alto nivel de exigencia.",
      detalle: [
        "Fácil manejo con encendido suave",
        "Interruptor de seguridad",
        "Cable de seguridad de 15 metros con gancho para almacenamiento",
        "Relación precio-calidad inmejorable",
        "Potencia: 1.5 hp",
        "Bajo nivel de ruido",
        "Construcción totalmente metálica",
        "Transmisión triple planetaria para mayor durabilidad",
        "Ruedas para fácil transporte",
        "Ajustador de altura de mango",
        'Tamaño del pad: 50.8 cm / 20"',
        'Tamaño porta pad: 48.3 cm / 19"',
        "Voltaje: 220 V",
        "Potencia: 1500 W",
        "Velocidad de Rotación: 175 rpm",
        "Frecuencia: 50-60 Hz",
        "Longitud del cable: 15 m / amarillo",
        "Dimensiones: 68.58 x 50.8 x 122 cm",
        "Peso Neto: 49.4 kg",
      ],
    },

    {
      nombre: "MOTOSIERRA 288 XP",
      marca: "HUSQVARNA",
      tipo: "Jardinería",
      nameimage: "/husqvarna/288-XP.png",
      titulo: "MOTOSIERRA",
      imagenmarca: "/marcas/HUSQVARNA.png",
      subtitulo: "288 XP",
      descripcion:
        "Husqvarna 288XP, una de las clásicas motosierras profesionales de gran potencia de la gama de alta cilindrada, la ergonomía y relación peso/potencia son excelentes. Gracias al Smart Start® – arranque inteligente – su potente motor es fácil de arrancar.",
      detalle: [
        "Cilindrada: 87 cm³",
        "Potencia: 4.5 kW",
        "Longitud de equipo de corte recomendado, mín-máx: 38 cm",
        'Pase: .404"',
        "Longitud de espada recomendada, máx.: 70 cm",
        "Tipo de cadena: H64",
        "Longitud de barra: 90 cm",
        "Longitud de la barra (pulg.): 36 pulg",
        "Peso, sin combustible y equipo de corte: 7.6 kg",
        "Nivel de presión sonora en oído: 106 dB(A)",
        "Nivel de vibraciones equivalentes (ahv, eq) anterior / posterior asa: 8.5 m/s²",
        "Nivel de equivalencia de vibraciones (ahv, eq) mango delantero: 7.5 m/s²",
      ],
    },
    {
      nombre: "DESBROZADORA DBC 4000 PRO",
      marca: "DUCATI",
      tipo: "Limpieza",
      nameimage: "/ducati/DBC4000PRO.png",
      titulo: "DESBROZADORA",
      imagenmarca: "/marcas/DUCATI.png",
      subtitulo: "DBC 4000 PRO",
      descripcion:
        "La desmalezadora Ducati DBC4000 PRO con casi 40cc puede estar prendida 8 horas seguidas por su alta calidad. Filtro de aire esponja cerrado con apertura manual. Codo de transmisión profesional con doble rodamiento y engrasador. Bomba cebadora. Eje de transmisión 1cm x 11 estrías. Arnés profesional doble con refuerzo lumbar.",
      detalle: [
        "Motor: 2 tiempos",
        "Cilindrada: 39.8cc",
        "Potencia: 1.25KW (1.7HP)",
        "Ancho de corte de hilo: 34cm",
        "Cuchilla de corte: 3 puntas 25cm de ancho de corte",
        "Diámetro del Hilo: 0.24cm",
        "Alimentación del hilo: Semi-automático",
        "Diámetro de la barra: 2.8cm (0.2cm de espesor)",
        "Depósito de gasolina: 1L",
        "Consumo: 610 g/KWh",
        "Peso: 8.9Kg",
      ],
    },
    {
      nombre: "TRITURADORA DE RAMAS TR200G",
      marca: "TRAPP",
      tipo: "Jardinería",
      nameimage: "/trapp/TR-200G.png",
      titulo: "Trituradora de Ramas TR200G",
      imagenmarca: "/marcas/TRAPP.png",
      descripcion:
        "Trituradora de ramas ideal para condominios cerrados, chacras, huertas, agricultura orgánica. Equipado con cuchillas fijadas directamente al eje del motor, embudo desmontable con bloqueo de seguridad, posee una boquilla de alimentación en el lateral para ramas de hasta 1” de diámetro.",
      detalle: [
        "Tipo de Motor: Eléctrico",
        "Potencia (CV): 1.5 Mono",
        "Diámetro Max. Triturable: 2.54 cm – 1”",
        "Peso: 53 kg",
        "Producción",
        "Tipo de Motor: Gasolina",
        "Potencia (HP): 6.5 HP",
        "Madera: 0.64 m3/h",
        "Arbustos: 0.54 m3/h",
        "Legumbres, verduras, vegetales: 271 kg/h",
        "Peso: 60 kg",
      ],
    },
  ];
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
  const contactar = [
    {
      text: "Te mostramos nuestros productos con la mejor calidad que te mereces, describiéndote cada producto con suficha técnica y marca de producción. ",
      titulo:
        "Tenemos los mejores equipos jardinería Tenemos los mejores con la mayor calidad de el mercado",
      buttonverde: (
        <a href="/screens/contactenos">
          <button className="bg-white text-[#8DDB51]  px-8 py-2 rounded-full">
            Contactar
          </button>
        </a>
      ),
    },
    {
      cuadradoblanco: (
        <div
          className="absolute min-[465px]:right-[420px] min-[485px]:right-[440px]
           bg-white border border-gray-300 mb-20 rounded-3xl
        min-[320px]:right-96 min-[320px]:h-44 min-[320px]:w-56 min-[320px]:top-48
        md:right-20 md:left-0 md:w-full md:h-80 md:top-0 xl:h-96
        min-[500px]:invisible min-[768px]:visible
        : "
        >
          <img
            src="images/home/image1-banner.png"
            alt="L"
            className=" 
             min-[320px]:top-16  min-[320px]:right-48
            md:top-72 md:-left-24 absolute"
          />
        </div>
      ),
      cuadradoamarillo: (
        <div
          className="absolute bg-[#FFD302]  rounded-3xl border-gray-300
        min-[320px]:-left-40 min-[320px]:w-32 min-[320px]:h-16 min-[320px]:top-72
        xl:top-72 xl:left-64 xl:w-80 xl:h-32
        lg:top-72 lg:left-48 lg:w-80 lg:h-32 
        md:top-[300px] md:left-28 md:w-52 md:h-24
        min-[500px]:invisible min-[768px]:visible "
        >
          <img
            src="images/home/image2-banner.png"
            alt="L"
            className=" absolute z-10
            min-[320px]:top-2 min-[320px]:left-3  min-[320px]:w-12
            md:top-6 md:left-5 md:w-16 
            lg:top-10 lg:left-10 lg:w-16 "
          />
        </div>
      ),
      cuadradoazul: (
        <div
          className="absolute 
        min-[320px]:-left-40 min-[320px]:top-52 min-[320px]:w-36 min-[320px]:h-20  
        lg:top-8 lg:left-56 lg:w-72 lg:h-40 min-[822px]:clip-reset
        xl:top-8 xl:left-72 xl:w-72 xl:h-40
        md:top-8 md:left-44 md:w-[187px] md:h-32 md:clip-half 
        transform -rotate-6 bg-[#2EA3DC] rounded-3xl border-gray-300
        min-[500px]:invisible min-[768px]:visible"
        >
          <img
            src="images/home/imagen3-banner.png"
            alt="L"
            className="
            min-[320px]:top-0 min-[320px]:-left-8 min-[320px]:w-28
             lg:-top-4 lg:-left-24 lg:w-60
            md:top-3 md:-left-20 md:w-44 absolute "
          />
        </div>
      ),
      cuadradopequeñoblanco1: (
        <div
          className="absolute 
        md:top-8 md:left-28  md:w-16 md:h-16  md:rounded-3xl
        min-[320px]:-left-60 min-[320px]:w-8 min-[320px]:h-8 min-[320px]:top-56 min-[320px]:rounded-xl
        
        bg-[#F7F7F7] border-gray-300 min-[500px]:invisible min-[768px]:visible"
        ></div>
      ),
      cuadradopequeñoblanco2: (
        <div
          className="absolute 
        md:top-8 md:left-8 md:w-16 md:h-16 md:rounded-3xl
        min-[320px]:-left-[202px] min-[320px]:w-8 min-[320px]:h-8 min-[320px]:top-56  min-[320px]:rounded-xl
        bg-[#F7F7F7] border-gray-300 min-[500px]:invisible min-[768px]:visible"
        ></div>
      ),
      cuadradopequeñoblanco3: (
        <div
          className="absolute 
       md:top-32 md:left-28 md:w-16 md:h-16 md:rounded-3xl
        min-[320px]:-left-[202px] min-[320px]:w-8 min-[320px]:h-8 min-[320px]:top-[262px] min-[320px]:rounded-xl
        bg-[#F7F7F7] border-gray-300 min-[500px]:invisible min-[768px]:visible"
        ></div>
      ),
      cuadradopequeñoblanco4: (
        <div
          className="absolute 
        md:top-32 md:left-8 md:w-16 md:h-16 md:rounded-3xl  
        min-[320px]:-left-[240px] min-[320px]:w-8 min-[320px]:h-8 min-[320px]:top-[262px] min-[320px]:rounded-xl
        bg-[#F7F7F7] border-gray-300 min-[500px]:invisible min-[768px]:visible"
        ></div>
      ),
      cuadradopequeñoblanco5: (
        <div
          className="absolute 
        md:top-56 md:left-28 md:w-16 md:h-16 md:rounded-3xl
        min-[320px]:-left-[240px] min-[320px]:w-8 min-[320px]:h-8 min-[320px]:top-[300px] min-[320px]:rounded-xl
        bg-[#F7F7F7]  border-gray-300 min-[500px]:invisible min-[768px]:visible"
        ></div>
      ),
      cuadradopequeñoblanco6: (
        <div
          className="absolute 
        md:top-56 md:left-8 md:w-16 md:h-16 md:rounded-3xl
        min-[320px]:-left-[202px] min-[320px]:w-8 min-[320px]:h-8 min-[320px]:top-[300px] min-[320px]:rounded-xl
         bg-[#F7F7F7]  border-gray-300 min-[500px]:invisible min-[768px]:visible"
        ></div>
      ),
      cabeza1: (
        <div
          className="absolute min-[500px]:invisible min-[768px]:visible
           min-[320px]:-left-[230px] min-[320px]:w-3 min-[320px]:h-3 min-[320px]:top-[228px] 
        md:top-12 md:left-[132px] md:w-6 md:h-7  bg-[#D9D9D9] rounded-full border-gray-300 "
        ></div>
      ),
      cabeza2: (
        <div
          className="absolute min-[500px]:invisible min-[768px]:visible
          min-[320px]:-left-[192px] min-[320px]:w-3 min-[320px]:h-3 min-[320px]:top-[228px]  min-[320px]:rounded-xl
        md:top-12 md:left-[53px] md:w-6 md:h-7  bg-[#D9D9D9] rounded-full border-gray-300"
        ></div>
      ),
      cabeza3: (
        <div
          className="absolute min-[500px]:invisible min-[768px]:visible
          min-[320px]:-left-[192px] min-[320px]:w-3 min-[320px]:h-3 min-[320px]:top-[267px] min-[320px]:rounded-xl
        md:top-36 md:left-[132px] md:w-6 md:h-7  bg-[#D9D9D9] rounded-full border-gray-300"
        ></div>
      ),
      cabeza4: (
        <div
          className="absolute md:top-36 md:left-[53px] md:w-6 md:h-7  min-[500px]:invisible min-[768px]:visible
        min-[320px]:-left-[230px] min-[320px]:w-3 min-[320px]:h-3 min-[320px]:top-[267px] min-[320px]:rounded-xl
        bg-[#D9D9D9] rounded-full border-gray-300"
        ></div>
      ),
      cabeza5: (
        <div
          className="absolute md:top-60 md:left-[132px] md:w-6 md:h-7 min-[500px]:invisible min-[768px]:visible
         min-[320px]:-left-[230px] min-[320px]:w-3 min-[320px]:h-3 min-[320px]:top-[308px] min-[320px]:rounded-xl
        bg-[#D9D9D9] rounded-full border-gray-300"
        ></div>
      ),
      cabeza6: (
        <div
          className="absolute 
        md:top-60 md:left-[53px] md:w-6 md:h-7  bg-[#D9D9D9] min-[500px]:invisible min-[768px]:visible
          min-[320px]:-left-[192px] min-[320px]:w-3 min-[320px]:h-3 min-[320px]:top-[308px] min-[320px]:rounded-xl
        rounded-full border-gray-300"
        ></div>
      ),
      rectagulocabeza1: (
        <div
          className="absolute min-[500px]:invisible min-[768px]:visible
          lg:top-[83px] lg:left-[53px] lg:w-6 lg:h-1 
          md:top-[83px] md:left-[53px] md:w-6 md:h-1 
        min-[320px]:-left-[230px] min-[320px]:w-3 min-[320px]:h-1 min-[320px]:top-[243px] 
        bg-[#D9D9D9] rounded-full border-gray-300"
        ></div>
      ),
      rectagulocabeza2: (
        <div
          className="absolute min-[500px]:invisible min-[768px]:visible
          lg:top-[83px] lg:left-[132px] lg:w-6 lg:h-1
          md:top-[83px] md:left-[132px] md:w-6 md:h-1
       min-[320px]:-left-[192px] min-[320px]:w-3 min-[320px]:h-1 min-[320px]:top-[243px]  min-[320px]:rounded-xl 
        bg-[#D9D9D9] rounded-full border-gray-300"
        ></div>
      ),
      rectagulocabeza3: (
        <div
          className="absolute min-[500px]:invisible min-[768px]:visible
          lg:top-[178px] lg:left-[53px] lg:w-6 lg:h-1  
          md:top-[178px] md:left-[53px] md:w-6 md:h-1  
        min-[320px]:-left-[192px] min-[320px]:w-3 min-[320px]:h-1 min-[320px]:top-[282px] min-[320px]:rounded-xl
        bg-[#D9D9D9] rounded-full border-gray-300"
        ></div>
      ),
      rectagulocabeza4: (
        <div
          className="absolute min-[500px]:invisible min-[768px]:visible
          lg:top-[178px] lg:left-[132px] lg:w-6 lg:h-1 
          md:top-[178px] md:left-[132px] md:w-6 md:h-1 
       min-[320px]:-left-[230px] min-[320px]:w-3 min-[320px]:h-1 min-[320px]:top-[282px] min-[320px]:rounded-xl
        bg-[#D9D9D9] rounded-full border-gray-300"
        ></div>
      ),
      rectagulocabeza5: (
        <div
          className="absolute min-[500px]:invisible min-[768px]:visible
          lg:top-[275px] lg:left-[53px] lg:w-6 lg:h-1
          md:top-[275px] md:left-[53px] md:w-6 md:h-1
        min-[320px]:-left-[230px] min-[320px]:w-3 min-[320px]:h-1 min-[320px]:top-[323px] min-[320px]:rounded-xl
        bg-[#D9D9D9] rounded-full border-gray-300"
        ></div>
      ),

      rectagulocabeza6: (
        <div
          className="absolute min-[500px]:invisible min-[768px]:visible
          lg:top-[275px] lg:left-[132px] lg:w-6 lg:h-1
          md:top-[275px] md:left-[132px] md:w-6 md:h-1 
         min-[320px]:-left-[192px] min-[320px]:w-3 min-[320px]:h-1 min-[320px]:top-[323px] min-[320px]:rounded-xl
        bg-[#D9D9D9] rounded-full border-gray-300"
        ></div>
      ),
      rectaguloamarillo1: (
        <div
          className="absolute min-[500px]:invisible min-[768px]:visible
         min-[320px]:-left-[85px] min-[320px]:w-12 min-[320px]:top-[305px]  min-[320px]:h-1
         xl:top-[330px] xl:left-[402px] xl:w-36 xl:h-2 
          lg:top-[330px] lg:left-[302px] lg:w-36 lg:h-2 
         md:top-[330px] md:left-[202px] md:w-24 md:h-2 
        bg-[#ffffff] rounded-full border-gray-300"
        ></div>
      ),
      rectaguloamarillo2: (
        <div
          className="absolute min-[500px]:invisible min-[768px]:visible
         min-[320px]:-left-[85px] min-[320px]:w-12 min-[320px]:top-[320px] min-[320px]:h-1
        lg:top-[350px] lg:left-[302px] lg:w-24 lg:h-2  
        xl:top-[350px] xl:left-[402px] xl:w-24 xl:h-2  
        md:top-[350px] md:left-[202px] md:w-24 md:h-2 
        bg-[#F97739] rounded-full border-gray-300"
        ></div>
      ),
      rectaguloamarillo3: (
        <div
          className="absolute min-[500px]:invisible min-[768px]:visible
          lg:top-[370px] lg:left-[302px] lg:w-36 lg:h-2 
          xl:top-[370px] xl:left-[402px] xl:w-36 xl:h-2
          md:top-[370px] md:left-[202px] md:w-24 md:h-2 
         min-[320px]:-left-[85px] min-[320px]:w-12 min-[320px]:top-[334px]  min-[320px]:h-1
        bg-[#2EA3DC] rounded-full border-gray-300"
        ></div>
      ),
      rectaguloazul1: (
        <div
          className="absolute min-[500px]:invisible min-[768px]:visible
         min-[320px]:-left-[85px] min-[320px]:w-12 min-[320px]:top-[230px]  min-[320px]:h-1
        md:top-[60px] md:left-[240px] md:w-20 md:h-3  
        lg:top-[70px] lg:left-[320px] lg:w-28 lg:h-4 
        xl:top-[70px] xl:left-[430px] xl:w-28 xl:h-4 
        transform -rotate-6  bg-[#FEFFFD] rounded-full border-gray-300"
        ></div>
      ),
      rectaguloazul2: (
        <div
          className="absolute min-[500px]:invisible min-[768px]:visible
         min-[320px]:-left-[76px] min-[320px]:w-12 min-[320px]:top-[240px]  min-[320px]:h-1
        md:top-[85px] md:left-[250px] md:w-20 md:h-3  
         lg:top-[100px] lg:left-[320px] lg:w-28 lg:h-4 
         xl:top-[93px] xl:left-[500px] xl:w-28 xl:h-4
        transform -rotate-6  bg-[#2A88B1] rounded-full border-gray-300"
        ></div>
      ),
      rectaguloazul3: (
        <div
          className="absolute min-[500px]:invisible min-[768px]:visible
         min-[320px]:-left-[76px] min-[320px]:w-12 min-[320px]:top-[250px]  min-[320px]:h-1
        md:top-[105px] md:left-[270px] md:w-20 md:h-3 
        lg:top-[130px] lg:left-[320px] lg:w-28 lg:h-4 
        xl:top-[130px] xl:left-[430px] xl:w-28 xl:h-4
        transform -rotate-6  bg-[#64D0AF] rounded-full border-gray-300"
        ></div>
      ),
      circuloblanco: (
        <div
          className="absolute min-[500px]:invisible min-[768px]:visible
         min-[320px]:-left-[230px] min-[320px]:w-12 min-[320px]:top-[175px]  min-[320px]:h-12 
        md:top-[-70px] md:left-[20px] md:w-24 md:h-24  shadow-2xl bg-[#92DC53] rounded-full border-gray-300"
        >
          <p
            className="
          md:text-[13px] text-center md:mt-5 
          min-[320px]:text-[7px] min-[320px]:mt-2"
          >
            Equipos de Jardinería 100% Original
          </p>
        </div>
      ),
      circuloverde: (
        <div
          className="absolute min-[500px]:invisible min-[768px]:visible
         min-[320px]:-left-[270px] min-[320px]:w-8 min-[320px]:top-[240px]  min-[320px]:h-8 
        md:top-[150px] md:-left-[30px] md:w-16 md:h-16 shadow-2xl  bg-[#ffffff] rounded-full border-gray-300"
        >
          <img
            src="images/home/calidad-premium 1.png"
            alt="L"
            className="
            min-[320px]:w-4 min-[320px]:h-4 min-[320px]:top-2 min-[320px]:left-2
            md:w-7 md:h-7 md:top-4 md:left-4 absolute"
          />
        </div>
      ),
      circulonegro: (
        <div
          className="absolute min-[500px]:invisible min-[768px]:visible
         min-[320px]:-left-[40px] min-[320px]:w-4 min-[320px]:top-[315px]  min-[320px]:h-4
        md:top-[340px] md:left-[565px] md:w-6 md:h-6 shadow-2xl  bg-[#363636] rounded-full border-gray-300"
        >
          <img
            src="images/home/+-banner.png"
            alt="L"
            className="
             min-[320px]:top-1  min-[320px]:left-[5px]  min-[320px]:w-1.5  min-[320px]:h-1.5
            md:w-2 md:h-2 md:top-2 md:left-2 absolute"
          />
        </div>
      ),
      circuloblancoimagen: (
        <div
          className="absolute min-[500px]:invisible min-[768px]:visible
      min-[320px]:-left-36  min-[320px]:w-10  min-[320px]:h-10   min-[320px]:top-[300px]  
       md:top-[320px] md:left-[135px] md:w-14 md:h-14
      lg:top-[315px] lg:left-[220px] lg:w-20 lg:h-20 
      xl:top-[315px] xl:left-[290px] xl:w-20 xl:h-20 
       bg-[#ffffff] rounded-full border-gray-300 shadow-2xl"
        ></div>
      ),
    },
    {
      text: "Te mostramos nuestros productos con la mejor calidad que te mereces, describiéndote cada producto con su ficha técnica y marca de producción.",
      titulo:
        "Tenemos los mejores equipos  en Limpieza  con la mayor calidad de el mercado",
      buttonazul: (
        <a href="/screens/contactenos">
          <button className="bg-white text-[#2FA4DB]  px-8 py-2 rounded-full">
            Contactar
          </button>
        </a>
      ),
    },
    {
      cuadradoblanco: (
        <div
          className="absolute min-[465px]:right-[420px] min-[485px]:right-[440px]
           bg-white border border-gray-300 mb-20 rounded-3xl
        min-[320px]:right-96 min-[320px]:h-44 min-[320px]:w-56 min-[320px]:top-48
        md:right-20 md:left-0 md:w-full md:h-80 md:top-0 xl:h-96
        min-[500px]:invisible min-[768px]:visible
        : "
        >
          <img
            src="images/home/image5-banner2.png"
            alt="L"
            className=" 
             min-[320px]:top-10  min-[320px]:right-48
            md:top-72 md:-left-24 absolute"
          />
        </div>
      ),
      cuadradoamarillo: (
        <div
          className="absolute bg-[#FFD302]  rounded-3xl border-gray-300
        min-[320px]:-left-40 min-[320px]:w-32 min-[320px]:h-16 min-[320px]:top-72
        xl:top-72 xl:left-64 xl:w-80 xl:h-32
        lg:top-72 lg:left-48 lg:w-80 lg:h-32 
        md:top-[300px] md:left-28 md:w-52 md:h-24
        min-[500px]:invisible min-[768px]:visible "
        >
          <img
            src="images/home/image6-banner2.png"
            alt="L"
            className=" absolute z-10
            min-[320px]:top-2 min-[320px]:left-3  min-[320px]:w-12
            md:top-6 md:left-5 md:w-16 
            lg:top-10 lg:left-10 lg:w-16 "
          />
        </div>
      ),
      cuadradoazul: (
        <div
          className="absolute 
        min-[320px]:-left-40 min-[320px]:top-52 min-[320px]:w-36 min-[320px]:h-20 
        lg:top-8 lg:left-56 lg:w-72 lg:h-40
        xl:top-8 xl:left-72 xl:w-72 xl:h-40
        md:top-8 md:left-52 md:w-72 md:h-32
        transform -rotate-6 bg-[#2EA3DC] rounded-3xl border-gray-300
        min-[500px]:invisible min-[768px]:visible"
        >
          <img
            src="images/home/image4-banner2.png"
            alt="L"
            className="
            min-[320px]:-top-4 min-[320px]:-left-6 min-[320px]:w-28
             lg:-top-4 lg:-left-24 lg:w-60
            md:top-3 md:-left-20 md:w-44 absolute"
          />
        </div>
      ),
      cuadradopequeñoblanco1: (
        <div
          className="absolute 
        md:top-8 md:left-28  md:w-16 md:h-16  md:rounded-3xl
        min-[320px]:-left-60 min-[320px]:w-8 min-[320px]:h-8 min-[320px]:top-56 min-[320px]:rounded-xl
        
        bg-[#F7F7F7] border-gray-300 min-[500px]:invisible min-[768px]:visible"
        ></div>
      ),
      cuadradopequeñoblanco2: (
        <div
          className="absolute 
        md:top-8 md:left-8 md:w-16 md:h-16 md:rounded-3xl
        min-[320px]:-left-[202px] min-[320px]:w-8 min-[320px]:h-8 min-[320px]:top-56  min-[320px]:rounded-xl
        bg-[#F7F7F7] border-gray-300 min-[500px]:invisible min-[768px]:visible"
        ></div>
      ),
      cuadradopequeñoblanco3: (
        <div
          className="absolute 
       md:top-32 md:left-28 md:w-16 md:h-16 md:rounded-3xl
        min-[320px]:-left-[202px] min-[320px]:w-8 min-[320px]:h-8 min-[320px]:top-[262px] min-[320px]:rounded-xl
        bg-[#F7F7F7] border-gray-300 min-[500px]:invisible min-[768px]:visible"
        ></div>
      ),
      cuadradopequeñoblanco4: (
        <div
          className="absolute 
        md:top-32 md:left-8 md:w-16 md:h-16 md:rounded-3xl  
        min-[320px]:-left-[240px] min-[320px]:w-8 min-[320px]:h-8 min-[320px]:top-[262px] min-[320px]:rounded-xl
        bg-[#F7F7F7] border-gray-300 min-[500px]:invisible min-[768px]:visible"
        ></div>
      ),
      cuadradopequeñoblanco5: (
        <div
          className="absolute 
        md:top-56 md:left-28 md:w-16 md:h-16 md:rounded-3xl
        min-[320px]:-left-[240px] min-[320px]:w-8 min-[320px]:h-8 min-[320px]:top-[300px] min-[320px]:rounded-xl
        bg-[#F7F7F7]  border-gray-300 min-[500px]:invisible min-[768px]:visible"
        ></div>
      ),
      cuadradopequeñoblanco6: (
        <div
          className="absolute 
        md:top-56 md:left-8 md:w-16 md:h-16 md:rounded-3xl
        min-[320px]:-left-[202px] min-[320px]:w-8 min-[320px]:h-8 min-[320px]:top-[300px] min-[320px]:rounded-xl
         bg-[#F7F7F7]  border-gray-300 min-[500px]:invisible min-[768px]:visible"
        ></div>
      ),
      cabeza1: (
        <div
          className="absolute min-[500px]:invisible min-[768px]:visible
           min-[320px]:-left-[230px] min-[320px]:w-3 min-[320px]:h-3 min-[320px]:top-[228px] 
        md:top-12 md:left-[132px] md:w-6 md:h-7  bg-[#D9D9D9] rounded-full border-gray-300 "
        ></div>
      ),
      cabeza2: (
        <div
          className="absolute min-[500px]:invisible min-[768px]:visible
          min-[320px]:-left-[192px] min-[320px]:w-3 min-[320px]:h-3 min-[320px]:top-[228px]  min-[320px]:rounded-xl
        md:top-12 md:left-[53px] md:w-6 md:h-7  bg-[#D9D9D9] rounded-full border-gray-300"
        ></div>
      ),
      cabeza3: (
        <div
          className="absolute min-[500px]:invisible min-[768px]:visible
          min-[320px]:-left-[192px] min-[320px]:w-3 min-[320px]:h-3 min-[320px]:top-[267px] min-[320px]:rounded-xl
        md:top-36 md:left-[132px] md:w-6 md:h-7  bg-[#D9D9D9] rounded-full border-gray-300"
        ></div>
      ),
      cabeza4: (
        <div
          className="absolute md:top-36 md:left-[53px] md:w-6 md:h-7  min-[500px]:invisible min-[768px]:visible
        min-[320px]:-left-[230px] min-[320px]:w-3 min-[320px]:h-3 min-[320px]:top-[267px] min-[320px]:rounded-xl
        bg-[#D9D9D9] rounded-full border-gray-300"
        ></div>
      ),
      cabeza5: (
        <div
          className="absolute md:top-60 md:left-[132px] md:w-6 md:h-7 min-[500px]:invisible min-[768px]:visible
         min-[320px]:-left-[230px] min-[320px]:w-3 min-[320px]:h-3 min-[320px]:top-[308px] min-[320px]:rounded-xl
        bg-[#D9D9D9] rounded-full border-gray-300"
        ></div>
      ),
      cabeza6: (
        <div
          className="absolute 
        md:top-60 md:left-[53px] md:w-6 md:h-7  bg-[#D9D9D9] min-[500px]:invisible min-[768px]:visible
          min-[320px]:-left-[192px] min-[320px]:w-3 min-[320px]:h-3 min-[320px]:top-[308px] min-[320px]:rounded-xl
        rounded-full border-gray-300"
        ></div>
      ),
      rectagulocabeza1: (
        <div
          className="absolute min-[500px]:invisible min-[768px]:visible
          lg:top-[83px] lg:left-[53px] lg:w-6 lg:h-1 
          md:top-[83px] md:left-[53px] md:w-6 md:h-1 
        min-[320px]:-left-[230px] min-[320px]:w-3 min-[320px]:h-1 min-[320px]:top-[243px] 
        bg-[#D9D9D9] rounded-full border-gray-300"
        ></div>
      ),
      rectagulocabeza2: (
        <div
          className="absolute min-[500px]:invisible min-[768px]:visible
          lg:top-[83px] lg:left-[132px] lg:w-6 lg:h-1
          md:top-[83px] md:left-[132px] md:w-6 md:h-1
       min-[320px]:-left-[192px] min-[320px]:w-3 min-[320px]:h-1 min-[320px]:top-[243px]  min-[320px]:rounded-xl 
        bg-[#D9D9D9] rounded-full border-gray-300"
        ></div>
      ),
      rectagulocabeza3: (
        <div
          className="absolute min-[500px]:invisible min-[768px]:visible
          lg:top-[178px] lg:left-[53px] lg:w-6 lg:h-1  
          md:top-[178px] md:left-[53px] md:w-6 md:h-1  
        min-[320px]:-left-[192px] min-[320px]:w-3 min-[320px]:h-1 min-[320px]:top-[282px] min-[320px]:rounded-xl
        bg-[#D9D9D9] rounded-full border-gray-300"
        ></div>
      ),
      rectagulocabeza4: (
        <div
          className="absolute min-[500px]:invisible min-[768px]:visible
          lg:top-[178px] lg:left-[132px] lg:w-6 lg:h-1 
          md:top-[178px] md:left-[132px] md:w-6 md:h-1 
       min-[320px]:-left-[230px] min-[320px]:w-3 min-[320px]:h-1 min-[320px]:top-[282px] min-[320px]:rounded-xl
        bg-[#D9D9D9] rounded-full border-gray-300"
        ></div>
      ),
      rectagulocabeza5: (
        <div
          className="absolute min-[500px]:invisible min-[768px]:visible
          lg:top-[275px] lg:left-[53px] lg:w-6 lg:h-1
          md:top-[275px] md:left-[53px] md:w-6 md:h-1
        min-[320px]:-left-[230px] min-[320px]:w-3 min-[320px]:h-1 min-[320px]:top-[323px] min-[320px]:rounded-xl
        bg-[#D9D9D9] rounded-full border-gray-300"
        ></div>
      ),

      rectagulocabeza6: (
        <div
          className="absolute min-[500px]:invisible min-[768px]:visible
          lg:top-[275px] lg:left-[132px] lg:w-6 lg:h-1
          md:top-[275px] md:left-[132px] md:w-6 md:h-1 
         min-[320px]:-left-[192px] min-[320px]:w-3 min-[320px]:h-1 min-[320px]:top-[323px] min-[320px]:rounded-xl
        bg-[#D9D9D9] rounded-full border-gray-300"
        ></div>
      ),
      rectaguloamarillo1: (
        <div
          className="absolute min-[500px]:invisible min-[768px]:visible
         min-[320px]:-left-[85px] min-[320px]:w-12 min-[320px]:top-[305px]  min-[320px]:h-1
         xl:top-[330px] xl:left-[402px] xl:w-36 xl:h-2 
          lg:top-[330px] lg:left-[302px] lg:w-36 lg:h-2 
         md:top-[330px] md:left-[202px] md:w-24 md:h-2 
        bg-[#ffffff] rounded-full border-gray-300"
        ></div>
      ),
      rectaguloamarillo2: (
        <div
          className="absolute min-[500px]:invisible min-[768px]:visible
         min-[320px]:-left-[85px] min-[320px]:w-12 min-[320px]:top-[320px] min-[320px]:h-1
        lg:top-[350px] lg:left-[302px] lg:w-24 lg:h-2  
        xl:top-[350px] xl:left-[402px] xl:w-24 xl:h-2  
        md:top-[350px] md:left-[202px] md:w-24 md:h-2 
        bg-[#F97739] rounded-full border-gray-300"
        ></div>
      ),
      rectaguloamarillo3: (
        <div
          className="absolute min-[500px]:invisible min-[768px]:visible
          lg:top-[370px] lg:left-[302px] lg:w-36 lg:h-2 
          xl:top-[370px] xl:left-[402px] xl:w-36 xl:h-2
          md:top-[370px] md:left-[202px] md:w-24 md:h-2 
         min-[320px]:-left-[85px] min-[320px]:w-12 min-[320px]:top-[334px]  min-[320px]:h-1
        bg-[#2EA3DC] rounded-full border-gray-300"
        ></div>
      ),
      rectaguloazul1: (
        <div
          className="absolute min-[500px]:invisible min-[768px]:visible
         min-[320px]:-left-[85px] min-[320px]:w-12 min-[320px]:top-[230px]  min-[320px]:h-1
        md:top-[70px] md:left-[260px] md:w-28 md:h-3 
        lg:top-[70px] lg:left-[320px] lg:w-28 lg:h-4 
        xl:top-[70px] xl:left-[430px] xl:w-28 xl:h-4 
        transform -rotate-6  bg-[#FEFFFD] rounded-full border-gray-300"
        ></div>
      ),
      rectaguloazul2: (
        <div
          className="absolute min-[500px]:invisible min-[768px]:visible
         min-[320px]:-left-[76px] min-[320px]:w-12 min-[320px]:top-[240px]  min-[320px]:h-1
        md:top-[93px] md:left-[270px] md:w-28 md:h-3 
         lg:top-[100px] lg:left-[320px] lg:w-28 lg:h-4
         xl:top-[93px] xl:left-[500px] xl:w-28 xl:h-4
        transform -rotate-6  bg-[#2A88B1] rounded-full border-gray-300"
        ></div>
      ),
      rectaguloazul3: (
        <div
          className="absolute min-[500px]:invisible min-[768px]:visible
         min-[320px]:-left-[76px] min-[320px]:w-12 min-[320px]:top-[250px]  min-[320px]:h-1
        md:top-[118px] md:left-[290px] md:w-28 md:h-3 
        lg:top-[130px] lg:left-[320px] lg:w-28 lg:h-4 
        xl:top-[130px] xl:left-[430px] xl:w-28 xl:h-4
        transform -rotate-6  bg-[#64D0AF] rounded-full border-gray-300"
        ></div>
      ),
      circuloverde: (
        <div
          className="absolute min-[500px]:invisible min-[768px]:visible
         min-[320px]:-left-[230px] min-[320px]:w-12 min-[320px]:top-[175px]  min-[320px]:h-12 
        md:top-[-70px] md:left-[20px] md:w-24 md:h-24  shadow-2xl bg-[#85CCED] rounded-full border-gray-300"
        >
          <p
            className="
          md:text-[13px] text-center md:mt-5 
          min-[320px]:text-[7px] min-[320px]:mt-2"
          >
            Equipos de Limpieza 100% Original
          </p>
        </div>
      ),
      circuloazul: (
        <div
          className="absolute 
        top-[-70px] left-[20px] w-24 h-24  
        
        shadow-2xl bg-[#85CCED] rounded-full border-gray-300"
        >
          <p className="text-[13px] text-center mt-5">
            Equipos de Jardinería 100% Original
          </p>
        </div>
      ),
      circuloblanco: (
        <div
          className="absolute min-[500px]:invisible min-[768px]:visible
         min-[320px]:-left-[270px] min-[320px]:w-8 min-[320px]:top-[240px]  min-[320px]:h-8 
        md:top-[150px] md:-left-[30px] md:w-16 md:h-16 shadow-2xl  bg-[#ffffff] rounded-full border-gray-300"
        >
          <img
            src="/images/home/calidad-premium 1.png"
            alt="L"
            className="
            min-[320px]:w-4 min-[320px]:h-4 min-[320px]:top-2 min-[320px]:left-2
            md:w-7 md:h-7 md:top-4 md:left-4 absolute"
          />
        </div>
      ),
      circulonegro: (
        <div
          className="absolute min-[500px]:invisible min-[768px]:visible
         min-[320px]:-left-[40px] min-[320px]:w-4 min-[320px]:top-[315px]  min-[320px]:h-4
        md:top-[340px] md:left-[565px] md:w-6 md:h-6 shadow-2xl  bg-[#363636] rounded-full border-gray-300"
        >
          <img
            src="images/home/+-banner.png"
            alt="L"
            className="
             min-[320px]:top-1  min-[320px]:left-[5px]  min-[320px]:w-1.5  min-[320px]:h-1.5
            md:w-2 md:h-2 md:top-2 md:left-2 absolute"
          />
        </div>
      ),
      circuloblancoimagen: (
        <div
          className="absolute min-[500px]:invisible min-[768px]:visible
      min-[320px]:-left-36  min-[320px]:w-10  min-[320px]:h-10   min-[320px]:top-[300px]  
       md:top-[320px] md:left-[135px] md:w-14 md:h-14
      lg:top-[315px] lg:left-[220px] lg:w-20 lg:h-20 
      xl:top-[315px] xl:left-[290px] xl:w-20 xl:h-20 
       bg-[#ffffff] rounded-full border-gray-300 shadow-2xl"
        ></div>
      ),
    },
  ];
  const images = [];
  return (
    <div className="bg-white w-full">
      <div className="bg-[url('/images/home/rectangulo-inicio.png')] bg-bottom bg-cover w-full relative">
        <div className="flex items-center justify-center">
          <div className="relative w-full mx-4 overflow-hidden">
            <div></div>
            <div
              className="flex transition-transform duration-500 ease-in-out md:w-6/12 mb-12  "
              style={{ transform: `translateX(-${curr * 200}%)` }}
            >
              {contactar.map((contactars, index) => (
                <div
                  key={index.toString()}
                  className="min-w-full flex flex-col px-4 lg:px-24 mb-40 min-[500px]:mb-12 min-[768px]:mb-40 "
                >
                  <div className="lg:mt-32 mt-12 ">
                    <h1 className="text-2xl sm:text-3xl lg:text-5xl text-[#2C2C2C]  font-extrabold   w-full max-[760px]:text-center text-left">
                      {contactars.titulo}
                    </h1>
                    <p className=" text-xs sm:text-sm lg:text-2xl text-[#292929] mb-8 mt-4 sm:mt-6 lg:mt-12 lg:w-full w-full max-[760px]:text-center text-left  ">
                      {contactars.text}
                    </p>
                    <p className="mt-2 text-sm sm:text-base lg:text-xl font-bold text-[#3BB77E] min-[500px]:text-center min-[768px]:text-left ">
                      {contactars.buttonverde}
                      {contactars.buttonazul}
                    </p>
                  </div>
                  <div className="relative">
                    {contactars.cuadradoblanco}
                    {contactars.cuadradoamarillo}
                    {contactars.cuadradoazul}
                    {contactars.cuadradopequeñoblanco1}
                    {contactars.cuadradopequeñoblanco2}
                    {contactars.cuadradopequeñoblanco3}
                    {contactars.cuadradopequeñoblanco4}
                    {contactars.cuadradopequeñoblanco5}
                    {contactars.cuadradopequeñoblanco6}
                    {contactars.cabeza1}
                    {contactars.cabeza2}
                    {contactars.cabeza3}
                    {contactars.cabeza4}
                    {contactars.cabeza5}
                    {contactars.cabeza6}
                    {contactars.rectagulocabeza1}
                    {contactars.rectagulocabeza2}
                    {contactars.rectagulocabeza3}
                    {contactars.rectagulocabeza4}
                    {contactars.rectagulocabeza5}
                    {contactars.rectagulocabeza6}
                    {contactars.rectaguloamarillo1}
                    {contactars.rectaguloamarillo2}
                    {contactars.rectaguloamarillo3}
                    {contactars.rectaguloazul1}
                    {contactars.rectaguloazul2}
                    {contactars.rectaguloazul3}
                    {contactars.circuloblanco}
                    {contactars.circuloverde}
                    {contactars.circulonegro}
                    {contactars.circuloblancoimagen}
                    {contactars.circuloazul}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <ChevronRight
            onClick={next}
            className="cursor-pointer text-xl sm:text-2xl lg:text-3xl text-[#292929] hover:text-[#3BB77E] transition duration-200"
          />
        </div>
      </div>

      <div className="bg-white ">
        <div className="flex justify-center py-8 lg:py-16 ">
          <img
            src="/images/envios-aceptamos-brindamos.png"
            alt="Imagen Local"
            className=""
          />
        </div>
        <WhatsAppButton />
        <div className="grid grid-cols-1 gap-12 lg:px-36 2xl:px-60 px-8 min-[1440px]:px-16  xl:grid-cols-2">
          <div className="bg-[#9DDD58] rounded-[40px] hover:border-2 hover:border-green-800 hover:cursor-pointer  sm:p-4 ">
            <div
              className=" flex flex-row  bg-no-repeat bg-cover bg-center  h-full items-center"
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
              className=" flex flex-row bg-cover  bg-no-repeat  justify-center   items-center"
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
        <div className="bg-[url('/images/fondo-banner.png')] bg-cover  grid grid-cols-1 lg:grid-cols-2 py-12 px-4 md:px-8 lg:px-12 ">
          <div className="">
            <div className="lg:flex 2xl:mt-12 lg:ml-20 lg:mt-8">
              <div className="flex text-center lg:text-left  ">
                <h1 className="text-[20px]  md:text-2xl 2xl:text-[30px] text-[#2AA0DF] font-bold  xl:ml-20 xl:mr-4">
                  Somos
                </h1>
                <h1 className="text-[20px]  md:text-2xl 2xl:text-[30px] text-[#2AA0DF] font-bold  ">
                  Moa
                </h1>
              </div>
              <div className="text-center lg:text-left">
                <h1 className=" text-[20px] md:text-2xl 2xl:text-[35px] tracking-wider  text-[#0D0D0D] font-bold xl:ml-28">
                  Tenemos los mejores equipos con calidad
                </h1>
              </div>
            </div>
            <div className="2xl:mt-10 lg:text-left text-center text-[#7A7A7A] 2xl:text-[18px] lg:text-[24px]  2xl:ml-[456px]  2xl:w-5/12 2xl:p-0 lg:ml-24 p-6 ">
              <p>
                Libero diam auctor tristique hendrerit in eu vel id. Nec leo
                amet suscipit nulla. Nullam vitae sit tempus diam.
              </p>
            </div>
          </div>

          <div className=" 2xl:ml-16 lg:w-10/12 xl:w-11/12 2xl:w-8/12 ">
            <ImageCarousel
              carousel={images}
              autoSlide={true}
              autoSlideInterval={5000}
            />
          </div>
        </div>
      </div>

      <div className=" bg-[url('/images/productos/fondo-productos.png') bg-cover md:py-12 py-6  ">
        <div className="flex flex-col items-center  ">
          <div className="bg-[url('/images/home/rectangulo-fondo.png')] bg-cover w-10/12 rounded-[50px] grid min-[530px]:grid-cols-2 min-[1440px]:p-9 ">
            <div className="mt-2 p-6  max-[530px]:text-center">
              <p className="text-white text-[20px] md:text-[25px] lg:text-[50px]  min-[320px]:text-[20px] font-bold">
                <strong className="text-[#082C4D]">Productos TOP:</strong>
                Debes adquirir lo mejor para tu negocio con nosotros.
              </p>
              <p className="mt-2  lg:mt-6 text-[14px] md:text-[16px] lg:text-[25px] min-[320px]:text-[16px] text-white font-light">
                Te informamos sobre cada detalle del producto con su ficha
                técnica, calidades y especificaciones. Revisa nuestro catálogo.
              </p>
              <a href="/screens/productos">
                <button
                  type="submit"
                  className="mt-4 min-[1440px]:mt-12 transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 py-2 px-5 max-[470px]:px-2 text-[#082C4D] font-semibold rounded-full shadow-md focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-75"
                >
                  Ver productos
                </button>
              </a>
            </div>
            <div className="relative ">
              <img
                src="/images/husqvarna/445-II.png"
                alt="Imagen 1"
                className="absolute 
                max-[530px]:invisible
                min-[320px]:-top-[10px]
                 min-[510px]:-top-[50px]
               md:-top-[70px]  
                lg:top-[60px] lg:left-[80px]  object-cover z-10 lg:w-8/12"
              />
              <img
                src="/images/husqvarna/tr262.png"
                alt="Imagen 2"
                className="absolute 
                max-[1024px]:invisible
                md:top-12
                lg:-top-[120px] lg:left-[60px] lg:w-8/12 object-cover  "
              />
              <img
                src="/images/husqvarna/ts142.png"
                alt="Imagen 3"
                className="absolute
                  min-[320px]:top-[80px]
                  max-[530px]:invisible
                   min-[510px]:top-[50px]
                   min-[530px]:top-[76px]
                   
                   min-[705px]:invisible md:visible
                  md:top-[110px] md:left-[30px]
                  min-[827px]:invisible min-[1024px]:visible
                lg:-top-[70px] lg:left-[290px] object-cover min-lg:z-20 lg:w-8/12"
              />
            </div>
          </div>
          <div className="flex flex-row items-end justify-center gap-1 lg:mt-24 mt-16">
            <div className="w-4 h-4 md:w-6 md:h-6 bg-[#3BB77E] rounded-full"></div>
            <div className="w-4 h-4 md:w-6 md:h-6 bg-[#2AA0DF] rounded-full"></div>
          </div>
          <h1 className="text-center text-2xl md:text-5xl text-contactenos font-extrabold">
            Equipos más populares
          </h1>
          <div className="flex justify-center items-center px-4 py-14">
            <div className="grid min-[320px]:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  min-[1440px]:gap-32 gap-8  ">
              {productos.map((item, index) => (
                <CardProducto item={item} key={index.toString()} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className=" py-8">
        <div className="flex flex-col items-center ">
          <div className="bg-[url('/images/Banner.png')] bg-no-repeat bg-cover w-full h-[30vh] md:h-[60vh] flex flex-col justify-center">
            <div className="flex flex-row items-end justify-center gap-2 p-4">
              <div className="w-4 h-4 md:w-6 md:h-6 bg-[#3BB77E] rounded-full"></div>
              <div className="w-4 h-4 md:w-6 md:h-6 bg-[#2AA0DF] rounded-full"></div>
            </div>
            <h1 className="text-center text-2xl md:text-5xl text-contactenos font-extrabold">
              Marcas que trabajamos
            </h1>
            <div className="flex flex-col items-center mt-8">
              <img
                src="/images/grupo-marcas-1.png"
                alt="Imagen Local"
                className="w-9/12 mt-6"
              />
              <img
                src="/images/grupo-marcas-2.png"
                alt="Imagen Local"
                className="w-9/12 mt-6"
              />
            </div>
          </div>

          <div className="2xl:ml-12">
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
                Libero diam auctor tristique hendrerit in eu vel id. Nec leo
                amet suscipit nulla. Nullam vitae sit tempus diam.
              </p>
            </div>
          </div>
          {/* Sección de testimonios */}
          <div className="relative h-auto mb-40 px-4 sm:px-8 md:px-16 lg:px-32 ">
            <div className="flex items-center justify-center">
              <div className="relative max-w-2xl mx-4 overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${curr * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index.toString()}
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
      </div>
    </div>
  );
}
