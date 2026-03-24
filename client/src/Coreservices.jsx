import React from 'react';

const Coreservices = () => {
  const specialties = [
    {
      title: "OUR SPECIALITY IN TRADES/CONSTRUCTION",
      desc: "We have a wide talent pool in construction and trades, offering skilled candidates ranging from painters to engineers.",
      img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500",
      align: "right"
    },
    {
      title: "OUR SPECIALITY IN WAREHOUSING & DRIVERS",
      desc: "We supply workers for roles ranging from Pick/Packers to Class 5 drivers and everything in between.",
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500",
      align: "left"
    },
    {
        title: "OUR SPECIALITY IN FARMING",
        desc: "Looking for a Dairy Farmworker, Harvesters, farm hand or machine operator? Look no further!",
        img: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=500",
        align: "right"
    }
  ];

  return (
    <div className="services-page">
      <section className="page-banner">
        <h1>Core Services</h1>
      </section>

      <section className="specialties-section">
        {specialties.map((item, index) => (
          <div className={`specialty-row ${item.align === 'left' ? 'reverse' : ''}`} key={index}>
            <div className="specialty-text">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <button className="learn-more-btn">Learn More</button>
            </div>
            <div className="specialty-image">
              <img src={item.img} alt={item.title} />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Coreservices;