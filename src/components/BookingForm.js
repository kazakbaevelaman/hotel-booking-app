import React, { useState } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    checkInDate: '',
    checkOutDate: '',
    roomType: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking successful for ${formData.name}`);
  };

  return (
    <div className="booking-form">
      <h2>Book Your Stay</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Check-in Date</label>
        <input type="date" name="checkInDate" value={formData.checkInDate} onChange={handleChange} required />

        <label>Check-out Date</label>
        <input type="date" name="checkOutDate" value={formData.checkOutDate} onChange={handleChange} required />

        <label>Room Type</label>
        <select name="roomType" value={formData.roomType} onChange={handleChange} required>
          <option value="">Select</option>
          <option value="deluxe">Deluxe Room</option>
          <option value="standard">Standard Room</option>
          <option value="suite">Suite</option>
        </select>

        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookingForm;
