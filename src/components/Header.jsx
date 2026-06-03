import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import logo from '../assets/logo.jpg';

export default function Header() {
  return (
    <>
      <div className="topbar">
        <span>
          <MapPin size={15} /> Showroom : Zone Industrielle, Route d'El Jadida, Casablanca
        </span>
        <span className="social">
          <span>f</span>
          <span>◎</span>
          <MessageCircle size={14} />
          <b>+212 6 61 61 61 61</b>
        </span>
      </div>
      <header className="header">
        <a className="brand" href="#home">
          <img src={logo} alt="Ben Brahim Marbre - Logo" />
        </a>
        <nav>
          <a className="active" href="#home">Accueil</a>
          <a href="#marbres">Marbres</a>
          <a href="#vasques">Vasques</a>
          <a href="#tables">Tables</a>
          <a href="#realisations">Réalisations</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="quote" href="#contact">Demander un devis</a>
      </header>
    </>
  );
}
