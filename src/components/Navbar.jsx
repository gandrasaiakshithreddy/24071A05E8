import React from 'react';
import { Link } from 'react-router-dom';
import { Hotel, User, Phone, MapPin, BedDouble } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="glass-panel" style={{
      position: 'fixed',
      top: '1rem',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '90%',
      maxWidth: '1200px',
      zIndex: 1000,
      padding: '0.75rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Hotel size={24} color="var(--primary)" />
        <span className="font-serif" style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '2px' }}>LUMINA</span>
      </Link>
      
      <div style={{ display: 'flex', gap: '2rem' }}>
        <NavLink to="/rooms" icon={<BedDouble size={18} />} label="Rooms" />
        <NavLink to="/contact" icon={<Phone size={18} />} label="Contact" />
        <Link to="/login" className="btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}>
          Login
        </Link>
      </div>
    </nav>
  );
};

const NavLink = ({ to, icon, label }) => (
  <Link to={to} style={{ 
    display: 'flex', 
    alignItems: 'center', 
    gap: '0.5rem', 
    fontSize: '0.9rem', 
    fontWeight: '500',
    color: 'var(--text-main)'
  }} className="nav-hover">
    {icon}
    <span>{label}</span>
  </Link>
);

export default Navbar;
