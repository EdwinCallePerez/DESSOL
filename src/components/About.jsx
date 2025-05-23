import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "../NavBar/Footer";
import QuieroDonar from "../Utils/QuieroDonar";
export default function About() {
  return (
    <>
      {/* Sección principal con texto de la Fundación */}
      <div
        className="w-full py-10 px-6 text-gray-900 text-center bg-fixed bg-center"
        style={{
          backgroundColor: "#f0fdf4", // Verde muy claro institucional
        }}
      >
        <div className="flex flex-col items-center justify-center max-w-xl mx-auto bg-white bg-opacity-70 p-6 rounded-2xl shadow-xl text-gray-900">
          <h2 className="text-3xl font-extrabold text-[#1b7c42] mb-2 tracking-wide">
            FUNDACIÓN DESSOL
          </h2>
          <h4 className="text-xl font-semibold text-[#256029] mb-4">
            DESARROLLO AL SERVICIO SOCIAL
          </h4>
          <p className="text-base leading-relaxed text-gray-800">
            Somos una institución sin fines de lucro que promueve y apoya el desarrollo integral de niños, adolescentes, jóvenes, mujeres y ancianos en situación de vulnerabilidad.
          </p>
        </div>
      </div>

      {/* Sección de Misión y Visión */}
      <div
        className="w-full py-10 px-6 text-gray-900 text-center bg-fixed bg-center"
        style={{
          backgroundColor: "#f0fdf4", // Verde muy claro institucional
        }}
      >
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Misión */}
          
          <div className="max-w-md">
              
            <h2 className="text-3xl font-extrabold text-[#1b7c42] mb-2 tracking-wide">
              MISIÓN
               
            </h2>
           
            <p>
              Somos una organización que trabaja con los más necesitados, proveyendo oportunidades de desarrollo integral para mejorar las condiciones de vida de los niños, jóvenes, familias y comunidad.
            </p>
         
          </div>

          {/* Separador */}
          
          <span className="text-4xl font-bold text-[#1b7c42] hidden md:block">|</span>

          {/* Visión */}
          <div className="max-w-md">
          
             
            <h2 className="text-3xl font-extrabold text-[#1b7c42] mb-2 tracking-wide">
              VISIÓN
            </h2>
            <p>
              En el 2029 seremos referentes en el desarrollo integral y el servicio comprometido con la niñez, juventud, familia y comunidad.
            </p>
          </div>
        </div>
      </div>
        
<div
  className="w-full flex flex-col md:flex-row h-auto md:h-72 lg:h-96"
  style={{ background: "linear-gradient(135deg, #093041 0%, #4a90e2 100%)" }}
>
  {/* Columna con imagen de fondo */}
 <div
  className="w-full md:w-1/1 bg-center bg-cover shadow-lg rounded-t-lg md:rounded-l-lg md:rounded-tr-none relative"
  style={{
   backgroundImage: `url(${import.meta.env.BASE_URL}images/Alimentos.png)`,

    minHeight: "300px", // para móviles
    height: "100%",
  }}
>
<QuieroDonar />





</div>



  {/* Columna con botones */}
  <div className="w-full md:w-1/2 flex flex-col justify-center items-center gap-4 p-6 rounded-b-lg md:rounded-r-lg md:rounded-bl-none bg-gradient-to-br from-[#9ae3d3] via-[#6dc7c3] to-[#3baea0]">
    <h2 className="text-3xl font-extrabold mb-6 text-white drop-shadow-md text-center">
      Informes de Gestión
    </h2>

    {[
      { year: " de Gestion", color: "bg-red-500 hover:bg-rose-600" },
      { year: " Financiero", color: "bg-yellow-500 hover:bg-yellow-600" },
      { year: "de Perfiles de la Junta ", color: "bg-green-500 hover:bg-green-600" },
      { year: "de Estados financieros", color: "bg-blue-500 hover:bg-blue-600" },
      { year: "RUT", color: "bg-purple-500 hover:bg-purple-600" },
    ].map(({ year, color }) => (
      <a
        key={year}
        href={`/docs/informe-${year.trim().toLowerCase().replace(/\s+/g, '-')}.docx`}
        download={`informe-${year.trim().toLowerCase().replace(/\s+/g, '-')}.docx`}
        className={`${color} text-white font-semibold py-2 px-6 rounded-md transition transform hover:scale-105 shadow-md text-center block w-4/5 max-w-xs`}
      >
        Informe{year}

        <i className="fas fa-file-alt ml-4"></i>
      </a>
    ))}
  </div>
</div>

  {/*PREMIOS Y RECONOCIMIENTOS */}
<div
        className="w-full py-10 px-6 text-gray-900 text-center bg-fixed bg-center"
        style={{
           backgroundColor: "#f0fdf4",
        }}
      >

         
          <div className="flex flex-col items-center justify-center max-w-3xl mx-auto bg-white bg-opacity-90 p-6 rounded-2xl shadow-xl text-gray-900">
          <h2 className="text-3xl font-extrabold text-[#1b7c42] mb-2 tracking-wide">
            PREMIOS Y RECONOCIMIENTOS
          </h2>
          <h4 className="text-xl font-semibold text-[#256029] mb-4">
            DESARROLLO AL SERVICIO SOCIAL
          </h4>
            <ul className="list-disc list-inside pl-4 text-justify">
        <li>Orden Gonzálo Jiménez de Quesada por la Alcaldía de Bogotá.</li>
        <li>La Cruz Roja de Noruega le otorgó la Condecoración INTER-ARMA CARITAS en 1977.</li>
        <li>La Fundadora Mercedes Rosario Pineda de Martínez fue nominada entre las 10 Mujeres del Año, en Bogotá, Colombia, 1978.</li>
        <li>Orden Gonzálo Jiménez de Quesada por la Alcaldía de Bogotá.</li>
        <li>La Cruz Roja de Noruega le otorgó la Condecoración INTER-ARMA CARITAS en 1977.</li>
        <li>La Fundadora Mercedes Rosario Pineda de Martínez fue nominada entre las 10 Mujeres del Año, en Bogotá, Colombia, 1978.</li>
        <li>Orden Gonzálo Jiménez de Quesada por la Alcaldía de Bogotá.</li>
        <li>La Cruz Roja de Noruega le otorgó la Condecoración INTER-ARMA CARITAS en 1977.</li>
        <li>La Fundadora Mercedes Rosario Pineda de Martínez fue nominada entre las 10 Mujeres del Año, en Bogotá, Colombia, 1978.</li>
        <li>Orden Gonzálo Jiménez de Quesada por la Alcaldía de Bogotá.</li>
        <li>La Cruz Roja de Noruega le otorgó la Condecoración INTER-ARMA CARITAS en 1977.</li>
        <li>La Fundadora Mercedes Rosario Pineda de Martínez fue nominada entre las 10 Mujeres del Año, en Bogotá, Colombia, 1978.</li>
        <li>Orden Gonzálo Jiménez de Quesada por la Alcaldía de Bogotá.</li>
        <li>La Cruz Roja de Noruega le otorgó la Condecoración INTER-ARMA CARITAS en 1977.</li>
        <li>La Fundadora Mercedes Rosario Pineda de Martínez fue nominada entre las 10 Mujeres del Año, en Bogotá, Colombia, 1978.</li>
      </ul>
        </div>
      </div>


{/* Nuestro Equipos */}

{/* Título con fondo armónico */}
<div className="mb-6 flex justify-center">
  <div
    className="w-full max-w-5xl text-center py-6 px-4 rounded-lg shadow-sm bg-green-500 hover:bg-green-600 transition duration-300"
  >
    <h2 className="text-2xl font-extrabold text-white tracking-wide font-serif relative inline-block pb-2">
      NUESTRO EQUIPO
     
      <span className="block h-1 w-full bg-white rounded-full mt-2 animate-pulse"></span>
    </h2>
     <p>
        Esto es el lugar donde entrara una descripion del Equipo
      </p>
  </div>
</div>


{/* Imagen del equipo */}
<div className="mb-6 flex justify-center">
  <img
    src={`${import.meta.env.BASE_URL}images/Equipo.png`}
  // Asegúrate de que esta imagen exista en tu proyecto
    alt="Foto del equipo"
    className="rounded-lg shadow-lg w-full max-w-5xl object-cover"
  />
</div>

{/* Texto de agradecimiento */}
<div className="mb-10 flex justify-center">
  <div className="w-full max-w-4xl text-center px-6 text-lg text-gray-700 leading-relaxed">
    <p>
   Nos complace presentar a
 quienes integran la junta
 directiva de la Fundación, un
 equipo de profesionales y líderes
 comprometidos con nuestra
 misión, y con una amplia
 experiencia en distintos ámbitos. 
Durante el año 2024, su liderazgo
 y visión estratégica fueron
 fundamentales para fortalecer
 nuestras acciones, asegurar la
 transparencia en la gestión y
 guiar el rumbo institucional</p>
  </div>
</div>


{/* Sección de espacio */}
<div
        className="w-full py-1 px-6 text-gray-900 text-center bg-fixed bg-center"
        style={{
          backgroundColor: "#f0fdf4", // Verde muy claro institucional
        }}
      >

      </div>

      {/*Nuestros aliados*/}
<div
  className="w-full max-w-[900px] flex flex-col items-center"
  style={{
    height: "7cm",
    padding: "0.3cm 1cm",
    margin: "0 auto",
    backgroundColor: "#374151",  // azul claro suave
  }}
>
  {/* Primera fila: imagen única centrada, altura 3cm */}
  <div
    className="w-full flex justify-center"
    style={{ height: "3cm"}}
  >
    <img
      src={`${import.meta.env.BASE_URL}images/Compassionj.png`}
      alt="Imagen principal"
      style={{ height: "3cm", objectFit: "contain" }}
    />
  </div>

  {/* Segunda fila: tres imágenes en fila, altura 3cm */}
  <div
    className="w-full flex justify-center gap-4"
    style={{ height: "3cm" }}
  >
    <img
      src={`${import.meta.env.BASE_URL}images/cca.png`}
      alt="Imagen 2"
      style={{ height: "3cm", objectFit: "contain" }}
    />
    <img
      src={`${import.meta.env.BASE_URL}images/b.png`}
      alt="Imagen 3"
      style={{ height: "3cm", objectFit: "contain" }}
    />
    <img
      src={`${import.meta.env.BASE_URL}images/Sucre.png`}
      alt="Imagen 4"
      style={{ height: "3cm", objectFit: "contain" }}
    />
  </div>
</div>

{/*HISTORIA DE LA FUNDACION */}
<div
  className="w-full px-6 py-12 text-gray-800 text-center bg-fixed bg-center"
  style={{ backgroundColor: "#f0fdf4" }} // Verde claro armonioso
>
  {/* Título con ícono */}
  <div className="mb-8">
    <h2 className="text-4xl font-bold text-emerald-800 tracking-wide font-serif relative inline-block">
      <i className="fas fa-seedling text-green-600 mr-3 animate-pulse"></i>
      Nuestra Historia
     

      <span className="block h-1 w-1/2 mx-auto bg-emerald-400 rounded-full mt-2 animate-pulse"></span>
    </h2>
  </div>

  {/* Contenido principal con imagen y texto */}
  <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto gap-10">
    {/* Imagen de la fundación */}
    <img
       src={`${import.meta.env.BASE_URL}images/1.png`}
                   // Asegúrate de que esta imagen exista en tu proyecto
      alt="Historia de la Fundación"
      className="w-full md:w-1/2 rounded-lg shadow-xl object-cover"
    />

    {/* Texto explicativo */}
    <div className="text-left md:w-1/2">
      <p className="text-lg leading-relaxed font-light mb-6">
        <span className="text-green-700 font-semibold">La Fundación DESSOL</span> nació del corazón de una comunidad comprometida con el servicio, guiada por los principios cristianos de amor y justicia. Desde 2016, hemos caminado junto a niños, jóvenes y familias vulnerables, sembrando esperanza en sus corazones a través de educación, salud y valores.
      </p>

      <p className="text-lg leading-relaxed font-light">
       Tras obtener nuestra personería jurídica en 2018, hemos
 trabajado incansablemente para brindar esperanza y
 oportunidades a quienes más lo necesitan.
 Con gran satisfacción presentamos la Memoria Anual de
 la Fundación Desarrollo al Servicio Social,
 correspondiente al año 2024. Gracias al apoyo exclusivo
 de Compassion Bolivia, hemos podido desarrollar
 nuestro trabajo enfocado en el bienestar integral de los
 niños y jóvenes, acompañándolos en su crecimiento en
 cuatro áreas fundamentales: físico, cognitivo, espiritual
 y socioemocional.
 Este informe refleja los avances, desafíos y el
 compromiso que nos impulsa a seguir sirviendo con
 amor y propósito</p>

      
    </div>
  </div>
</div>



<div
  className="w-full px-6 py-1 text-gray-800 text-center bg-fixed bg-center"
  style={{ backgroundColor: "#f0fdf4" }} // Verde claro armonioso
></div>


 <Footer />

    </>
  );
}



