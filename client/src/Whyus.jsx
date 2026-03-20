import React from 'react';

const Whyus = () => {
  const tableData = [
    { f: "Accredited Employer", w: "Gives you access to the international candidate market", b: "Best possible return on your investment in staffing" },
    { f: "In-house Drug testing", w: "Access to the drug free candidate pool", b: "Health and Safety compliant candidates" },
    { f: "Immigration Assistance", w: "Immigration guidance for Accreditation & work visas", b: "Instant advice on any immigration matters" },
    { f: "Background Verified", w: "Access to candidates whose MOJ/references are verified", b: "Saves time and lowers the risk of hiring" },
    { f: "Pre-Selection", w: "Save Time – Money", b: "Allows you to concentrate on other important tasks" },
    { f: "90 Days Guarantee", w: "Safeguarded should placement be found unsuitable", b: "Your investment is protected; replacement subject to T&C" },
    { f: "Temp to Permanent", w: "Trial period", b: "“Try before you buy” – assess before permanent hire" },
    { f: "Pay for Hours Worked", w: "Cost effective", b: "Your cost and responsibility are contained" },
    { f: "Temps on Our Payroll", w: "No wage or admin cost", b: "Your overhead costs are minimized" },
    { f: "Candidate Care", w: "Commitment, flexible, quick learners", b: "Assurance of happy, competent workers" },
    { f: "Full Resume", w: "Full information, ease of selection", b: "Access to the best talent pool; time effective" },
    { f: "Qualified Consultants", w: "Able to make qualified decisions", b: "Interview only the most suitable applicants" },
    { f: "Speed of Response", w: "Cost effectiveness, less downtime", b: "Minimum disruption to your organization/output" },
    { f: "Sensitive Process", w: "No information leaked internally/externally", b: "Confidential information will be secured" },
    { f: "Professional Temps", w: "Continuity, stability", b: "Work completed to the highest standard" },
    { f: "Established Company", w: "Tried and tested methods", b: "Dealing with a professional organization" }
  ];

  return (
    <div className="why-us-page">
      <section className="page-banner">
        <div className="banner-content">
          <h1>WHY US</h1>
          <p>Reinventing NZ Workplaces through tailored recruitment solutions.</p>
        </div>
      </section>

      <section className="intro-section">
        <div className="container-narrow">
          <h2>Service Features & Benefits</h2>
          <p className="intro-text">
            At Fast Force, there are various service features and benefits designed to assist our clients easing the challenges of hiring. 
            Most of the services’ features are custom designed and benefits are explained as per the client needs after a thorough consultation. 
            Our consultants are not "one size fits all" thinkers. We can assure that you will be guided and provided with the desired outcome in a timely manner.
          </p>
          <p className="intro-subtext">
            All the services at any level are carefully designed while keeping <strong>QUALITY</strong> in mind. 
            Below is the overview of some Features and Benefits but not limited to:
          </p>
        </div>
      </section>

      <section className="table-section">
        <div className="table-container">
          <table className="benefits-table">
            <thead>
              <tr>
                <th>Features</th>
                <th>What do you get?</th>
                <th>Client Benefits</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td className="feat-cell">{row.f}</td>
                  <td>{row.w}</td>
                  <td>{row.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Whyus;