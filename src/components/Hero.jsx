import React from 'react';
import { Award, BadgeCheck, Truck } from 'lucide-react';
import Feature from './Feature';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="heroText">
        <h1>
          L'EXCELLENCE DU MARBRE
          <br />
          POUR VOS PROJETS <span>D'EXCEPTION</span>
        </h1>
        <p>
          Marbre, Granit, Quartz et plus encore.
          <br />
          Qualité supérieure – Prix compétitifs – Finitions parfaites.
        </p>
        <div>
          <a className="btn" href="#marbres">Découvrir nos marbres</a>
          <a className="btn secondary" href="#realisations">Voir nos réalisations</a>
        </div>
      </div>
      <div className="heroFeatures">
        <Feature
          icon={<Award />}
          title="Qualité Premium"
          text="Pierres sélectionnées avec soin"
        />
        <Feature
          icon={<BadgeCheck />}
          title="Prix Compétitifs"
          text="Le meilleur rapport qualité / prix"
        />
        <Feature
          icon={<Truck />}
          title="Livraison Rapide"
          text="Partout au Maroc"
        />
      </div>
    </section>
  );
}
