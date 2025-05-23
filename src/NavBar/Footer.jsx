import '@fortawesome/fontawesome-free/css/all.min.css';
import '../Utils/globals.css'; // o la ruta correcta si está en otra carpeta
import'../Utils/QuieroDonar';
import QuieroDonar from '../Utils/QuieroDonar';

export default function Footer() {
  return (
    <>
<div className="w-full py-7 px-6 text-white bg-black flex flex-col md:flex-row"
style={{
          backgroundColor: "#093041",
        }}>
  {/* Parte 1: Texto y botón */}
  
  <div className="flex-1 flex flex-col items-center justify-center text-center">
    <h2 className="text-2xl font-bold text-[#1b7c42]">
      Sé parte de nuestra Familia
    </h2>
    <button className="mt-6 bg-white hover:bg-green-700 text-black font-semibold py-1 px-6 rounded-full shadow-md transition-all duration-300 hover:scale-105 animate-bounce-infinite">
  Quiero Donar
</button>

  </div>
<i className="fas fa-hand-holding-usd fa-3x mb-2"></i>
  {/* Parte 2: Redes sociales */}
  <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4 mt-8 md:mt-0">
    <p className="text-white font-semibold">Síguenos en redes sociales</p>
    <div className="flex space-x-6 text-2xl">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook-f"></i>
      </a>

      <a href="https://wa.me/59167640385" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  </div>
</div>
<div className="w-full py-0.5 px-6 text-white bg-black flex flex-col md:flex-row"
style={{
          backgroundColor: "white",
        }}></div>


      <div
        className="w-full py-15 px-6 text-white text-center bg-fixed bg-center"
        style={{ backgroundColor: "#093041" }}
      >
        
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">
          {/* Sección 1 */}
          <div className="flex-1 flex flex-row justify-center items-center gap-6 p-4">
            {/* Logo a la izquierda */}
  <div >
    <img
     src={`${import.meta.env.BASE_URL}images/FundacionDessol.png`}

  alt="Logo de la empresa"
  style={{ width: '3cm', height: '3cm' }}
  className="object-contain"
/>

  </div>
             {/* Lista a la derecha */}
 <div>
  <ul className="space-y-2 font-semibold text-left">
    <li><a href="/home" className="text-white hover:underline">- Inicio</a></li>
    <li><a href="/about" className="text-white hover:underline">- Quienes Somos</a></li>
    <li><a href="#programas" className="text-white hover:underline">- Programas</a></li>
    <li><a href="#multimedia" className="text-white hover:underline">- Multimedia</a></li>
    <li><a href="#dona-aqui" className="text-white hover:underline">- Dona Aquí</a></li>
  </ul>
</div>

</div>
          {/* Sección 2 */}
         <div className="flex-1 flex flex-col justify-center items-center p-4 text-white">
  
    {/* Mapa debajo del botón */}
  <div className="w-full max-w-md h-64 mt-6 rounded-xl overflow-hidden shadow-lg">
    <h2 className="text-2xl font-bold text-[#1b7c42]">
        Ubicación
    </h2>
    <iframe
      title="Ubicación Fundación DESSOL"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d457.08620618567585!2d-65.26769508183952!3d-19.022629169387383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93fbc8be7a1a9431%3A0x13dbe28bba90b65f!2sXPGM%2BX2R%2C%20Sucre!5e1!3m2!1ses!2sbo!4v1747867535306!5m2!1ses!2sbo"
      className="w-full h-full border-0"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>

          

          {/* Sección 3 */}
          <div className="flex-1 flex flex-col justify-center p-4  text-left ">
            <h3 className="text-xl font-bold text-[#d8ad41] mb-4">Búsquenos</h3>
            <p className="font-semibold">Fundación DESSOL</p>
            <p><i className="fas fa-envelope text-[#1b7c42] mr-2"></i>fundaciondessol.2025@gmail.com</p>
            <p><i className="fas fa-phone-alt text-[#1b7c42] mr-2"></i>+591 67640385</p>
            <p><i className="fas fa-map-marker-alt text-[#1b7c42] mr-2"></i>Sucre - Bolivia, Calle Pasaje Peatonal S/N,<br />Barrio Bajo Tucsupaya</p>
          </div>
        </div>
      </div>
       <div
    className="w-full py-3 px-6 text-white text-center bg-fixed bg-center"
    style={{ backgroundColor: "#093041" }}
      >
            Copyright © 2025 www.fundaciondessol.org
    </div>
    </>
  );
}
