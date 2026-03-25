import React from 'react';

const CoreValues = () => {
  const values = [
    { title: "FAST", desc: "Every job is urgent for us. We deliver fast results – just as our world is demanding.", color: "#4caf50", icon: "fas fa-bolt" },
    { title: "SERVICES", desc: "We are focused on giving above-industry-standard services to our customers and candidates.", color: "#2196f3", icon: "fas fa-concierge-bell" },
    { title: "RELIABLE", desc: "We convey what we guarantee.", color: "#673ab7", icon: "fas fa-shield-alt" },
    { title: "TRUST", desc: "We believe in establishing trust via honest communication and delivery – even if we fail on our commitment on any day.", color: "#ff9800", icon: "fas fa-handshake" },
    { title: "INNOVATIVE", desc: "We will keep evolving our technological platform to suit industry and legal requirements.", color: "#00bcd4", icon: "fas fa-lightbulb" }
  ];

  return (
    <div className="core-values-page">
      <section className="hiring-banner">
        <div className="hiring-banner-text-box">
          <h1 className="hiring-banner-title">Our Core Values</h1>
        </div>
      </section>

      <div className="container-narrow values-container">
        {values.map((val, index) => (
          <div key={index} className={`value-row ${index % 2 !== 0 ? 'row-reverse' : ''}`}>
            <div className="value-text">
              <h2>{val.title}</h2>
              <p>{val.desc}</p>
            </div>
            <div className="value-visual">
              <div className="value-circle" style={{ backgroundColor: val.color }}>
                <i className={val.icon}></i>
                <span>{val.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreValues;