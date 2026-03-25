import React from 'react';

const CorporateProfile = () => {
  // Replace these with the actual image paths for the profile pages
  const profileImages = [
    '/profile-22_page-0001.jpg',
    '/profile-22_page-0002.jpg',
    '/profile-22_page-0003.jpg',
    '/profile-22_page-0004.jpg',
    '/profile-22_page-0005.jpg'
  ];

  return (
    <div className="corporate-profile-page">
      <section className="hiring-banner">
        <div className="hiring-banner-text-box">
          <h1 className="hiring-banner-title">Corporate Profile</h1>
        </div>
      </section>

      <div className="container-narrow profile-content">
        <div className="download-section">
          <a 
            href="/profile-22.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="corporate-download-btn"
          >
            DOWNLOAD CORPORATE PROFILE <i className="fas fa-file-pdf"></i>
          </a>
        </div>

        <div className="profile-slider-container">
          <div className="profile-slider-wrapper">
            {profileImages.map((img, index) => (
              <div key={index} className="profile-slide">
                <img src={img} alt={`Corporate Profile Page ${index + 1}`} />
              </div>
            ))}
          </div>
          <div className="slider-instruction">
            <i className="fas fa-arrows-alt-h"></i> Scroll or Swipe to view pages
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateProfile;