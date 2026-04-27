import React, { createContext, useContext, useState } from 'react';

const BookingContext = createContext();

export const useBooking = () => useContext(BookingContext);

export const BookingProvider = ({ children }) => {
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [bookingDetails, setBookingDetails] = useState({
    checkIn: '',
    checkOut: '',
    guests: '1',
    firstName: '',
    lastName: '',
    email: ''
  });

  const selectRoom = (room) => setSelectedRoom(room);
  
  const updateBooking = (details) => {
    setBookingDetails(prev => ({ ...prev, ...details }));
  };

  return (
    <BookingContext.Provider value={{ 
      selectedRoom, 
      bookingDetails, 
      selectRoom, 
      updateBooking 
    }}>
      {children}
    </BookingContext.Provider>
  );
};
