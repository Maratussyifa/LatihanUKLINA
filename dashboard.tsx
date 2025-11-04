// pages/dashboard.tsx
import React from "react";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome to your Dashboard</h1>
        <p>Status: Not Present</p>
      </div>

      <div className="dashboard-body">
        <div className="section attendance-status">
          <h3>Status Kehadiran</h3>
          <p>Not Present</p>
        </div>

        <div className="section guru-piket">
          <h3>Guru Piket Hari Ini</h3>
          <p>Mr. Fajri and Mr. Dimas</p>
        </div>

        <div className="section attendance-summary">
          <h3>Rekap Kehadiran Bulanan</h3>
          <p>100% Present this month.</p>
        </div>

        <div className="section leaderboard">
          <h3>Leaderboard</h3>
          <ul>
            <li>1. Muhammad Rafli</li>
            <li>2. Fanani Akbar</li>
            <li>3. Muhammad Effendi</li>
            {/* More leaderboard entries */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
