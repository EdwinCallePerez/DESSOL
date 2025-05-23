import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RouteTransition from "./RouteTransition";

export default function ContentWrapper({ children }) {
  const [showTransition, setShowTransition] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (href) => {
    setShowTransition(true);
    setTimeout(() => {
      navigate(href);
      setShowTransition(false);
    }, 500);
  };

  return (
    <main style={{ position: "relative", overflow: "hidden", paddingTop: "60px" }}>
      {showTransition && <RouteTransition />}
      {React.isValidElement(children)
        ? React.cloneElement(children, { handleNavigate })
        : children}
    </main>
  );
}
