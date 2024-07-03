import React from 'react';

function ProfileCard() {
  return (
    
    <div className="profile-card">
      <div className="icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      </div>
      <div className="info">
        <h3>Name: John Doe</h3>
        <p>Registration No: 123456</p>
        <button  className="show-details" onClick={show} >Show Details</button>
      </div>
    </div>
  );
}

export default ProfileCard;