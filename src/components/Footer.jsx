export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Logo and University Name */}
        <div className="footer-logo-section">
          <div className="footer-logo">
            <img 
              src="https://p7.hiclipart.com/preview/813/542/320/swami-vivekananda-hinduism-vedanta-ramakrishna-mission-national-youth-day-hinduism.jpg" 
              alt="VGU Logo"
              className="logo-image"
            />
          </div>
          <div className="footer-university-info">
            <h3 className="university-name">VIVEKANANDA GLOBAL UNIVERSITY JAIPUR</h3>
            <p className="university-subtitle">About Us:
Vivekananda Global University (VGU) in Rajasthan stands out as the premier 
educational institution in the region, offering a diverse range of undergraduate 
and postgraduate courses. From cutting-edge programs like B.Tech., BCA, BBA, BHMCT,
 B.Sc. and B.Com. to esteemed disciplines like LLB, B.Arch, MBA, M.Tech., M.Sc.,
  MJMC, 
and MCA, VGU provides an enriching academic experience.</p>
          </div>
        </div>

        {/* Address */}
        <div className="footer-address">
          <p className="address-text">
            Sector 36, NRI Road, Jagatpura, Jaipur - 303012, Rajasthan, India
          </p>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p className="copyright-text">
            © 2025 Vivekananda Global University. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}