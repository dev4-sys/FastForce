import React from 'react';

const Register = () => {
  return (
    <div className="register-page">
      <section className="hiring-banner" style={{ backgroundImage: "url('')" }}>
        <div className="hiring-banner-text-box">
          <h1 className="hiring-banner-title">Request Talent</h1>
        </div>
      </section>

      <div className="talent-form-container">
        <h2 className="navy-heading">Talent Request Form</h2>
        <p style={{ fontSize: '14px', color: '#666', marginBottom: '25px' }}>
          Fill out the form below and a Fast Force Consultant will contact you ASAP.
        </p>

        <form>
          <div className="talent-grid-wrapper">
            
            <div className="talent-form-group">
              <label>First Name*</label>
              <input type="text" required />
            </div>

            <div className="talent-form-group">
              <label>Last Name*</label>
              <input type="text" required />
            </div>

            <div className="talent-form-group">
              <label>Company Name*</label>
              <input type="text" required />
            </div>

            <div className="talent-form-group">
              <label>Email*</label>
              <input type="email" required />
            </div>

            <div className="talent-form-group">
              <label>Phone*</label>
              <input type="tel" required />
            </div>

            <div className="talent-form-group">
              <label>Type of staff required*</label>
              <select required>
                <option value="">—Please choose an option—</option>
                <option value="Temporary">Temporary Staff</option>
                <option value="Permanent">Permanent Staff</option>
              </select>
            </div>

            <div className="talent-form-group">
              <label>No of Staff Required*</label>
              <input type="number" required />
            </div>

            <div className="talent-form-group">
              <label>Start Date</label>
              <input type="date" />
            </div>

            <div className="talent-form-group">
              <label>Industry*</label>
              <input type="text" required />
            </div>

            <div className="talent-form-group">
              <label>Location*</label>
              <select required>
                <option value="">—Please choose an option—</option>
                <option value="Auckland">Auckland</option>
                <option value="Wellington">Wellington</option>
                <option value="Christchurch">Christchurch</option>
                <option value="Hamilton">Hamilton</option>
                <option value="Tauranga">Tauranga</option>
                <option value="Napier-Hastings">Napier-Hastings</option>
                <option value="Dunedin">Dunedin</option>
                <option value="Palmerston North">Palmerston North</option>
                <option value="Nelson">Nelson</option>
                <option value="Rotorua">Rotorua</option>
                <option value="Whangarei">Whangarei</option>
                <option value="New Plymouth">New Plymouth</option>
                <option value="Invercargill">Invercargill</option>
                <option value="Whanganui">Whanganui</option>
                <option value="Gisborne">Gisborne</option>
              </select>
            </div>

            <div className="talent-form-group">
              <label>Job Title*</label>
              <input type="text" required />
            </div>

            <div className="talent-form-group">
              <label>Upload Job Description</label>
              <input type="file" style={{ border: 'none', padding: '5px' }} />
            </div>

            <div className="talent-form-group full-width">
              <label>Additional Comments</label>
              <textarea placeholder="Tell us more about your requirements..."></textarea>
            </div>

            <div className="talent-form-group full-width">
              <label>Copy and Paste Job Description</label>
              <textarea placeholder="Paste text here..."></textarea>
            </div>

          </div>

          <div style={{ marginTop: '30px' }}>
            <button type="submit" className="form-submit-btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;