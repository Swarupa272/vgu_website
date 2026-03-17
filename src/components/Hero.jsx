import Form from "./Form";

function Hero() {
  return (
    <div className="hero-container">
      
      {/* LEFT SIDE */}
      <div className="hero-left">
        <p className="tag">● ADMISSIONS OPEN 2025-26</p>

        <h1>
          Unlock Your <br />
          <span className="highlight">Potential</span>
        </h1>

        <p className="subtitle">at Vivekananda Global University</p>

        <p className="desc">
          Experience a world-class education that blends academic excellence
          with practical innovation. Join a vibrant community of future leaders.
        </p>

        <div className="stats">
          <div className="stat-item">
            <div className="stat-icon">🎓</div>
            <h3>50+</h3>
            <p>Global Courses</p>
          </div>
          <div className="stat-item">
            <div className="stat-icon">🌍</div>
            <h3>35+</h3>
            <p>Countries</p>
          </div>
          <div className="stat-item">
            <div className="stat-icon">👥</div>
            <h3>10k+</h3>
            <p>Students</p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <Form />

    </div>
  );
}

export default Hero;