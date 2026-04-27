import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, CreditCard, ChevronRight } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { updateBooking, bookingDetails } = useBooking();
  const [formData, setFormData] = useState(bookingDetails);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBooking(formData);
    navigate('/payment');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="section-padding fade-in">
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 className="font-serif" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Complete Your Booking</h1>
          <p style={{ color: 'var(--text-muted)' }}>You're just one step away from your dream stay.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel"
          style={{ padding: '3rem' }}
        >
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
              <InputGroup label="First Name" name="firstName" type="text" placeholder="John" value={formData.firstName} onChange={handleChange} required />
              <InputGroup label="Last Name" name="lastName" type="text" placeholder="Doe" value={formData.lastName} onChange={handleChange} required />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <InputGroup label="Email Address" name="email" type="email" placeholder="john.doe@example.com" value={formData.email} onChange={handleChange} required />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
              <InputGroup label="Check-in Date" name="checkIn" type="date" value={formData.checkIn} onChange={handleChange} required />
              <InputGroup label="Check-out Date" name="checkOut" type="date" value={formData.checkOut} onChange={handleChange} required />
            </div>

            <div style={{ marginBottom: '2.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Number of Guests</label>
              <select 
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                style={{
                  width: '100%',
                  backgroundColor: 'var(--bg-deep)',
                  border: '1px solid var(--accent)',
                  borderRadius: '0.5rem',
                  padding: '0.75rem 1rem',
                  color: 'white',
                  outline: 'none'
                }}
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
              </select>
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', padding: '1rem' }}>
              Proceed to Payment <ChevronRight size={20} />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

const InputGroup = ({ label, ...props }) => (
  <div>
    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>{label}</label>
    <input 
      {...props}
      style={{
        width: '100%',
        backgroundColor: 'var(--bg-deep)',
        border: '1px solid var(--accent)',
        borderRadius: '0.5rem',
        padding: '0.75rem 1rem',
        color: 'white',
        outline: 'none'
      }}
    />
  </div>
);

export default Booking;
