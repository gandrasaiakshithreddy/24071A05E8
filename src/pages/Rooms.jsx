import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Wifi, Coffee, Wind, Monitor, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const roomsData = [
  { id: 1, name: "Royal Penthouse", price: "$1,200", rating: "5.0", category: "Suite", img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800" },
  { id: 2, name: "Ocean Executive", price: "$850", rating: "4.9", category: "Executive", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800" },
  { id: 3, name: "Garden Deluxe", price: "$450", rating: "4.8", category: "Deluxe", img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800" },
  { id: 4, name: "Skyline Premier", price: "$600", rating: "4.7", category: "Premier", img: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80&w=800" },
  { id: 5, name: "Cozy Standard", price: "$250", rating: "4.5", category: "Standard", img: "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800" },
  { id: 6, name: "Family Suite", price: "$550", rating: "4.6", category: "Suite", img: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&q=80&w=800" },
];

const Rooms = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredRooms = roomsData.filter(room => {
    const matchesSearch = room.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || room.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['All', 'Suite', 'Executive', 'Deluxe', 'Premier', 'Standard'];

  return (
    <div className="section-padding fade-in">
      <div className="container">
        <div style={{ marginBottom: '4rem' }}>
          <h1 className="font-serif" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Our Accommodations</h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', marginBottom: '2.5rem' }}>
            Choose from our curated selection of luxury rooms and suites, 
            each designed to provide an unforgettable experience.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
            <div style={{ position: 'relative', flex: 1, minWidth: '300px' }}>
              <input 
                type="text" 
                placeholder="Search rooms..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--accent)',
                  borderRadius: '2rem',
                  padding: '1rem 1.5rem',
                  color: 'white',
                  outline: 'none'
                }}
              />
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '0.5rem 1.25rem',
                    borderRadius: '2rem',
                    backgroundColor: activeCategory === cat ? 'var(--primary)' : 'var(--bg-card)',
                    color: activeCategory === cat ? 'white' : 'var(--text-muted)',
                    border: '1px solid var(--accent)',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
          {filteredRooms.map((room) => (
            <motion.div 
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel"
              style={{ overflow: 'hidden' }}
            >
              <div style={{ position: 'relative', height: '280px' }}>
                <img src={room.img} alt={room.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ 
                  position: 'absolute', 
                  top: '1rem', 
                  right: '1rem', 
                  backgroundColor: 'var(--primary)', 
                  padding: '0.25rem 0.75rem', 
                  borderRadius: '1rem',
                  fontSize: '0.8rem',
                  fontWeight: 'bold'
                }}>
                  {room.category}
                </div>
              </div>
              
              <div style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <h3 style={{ fontSize: '1.75rem' }}>{room.name}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--primary)' }}>
                    <Star size={18} fill="var(--primary)" />
                    <span style={{ fontWeight: 'bold' }}>{room.rating}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem', color: 'var(--text-muted)' }}>
                  <Amenity icon={<Wifi size={18} />} label="WiFi" />
                  <Amenity icon={<Coffee size={18} />} label="Breakfast" />
                  <Amenity icon={<Wind size={18} />} label="AC" />
                  <Amenity icon={<Monitor size={18} />} label="TV" />
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>{room.price}</span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}> / night</span>
                  </div>
                  <Link to={`/rooms/${room.id}`} className="btn-primary">
                    Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Amenity = ({ icon, label }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
    {icon}
    <span style={{ fontSize: '0.7rem' }}>{label}</span>
  </div>
);

export default Rooms;
