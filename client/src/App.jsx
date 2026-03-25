import React, { useState } from 'react';
import './App.css';

// Import Page Components
import Whyus from './Whyus.jsx';
import Coreservices from './Coreservices.jsx';
import OurHighringProcess from './OurHighringProcess.jsx'; 
import HealthAndSafety from './HealthAndSafety.jsx'; 
import GeneralTerms from './GeneralTerms.jsx'; 
import TemporaryTerms from './TemporaryTerms.jsx';
import Register from './Register.jsx';
import AboutUs from './AboutUs.jsx';
import CoreValues from './CoreValues.jsx';

// Import Images
import logo from './fast-force-logo.png'; 
import rcsa from './RCSA-Corporate-Member-Logo.jpg';
import sitesafe from './ss_member-long-maori.jpg';
import adt from './adt.jpg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false); 

  const navigateTo = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
    setIsAboutDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
      {/* --- HEADER SECTION --- */}
      <header className="main-header">
        <div className="header-container">
          <div className="logo" onClick={() => navigateTo('home')} style={{ cursor: 'pointer' }}>
            <img src={logo} alt="FastForce Logo" className="header-logo-img" />
          </div>
          
          <button className="mobile-menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </button>

          <nav className={`nav-menu ${isMenuOpen ? "nav-active" : ""}`}>
            <a 
              href="#" 
              onClick={() => navigateTo('home')} 
              className={currentPage === 'home' ? 'active' : ''}
            >
              HOME
            </a>
            
            <div 
              className="nav-item-dropdown"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className={`dropdown-trigger ${['whyus', 'coreservices', 'hiring', 'health', 'termsPerm', 'termsTemp', 'register'].includes(currentPage) ? 'active' : ''}`}>
                EMPLOYERS <i className="fas fa-caret-down"></i>
              </button>
              
              {isDropdownOpen && (
                <div className="dropdown-content">
                  <a href="#" onClick={() => navigateTo('whyus')}>Why Us</a>
                  <a href="#" onClick={() => navigateTo('coreservices')}>Core Services</a>
                  <a href="#" onClick={() => navigateTo('hiring')}>Hiring Process</a>
                  <a href="#" onClick={() => navigateTo('health')}>Health & Safety</a>
                  <a href="#" onClick={() => navigateTo('termsPerm')}>GENERAL TERMS PERMANENT</a>
                  <a href="#" onClick={() => navigateTo('termsTemp')}>GENERAL TERMS TEMPORARY</a>
                  <a 
                    href="/Timesheet.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onClick={() => setIsDropdownOpen(false)}
                    style={{ borderTop: '1px solid #eee', fontWeight: 'bold', color: '#0056b3' }}
                  >
                    Timesheet
                  </a>
                  <a href="#" onClick={() => navigateTo('register')} style={{ borderTop: '1px solid #eee', color: '#008000', fontWeight: 'bold' }}>Register</a>
                </div>
              )}
            </div>

            <a href="#">CANDIDATES</a>

            {/* WHO ARE WE DROPDOWN - ORDER: About -> Values -> Services */}
            <div 
              className="nav-item-dropdown"
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
              onMouseLeave={() => setIsAboutDropdownOpen(false)}
            >
              <button className={`dropdown-trigger ${['about', 'values', 'coreservices'].includes(currentPage) ? 'active' : ''}`}>
                WHO ARE WE <i className="fas fa-caret-down"></i>
              </button>
              
              {isAboutDropdownOpen && (
                <div className="dropdown-content">
                  <a href="#" onClick={() => navigateTo('about')}>About Us</a>
                  <a href="#" onClick={() => navigateTo('values')}>Core Values</a>
                  <a href="#" onClick={() => navigateTo('coreservices')}>Core Services</a>
                </div>
              )}
            </div>
            
            <a 
              href="#" 
              onClick={() => navigateTo('health')} 
              className={currentPage === 'health' ? 'active' : ''}
            >
              HEALTH & SAFETY
            </a>

            <a href="#">H&S TRAINING</a>
            <a href="#">CONTACT</a>
          </nav>
        </div>
        <div className="header-blue-bar"></div>
      </header>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="site-content">
        {currentPage === 'home' && (
          <div className="home-hero-placeholder" style={{ padding: '100px 20px', textAlign: 'center' }}>
            <h1 className="hero-title">Connecting Talent with Opportunity</h1>
          </div>
        )}

        {currentPage === 'whyus' && <Whyus />}
        {currentPage === 'coreservices' && <Coreservices />}
        {currentPage === 'hiring' && <OurHighringProcess />} 
        {currentPage === 'health' && <HealthAndSafety />}
        {currentPage === 'termsPerm' && <GeneralTerms />}
        {currentPage === 'termsTemp' && <TemporaryTerms />}
        {currentPage === 'register' && <Register />}
        {currentPage === 'about' && <AboutUs />}
        {currentPage === 'values' && <CoreValues />} 
      </main>

      {/* --- FOOTER --- */}
      <footer className="main-footer">
        <div className="footer-grid">
          <div className="footer-col-1">
            <img src={logo} alt="FastForce Footer Logo" className="footer-logo-large" />
            <p className="footer-tagline">Reinventing NZ Workplaces</p>
            <div className="social-icons-centered">
              <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-link"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-link"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          <div className="footer-col-2">
            <img src={rcsa} className="partner-img" alt="RCSA Member" />
            <img src={sitesafe} className="partner-img" alt="SiteSafe Member" />
            <img src={adt} className="partner-img" alt="ADT Logo" />
          </div>

          <div className="footer-col">
            <h3>QUICK LINKS</h3>
            <ul className="footer-links">
              <li onClick={() => navigateTo('home')}>Home</li>
              <li onClick={() => navigateTo('coreservices')}>Core Services</li>
              <li onClick={() => navigateTo('about')}>About Us</li> 
              <li onClick={() => navigateTo('values')}>Core Values</li> 
              <li onClick={() => navigateTo('hiring')}>Hiring Process</li>
              <li onClick={() => navigateTo('health')}>Health & Safety</li>
              <li onClick={() => navigateTo('termsPerm')}>Permanent Terms</li>
              <li onClick={() => navigateTo('termsTemp')}>Temporary Terms</li>
              <li onClick={() => navigateTo('register')}>Register</li>
            </ul>
          </div>

          <div className="footer-col contact-col">
            <h3>CONTACT</h3>
            <div className="office-info"><p><strong>Christchurch Office</strong><br/>Phone: 03 3350223</p></div>
            <div className="office-info"><p><strong>Ashburton Office</strong><br/>Phone: 02 25282386</p></div>
            <div className="office-info"><p><strong>Dunedin Office</strong><br/>Phone: 02 12788917</p></div>
          </div>
        </div>
      </footer>

      <div className="sub-footer">
        <div className="sub-footer-container">
          <div className="copyright-info">
            <p>© Copyright 2026 www.fastforce.co.nz</p>
            <p>Design & Developed by Perfect Designing Solutions</p>
          </div>
          <div className="sub-footer-links">
            <a href="#" onClick={() => navigateTo('termsPerm')}>Terms (Perm)</a>
            <a href="#" onClick={() => navigateTo('termsTemp')}>Terms (Temp)</a>
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