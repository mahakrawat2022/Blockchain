import React from 'react'
import { Link } from 'react-router-dom'
import './EventButton.css'


function EventButtons() {
  return (
    <div>
      <div className="button-container " >
        <Link to="/" className="event-button btn ">Upcoming</Link>
        <Link to="/"className="event-button btn">Past Events</Link>
        <Link to="/" className="event-button btn">Tickets</Link>
      </div>
      
    </div>
  )
}

export default EventButtons
