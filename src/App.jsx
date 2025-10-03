import React, { useState } from 'react';
import BookingForm from './components/BookingForm.jsx';
import Header from './components/Header.jsx';
import './styles/App.css';

const App = () => {
  const [bookingDetails, setBookingDetails] = useState(null);

  const handleBookingSubmit = (data) => {
    setBookingDetails(data);
    alert('Table booked successfully!');
  };

  return (
    <div className="App">
      <Header />
      <BookingForm onSubmit={handleBookingSubmit} />
      {bookingDetails && (
        <div className="booking-summary">
          <h3>Booking Summary</h3>
          <p>Name: {bookingDetails.name}</p>
          <p>Email: {bookingDetails.email}</p>
          <p>Phone: {bookingDetails.phone}</p>
          <p>Guests: {bookingDetails.guests}</p>
        </div>
      )}
    </div>
  );
};

export default App;
