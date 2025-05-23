// src/components/SocialCircle.jsx
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
const SocialCircle = () => {
  return (
    <div
      className="relative w-full bg-fixed bg-center bg-cover min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}images/color.jpg)`,
      }}
    >
      {/* Círculo principal */}
      <div className="bg-white bg-opacity-90 rounded-full w-80 h-80 flex flex-col items-center justify-center shadow-xl animate-fade-in">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#1b7c42] mb-2">
          Redes Sociales
        </h2>

        {/* Iconos de redes sociales */}
        <div className="flex gap-6 text-[#1b7c42] mt-2 text-3xl">
           <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook-f"></i>
      </a>
     
     
      <a href="https://wa.me/59167640385" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i>
      </a>
        </div>
      </div>

      {/* Descripción debajo del círculo */}
      <div className="absolute bottom-12 text-center px-4">
        <p className="text-white text-lg md:text-xl font-medium bg-[#00000099] px-6 py-3 rounded-xl">
          Síguenos en nuestras redes para estar al tanto de todas las actividades y noticias de la Fundación DESSOL.
        </p>
      </div>
    </div>
  );
};

export default SocialCircle;
