import React, { useState } from 'react';
import '../styles/BookingForm.css';

const BookingForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.phone || formData.phone.length < 10) newErrors.phone = 'Phone number must be at least 10 digits';
    if (!formData.guests || formData.guests <= 0) newErrors.guests = 'Please select number of guests';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
      setFormData({ name: '', email: '', phone: '', guests: '' }); // Reset form
    }
  };

  return (
    <form onSubmit={handleSubmit} aria-labelledby="booking-form">
      <h2 id="booking-form">Book a Table</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          aria-describedby="name-error"
        />
        {errors.name && <span id="name-error" className="error">{errors.name}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          aria-describedby="email-error"
        />
        {errors.email && <span id="email-error" className="error">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          aria-describedby="phone-error"
        />
        {errors.phone && <span id="phone-error" className="error">{errors.phone}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="guests">Number of Guests:</label>
        <input
          type="number"
          id="guests"
          name="guests"
          value={formData.guests}
          onChange={handleInputChange}
          aria-describedby="guests-error"
        />
        {errors.guests && <span id="guests-error" className="error">{errors.guests}</span>}
      </div>

      <button type="submit">Submit</button>
      </form>
  );
};

export default BookingForm;
