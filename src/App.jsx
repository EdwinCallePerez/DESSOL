import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./NavBar/Header/Header.jsx";
import ContentWrapper from "./NavBar/Header/ContentWrapper.jsx";
import RoutesContent from "./NavBar/Header/RoutesContent.jsx";
import ScrollToTop from "./NavBar/Header/ScrollToTop.jsx"; // 👈 Asegúrate de importar bien
import "./index.css";

function App() {
  return (
    <Router basename="/DESSOL/">
      <ScrollToTop /> {/* 👈 Esto lo añade justo aquí */}
      <div className="app-container">
        <Header />
        <ContentWrapper>
          <RoutesContent />
        </ContentWrapper>
      </div>
    </Router>
  );
}

export default App;
