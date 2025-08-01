import React, { useState } from 'react';
import './CompanySettingsPage.css';
import {
  FaGlobe, FaFileAlt, FaUser, FaBook, FaPlus, FaCog
} from "react-icons/fa";
import { Link } from "react-router-dom";

const CompanySettingsPage = () => {
  const [companyData, setCompanyData] = useState({
    companyName: 'abcx',
    address1: '',
    address2: '',
    country: '',
    state: '',
    city: '',
    zip: '',
    website: '',
    subdomain: 'abcx',
    industry: '',
    companySize: '',
    accountOwner: 'Sithara mol k s'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompanyData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Company settings saved!');
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

      {/* Main Content */}
      <div className="company-settings-content">
        <div className="form-container">
          <button className="back-btn">← Back</button>
          <h2>Company Information</h2>
          <p>Manage your company information, logos, and subdomains.</p>
          <hr />

          <form onSubmit={handleSubmit}>
            <div className="logo-upload-section">
              <div className="upload-box">
                <p>🖼️ DRAG & DROP</p>
                <span className="upload-link">Click here to upload</span>
              </div>
              <div className="upload-info">
                <p>Logos are displayed on the Website and in the App</p>
                <p>Max dimensions: 1000px by 1000px</p>
                <button type="button" className="change-logo-btn">Change Logo</button>
              </div>
            </div>

            <div className="form-grid">
              <input name="companyName" value={companyData.companyName} onChange={handleChange} placeholder="Company Name" />
              <div></div>

              <input name="address1" value={companyData.address1} onChange={handleChange} placeholder="Address Line 1" />
              <input name="address2" value={companyData.address2} onChange={handleChange} placeholder="Address Line 2" />

              <select name="country" value={companyData.country} onChange={handleChange}>
                <option value="">Select Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
              </select>
              <select name="state" value={companyData.state} onChange={handleChange}>
                <option value="">Select State/Province</option>
                <option value="Kerala">Kerala</option>
                <option value="California">California</option>
              </select>

              <input name="city" value={companyData.city} onChange={handleChange} placeholder="City" />
              <input name="zip" value={companyData.zip} onChange={handleChange} placeholder="Zip/Postal Code" />

              <input name="website" value={companyData.website} onChange={handleChange} placeholder="Website URL" />
              <div></div>

              <div className="subdomain-group">
                <input name="subdomain" value={companyData.subdomain} onChange={handleChange} />
                <span>.proposify.com</span>
              </div>
              <div></div>

              <select name="industry" value={companyData.industry} onChange={handleChange}>
                <option value="">Select Industry</option>
                <option value="Tech">Tech</option>
                <option value="Finance">Finance</option>
              </select>
              <select name="companySize" value={companyData.companySize} onChange={handleChange}>
                <option value="">Select Company Size</option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
              </select>

              <select name="accountOwner" value={companyData.accountOwner} onChange={handleChange}>
                <option value="Sithara mol k s">Sithara mol k s</option>
                <option value="Other User">Other User</option>
              </select>
              <div></div>
            </div>

            <div className="form-actions">
              <button type="submit" className="save-btn">Save</button>
              <button type="button" className="cancel-btn">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompanySettingsPage;
