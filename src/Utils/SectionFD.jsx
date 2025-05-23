// src/Utils/VisionSection.jsx
import React from "react";

export default function VisionSection() {
  return (
    <>
      {/* Primera sección */}
      <div className="w-full py-5 px-6 text-gray-900 text-center bg-fixed bg-center" style={{ backgroundColor: "#f0fdf4" }}>
        <div className="w-full px-6 text-gray-900 text-center bg-fixed bg-center" style={{ backgroundColor: "#f0fdf4" }}>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {/* Imagen */}
            <div className="max-w-md">
              <div className="max-w-md overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="max-w-md overflow-hidden rounded-xl animate-fade-in">
                  <div className="max-w-md overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
                    <img
                      src={`${import.meta.env.BASE_URL}images/EduacacionPrincipios.png`}
                      alt="Imagen representativa"
                      className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Separador */}
            <span className="text-4xl font-bold text-[#1b7c42] hidden md:block">|</span>

            {/* Visión */}
            <div className="max-w-md">
              <h2 className="text-2xl font-extrabold text-[#1b7c42] mb-2 tracking-wide">Educación en principios y valores</h2>
              <p>
             Nuestro trabajo en la educación de principios y
 valores con nuestros niños y jóvenes es formar
 ciudadanos que puedan convivir de manera armónica
 y justa en su familia y comunidad.  </p>
            </div>
          </div>
        </div>
      </div>
 {/* Primera sección */}
      <div className="w-full py-5 px-6 text-gray-900 text-center bg-fixed bg-center" style={{ backgroundColor: "#f0fdf4" }}>
        <div className="w-full px-6 text-gray-900 text-center bg-fixed bg-center" style={{ backgroundColor: "#f0fdf4" }}>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {/* Imagen */}
            <div className="max-w-md">
              <div className="max-w-md overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="max-w-md overflow-hidden rounded-xl animate-fade-in">
                  <div className="max-w-md overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
                    <img
                    src={`${import.meta.env.BASE_URL}images/EducacionAmbiental.png`}
                     
                      alt="Imagen representativa"
                      className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Separador */}
            <span className="text-4xl font-bold text-[#1b7c42] hidden md:block">|</span>

            {/* Visión */}
            <div className="max-w-md">
              <h2 className="text-2xl font-extrabold text-[#1b7c42] mb-2 tracking-wide">Educación ambiental</h2>
              <p>
            Se realizó la jornada de Limpieza
 conjuntamente con técnicos de la
 alcaldía de Sucre, Todos los niños,
 jóvenes y sus padres fueron parte
 de este trabajo de limpieza de
 basuras, siendo de gran impacto
 en la zona.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Segunda sección invertida */}
      <div className="w-full py-3 px-6 text-gray-900 text-center bg-fixed bg-center" style={{ backgroundColor: "#f0fdf4" }}>
        <div className="w-full px-6 text-gray-900 text-center bg-fixed bg-center" style={{ backgroundColor: "#f0fdf4" }}>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {/* Visión duplicada */}
            <div className="max-w-md">
              <h2 className="text-2xl font-extrabold text-[#1b7c42] mb-2 tracking-wide"> Provisión de alimento</h2>
              <p>
              La provisión de alimento a niños y jóvenes es crucial
 para asegurar su bienestar y desarrollo físico,
 especialmente en contextos de vulnerabilidad. Con
 esta finalidad, la Fundación invirtió 108.831,23 Bs este
 año, otorgándoles almuerzo una vez a la semana.</p>
            </div>

            {/* Separador */}
            <span className="text-4xl font-bold text-[#1b7c42] hidden md:block">|</span>

            {/* Imagen */}
            <div className="max-w-md">
              <div className="max-w-md overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="max-w-md overflow-hidden rounded-xl animate-fade-in">
                  <div className="max-w-md overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
                    <img
                    src={`${import.meta.env.BASE_URL}images/Alimentos.png`}
                   
                      alt="Imagen representativa"
                      className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
         {/* Segunda sección invertida */}
      <div className="w-full py-3 px-6 text-gray-900 text-center bg-fixed bg-center" style={{ backgroundColor: "#f0fdf4" }}>
        <div className="w-full px-6 text-gray-900 text-center bg-fixed bg-center" style={{ backgroundColor: "#f0fdf4" }}>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {/* Visión duplicada */}
            <div className="max-w-md">
              <h2 className="text-2xl font-extrabold text-[#1b7c42] mb-2 tracking-wide">Atención médica</h2>
              <p>
             Con la finalidad de promover un estilo
 de vida saludable en nuestros niños y
 jóvenes, realizamos una atención
 médica para la detección temprana
 de enfermedades y evaluación de
 riesgos de salud a futuro, logrando
 revisar a 253 beneficiarios.  </p>
            </div>

            {/* Separador */}
            <span className="text-4xl font-bold text-[#1b7c42] hidden md:block">|</span>

            {/* Imagen */}
            <div className="max-w-md">
              <div className="max-w-md overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="max-w-md overflow-hidden rounded-xl animate-fade-in">
                  <div className="max-w-md overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
                    <img
                     src={`${import.meta.env.BASE_URL}images/AtencionMedica.png`}
                  
                      alt="Imagen representativa"
                      className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
}
