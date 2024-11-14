import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Ticket.css';
import { Link } from 'react-router-dom';
import Spline from '@splinetool/react-spline';

function Ticket() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const image = state?.image;

  const handleBackClick = () => {
    navigate('/');
  };

  if (!image) {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h2>No ticket selected</h2>
        <p>Please go back and choose an NFT.</p>
        <button
          onClick={handleBackClick}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <>
    
    {/*
    <div>
  

    <Spline
        scene="https://prod.spline.design/PJIrLwpQxE792pSj/scene.splinecode" 

        
        
      />
      </div>
      */}

    
    <div style={{
      display: 'flex',
      alignItems: 'center',
      border: '2px solid #333',
      borderRadius: '10px',
      padding: '15px',
      backgroundColor: '#2c2c2c',
      maxWidth: '650px',
      margin: '0 auto',
      color: '#fff',
      flexDirection: 'row',
      justifyContent: 'space-between',
      position: 'relative', // Set relative positioning on the container
    }}>
      {/* Left Image Section */}
      <div style={{ flex: '0 0 180px', marginRight: '20px' }}>
        <img
          src={image.imgUrl}
          alt="Selected NFT"
          style={{
            height: '200px', 
            width: 'auto',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        />
      </div>

      {/* Middle Content Section */}
      <div style={{ flex: '1', marginRight: '20px' }}>
        <h3 style={{ margin: '0 0 10px' }}>Concert Ticket</h3>
        <p>
          <strong>Event:</strong> Diljit Dosanjh Live<br />
          <strong>Date:</strong> Dec 20, 2023<br />
          <strong>Venue:</strong> Music Hall<br />
          <strong>Seat:</strong> Row A, Seat 10
        </p>
      </div>

      {/* Right Image Section */}
      <div style={{ flex: '0 0 120px' }}>
        <img
          src="barcoadImg.jpg" // Replace with your right image path
          alt="Event QR Code"
          style={{
            height: '180px', 
            width: '70px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        />
      </div>

      {/* Positioned Button */}
      <Link
        style={{
          position: 'absolute',
          right: '40px', // 40px from the right side
          top: '120%', // Center vertically
          transform: 'translateY(-50%)', // Offset to perfectly center
          padding: '10px 20px',
          fontSize: '14px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        to="/"
        className='btn'
      >
        Confirm
      </Link>
      
    </div>
    </>
  );
}

export default Ticket;