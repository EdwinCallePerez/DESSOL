import { useEffect, useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import SocialCircle from "../Utils/SocialCircle";
import SectionFD from "../Utils/SectionFD";
import Footer from "../NavBar/Footer";
import Header from "../NavBar/Header/Header";
import QuieroDonar  from "../Utils/QuieroDonar";
const images = [
  {
    url: import.meta.env.BASE_URL + "images/Alimentos.png",
    caption: "Bienvenidos a Fundación DESSOL Formando líderes con valores",
  },
  {
    url: import.meta.env.BASE_URL + "images/AtencionMedica.png",
    caption: "Bienvenidos a Fundación DESSOL Formando líderes con valores",
  },
  {
    url: import.meta.env.BASE_URL + "images/Prevencion.png",
    caption: "Apoyando a niños y jóvenes Formando líderes con valores",
  },
  {
    url: import.meta.env.BASE_URL + "images/A1.png",
    caption: "Formando líderes con valores Formando líderes con valores",
  },
];


const CAROUSEL_RATIO = 16 / 9;

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <>
   
    <div className="w-full">
      <div
        className="relative w-full bg-fixed bg-center bg-cover min-h-screen"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}images/color.jpg)`,
        }}
      >

        

        {/*<div className="absolute inset-0 bg-black bg-opacity-60 z-0" />*/}
       

        <div className="relative z-10 flex flex-col md:flex-row w-full min-h-screen items-center justify-center p-4 gap-6">
          <div
            className="relative rounded-lg shadow-lg overflow-hidden w-full md:flex-[0_0_60%] bg-black"
            style={{
              aspectRatio: `${CAROUSEL_RATIO}`,
              maxWidth: "1050px",
            }}
          >
            {/* Slider container */}
            <div className="w-full h-full overflow-hidden relative">
              
              <div
                className="flex transition-transform duration-700 ease-in-out h-full"
                style={{
                  width: `${images.length * 100}%`,
                  transform: `translateX(-${(100 / images.length) * current}%)`,
                }}
              >
               
                {images.map((img, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-full h-full flex items-center justify-center relative"
                    style={{ width: `${100 / images.length}%` }}
                    
                  >
               
                    <img
                      src={img.url}
                      alt={`Slide ${i + 1}`}
                      className="w-full h-full object-contain"
                    />
 <div className="absolute bottom-6 left-6 bg-black bg-opacity-60 text-white px-6 py-3 rounded-full shadow-lg max-w-xs flex items-center gap-2">
  <p className="mb-2 text-white font-semibold">{img.caption}</p>
  <button className="bg-green-500 text-black px-3 py-1 rounded-full hover:bg-yellow-500 transition text-sm">
    Conócenos
  </button>
  
</div>




                  </div>
                ))}
              </div>
              
            </div>

            {/* Botones de navegación */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black/40 text-white text-2xl px-3 py-1 rounded-full hover:bg-black/70"
              aria-label="Anterior"
            >
              ‹
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black/40 text-white text-2xl px-3 py-1 rounded-full hover:bg-black/70"
              aria-label="Siguiente"
            >
              ›
            </button>

            {/* Puntos indicadores */}
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 rounded-full ${
                    current === i ? "bg-yellow-400" : "bg-white/40"
                  }`}
                  aria-label={`Ir a la diapositiva ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/*   Aqui estan los botones que pondremos de Link */}
<div className="w-full bg-fixed bg-center" style={{ backgroundColor: "white" }}>
  <div className="flex w-full">
    <button
  style={{
    backgroundColor: "#4da38d",
    color: "white",
    fontWeight: "bold"
  }}
  className="py-4 w-full rounded-none hover:scale-105 transition-all duration-300 ease-in-out"
>
  Como Ayudarnos
  <i className="fas fa-arrow-up-right-from-square ml-10"></i>
</button>


    <button
      style={{
        backgroundColor: "#a3936f",
        color: "white",
        fontWeight: "bold"
      }}
      className="py-4 w-full rounded-none hover:scale-105 transition-all duration-300 ease-in-out"
    >
      Noticias
        <i className="fas fa-arrow-up-right-from-square ml-10"></i>
    </button>

    <button
      style={{
        backgroundColor: "#c76149",
        color: "white",
        fontWeight: "bold"
      }}
      className="py-4 w-full rounded-none hover:scale-105 transition-all duration-300 ease-in-out"
    >
      Redes Sociales
        <i className="fas fa-arrow-up-right-from-square ml-10"></i>
    </button>
  </div>
 
</div>




{/*PONDREMOS LO QUE IGUE AQUI*/}
  {/*  <SectionFD />*/}
  <SectionFD />
  {/*Social Circle */}
    <SocialCircle />
{/* Footer */}
    <Footer />


</div>
</>
  );
}
