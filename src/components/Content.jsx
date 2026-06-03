import React from 'react';
import { Award, BadgeCheck, Truck, MessageCircle } from 'lucide-react';
import SectionTitle from './SectionTitle';
import ProductCard from './ProductCard';
import StatCard from './StatCard';

const marbles = [
  ['Marbre Carrara', 'Italie', '650 DH / m²', '/src/assets/marbre-carrara.jpg'],
  ['Noir Marquina', 'Espagne', '850 DH / m²', '/src/assets/noir-marquina.jpg'],
  ['Beige Royal', 'Maroc', '550 DH / m²', '/src/assets/beige-royal.jpg'],
  ['Gris Tundra', 'Norvège', '700 DH / m²', '/src/assets/gris-tundra.jpg'],
  ['Travertin Classique', 'Turquie', '450 DH / m²', '/src/assets/travertin.jpg'],
  ['Granite Noir Absolu', 'Afrique du Sud', '600 DH / m²', '/src/assets/granite-noir.jpg']
];

const vasques = [
  ['Vasque Carrara', 'À partir de 1 200 DH', '/src/assets/vasque-carrara.jpg'],
  ['Vasque Noir Marquina', 'À partir de 1 500 DH', '/src/assets/vasque-noir.jpg'],
  ['Vasque Beige Royal', 'À partir de 1 100 DH', '/src/assets/vasque-beige.jpg'],
  ['Vasque Travertin', 'À partir de 950 DH', '/src/assets/vasque-travertin.jpg']
];

const tables = [
  ['Table Ronde Marbre', 'À partir de 4 500 DH', '/src/assets/table-ronde.jpg'],
  ['Table À Manger Luxe', 'À partir de 7 500 DH', '/src/assets/table-manger.jpg'],
  ['Table Basse Marbre', 'À partir de 2 800 DH', '/src/assets/table-basse.jpg'],
  ['Table Ovale Marbre', 'À partir de 6 200 DH', '/src/assets/table-ovale.jpg']
];

const realisations = [
  ['Façades & Extérieurs', '/src/assets/facades.jpg'],
  ['Cuisines en Marbre', '/src/assets/cuisines.jpg'],
  ['Escaliers', '/src/assets/escaliers.jpg'],
  ['Salles de Bain', '/src/assets/salles-bain.jpg'],
  ['Sols & Intérieurs', '/src/assets/sols-interieurs.jpg'],
  ['Plans de Travail', '/src/assets/plans-travail.jpg']
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
        <img src="/src/assets/cta-stones.jpg" alt="Samples de marbre" />
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
          <a className="whatsapp" href="https://wa.me/212661616161">
            Parler sur WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
