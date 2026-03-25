import React from 'react';

const Coreservices = () => {
  const specialties = [
    {
      title: "OUR SPECIALITY IN TRADES/CONSTRUCTION",
      desc: "We have a wide talent pool in construction and trades, offering skilled candidates ranging from painters to engineers.",
      img: "/builder.jpg",
      align: "right"
    },
    {
      title: "OUR SPECIALITY IN WAREHOUSING & DRIVERS",
      desc: "We supply workers for roles ranging from Pick/Packers to Class 5 drivers and everything in between.",
      img: "/warehouse-c.jpg",
      align: "left"
    },
    {
        title: "OUR SPECIALITY IN FARMING",
        desc: "Looking for a Dairy Farmworker, Harvesters, farm hand or machine operator? Look no further!",
        img: "/iStock-961141132.jpg",
        align: "right"
    },
    {
      title: "OUR SPECIALITY IN RELIEF DRIVER SERVICES",
      desc: "We supply verified drivers with class 1,2,4 and 5 for long and short-term assignments to keep you moving.",
      img: "/relief-driver.jpg",
      align: "left"
    },
    {
      title: "OUR SPECIALITY IN HEALTH CARE",
      desc: "We have Registered Nurses and Caregivers available to assist you for short and long term care. We have a pool of competent candidates who are ready to provide exceptional care.",
      img: "/Health-Care-Nurse.jpg",
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