import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Rooms from './pages/Rooms';
import RoomDetails from './pages/RoomDetails';
import Booking from './pages/Booking';
import Payment from './pages/Payment';
import Contact from './pages/Contact';
import { BookingProvider } from './context/BookingContext';
import PageTransition from './components/PageTransition';

function App() {
  return (
    <BookingProvider>
      <Router>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <main style={{ flex: 1, paddingTop: '6rem' }}>
            <PageTransition>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/rooms/:id" element={<RoomDetails />} />
                <Route path="/booking/:id" element={<Booking />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </PageTransition>
          </main>
          <Footer />
        </div>
      </Router>
    </BookingProvider>
  );
}

export default App;
