import React from 'react';
import './AdminDashboard.css'; // Import your CSS file for styling

const AdminDashboard = () => {
  const handleEnquiry = () => {
    // Implement functionality for Enquiry button
    console.log('Enquiry clicked');
    // You can navigate to the Enquiry page or perform other actions
  };

  const handleFollowUp = () => {
    // Implement functionality for Follow Up button
    console.log('Follow Up clicked');
    // You can navigate to the Follow Up page or perform other actions
  };

  const handleStudentRegistration = () => {
    // Implement functionality for Student Registration button
    console.log('Student Registration clicked');
    // You can navigate to the Student Registration page or perform other actions
  };

  return (
    <div className="admin-login-container">
      Welcom to Admin Dashboard

      <div className="button-container">
        <button className="admin-button" onClick={handleEnquiry}>Enquiry</button>
        <button className="admin-button" onClick={handleFollowUp}>Follow Up</button>
        <button className="admin-button" onClick={handleStudentRegistration}>Student Registration</button>
      </div>

      {/* Add more components and layout as needed */}
    </div>
  );
};

export default AdminDashboard;
