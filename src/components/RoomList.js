import React from 'react';
import RoomCard from './RoomCard';

const RoomList = () => {
  const rooms = [
    { id: 1, name: 'Deluxe Room', price: '$200/night' },
    { id: 2, name: 'Standard Room', price: '$100/night' },
    { id: 3, name: 'Suite', price: '$350/night' },
  ];

  return (
    <div className="room-list">
      <h2>Available Rooms</h2>
      <div className="room-cards">
        {rooms.map(room => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default RoomList;
