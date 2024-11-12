import React from 'react';
import EventCard from './EventCard';
import './EventCardGrid.css';
import EventButtons from './EventButtons';

function EventCardGrid() {
  return (
    <>
      {/* Round buttons below the heading */}
      <EventButtons/>
      <div className='heading-container'>
      <h3 className="event-heading" style={{ marginTop: '50px' }}>Upcoming Events</h3>
      </div>
      <div className="event-card-grid">
        <EventCard
          heading="Diljit's Concert"
          img="/DiljitConcert.jpg"
        />
        <EventCard
          heading="Coldplay Concert"
          img="/coldplayConcert.jpg"
        />
        <EventCard
          heading="Doon Music Festival "
          img="/doonMusicFestivalConcert.jpg"
        />
        <EventCard
          heading="IPL"
          img="/ipl.jpg"
        />
        <EventCard
          heading="Diljit's Concert"
          img="/DiljitConcert.jpg"
        />
        <EventCard
          heading="Diljit's Concert"
          img="/DiljitConcert.jpg"
        />
        <EventCard
          heading="Diljit's Concert"
          img="/DiljitConcert.jpg"
        />
        <EventCard
          heading="Diljit's Concert"
          img="/DiljitConcert.jpg"
        />
        <EventCard
          heading="Diljit's Concert"
          img="/DiljitConcert.jpg"
        />
        <EventCard
          heading="Diljit's Concert"
          img="/DiljitConcert.jpg"
        />
        <EventCard
          heading="Diljit's Concert"
          img="/DiljitConcert.jpg"
        />
        <EventCard
          heading="Diljit's Concert"
          img="/DiljitConcert.jpg"
        />
      </div>
    </>
  );
}

export default EventCardGrid;