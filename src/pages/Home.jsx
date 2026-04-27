import React from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, Users, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/hero.png';

const Home = () => {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section style={{
        height: '90vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        marginTop: '-6rem'
      }}>
        <img 
          src={heroImg} 
          alt="Luxury Hotel" 
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1,
            filter: 'brightness(0.5)'
          }}
        />
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            style={{ maxWidth: '600px' }}
          >
            <h1 style={{ fontSize: '4.5rem', lineHeight: '1.1', marginBottom: '1.5rem' }}>
              Where <span style={{ color: 'var(--primary)' }}>Luxury</span> Meets Sanctuary
            </h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', color: '#cbd5e1' }}>
              Experience world-class hospitality in the heart of the city. 
              Our rooms are designed for ultimate comfort and elegance.
            </p>
            <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <SearchItem icon={<Calendar />} label="Check-in" value="Jun 12, 2024" />
              <SearchItem icon={<Calendar />} label="Check-out" value="Jun 15, 2024" />
              <SearchItem icon={<Users />} label="Guests" value="2 Adults" />
              <button className="btn-primary" style={{ flex: 1 }}>Search</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Our Signature Suites</h2>
            <p style={{ color: 'var(--text-muted)' }}>Meticulously designed for the discerning traveler.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <RoomPreview 
              name="Royal Penthouse" 
              price="$1,200" 
              rating="5.0" 
              img="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800"
            />
            <RoomPreview 
              name="Ocean Executive" 
              price="$850" 
              rating="4.9" 
              img="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800"
            />
            <RoomPreview 
              name="Garden Deluxe" 
              price="$450" 
              rating="4.8" 
              img="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800"
            />
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/rooms" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              View All Rooms <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const SearchItem = ({ icon, label, value }) => (
  <div style={{ flex: 1, minWidth: '150px' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', marginBottom: '0.25rem', fontSize: '0.8rem' }}>
      {icon}
      <span>{label}</span>
    </div>
    <div style={{ fontWeight: '600' }}>{value}</div>
  </div>
);

const RoomPreview = ({ name, price, rating, img }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="glass-panel" 
    style={{ overflow: 'hidden', border: 'none' }}
  >
    <div style={{ height: '250px', overflow: 'hidden' }}>
      <img src={img} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
    <div style={{ padding: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
        <h3 style={{ fontSize: '1.5rem' }}>{name}</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--primary)' }}>
          <Star size={16} fill="var(--primary)" />
          <span>{rating}</span>
        </div>
      </div>
      <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Starting from <span style={{ color: 'white', fontWeight: 'bold' }}>{price}</span> / night</p>
      <Link to="/rooms/1" className="btn-primary" style={{ display: 'block', textAlign: 'center' }}>
        Book Now
      </Link>
    </div>
  </motion.div>
);

export default Home;
