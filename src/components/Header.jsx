import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo/logo.jpeg';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="header">
      <a className="brand" href="#home" onClick={closeMenu}>
        <img src={logo} alt="Ben Brahim Marbre - Logo" />
      </a>
      <nav className={`nav ${mobileMenuOpen ? 'active' : ''}`}>
        <a href="#home" onClick={closeMenu}>Accueil</a>
        <a href="#marbres" onClick={closeMenu}>Marbres</a>
        <a href="#granite" onClick={closeMenu}>Granite</a>
        <a href="#vasques" onClick={closeMenu}>Vasques</a>
        <a href="#tables" onClick={closeMenu}>Tables</a>
        <a href="#realisations" onClick={closeMenu}>Réalisations</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>
      <div className="header-actions">
        <a className="quote" href="https://wa.me/212660865052" target="_blank" rel="noopener noreferrer">Demander un devis</a>
        <button
          className="hamburger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
