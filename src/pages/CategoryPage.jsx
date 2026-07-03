import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles.css';

// Import all product data
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

const categoryData = {
  marbles: {
    title: 'Marbres',
    subtitle: 'Découvrez notre sélection de marbres haut de gamme du monde entier',
    items: [
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
    ]
  },
  granites: {
    title: 'Granites',
    subtitle: 'Explorez notre gamme de granits robustes et élégants',
    items: [
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
    ]
  },
  vasques: {
    title: 'Vasques',
    subtitle: 'Élégance et raffinement pour vos salles de bain',
    items: [
      ['Vasque Carrara', vasqueCarrara],
      ['Vasque Noir Marquina', vasqueNoirMarquina],
      ['Vasque Beige Royal', vasqueBeigeRoyal],
      ['Vasque Travertin', vasqueTravertin]
    ]
  },
  tables: {
    title: 'Tables',
    subtitle: 'Des tables uniques pour un intérieur prestigieux',
    items: [
      ['Table Ronde Marbre', tableRonde],
      ['Table À Manger Luxe', tableManger],
      ['Table Basse Marbre', tableBasse],
      ['Table Ovale Marbre', tableOvale]
    ]
  },
  tahajart: {
    title: 'Tahajart',
    subtitle: 'Découvrez nos créations Tahajart uniques',
    items: [
      ['Tahajart Premium 1', 'placeholder1.jpg'],
      ['Tahajart Premium 2', 'placeholder2.jpg'],
      ['Tahajart Premium 3', 'placeholder3.jpg'],
      ['Tahajart Premium 4', 'placeholder4.jpg']
    ]
  }
};

export default function CategoryPage() {
  const { category } = useParams();
  const navigate = useNavigate();
  const data = categoryData[category];

  if (!data) {
    return <div>Category not found</div>;
  }

  return (
    <>
      <Header />
      <main style={{ paddingTop: '80px' }}>
        <section className="section">
          <button 
            onClick={() => navigate('/')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 20px',
              marginBottom: '30px',
              background: '#C1272D',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            <ChevronLeft size={20} />
            Retour à l'accueil
          </button>
          
          <SectionTitle sub={data.subtitle}>
            Catalogue des <span>{data.title}</span>
          </SectionTitle>
          
          <div className="grid six">
            {data.items.map((item, index) => (
              <ProductCard item={item} key={index} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
