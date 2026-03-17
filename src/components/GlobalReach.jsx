function GlobalReach() {
  return (
    <div className="global-container">
      
      {/* LEFT CONTENT */}
      <div className="global-left">
        <p className="badge">● Global Reach</p>

        <h1>
          Expand Your <br />
          <span>Horizons</span>
        </h1>

        <p className="global-desc">
          Study abroad, collaborate with international faculty, and join a 
          community that spans borders. At VGU, the world is your campus.
        </p>

        {/* Tags */}
        <div className="tags">
          <span>✈️ Exchange Programs</span>
          <span>🎓 Summer Schools</span>
          <span>🌍 Global Faculty</span>
        </div>

        <button className="brochure-btn">Download Brochure</button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="global-right">
        <img 
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="students"
        />
      </div>

    </div>
  );
}

export default GlobalReach;