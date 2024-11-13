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
          link="Price"
        />
        <EventCard
          heading="Coldplay Concert"
          img="/coldplayConcert.jpg"
          link="Price"
        />
        <EventCard
          heading="Doon Music Festival "
          img="/doonMusicFestivalConcert.jpg"
          link="Price"
        />
        <EventCard
          heading="IPL"
          img="/ipl.jpg"
          link="Price"
        />
        <EventCard
          heading="Diljit's Concert"
          img="/DiljitConcert.jpg"
          link="Price"
        />
        <EventCard
          heading="Diljit's Concert"
          img="/DiljitConcert.jpg"
          link="Price"
        />
        <EventCard
          heading="Diljit's Concert"
          img="/DiljitConcert.jpg"
          link="Price"
        />
        <EventCard
          heading="Diljit's Concert"
          img="/DiljitConcert.jpg"
          link="Price"
        />
        <EventCard
          heading="Diljit's Concert"
          img="/DiljitConcert.jpg"
          link="Price"
        />
        <EventCard
          heading="Diljit's Concert"
          img="/DiljitConcert.jpg"
          link="Price"
        />
        <EventCard
          heading="Diljit's Concert"
          img="/DiljitConcert.jpg"
          link="Price"
        />
        <EventCard
          heading="Diljit's Concert"
          img="/DiljitConcert.jpg"
          link="Price"
        />
      </div>
    </>
  );
}

export default EventCardGrid;
