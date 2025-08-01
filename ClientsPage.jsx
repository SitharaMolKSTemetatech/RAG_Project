import React, { useState } from 'react';
import './ClientsPage.css';
import {
  FaSearch,
  FaFileAlt,
  FaTrash,
  FaUser,
  FaBook,
  FaGlobe,
  FaCog,
  FaPlus,
  FaStar,
  FaBuilding,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const ClientsPage = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="library-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-icons">
          <Link to="/createdocument" className="sidebar-icon-link"><FaGlobe /></Link>
          <Link to="/createlibrary" className="sidebar-icon-link"><FaFileAlt /></Link>
          <Link to="/userpage" className="sidebar-icon-link"><FaUser /></Link>
          <Link to="/clientspage" className="sidebar-icon-link"><FaBook /></Link>
          <Link to="/integrationpage" className="sidebar-icon-link"><FaPlus /></Link>
          <Link to="/settingspage" className="sidebar-icon-link"><FaCog /></Link></div>
      </aside>

      {/* Main Content */}
      <main className="accounts-page">
        <h1>Your Accounts</h1>
        <p className="subtext">
          Accounts never log into Proposify – they can only view proposals you send them directly.
        </p>

        <div className="top-bar">
          <div className="search-container">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search accounts" />
          </div>
          <button className="filter-btn"><FaStar /></button>
          <button className="new-account-btn" onClick={openModal}>
            <FaPlus /> New Account
          </button>
        </div>

        <div className="account-list">
          <div className="account-item">
            <FaStar className="account-star" />
            <span className="account-name">Example Company</span>
          </div>
        </div>
      </main>

      {/* Modal Section */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-btn" onClick={closeModal}>&times;</button>
            <h2>Add New Account</h2>
            <p>Choose how you would like to add a new account.</p>

            <div className="option-card">
              <div className="icon"><FaBuilding /></div>
              <div className="info">
                <h3>Add New Company</h3>
                <p>Companies contain one or more contacts.</p>
              </div>
            </div>

            <div className="option-card">
              <div className="icon"><FaUser /></div>
              <div className="info">
                <h3>Add New Contact</h3>
                <p>The people you communicate with within the company.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientsPage;
