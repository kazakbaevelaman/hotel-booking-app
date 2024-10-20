import React from 'react';
import Navbar from './components/Navbar';
import RoomList from './components/RoomList';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <RoomList />
      <BookingForm />
      <Footer />
    </div>
  );
}

export default App;
