import React from 'react';

const HealthAndSafety = () => {
  return (
    <div className="hiring-process-wrapper">
      {/* Hero Banner using the provided background image */}
      <section 
        className="hiring-banner" 
        style={{ 
          backgroundImage: "url('/whyus.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="hiring-banner-text-box">
          <h1 className="hiring-banner-title">HEALTH & SAFETY</h1>
        </div>
      </section>

      {/* Main Content Area with Sidebar Layout */}
      <div className="hs-content-container" style={{ display: 'flex', maxWidth: '1200px', margin: '40px auto', padding: '0 20px', gap: '40px' }}>
        
        {/* Left Side: Main Text Content */}
        <div className="hs-main-text" style={{ flex: '2', textAlign: 'left' }}>
          <h2 className="green-heading" style={{ marginBottom: '20px' }}>HEALTH & SAFETY</h2>
          <p>Here at Fast Force, we are 100% committed to the health & safety of all our workers and others related to their workplace activities.</p>
          
          <p>As an agency, we try our best to make sure that every worker is attending a workplace which is risk-free, and they return home uninjured. This commitment always sees us increasing awareness of health and safety across all staff, candidates and clients involved with Fast Force.</p>

          <p>We have a customised, industry-leading health and safety induction which all our candidates complete. Every time we send out a worker to our client, they are provided with additional information which outlines the risks associated with the role. Having said so, we can assure that all our workers hold good general knowledge of health and safety. In addition, we ensure that the client has site-specific induction in place for the workers prior to commencing the assignment.</p>

          <p>We take full responsibility of our share in eliminating or minimising health and safety risks and injury prevention. Therefore, in our recruitment process, all our candidates go through a robust health and safety induction which covers the following:</p>

          <ul style={{ listStyleType: 'disc', paddingLeft: '20px', lineHeight: '2' }}>
            <li>Work-related reference checks</li>
            <li>General H&S assessment</li>
            <li>Medical declaration</li>
            <li>Ministry of Justice check</li>
            <li>ACC checks</li>
            <li>License checks</li>
            <li>Drug testing</li>
          </ul>

          <p style={{ marginTop: '20px' }}>We do the training – so our client and candidate can have peace of mind. In addition, we also invite our clients to store their health and safety information on our site as videos or documents so that candidates can go through it. Once they have viewed or read the information, we’ll ask the candidates a range of questions to make sure they understand all the information.</p>

          <p>Fast Force, on regular basis, conducts site visits and maintains communication with all stakeholders to understand the needs of each site. We promote clear and honest communication with our clients and candidates to consult, co-ordinate and co-operate for any health and safety issues.</p>
        </div>

        {/* Right Side: Useful Links Sidebar */}
        {/* Right Side: Useful Links Sidebar */}
        <div className="hs-sidebar" style={{ flex: '1', minWidth: '250px' }}>
          <h3 className="navy-heading" style={{ borderBottom: '2px solid #eee', paddingBottom: '10px' }}>USEFUL LINKS</h3>
          <ul className="useful-links-list" style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ padding: '12px 0', borderBottom: '1px solid #eee' }}>
              <a href="/WHS-policy.pdf" target="_blank" style={{ textDecoration: 'none', color: '#7aba2e', fontWeight: '500', fontSize: '14px' }}>WHS Policy</a>
            </li>
            <li style={{ padding: '12px 0', borderBottom: '1px solid #eee' }}>
              <a href="/Drug__Alcohol_Policy.pdf" target="_blank" style={{ textDecoration: 'none', color: '#7aba2e', fontWeight: '500', fontSize: '14px' }}>Drug & Alcohol Policy</a>
            </li>
            <li style={{ padding: '12px 0', borderBottom: '1px solid #eee' }}>
              <a href="/Health__Safety.pdf" target="_blank" style={{ textDecoration: 'none', color: '#7aba2e', fontWeight: '500', fontSize: '14px' }}>Health & Safety Guide</a>
            </li>
            <li style={{ padding: '12px 0', borderBottom: '1px solid #eee' }}>
              <a href="/Client-WHS-Systems-Checklist.pdf" target="_blank" style={{ textDecoration: 'none', color: '#7aba2e', fontWeight: '500', fontSize: '14px' }}>Client WHS Systems Checklist</a>
            </li>
            <li style={{ padding: '12px 0', borderBottom: '1px solid #eee' }}>
              <a href="/INCIDENT-OR-NEAR-MISS-REPORT.pdf" target="_blank" style={{ textDecoration: 'none', color: '#7aba2e', fontWeight: '500', fontSize: '14px' }}>Incident or Near Miss Report</a>
            </li>
            <li style={{ padding: '12px 0', borderBottom: '1px solid #eee' }}>
              <a href="/Accident-Investigation-Form.pdf" target="_blank" style={{ textDecoration: 'none', color: '#7aba2e', fontWeight: '500', fontSize: '14px' }}>Accident Investigation Form</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HealthAndSafety;