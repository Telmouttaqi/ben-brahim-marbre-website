import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo/logo.jpeg';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="header">
      <Link className="brand" to="/" onClick={closeMenu}>
        <img src={logo} alt="Ben Brahim Marbre - Logo" />
      </Link>
      <nav className={`nav ${mobileMenuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={closeMenu}>Accueil</Link>
        <Link to="/category/marbles" onClick={closeMenu}>Marbres</Link>
        <Link to="/category/granites" onClick={closeMenu}>Granites</Link>
        <Link to="/category/vasques" onClick={closeMenu}>Vasques</Link>
        <Link to="/category/tables" onClick={closeMenu}>Tables</Link>
        <Link to="/category/tahajart" onClick={closeMenu}>Tahajart</Link>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>
      <div className="header-actions">
        <a className="quote" href="#contact" onClick={closeMenu}>Demander un devis</a>
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
