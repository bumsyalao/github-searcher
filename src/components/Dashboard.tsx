import React from 'react';

type DashboardProps = { message: string };

const Dashboard = ({ message }: DashboardProps) => (
  <div className="dashboard">
    <div className="result-card">{message}</div>
    <div className="result-card"></div>
    <div className="result-card"></div>
    <div className="result-card"></div>
    <div className="result-card"></div>
  </div>);

export default Dashboard;
