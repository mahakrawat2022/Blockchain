import React from 'react';
import './EventCard.css'; // Import the CSS file for styles

function EventCard(props) {
  return (
    <div className="event-card">
      <div className="card">
        <img 
          src={props.img} 
          className="card-img-top" 
          alt={props.heading} 
        />
        <div className="card-body">
          <h5 className="card-title">{props.heading}</h5>
          <p className="card-text">
            Some quick example text to build on the 
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
