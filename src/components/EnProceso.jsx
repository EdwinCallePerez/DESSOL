import React from "react";
import { motion } from "framer-motion";
import { Wrench, Loader2 } from "lucide-react"; // Asegúrate de tener lucide-react instalado

export default function EnProceso() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-sky-500 text-white overflow-hidden px-4">

      {/* Background Pulsing Circles */}
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full filter blur-3xl animate-pulse"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 4 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full filter blur-3xl animate-pulse"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.7, 0.4] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />
      
{/* Animated Gear Icon */}
      <motion.div
        className="mb-6"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      >
        <Wrench size={64} className="text-white drop-shadow-lg" />
      </motion.div>
      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4 text-center drop-shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
         Módulos en Construcción
      </motion.h1>

      {/* Animated Gear Icon */}
      <motion.div
        className="mb-6"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      >
        <Wrench size={64} className="text-white drop-shadow-lg" />
      </motion.div>

      {/* Spinner below icon (optional for extra motion) */}
      <motion.div
        className="w-16 h-16 border-4 border-t-white border-blue-300 rounded-full mb-6"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        style={{ boxShadow: "0 0 20px #3b82f6" }}
      />

      {/* Description */}
      <motion.p
        className="text-lg md:text-xl text-center max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        Se esta trabajando para habilitar esta sección para la Fundación DESSOL 💙<br />
        Gracias por tu paciencia.
      </motion.p>
    </div>
  );
}
