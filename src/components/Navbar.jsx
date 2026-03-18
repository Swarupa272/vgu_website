function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img 
          src="https://p7.hiclipart.com/preview/813/542/320/swami-vivekananda-hinduism-vedanta-ramakrishna-mission-national-youth-day-hinduism.jpg" 
          alt="VGU Logo"
          className="logo-image"
        />
        <div className="logo-text">
          <p className="logo-title">VIVEKANANDA GLOBAL</p>
          <p className="logo-subtitle">UNIVERSITY, JAIPUR</p>
        </div>
      </div>
      <ul className="nav-links">
        <li><a href="#about">About Us</a></li>
        <li><a href="#admissions">Admissions</a></li>
        <li><a href="#life">Life @ VGU</a></li>
        <li><a href="#placements">Placements</a></li>
        <li><a href="#research">Research</a></li>
      </ul>
      <button className="apply-btn">Apply Now</button>
    </nav>
  );
}

export default Navbar;