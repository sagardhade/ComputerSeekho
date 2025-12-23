import React from "react";
import { Link } from "react-router-dom";
import FollowUp from "./FollowUp";
import PagingComponent from "./PagingComponent";
import "./Dashboard.css"; // Import the external CSS file

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="main-content">
        Welcome to Dashboard...
        <div className="button-container">
          <button className="dashboard-button"><Link to="/FollowUp">Add Enquiry</Link></button>
          <button className="dashboard-button"><Link to="/FollowUp">Tables</Link></button>
          <button className="dashboard-button"><Link to="/FollowUp">Follow Up</Link></button>
        </div>
      </div>
      <div className="view-all">
            <Link to="/ViewAll">View All</Link>
          </div>
      {/* <FollowUp/> */}
      <PagingComponent />
    </div>
  );
}

export default Dashboard;
