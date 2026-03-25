import React from 'react';

const Contact = () => {
  // Replace this URL with your actual image path or import
  const bgImage = "";

  return (
    <div className="contact-page">
      {/* Hero Banner with Inline Background Image */}
      <section 
        className="contact-hero-banner"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 67, 93, 0.7), rgba(26, 67, 93, 0.7)), url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '350px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div className="banner-overlay">
          <h1 className="banner-title" style={{ color: '#fff', fontSize: '60px', fontWeight: '900', letterSpacing: '4px' }}>
            CONTACT US
          </h1>
        </div>
      </section>

      <div className="contact-main-content">
        <div className="contact-container-flex">
          {/* Left Side: Contact Form */}
          <div className="contact-form-wrapper">
            <form className="contact-ui-form">
              <div className="form-group"><input type="text" placeholder="Full Name*" required /></div>
              <div className="form-group"><input type="email" placeholder="Email*" required /></div>
              <div className="form-group"><input type="text" placeholder="Subject" /></div>
              <div className="form-group"><textarea placeholder="Message*" rows="6" required></textarea></div>
              <button type="submit" className="contact-submit-btn">SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </div>

      {/* --- OFFICE DETAILS SECTION --- */}
      <div className="office-details-wrapper">
        <div className="office-details-grid">
          <div className="office-info-card">
            <h3>Christchurch Office</h3>
            <p>520 Cranford Street,<br />Papanui, Christchurch – 8051.</p>
            <p><strong>Phone:</strong> 03 3350223</p>
            <p><strong>E-mail:</strong> join@fastforce.co.nz</p>
            <p><strong>Opening Hours:</strong> 8:30 am to 5pm<br />Monday to Friday</p>
          </div>

          <div className="office-info-card">
            <h3>Ashburton Office</h3>
            <p>2 Queens Drive,<br />Ashburton, 7700.</p>
            <p><strong>Phone:</strong> 02 25282386</p>
            <p><strong>E-mail:</strong> char@fastforce.co.nz</p>
            <p><strong>Opening Hours:</strong> 9 am to 3pm<br />Monday to Friday</p>
          </div>

          <div className="office-info-card">
            <h3>Dunedin Office</h3>
            <p>Regus, Level 1,<br />218 George Street, Dunedin, 9016.</p>
            <p><strong>Phone:</strong> 02 12788917</p>
            <p><strong>E-mail:</strong> harry@fastforce.co.nz</p>
            <p><strong>Opening Hours:</strong> 9 am to 3pm<br />Monday to Wednesday</p>
          </div>
        </div>
      </div>

      {/* --- HORIZONTAL MAPS SECTION --- */}
      <div className="maps-section-wrapper">
        <div className="maps-horizontal-grid">
          <div className="map-card">
            <div className="map-label">CHRISTCHURCH OFFICE</div>
            <div className="map-box">
              <iframe title="Christchurch" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2894.253457582234!2d172.61715427670783!3d-43.49704287110996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d318bd165243881%3A0xc3f6050b12975945!2s520%20Cranford%20Street%2C%20Papanui%2C%20Christchurch%208051!5e0!3m2!1sen!2snz!4v1710000000000" width="100%" height="280" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
            </div>
          </div>

          <div className="map-card">
            <div className="map-label">ASHBURTON OFFICE</div>
            <div className="map-box">
              <iframe title="Ashburton" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2861.733529363578!2d171.7486829767355!3d-43.91307687109204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d2e379435b66779%3A0x628045610667341e!2s2%20Queens%20Drive%2C%20Ashburton%207700!5e0!3m2!1sen!2snz!4v1710000000000" width="100%" height="280" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
            </div>
          </div>

          <div className="map-card">
            <div className="map-label">DUNEDIN OFFICE</div>
            <div className="map-box">
              <iframe title="Dunedin" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2777.2917757954153!2d170.50193407680787!3d-45.8754562710839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa82be56a7c36a6a1%3A0x1d00ef7298647c0!2s218%20George%20Street%2C%20Dunedin%20Central%2C%20Dunedin%209016!5e0!3m2!1sen!2snz!4v1710000000000" width="100%" height="280" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;