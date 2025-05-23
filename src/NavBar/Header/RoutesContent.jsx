import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../components/Home.jsx";
import About from "../../components/About.jsx";
import EnProceso from "../../components/EnProceso.jsx";   
export default function RoutesContent({ handleNavigate }) {
  return (
    <main className="pt-16">
      <Routes>
        <Route path="/" element={<Home handleNavigate={handleNavigate} />} />
        <Route path="/home" element={<Home handleNavigate={handleNavigate} />} />
        <Route path="/about" element={<About handleNavigate={handleNavigate} />} />
        <Route path="/programs" element={<EnProceso />} />
        <Route path="/programs" element={< EnProceso  />} />
      </Routes>
    </main>
  );
}
