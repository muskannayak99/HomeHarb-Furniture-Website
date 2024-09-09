import React from 'react'
import "./Dashboard.css"
const Dashboard = () => {
  return (
    <div>
<div className="container-fluid">
    <div className="row">

      <div className="col-md-2  ">
        <div className='mm '>
        <h2 className="pt-3 ">Modernize</h2>
        </div>
        <div className='sidebar '>
        <a href="#"><i className="bi bi-person"></i> Sign Up</a>
        <a href="#"><i className="bi bi-box-arrow-in-right"></i> Sign In</a>
        <a href="#"><i className="bi bi-key"></i> Forgot Password</a>
        <a href="#"><i className="bi bi-lock"></i> Reset Password</a>

        <hr/>

        <a href="#"><i className="bi bi-person"></i> Personal Settings</a>
        <a href="#"><i className="bi bi-gear"></i> Global Settings</a>
      </div>
      </div>
      <div className="col-md-10">
        <div className="top-bar">
          <div>
            <input type="text" className="form-control" placeholder="Search..." />
          </div>
          <div>
            <img src="https://via.placeholder.com/40" alt="User Avatar" />
            <span className="ms-2">X'eriya Ponald</span>
          </div>
        </div>

        <div className="dashboard-content">
          <h2 className="mb-4">Dashboard</h2>

          <div className="row mb-4">
            <div className="col-md-3">
              <div className="dashboard-card">
                <div className="icon mb-2">
                  <i className="bi bi-currency-dollar"></i>
                </div>
                <h3>$10,540</h3>
                <p>Total Revenue</p>
                <small className="text-success">22.45% ↑</small>
              </div>
            </div>
            <div className="col-md-3">
              <div className="dashboard-card">
                <div className="icon mb-2">
                  <i className="bi bi-cart"></i>
                </div>
                <h3>$1,056</h3>
                <p>Orders</p>
                <small className="text-success">22.45% ↑</small>
              </div>
            </div>
            <div className="col-md-3">
              <div className="dashboard-card">
                <div className="icon mb-2">
                  <i className="bi bi-people"></i>
                </div>
                <h3>$56</h3>
                <p>Active Sessions</p>
                <small className="text-danger">2.45% ↓</small>
              </div>
            </div>
            <div className="col-md-3">
              <div className="dashboard-card">
                <div className="icon mb-2">
                  <i className="bi bi-bar-chart"></i>
                </div>
                <h3>$56</h3>
                <p>Total Sessions</p>
                <small className="text-danger">0.45% ↓</small>
              </div>
            </div>
          </div>

          <button className="manage-btn">Manage</button>
        </div>
      </div>
    </div>
  </div>


    </div>
  )
}

export default Dashboard