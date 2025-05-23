import { useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenuButton from "./MobileMenuButton";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        {/* Navegación desktop */}
        <nav className={`hidden md:flex ${styles.navDesktop}`}>
          <NavLinks />
        </nav>
        {/* Botón menú móvil */}
        <MobileMenuButton
          open={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div className={`md:hidden ${styles.mobileMenu}`}>
          <NavLinks isMobile onClick={() => setMenuOpen(false)} />
        </div>
      )}
    </header>
  );
}
