
import { useEffect, useState } from "react";

const images = [
  {
    url: "/images/4.png",
    caption: "Bienvenidos a Fundación DESSOL",
  },
  {
    url: "/images/1.png",
    caption: "Bienvenidos a Fundación DESSOL",
  },
  {
    url: "/images/2.png",
    caption: "Apoyando a niños y jóvenes",
  },
  {
    url: "/images/3.png",
    caption: "Formando líderes con valores",
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
    <div className="w-full">
      {/* Fondo general del carrusel */}
      <div
        className="relative w-full bg-fixed bg-center bg-cover min-h-screen"
        style={{
          backgroundImage: "url('/images/2.png')",
        }}
      >
        {/* Capa oscura encima del fondo */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

        {/* Carrusel centrado */}
        <div className="relative z-10 flex flex-col md:flex-row w-full min-h-screen items-center justify-center p-4 gap-6">
          <div
            className="relative rounded-lg shadow-lg overflow-hidden w-full md:flex-[0_0_60%]"
            style={{
              aspectRatio: `${CAROUSEL_RATIO}`,
              maxWidth: "1000px",
              backgroundColor: "black",
            }}
          >
            <img
              src={images[current].url}
              alt={`Slide ${current + 1}`}
              className="w-full h-full object-contain"
            />

            <div className="absolute bottom-6 left-6 bg-black bg-opacity-60 text-white p-4 rounded max-w-xs">
              <p className="mb-2 text-lg font-semibold">{images[current].caption}</p>
              <button className="bg-yellow-400 text-black px-4 py-1 rounded hover:bg-yellow-500 transition">
                Conócenos
              </button>
            </div>

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

  


    </div>
  );
}
