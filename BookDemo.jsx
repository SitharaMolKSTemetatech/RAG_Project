import React, { useState } from 'react';
import './BookDemo.css';

const BookDemo = () => {
  const [formData, setFormData] = useState({
    email: '',
    businessName: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    teamSize: ''
  });

  const [emailError, setEmailError] = useState('');

  const personalDomains = [
    'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com',
    'aol.com', 'icloud.com', 'live.com', 'protonmail.com'
  ];

  const validateBusinessEmail = (email) => {
    const domain = email.split('@')[1];
    return domain && !personalDomains.includes(domain.toLowerCase());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (name === 'email') {
      if (!validateBusinessEmail(value)) {
        setEmailError(
          'Please enter a different email address. This form does not accept addresses from gmail.com.'
        );
      } else {
        setEmailError('');
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateBusinessEmail(formData.email)) {
      setEmailError(
        'Please enter a different email address. This form does not accept addresses from gmail.com.'
      );
      return;
    }

    // Submit logic here
    console.log('Form submitted', formData);
  };

  return (
    <div className="book-demo-container">
      <div className="left-panel">
        <h1>Get control, consistency, and visibility like never before.</h1>
        <p>One of our product experts will show you a customized demo. Please fill out this form to get a demo of Proposify in action.</p>
        <ul className="steps">
          <li className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <strong>Fill out the form</strong>
              We offer demos to businesses with 3 or more sales reps who send proposals each month. Smaller businesses can <a href="#">start a free trial</a>.
            </div>
          </li>
          <li className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <strong>Book a time slot</strong>
              One of our business development reps will talk to you briefly to set you up with a demo.
            </div>
          </li>
          <li className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <strong>Attend a demo</strong>
              One of our account executives will give you a tailored demo based on your exact pain points.
            </div>
          </li>
        </ul>
      </div>

      <form className="form-panel" onSubmit={handleSubmit}>
        <div className="input-row">
          <div className="input-group">
            <label htmlFor="businessEmail">Business Email*</label> {/* Re-added label */}
            <input
              type="email"
              id="businessEmail" // Added ID
              name="email"
              // Removed placeholder
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="businessName">Business Name*</label> {/* Re-added label */}
            <input
              type="text"
              id="businessName" // Added ID
              name="businessName"
              // Removed placeholder
              value={formData.businessName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        {emailError && <p className="error">{emailError}</p>}

        <div className="input-row">
          <div className="input-group">
            <label htmlFor="firstName">First name*</label> {/* Re-added label */}
            <input
              type="text"
              id="firstName" // Added ID
              name="firstName"
              // Removed placeholder
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="lastName">Last name*</label> {/* Re-added label */}
            <input
              type="text"
              id="lastName" // Added ID
              name="lastName"
              // Removed placeholder
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Phone number - full width */}
        <div className="input-group"> {/* Wrap in input-group for consistent spacing */}
            <label htmlFor="phoneNumber">Phone number*</label> {/* Re-added label */}
            <input
              type="tel"
              id="phoneNumber" // Added ID
              name="phoneNumber"
              // Removed placeholder
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
        </div>


        {/* How many people - full width select */}
        <div className="input-group"> {/* Wrap in input-group for consistent spacing */}
            <label htmlFor="teamSize">How many people are on your Sales Team?*</label> {/* Re-added label */}
            <select
              id="teamSize" // Added ID
              name="teamSize"
              value={formData.teamSize}
              onChange={handleChange}
              required
            >
              <option value="">Please Select</option> {/* Changed placeholder to "Please Select" */}
              <option value="1-2">1-2</option>
              <option value="3-9">3-9</option>
              <option value="10+">10+</option>
            </select>
        </div>

        {/* Recaptcha Placeholder - re-added as per image_051023.png */}
     {/*   <div className="recaptcha-container">
          <div className="g-recaptcha" data-sitekey="YOUR_RECAPTCHA_SITE_KEY">
            <div style={{ backgroundColor: '#2b3941', borderRadius: '8px', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '200px', height: '60px', border: '1px solid #4a5a64', fontSize: '0.8rem', color: '#a0a0a0' }}>
              protected by reCAPTCHA<br/>Privacy - Terms
            </div>
          </div>
          <img src="https://www.gstatic.com/recaptcha/api2/v1596766453989/recaptcha__en.js" alt="Recaptcha refresh icon" style={{ height: '30px', width: '30px', cursor: 'pointer' }} />
        </div>*/}

        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookDemo;