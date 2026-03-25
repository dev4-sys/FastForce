import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-us-page">
      {/* Banner structure kept exactly as before */}
      <section className="hiring-banner" style={{ backgroundImage: "url('')" }}>
        <div className="hiring-banner-text-box">
          <h1 className="hiring-banner-title">About Us</h1>
        </div>
      </section>

      <div className="container-narrow" style={{ textAlign: 'left', marginTop: '60px', paddingBottom: '80px' }}>
        
        {/* Content now presented as clean paragraphs */}
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#444', marginBottom: '25px' }}>
          Fast Force began out of the desire to contribute to New Zealand’s growing workforce, by focussing on helping both our clients and candidates meet their specific needs. Fast Force saves businesses time and money, while providing its employees with a safe and respectful workplace.
        </p>
        
        <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#444', marginBottom: '25px' }}>
          We are on a mission to match the right talent with the right businesses, which will lead to fuller lives, stronger organisations, and richer communities. The quality of our services is our fundamental principle.
        </p>

        <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#444' }}>
          Fast Force aims to expand into more industries in New Zealand by 2025.
        </p>

      </div>
    </div>
  );
};

export default AboutUs;