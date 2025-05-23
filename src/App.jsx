import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./NavBar/Header/Header.jsx";
import ContentWrapper from "./NavBar/Header/ContentWrapper.jsx";
import RoutesContent from "./NavBar/Header/RoutesContent.jsx"; // Nuevo componente para rutas
import "./index.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <ContentWrapper>
          <RoutesContent /> {/* Aquí se inyectará handleNavigate */}
        </ContentWrapper>
      </div>
    </Router>
  );
}

export default App;
