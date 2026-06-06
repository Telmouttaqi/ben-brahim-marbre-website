import React from 'react';
import { Award, BadgeCheck, Truck, MessageCircle } from 'lucide-react';
import SectionTitle from './SectionTitle';
import ProductCard from './ProductCard';
import StatCard from './StatCard';
import carrare from '../assets/Marbres/CARRARE.jpeg';
import grisBenslimane from '../assets/Marbres/GRIS BENSLIMANE.jpeg';
import grisTaza from '../assets/Marbres/GRIS TAZA.jpeg';
import grisTundra from '../assets/Marbres/GRIS TUNDRA.jpeg';
import ibiza from '../assets/Marbres/IBIZA.jpeg';
import marrionImperial from '../assets/Marbres/MARRION_IMPERIAL.jpeg';
import perlatino from '../assets/Marbres/PERLATINO.jpeg';
import selvia from '../assets/Marbres/SELVIA.jpeg';
import travertin from '../assets/Marbres/TRAVERTIN.jpeg';
import vertGuatemala from '../assets/Marbres/VERT GUATEMALA.jpeg';
import graniteNoir from '../assets/granite-noir.jpg';
import absolu from '../assets/Granite/ABSOLU.jpeg';
import angolaFlamme from '../assets/Granite/ANGOLA_FLAMME.jpeg';
import angolaPoli from '../assets/Granite/ANGOLA_POLI.jpeg';
import balticBrown from '../assets/Granite/BALTIC_BROWN.jpeg';
import cremaJulia from '../assets/Granite/CREMA_JULIA.jpeg';
import galaxy from '../assets/Granite/GALAXY.jpeg';
import grandPerla from '../assets/Granite/GRAND_PERLA.jpeg';
import kashmirWhite from '../assets/Granite/KASHMIR_WHITE.jpeg';
import labradorBlue from '../assets/Granite/LABRADOR_BLUE.jpeg';
import labradorGris from '../assets/Granite/LABRADOR_GRIS.jpeg';
import newHalayeb from '../assets/Granite/NEW_HALAYEB.jpeg';
import rosavel from '../assets/Granite/ROSAVEL.jpeg';
import rosePorrino from '../assets/Granite/ROSE_PORRINO.jpeg';
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
  ['Marbre Carrare', 'Italie', carrare],
  ['Gris Benslimane', 'Maroc', grisBenslimane],
  ['Gris Taza', 'Maroc', grisTaza],
  ['Gris Tundra', 'Norvège', grisTundra],
  ['Ibiza', 'Espagne', ibiza],
  ['Marrion Imperial', 'Italie', marrionImperial],
  ['Perlatino', 'Italie', perlatino],
  ['Selvia', 'Turquie', selvia],
  ['Travertin', 'Turquie', travertin],
  ['Vert Guatemala', 'Guatemala', vertGuatemala]
];

const granites = [
  ['Granite Absolu', 'Afrique du Sud', absolu],
  ['Granite Angola Flammé', 'Angola', angolaFlamme],
  ['Granite Angola Poli', 'Angola', angolaPoli],
  ['Granite Baltic Brown', 'Finlande', balticBrown],
  ['Granite Crema Julia', 'Italie', cremaJulia],
  ['Granite Galaxy', 'Inde', galaxy],
  ['Granite Grand Perla', 'Turquie', grandPerla],
  ['Granite Kashmir White', 'Inde', kashmirWhite],
  ['Granite Labrador Blue', 'Brésil', labradorBlue],
  ['Granite Labrador Gris', 'Brésil', labradorGris],
  ['Granite New Halayeb', 'Égypte', newHalayeb],
  ['Granite Rosavel', 'Portugal', rosavel],
  ['Granite Rose Porrino', 'Italie', rosePorrino]
];

const vasques = [
  ['Vasque Carrara', vasqueCarrara],
  ['Vasque Noir Marquina', vasqueNoirMarquina],
  ['Vasque Beige Royal', vasqueBeigeRoyal],
  ['Vasque Travertin', vasqueTravertin]
];

const tables = [
  ['Table Ronde Marbre', tableRonde],
  ['Table À Manger Luxe', tableManger],
  ['Table Basse Marbre', tableBasse],
  ['Table Ovale Marbre', tableOvale]
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

      <section id="granite" className="section">
        <SectionTitle sub="Explorez notre gamme de granits robustes et élégants">
          Catalogue des <span>Granites</span>
        </SectionTitle>
        <div className="grid six">
          {granites.map((granite, index) => (
            <ProductCard item={granite} key={index} />
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
          <a className="btn" href="https://wa.me/212660865052" target="_blank" rel="noopener noreferrer">
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
