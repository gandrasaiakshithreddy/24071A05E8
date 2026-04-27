import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, CheckCircle, ArrowLeft, Users, Maximize, Bed } from 'lucide-react';

const RoomDetails = () => {
  const { id } = useParams();
  
  // Mock data for a single room
  const room = {
    name: "Royal Penthouse",
    price: "$1,200",
    description: "Experience the ultimate in luxury living. Our Royal Penthouse offers panoramic city views, a private terrace, and a dedicated butler service. Every detail has been curated to provide a sense of refined elegance and absolute comfort.",
    size: "120 sq m",
    guests: "4 Guests",
    beds: "2 King Size",
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800"
    ],
    amenities: ["Private Pool", "Butler Service", "Gourmet Kitchen", "High-speed WiFi", "Smart Home Tech", "Luxury Bathrobes"]
  };

  return (
    <div className="section-padding fade-in">
      <div className="container">
        <Link to="/rooms" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', marginBottom: '2rem' }}>
          <ArrowLeft size={20} /> Back to Rooms
        </Link>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          {/* Gallery */}
          <div>
            <motion.img 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              src={room.images[0]} 
              alt={room.name} 
              style={{ width: '100%', borderRadius: '1.5rem', marginBottom: '1.5rem', boxShadow: 'var(--shadow-lg)' }}
            />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <img src={room.images[1]} alt="Interior" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '1rem' }} />
              <img src={room.images[2]} alt="Bathroom" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '1rem' }} />
            </div>
          </div>

          {/* Details */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <span style={{ color: 'var(--primary)', textTransform: 'uppercase', fontWeight: 'bold', letterSpacing: '2px' }}>Suite</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <Star size={18} fill="var(--primary)" color="var(--primary)" />
                <span style={{ fontWeight: 'bold' }}>5.0 (42 Reviews)</span>
              </div>
            </div>
            
            <h1 className="font-serif" style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>{room.name}</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2rem' }}>{room.description}</p>
            
            <div className="glass-panel" style={{ display: 'flex', justifyContent: 'space-around', padding: '1.5rem', marginBottom: '2.5rem' }}>
              <DetailItem icon={<Maximize size={20} />} label={room.size} />
              <DetailItem icon={<Users size={20} />} label={room.guests} />
              <DetailItem icon={<Bed size={20} />} label={room.beds} />
            </div>

            <h3 style={{ marginBottom: '1rem' }}>Key Amenities</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '3rem' }}>
              {room.amenities.map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)' }}>
                  <CheckCircle size={18} color="var(--primary)" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Total per night</p>
                <h2 style={{ color: 'var(--primary)', fontSize: '2.5rem' }}>{room.price}</h2>
              </div>
              <Link to={`/booking/${id}`} className="btn-primary" style={{ flex: 1, textAlign: 'center', padding: '1.25rem' }}>
                Check Availability
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DetailItem = ({ icon, label }) => (
  <div style={{ textAlign: 'center' }}>
    <div style={{ color: 'var(--primary)', marginBottom: '0.25rem', display: 'flex', justifyContent: 'center' }}>{icon}</div>
    <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>{label}</span>
  </div>
);

export default RoomDetails;
