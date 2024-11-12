import React from 'react';
import EventCard from './EventCard';
import './PurchasedTickets.css'; // Import the CSS file

function PurchasedTickets() {
  return (
    <div className="purchased-tickets-container">
      <EventCard img="/NftTicket.jpg" />
    </div>
  );
}

export default PurchasedTickets;
