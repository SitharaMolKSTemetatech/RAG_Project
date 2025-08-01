import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaSearch, FaFileAlt, FaTrash, FaUser, FaBook, FaGlobe, FaCog, FaPlus
} from "react-icons/fa";
import './BillingPage.css';

const BillingPage = () => {
  const user = {
    name: "S",
    email: "abc@gmail.com",
    status: "Active",
    seatType: "User"
  };

  return (
    <div className="settings-page-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-icons">
          <Link to="/createdocument" className="sidebar-icon-link"><FaGlobe /></Link>
          <Link to="/createlibrary" className="sidebar-icon-link"><FaFileAlt /></Link>
          <Link to="/userpage" className="sidebar-icon-link"><FaUser /></Link>
          <Link to="/clientspage" className="sidebar-icon-link"><FaBook /></Link>
          <Link to="/integrationpage" className="sidebar-icon-link"><FaPlus /></Link>
          <Link to="/settingspage" className="sidebar-icon-link"><FaCog /></Link>
        </div>
      </aside>
      {/* Main Billing Content */}
      <div className="billing-page">
        <h3>Let’s pick your perfect plan.</h3>

        {/* Subscription Section */}
        <section className="card">
          <h4>Your subscription</h4>
          <div className="subscription-info">
            <div>
              <p><strong>Plan</strong></p>
              <p>Trial</p>
              <p className="text-muted">Renews monthly</p>
            </div>
            <div>
              <p><strong>Seats</strong></p>
              <p>1 out of 1</p>
            </div>
          </div>
        </section>

        {/* Billing Info */}
        <section className="card">
          <h4>Billing info</h4>
          <p>No payment method on file</p>
          <button className="btn">Update payment method</button>
        </section>

        {/* Billing Contact */}
        <section className="card">
          <h4>Billing contact</h4>
          <p>Email address couldn't be loaded. Please try again later</p>
          <button className="btn">Change billing contact</button>
        </section>

        {/* Seats */}
        <section className="card">
          <h4>Seats</h4>
          <div className="seat-usage">
            <div><strong>User</strong><br />1 of 1 used <span className="warning">⚠</span></div>
            <div><strong>Collaborator</strong><br />0 of 0 used <span className="warning">⚠</span></div>
          </div>

          <div className="user-table">
            <table>
              <thead>
                <tr>
                  <th>User</th>
                  <th>Seat type</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="user-info">
                      <div className="avatar">Sm</div>
                      <div>
                        <p className="name">{user.name}</p>
                        <p className="email">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td>{user.seatType}</td>
                  <td><span className="status-active">{user.status}</span></td>
                </tr>
              </tbody>
            </table>

            <div className="pagination">
              <span>Rows per page:</span>
              <select>
                <option value="5">5</option>
                <option value="10">10</option>
              </select>
              <span>1-1 of 1</span>
              <span className="pagination-arrows">‹ ›</span>
            </div>
          </div>
        </section>

        <div className="no-invoices">
          <p>💡 You currently have no invoices on record.</p>
        </div>
      </div>
    </div>
  );
};

export default BillingPage;
