import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import StatCard from '../components/StatCard';
import { Award, BadgeCheck, Truck, MessageCircle } from 'lucide-react';
import '../styles.css';

// Import images
import carrare from '../assets/Marbres/CARRARE.jpeg';
import absolu from '../assets/Granite/ABSOLU.jpeg';
import vasqueCarrara from '../assets/vasque-carrara.jpg';
import tableRonde from '../assets/table-ronde.jpg';
import facades from '../assets/facades.jpg';

const FeaturedCard = ({ title, subtitle, image, onClick, category }) => (
  <div 
    onClick={onClick}
    style={{
      cursor: 'pointer',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      background: 'white'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-8px)';
      e.currentTarget.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.15)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }}
  >
    <img 
      src={image} 
      alt={title}
      style={{
        width: '100%',
        height: '300px',
        objectFit: 'cover'
      }}
    />
    <div style={{ padding: '20px' }}>
      <h3 style={{ margin: '10px 0', color: '#333', fontSize: '18px', fontWeight: 'bold' }}>
        {title}
      </h3>
      <p style={{ margin: '8px 0', color: '#666', fontSize: '14px' }}>
        {subtitle}
      </p>
      <button
        style={{
          marginTop: '15px',
          padding: '10px 20px',
          background: '#C1272D',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: 'bold'
        }}
      >
        Voir Plus
      </button>
    </div>
  </div>
);

export default function HomePage() {
  const navigate = useNavigate();

  const handleNavigate = (category) => {
    navigate(`/category/${category}`);
  };

  return (
    <>
      <Header />
      <Hero />
      <main>
        {/* Featured Categories */}
        <section className="section">
          <SectionTitle sub="Découvrez nos catégories principales">
            Explorez nos <span>Collections</span>
          </SectionTitle>
          
          <div className="grid four" style={{ marginBottom: '60px' }}>
            <FeaturedCard
              title="Marbre Carrare"
              subtitle="Marbre premium d'Italie"
              image={carrare}
              onClick={() => handleNavigate('marbles')}
              category="marbles"
            />
            <FeaturedCard
              title="Granite Absolu"
              subtitle="Granite robuste d'Afrique du Sud"
              image={absolu}
              onClick={() => handleNavigate('granites')}
              category="granites"
            />
            <FeaturedCard
              title="Vasque Carrara"
              subtitle="Élégance pour la salle de bain"
              image={vasqueCarrara}
              onClick={() => handleNavigate('vasques')}
              category="vasques"
            />
            <FeaturedCard
              title="Table Ronde Marbre"
              subtitle="Table de luxe en marbre"
              image={tableRonde}
              onClick={() => handleNavigate('tables')}
              category="tables"
            />
          </div>

          {/* Tahajart Section */}
          <div style={{ marginTop: '80px', textAlign: 'center' }}>
            <SectionTitle sub="Découvrez notre gamme Tahajart exclusive">
              <span>Tahajart</span> - Pierre Naturelle Traditionnelle
            </SectionTitle>
            <div style={{ marginTop: '40px' }}>
              <FeaturedCard
                title="Tahajart Premium"
                subtitle="Pierre naturelle traditionnelle du Maroc"
                image={facades}
                onClick={() => handleNavigate('tahajart')}
                category="tahajart"
              />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats">
          <StatCard icon={<Award />} big="15+" text="Années d'expérience" />
          <StatCard icon={<BadgeCheck />} big="500+" text="Projets réalisés" />
          <StatCard icon={<Truck />} big="100%" text="Clients satisfaits" />
          <StatCard icon={<MessageCircle />} big="Livraison" text="Partout au Maroc" />
        </section>
      </main>
      <Footer />
    </>
  );
}
