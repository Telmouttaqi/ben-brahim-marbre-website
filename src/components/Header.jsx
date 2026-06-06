import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import logo from '../assets/logo.jpg';

export default function Header() {
  return (
    <>
      <div className="topbar">
        <span>
          <MapPin size={15} />
          <a href="https://www.google.com/maps?q=33.508917,-7.618278" target="_blank" rel="noopener noreferrer">
            Showroom : Zone Industrielle, Route d'El Jadida, Casablanca
          </a>
        </span>
        <span className="social">
          <span>f</span>
          <span>◎</span>
          <a href="https://wa.me/212660865052" target="_blank" rel="noopener noreferrer" title="WhatsApp">
            <MessageCircle size={14} />
            <b>WhatsApp</b>
          </a>
          <a href="tel:+212660865052" title="Appeler">
            <Phone size={14} />
            <b>+212660865052</b>
          </a>
        </span>
      </div>
      <header className="header">
        <a className="brand" href="#home">
          <img src={logo} alt="Ben Brahim Marbre - Logo" />
        </a>
        <nav>
          <a className="active" href="#home">Accueil</a>
          <a href="#marbres">Marbres</a>
          <a href="#granite">Granite</a>
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
