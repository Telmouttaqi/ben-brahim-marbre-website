import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import logo from '../assets/logo.jpg';

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
        </div>
        <div>
          <h4>Liens rapides</h4>
          <a href="#home">Accueil</a>
          <a href="#marbres">Marbres</a>
          <a href="#vasques">Vasques</a>
          <a href="#tables">Tables</a>
        </div>
        <div>
          <h4>Contactez-nous</h4>
          <p>
            <MapPin size={14} /> Zone Industrielle, Route d'El Jadida, Casablanca
          </p>
          <p>
            <Phone size={14} /> +212 6 61 61 61 61
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
