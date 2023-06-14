import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import './About.css'; // Import the CSS file

const About = () => {
  return (
    <div className="about-container"> {/* Use the "about-container" class */}
      <h2 className="about-heading">About Us</h2> {/* Use the "about-heading" class */}
      <p className="about-description">Welcome to our digital marketing agency. We specialize in providing various services to help businesses thrive online.</p> {/* Use the "about-description" class */}
      
      <h3 className="about-services">Our Services</h3> {/* Use the "about-services" class */}
      <ul>
        <li>Search Engine Optimization (SEO)</li>
        <li>Social Media Marketing</li>
        <li>Pay-Per-Click Advertising (PPC)</li>
        <li>Content Marketing</li>
        <li>Email Marketing</li>
        <li>Conversion Rate Optimization (CRO)</li>
        <li>Website Design and Development</li>
      </ul>
    </div>
  );
};

export default About;
