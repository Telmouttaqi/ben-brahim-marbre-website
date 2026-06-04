import React from 'react';
import { Award, BadgeCheck, Truck, MessageCircle } from 'lucide-react';
import SectionTitle from './SectionTitle';
import ProductCard from './ProductCard';
import StatCard from './StatCard';
import logo from '../assets/logo.jpg';
import marbreCarrara from '../assets/marbre-carrara.jpg';
import noirMarquina from '../assets/noir-marquina.jpg';
import beigeRoyal from '../assets/beige-royal.jpg';
import grisTundra from '../assets/gris-tundra.jpg';
import travertin from '../assets/travertin.jpg';
import graniteNoir from '../assets/granite-noir.jpg';
import vasqueCarrara from '../assets/vasque-carrara.jpg';
import vasqueNoirMarquina from '../assets/vasque-noir.jpg';
import vasqueBeigeRoyal from '../assets/vasque-beige.jpg';
import vasqueTravertin from '../assets/vasque-travertin.jpg';
import tableRonde from '../assets/table-ronde.jpg';
import tableManger from '../assets/table-manger.jpg';
import tableBasse from '../assets/table-basse.jpg';
import tableOvale from '../assets/table-ovale.jpg';
import facades from '../assets/facades.jpg';
import cuisines from '../assets/cuisines.jpg';
import escaliers from '../assets/escaliers.jpg';
import sallesBain from '../assets/salles-bain.jpg';
import solsInterieurs from '../assets/sols-interieurs.jpg';
import plansTravail from '../assets/plans-travail.jpg';
import ctaStones from '../assets/cta-stones.jpg';

const marbles = [
  ['Marbre Carrara', 'Italie', '650 DH / m²', marbreCarrara],
  ['Noir Marquina', 'Espagne', '850 DH / m²', noirMarquina],
  ['Beige Royal', 'Maroc', '550 DH / m²', beigeRoyal],
  ['Gris Tundra', 'Norvège', '700 DH / m²', grisTundra],
  ['Travertin Classique', 'Turquie', '450 DH / m²', travertin],
  ['Granite Noir Absolu', 'Afrique du Sud', '600 DH / m²', graniteNoir]
];

const vasques = [
  ['Vasque Carrara', 'À partir de 1 200 DH', vasqueCarrara],
  ['Vasque Noir Marquina', 'À partir de 1 500 DH', vasqueNoirMarquina],
  ['Vasque Beige Royal', 'À partir de 1 100 DH', vasqueBeigeRoyal],
  ['Vasque Travertin', 'À partir de 950 DH', vasqueTravertin]
];

const tables = [
  ['Table Ronde Marbre', 'À partir de 4 500 DH', tableRonde],
  ['Table À Manger Luxe', 'À partir de 7 500 DH', tableManger],
  ['Table Basse Marbre', 'À partir de 2 800 DH', tableBasse],
  ['Table Ovale Marbre', 'À partir de 6 200 DH', tableOvale]
];

const realisations = [
  ['Façades & Extérieurs', facades],
  ['Cuisines en Marbre', cuisines],
  ['Escaliers', escaliers],
  ['Salles de Bain', sallesBain],
  ['Sols & Intérieurs', solsInterieurs],
  ['Plans de Travail', plansTravail]
];

export default function Content() {
  return (
    <main>
      {/* Marbres Section */}
      <section id="marbres" className="section">
        <SectionTitle sub="Découvrez notre sélection de marbres et granits haut de gamme">
          Catalogue des <span>Marbres</span>
        </SectionTitle>
        <div className="grid six">
          {marbles.map((marble, index) => (
            <ProductCard item={marble} key={index} />
          ))}
        </div>
      </section>

      {/* Vasques & Tables Section */}
      <section className="split">
        <div id="vasques">
          <SectionTitle sub="Élégance et raffinement pour vos salles de bain">
            Vasques en <span>Marbre</span>
          </SectionTitle>
          <div className="grid four">
            {vasques.map((vasque, index) => (
              <ProductCard item={vasque} key={index} />
            ))}
          </div>
        </div>
        <div id="tables">
          <SectionTitle sub="Des tables uniques pour un intérieur prestigieux">
            Tables en <span>Marbre</span>
          </SectionTitle>
          <div className="grid four">
            {tables.map((table, index) => (
              <ProductCard item={table} key={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Réalisations Section */}
      <section id="realisations" className="section">
        <SectionTitle sub="Découvrez nos projets réalisés avec passion et expertise">
          Nos <span>Réalisations</span>
        </SectionTitle>
        <div className="projects">
          {realisations.map((realisation, index) => (
            <div className="project" key={index}>
              <img src={realisation[1]} alt={realisation[0]} loading="lazy" />
              <b>{realisation[0]}</b>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <StatCard icon={<Award />} big="15+" text="Années d'expérience" />
        <StatCard icon={<BadgeCheck />} big="500+" text="Projets réalisés" />
        <StatCard icon={<MessageCircle />} big="100%" text="Clients satisfaits" />
        <StatCard icon={<Truck />} big="Livraison" text="Partout au Maroc" />
        <StatCard icon={<Award />} big="Qualité" text="Garantie" />
      </section>

      {/* CTA Section */}
      <section id="contact" className="cta">
        <img src={ctaStones} alt="Samples de marbre" />
        <div>
          <h2>Un projet en tête ?</h2>
          <p>Demandez votre devis gratuit dès maintenant.</p>
          <ul>
            <li>Réponse rapide</li>
            <li>Conseils personnalisés</li>
            <li>Meilleur prix garanti</li>
          </ul>
        </div>
        <div className="ctaButtons">
          <a className="btn" href="mailto:contact@benbrahimmarbre.ma">
            Demander un devis
          </a>
          <a className="whatsapp" href="https://wa.me/212660865052" target="_blank" rel="noopener noreferrer">
            Parler sur WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
