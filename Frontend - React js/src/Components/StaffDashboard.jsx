import React from 'react';
import './StaffDashboard.css'; 

const StaffDashboard = () => {
  const handleAddEnquiry = () => {
    console.log('Add Enquiry clicked');
  };

  const handleTables = () => {
    console.log('Tables clicked');
  };

  const handleFollowUp = () => {
    console.log('Follow Up clicked');
  };

  return (
    <div className="staff-login-container">
      <h1>Staff Dashboard</h1>

      <div className="button-container">
        <button className="standard-button" onClick={handleAddEnquiry}>Add Enquiry</button>
        <button className="standard-button" onClick={handleTables}>Tables</button>
        <button className="standard-button" onClick={handleFollowUp}>Follow Up</button>
      </div>

    </div>
  );
};

export default StaffDashboard;
