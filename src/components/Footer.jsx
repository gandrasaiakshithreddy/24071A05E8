import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: 'var(--bg-card)',
      padding: '2rem 0',
      borderTop: '1px solid var(--glass-border)',
      textAlign: 'center',
      marginTop: 'auto'
    }}>
      <div className="container">
        <h3 className="font-serif" style={{ color: 'var(--primary)', marginBottom: '1rem' }}>LUMINA LUXE</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Experience the pinnacle of hospitality and elegance.
        </p>
        <div style={{ marginTop: '1.5rem', borderTop: '1px solid var(--accent)', paddingTop: '1.5rem' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
            @24071A05E8..All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
