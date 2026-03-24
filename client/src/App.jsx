import React, { useState } from 'react';
import './App.css';

// Import Components
import Whyus from './Whyus';
import Coreservices from './Coreservices';

// Import Images
import logo from './fast-force-logo.png'; 
import rcsa from './RCSA-Corporate-Member-Logo.jpg';
import sitesafe from './ss_member-long-maori.jpg';
import adt from './adt.jpg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigateTo = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
      {/* HEADER SECTION */}
      <header className="main-header">
        <div className="header-container">
          <div className="logo" onClick={() => navigateTo('home')} style={{cursor: 'pointer'}}>
            <img src={logo} alt="FastForce" className="header-logo-img" />
          </div>
          
          {/* Mobile Menu Toggle */}
          <button className="mobile-menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </button>

          <nav className={`nav-menu ${isMenuOpen ? "nav-active" : ""}`}>
            <a href="#" onClick={() => navigateTo('home')} className={currentPage === 'home' ? 'active' : ''}>HOME</a>
            
            {/* EMPLOYERS DROPDOWN */}
            <div 
              className="nav-item-dropdown"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className={`dropdown-trigger ${['whyus', 'coreservices'].includes(currentPage) ? 'active' : ''}`}>
                EMPLOYERS <i className="fas fa-caret-down"></i>
              </button>
              
              {isDropdownOpen && (
                <div className="dropdown-content">
                  <a href="#" onClick={() => navigateTo('whyus')}>Why Us</a>
                  <a href="#" onClick={() => navigateTo('coreservices')}>Core Services</a>
                </div>
              )}
            </div>

            <a href="#">CANDIDATES</a>
            <a href="#">WHO ARE WE</a>
            <a href="#">HEALTH & SAFETY</a>
            <a href="#">H&S TRAINING</a>
            <a href="#">CONTACT</a>
          </nav>
        </div>
        <div className="header-blue-bar"></div>
      </header>

      {/* MAIN BODY CONTENT */}
      <main className="site-content">
        {currentPage === 'home' && (
          <h1 className="hero-title">Connecting Talent with Opportunity</h1>
        )}
        {currentPage === 'whyus' && <Whyus />}
        {currentPage === 'coreservices' && <Coreservices />}
      </main>

      {/* MAIN FOOTER */}
      <footer className="main-footer">
        <div className="footer-grid">
          <div className="footer-col-1">
            <img src={logo} alt="Logo" className="footer-logo-large" />
            <p className="footer-tagline">Reinventing NZ Workplaces</p>
            <p className="footer-subtext">Recruitment & Small Business Advisor</p>
            <div className="social-icons-centered">
              <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-link"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          <div className="footer-col-2">
            <img src={rcsa} className="partner-img" alt="RCSA" />
            <img src={sitesafe} className="partner-img" alt="SiteSafe" />
            <img src={adt} className="partner-img" alt="ADT" />
          </div>

          <div className="footer-col">
            <h3>QUICK LINKS</h3>
            <ul className="footer-links">
              <li onClick={() => navigateTo('home')}>Home</li>
              <li onClick={() => navigateTo('coreservices')}>Core Services</li>
              <li onClick={() => navigateTo('whyus')}>Why Us</li>
              <li>Submit CV</li>
              <li>Privacy Policy</li>
              <li>RCSA Certificate</li>
            </ul>
            <div className="office-timing">
              <h3>Office Timing</h3>
              <p className="timing-label">Monday to Friday</p>
              <span className="timing-value">8.30AM to 5.00PM.</span>
              <p className="timing-label">Saturday & Sunday</p>
              <span className="timing-value">Closed</span>
            </div>
          </div>

          <div className="footer-col contact-col">
            <h3>CONTACT</h3>
            <div className="office-info">
              <p><strong>Christchurch Office</strong><br/>Phone: 03 3350223</p>
            </div>
            <div className="office-info">
              <p><strong>Ashburton Office</strong><br/>Phone: 02 25282386</p>
            </div>
            <div className="office-info">
              <p><strong>Dunedin Office</strong><br/>Phone: 02 12788917</p>
            </div>
          </div>
        </div>
      </footer>

      {/* SUB-FOOTER */}
      <div className="sub-footer">
        <div className="sub-footer-container">
          <div className="copyright-info">
            <p>© Copyright 2026 www.fastforce.co.nz</p>
            <p>Design & Developed by Perfect Designing Solutions</p>
          </div>
          <div className="sub-footer-links">
            <a href="#">Privacy Policy</a>
          </div>
        </div>
        <button className="scroll-top-btn" onClick={scrollToTop}>
          <i className="fas fa-arrow-up"></i>
        </button>
      </div>
    </div>
  );
}

export default App;