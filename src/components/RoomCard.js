import React from 'react';

const RoomCard = ({ room }) => {
  return (
    <div className="room-card">
      <h3>{room.name}</h3>
      <p>{room.price}</p>
      <button>Book Now</button>
    </div>
  );
};

export default RoomCard;
