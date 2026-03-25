import React from 'react';

const HiringProcess = () => {
  return (
    <div className="hiring-process-wrapper">
      {/* Hero Banner */}
      <section className="hiring-banner">
        <h1 className="page-banner">OUR HIRING PROCESS</h1>
      </section>

      {/* Sub Header / Enquire Bar */}
      <div className="enquire-bar">
        <h2>FIND THE RIGHT WORK FORCE FOR YOUR ORGANIZATION</h2>
        <button className="enquire-now-btn">Enquire Now</button>
      </div>

      {/* Step 1: Hiring Needs */}
      <section className="specialties-section">
        <div className="specialty-row">
          <div className="specialty-image">
            <img 
              src="/tell-us.jpg" 
              alt="Laptop displaying recruitment site" 
            />
          </div>
          <div className="specialty-text">
            <h2 className="green-heading">TELL US ABOUT YOUR HIRING NEEDS</h2>
            <p>
              Submit your job vacancy online in just minutes, or simply call us. Fast Force is committed to 
              finding and delivering exactly what you require. Whether you are looking for a temporary 
              employee who can start right away or a permanent employee to join your team, we are 
              100% committed to finding employees who are the best fit for your company.
            </p>
          </div>
        </div>
      </section>

      {/* Step 2: Review and Select (Gray Background) */}
      <div className="gray-section-wrapper">
        <section className="specialty-row reverse">
          <div className="specialty-image">
            <img 
              src="/review.jpg" 
              alt="Team reviewing documents" 
            />
          </div>
          <div className="specialty-text">
            <h2 className="green-heading">REVIEW AND SELECT CANDIDATES</h2>
            <p>
              We will provide you with a short-list of verified and skilled candidates and our recommendations 
              will be tailored to the nuances of your role and business. References & background checks and 
              Drug testing are conducted for each candidate and the outcome of this is presented to you. 
              Only well-suited, qualified, and verified candidates are forwarded to the client for consideration. 
              Then, once you select the best candidate, we will coordinate all aspects of the recruiting process, 
              working hard to ensure a smooth start for you and your new employee.
            </p>
          </div>
        </section>
      </div>

      {/* Step 3: Hunt Tailored */}
      <section className="specialties-section">
        <div className="specialty-row">
          <div className="specialty-text" style={{ flex: '2' }}>
            <h2 className="navy-heading" style={{ textAlign: 'left' }}>HUNT TAILORED TO THE JOB</h2>
            <p>
              After initial process, our consultant will visit your premises to get to know you and the 
              business requirements better. Once we have all we need to run a talent search for the client, we...
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HiringProcess;