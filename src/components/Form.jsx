import { useState } from "react";`1`
function Form() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    program: "",
    city: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application Submitted");
    console.log(form);
  };

  return (
    <div className="form-card">
      <div className="form-header">
        <div className="form-badge">
          <span className="badge-icon">✨</span>
          <span className="badge-text">#1 Innovation</span>
        </div>
        <span className="limited-seats">LIMITED SEATS</span>
      </div>

      <h2>Apply Now</h2>
      <p className="sub">Begin your journey towards excellence.</p>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>FIRST NAME</label>
            <input 
              name="firstName" 
              placeholder="John" 
              onChange={handleChange}
              value={form.firstName}
            />
          </div>
          <div className="form-group">
            <label>LAST NAME</label>
            <input 
              name="lastName" 
              placeholder="Doe" 
              onChange={handleChange}
              value={form.lastName}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>EMAIL</label>
            <input 
              name="email" 
              type="email"
              placeholder="john@example.com" 
              onChange={handleChange}
              value={form.email}
            />
          </div>
          <div className="form-group">
            <label>PHONE</label>
            <div className="phone-input">
              <span className="country-code">+91</span>
              <input 
                name="phone" 
                placeholder="98765 43210" 
                onChange={handleChange}
                value={form.phone}
              />
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>PROGRAM</label>
            <select name="program" onChange={handleChange} value={form.program}>
              <option value="">Select Program</option>
              <option value="btech">B.Tech</option>
              <option value="mca">MCA</option>
              <option value="mba">MBA</option>
              <option value="phd">Ph.D</option>
            </select>
          </div>

          <div className="form-group">
            <label>CITY</label>
            <input 
              name="city" 
              placeholder="Your City" 
              onChange={handleChange}
              value={form.city}
            />
          </div>
        </div>

        <button className="submit-btn">Submit Application →</button>
      </form>

      <div className="form-footer">
        <p className="secure">🔒 Your data is secure and encrypted</p>
        <div className="new-joiners">
          <div className="joiners-avatars">
            <img src="https://i.pravatar.cc/32?img=1" alt="Student" />
            <img src="https://i.pravatar.cc/32?img=2" alt="Student" />
            <img src="https://i.pravatar.cc/32?img=3" alt="Student" />
            <span className="more">+2k</span>
          </div>
          <p>New Joiners</p>
        </div>
      </div>
    </div>
  );
}

export default Form;