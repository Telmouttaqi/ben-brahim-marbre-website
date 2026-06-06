import React from 'react';
import { Award, BadgeCheck, Truck, MessageCircle } from 'lucide-react';
import SectionTitle from './SectionTitle';
import ProductCard from './ProductCard';
import StatCard from './StatCard';
import carrare from '../assets/marbres/CARRARE.jpeg';
import grisBenslimane from '../assets/marbres/GRIS BENSLIMANE.jpeg';
import grisTaza from '../assets/marbres/GRIS TAZA.jpeg';
import grisTundra from '../assets/marbres/GRIS TUNDRA.jpeg';
import ibiza from '../assets/marbres/IBIZA.jpeg';
import marrionImperial from '../assets/marbres/MARRION_IMPERIAL.jpeg';
import perlatino from '../assets/marbres/PERLATINO.jpeg';
import selvia from '../assets/marbres/SELVIA.jpeg';
import travertin from '../assets/marbres/TRAVERTIN.jpeg';
import vertGuatemala from '../assets/marbres/VERT GUATEMALA.jpeg';
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
  ['Marbre Carrare', 'Italie', '650 DH / m²', carrare],
  ['Gris Benslimane', 'Maroc', '620 DH / m²', grisBenslimane],
  ['Gris Taza', 'Maroc', '680 DH / m²', grisTaza],
  ['Gris Tundra', 'Norvège', '720 DH / m²', grisTundra],
  ['Ibiza', 'Espagne', '750 DH / m²', ibiza],
  ['Marrion Imperial', 'Italie', '700 DH / m²', marrionImperial],
  ['Perlatino', 'Italie', '780 DH / m²', perlatino],
  ['Selvia', 'Turquie', '760 DH / m²', selvia],
  ['Travertin', 'Turquie', '450 DH / m²', travertin],
  ['Vert Guatemala', 'Guatemala', '800 DH / m²', vertGuatemala]
];

const granites = [
  ['Granite Absolu', 'Afrique du Sud', '720 DH / m²', absolu],
  ['Granite Angola Flammé', 'Angola', '680 DH / m²', angolaFlamme],
  ['Granite Angola Poli', 'Angola', '690 DH / m²', angolaPoli],
  ['Granite Baltic Brown', 'Finlande', '750 DH / m²', balticBrown],
  ['Granite Crema Julia', 'Italie', '770 DH / m²', cremaJulia],
  ['Granite Galaxy', 'Inde', '820 DH / m²', galaxy],
  ['Granite Grand Perla', 'Turquie', '700 DH / m²', grandPerla],
  ['Granite Kashmir White', 'Inde', '830 DH / m²', kashmirWhite],
  ['Granite Labrador Blue', 'Brésil', '860 DH / m²', labradorBlue],
  ['Granite Labrador Gris', 'Brésil', '820 DH / m²', labradorGris],
  ['Granite New Halayeb', 'Égypte', '780 DH / m²', newHalayeb],
  ['Granite Rosavel', 'Portugal', '790 DH / m²', rosavel],
  ['Granite Rose Porrino', 'Italie', '810 DH / m²', rosePorrino]
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
