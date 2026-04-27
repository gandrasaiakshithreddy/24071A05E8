import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CreditCard, ShieldCheck, CheckCircle2 } from 'lucide-react';

const Payment = () => {
  const [isPaid, setIsPaid] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();
    setIsPaid(true);
  };

  return (
    <div className="section-padding fade-in">
      <div className="container" style={{ maxWidth: '600px' }}>
        <AnimatePresence mode="wait">
          {!isPaid ? (
            <motion.div 
              key="payment-form"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-panel"
              style={{ padding: '3rem' }}
            >
              <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                <div style={{ display: 'inline-flex', padding: '1rem', borderRadius: '50%', backgroundColor: 'rgba(197, 160, 89, 0.1)', marginBottom: '1rem' }}>
                  <CreditCard size={40} color="var(--primary)" />
                </div>
                <h2 className="font-serif" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Secure Payment</h2>
                <p style={{ color: 'var(--text-muted)' }}>Amount to pay: <span style={{ color: 'white', fontWeight: 'bold' }}>$1,200.00</span></p>
              </div>

              <form onSubmit={handlePayment}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Card Number</label>
                  <input type="text" placeholder="**** **** **** 4242" style={inputStyle} required />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Expiry Date</label>
                    <input type="text" placeholder="MM/YY" style={inputStyle} required />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>CVC</label>
                    <input type="text" placeholder="123" style={inputStyle} required />
                  </div>
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}>
                  Pay Now
                </button>
              </form>

              <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                <ShieldCheck size={16} />
                <span>SSL Secured & Encrypted Payment</span>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ textAlign: 'center', padding: '4rem 2rem' }}
              className="glass-panel"
            >
              <CheckCircle2 size={80} color="#22c55e" style={{ marginBottom: '1.5rem' }} />
              <h1 className="font-serif" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Payment Successful!</h1>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
                Thank you for choosing Lumina Luxe. A confirmation email has been sent to your inbox.
              </p>
              <button onClick={() => window.location.href='/'} className="btn-primary">
                Return Home
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  backgroundColor: 'var(--bg-deep)',
  border: '1px solid var(--accent)',
  borderRadius: '0.5rem',
  padding: '0.75rem 1rem',
  color: 'white',
  outline: 'none'
};

export default Payment;
