import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-us-page">
      {/* Banner matching your site's theme */}
      <section className="hiring-banner" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200')" }}>
        <div className="hiring-banner-text-box">
          <h1 className="hiring-banner-title">About Us</h1>
        </div>
      </section>

      <div className="container-narrow" style={{ textAlign: 'left', marginTop: '60px' }}>
        <h2 className="navy-heading">Our Story</h2>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#444' }}>
          Fast Force began out of the desire to contribute to New Zealand’s growing workforce, by focussing on helping both our clients and candidates meet their specific needs. Fast Force saves businesses time and money, while providing its employees with a safe and respectful workplace.
        </p>
        
        <div className="gray-section-wrapper" style={{ margin: '40px -20px', padding: '40px 20px' }}>
          <h2 className="navy-heading">Our Mission</h2>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#444' }}>
            We are on a mission to match the right talent with the right businesses, which will lead to fuller lives, stronger organisations, and richer communities. The quality of our services is our fundamental principle.
          </p>
        </div>

        <h2 className="navy-heading">Looking Ahead</h2>
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#444', marginBottom: '60px' }}>
          Fast Force aims to expand into more industries in New Zealand by 2025.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;