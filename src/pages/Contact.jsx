import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageCircle, Globe, Share2 } from 'lucide-react';

const Contact = () => {
  return (
    <div className="section-padding fade-in">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 className="font-serif" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Get In Touch</h1>
          <p style={{ color: 'var(--text-muted)' }}>We are here to assist you with any inquiries or special requests.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem' }}>
          {/* Contact Info */}
          <div>
            <div className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
              <h3 className="font-serif" style={{ fontSize: '1.8rem', color: 'var(--primary)', marginBottom: '2rem' }}>Contact Information</h3>
              
              <ContactLink icon={<Phone size={20} />} label="Call Us" value="+1 (555) LUX-STAY" />
              <ContactLink icon={<Mail size={20} />} label="Email Us" value="concierge@luminaluxe.com" />
              <ContactLink icon={<MapPin size={20} />} label="Visit Us" value="777 Luxury Blvd, Beverly Hills, CA" />
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <SocialIcon icon={<MessageCircle />} />
              <SocialIcon icon={<Globe />} />
              <SocialIcon icon={<Share2 />} />
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-panel" style={{ padding: '3rem' }}>
            <form>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <InputGroup label="Full Name" placeholder="Jane Doe" />
                <InputGroup label="Email Address" placeholder="jane@example.com" />
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <InputGroup label="Subject" placeholder="General Inquiry" />
              </div>
              <div style={{ marginBottom: '2.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Message</label>
                <textarea 
                  rows="5"
                  placeholder="How can we help you?"
                  style={{
                    width: '100%',
                    backgroundColor: 'var(--bg-deep)',
                    border: '1px solid var(--accent)',
                    borderRadius: '0.5rem',
                    padding: '0.75rem 1rem',
                    color: 'white',
                    outline: 'none',
                    resize: 'none'
                  }}
                ></textarea>
              </div>
              <button type="button" className="btn-primary" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.75rem', padding: '1rem' }}>
                Send Message <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactLink = ({ icon, label, value }) => (
  <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
    <div style={{ color: 'var(--primary)' }}>{icon}</div>
    <div>
      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>{label}</p>
      <p style={{ fontSize: '1.1rem', fontWeight: '500' }}>{value}</p>
    </div>
  </div>
);

const SocialIcon = ({ icon }) => (
  <motion.div 
    whileHover={{ scale: 1.1, backgroundColor: 'var(--primary)', color: 'white' }}
    style={{ 
      width: '45px', 
      height: '45px', 
      borderRadius: '50%', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      border: '1px solid var(--accent)',
      cursor: 'pointer',
      color: 'var(--primary)'
    }}
  >
    {icon}
  </motion.div>
);

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

export default Contact;
