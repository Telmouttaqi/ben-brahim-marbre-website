import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Facebook, Instagram } from 'lucide-react';
import logo from '../assets/logo/logo.jpeg';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert('Merci de votre inscription!');
      setEmail('');
    }
  };

  return (
    <footer>
      <div className="footerGrid">
        <div>
          <img src={logo} alt="Ben Brahim Marbre - Logo" />
          <p>Spécialiste du marbre, granit et pierre naturelle au Maroc.</p>
          <div className="socialLinks">
            <a href="https://www.facebook.com/profile.php?id=61579367500038" target="_blank" rel="noopener noreferrer" title="Facebook">
              <Facebook size={20} />
            </a>
            <a href="https://www.instagram.com/benbrahimmarbre?igsh=bGpwd3VyZ3A2MmVh" target="_blank" rel="noopener noreferrer" title="Instagram">
              <Instagram size={20} />
            </a>
          </div>
        </div>
        <div>
          <h4>Liens rapides</h4>
          <a href="#home">Accueil</a>
          <a href="#marbres">Marbres</a>
          <a href="#granite">Granite</a>
          <a href="#vasques">Vasques</a>
          <a href="#tables">Tables</a>
        </div>
        <div>
          <h4>Contactez-nous</h4>
          <p>
            <MapPin size={14} />
            <a href="https://www.google.com/maps?q=33.508917,-7.618278" target="_blank" rel="noopener noreferrer">
              Zone Industrielle, Route d'El Jadida, Casablanca
            </a>
          </p>
          {/* <p className="coordinates"></p> */}
          <p>
            <MessageCircle size={14} />
            <a href="https://wa.me/212660865052" target="_blank" rel="noopener noreferrer">WhatsApp : +212660865052</a>
          </p>
          <p>
            <Phone size={14} />
            <a href="tel:+212660865052">Téléphone : +212660865052</a>
          </p>
          <p>
            <Mail size={14} /> contact@benbrahimmarbre.ma
          </p>
        </div>
        <div>
          <h4>Newsletter</h4>
          <form onSubmit={handleNewsletterSubmit}>
            <input
              type="email"
              placeholder="Votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">S'abonner</button>
          </form>
        </div>
      </div>
      <div className="copyright">© 2026 Ben Brahim Marbre. Tous droits réservés.</div>
    </footer>
  );
}
