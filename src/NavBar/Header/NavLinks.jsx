import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styles from "./Header.module.css";

const links = [
  { href: "/home", label: "Inicio" },
  { href: "/about", label: "Quienes Somos" },
  {
    href: "/programs",
    label: "Programas",
    submenu: [
      { label: "Programa 1", href: "#programa1" },
      { label: "Programa 2", href: "#programa2" },
      { label: "Programa 3", href: "#programa3" },
    ],
  },
  {
    href: "#multimedia",
    label: "Multimedia",
    submenu: [
      { label: "Videos", href: "#video1" },
      { label: "Galeria", href: "#video2" },
    ],
  },
  { href: "#DonaAqui", label: "Dona Aquí" },
];

export default function NavLinks({ isMobile = false, onClick = () => {}, onNavigate }) {
  const [showTransition, setShowTransition] = useState(false);
  const navigate = useNavigate();

  const handleLinkClick = (e, href) => {
    // Si es hash o externo, dejamos que el navegador lo maneje
    if (href.startsWith("#") || href.startsWith("http")) return;

    e.preventDefault();

    if (onNavigate) {
      // Si hay función de navegación con animación, la usamos
      onNavigate(href);
      onClick(); // cierra menú si móvil
    } else {
      // Si no, navegamos normalmente
      setShowTransition(true);
      setTimeout(() => {
        navigate(href);
        setShowTransition(false);
        onClick(); // cierra menú si móvil
      }, 500);
    }
  };

  return (
    <>
     
      <nav>
        <ul
          className={
            isMobile
              ? "flex flex-col space-y-4 items-center"
              : "flex space-x-8 items-center"
          }
        >
          {links.map((link) => (
            <li
              key={link.href}
              className={link.submenu && !isMobile ? styles.group : undefined}
              style={{ position: "relative" }}
            >
              {link.href.startsWith("/") ? (
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={isMobile ? styles.mobileLink : styles.navDesktopLink}
                >
                  {link.label}
                </a>
              ) : (
                <a
                  href={link.href}
                  onClick={onClick} // solo cierra menú si móvil, sin prop extra
                  className={isMobile ? styles.mobileLink : styles.navDesktopLink}
                >
                  {link.label}
                </a>
              )}

              {/* Submenú Desktop */}
              {link.submenu && !isMobile && (
                <ul className={styles.submenu}>
                  {link.submenu.map((sublink) => (
                    <li key={sublink.href}>
                      <a
                        href={sublink.href}
                        onClick={(e) => {
                          // Solo cerrar menú en móvil o manejar hash
                          if (isMobile) onClick();
                        }}
                        className="block px-4 py-2 hover:bg-green-100 hover:text-green-700"
                      >
                        {sublink.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}

              {/* Submenú Móvil */}
              {link.submenu && isMobile && (
                <ul className="mt-2 space-y-2">
                  {link.submenu.map((sublink) => (
                    <li key={sublink.href}>
                      <a
                        href={sublink.href}
                        onClick={onClick} // cerrar menú al click
                        className={styles.mobileLink}
                      >
                        {sublink.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
