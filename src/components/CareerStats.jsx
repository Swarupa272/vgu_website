export default function CareerStats() {
  const statsData = [
    {
      id: 1,
      value: '₹1.1 Cr',
      label: 'HIGHEST PACKAGE',
      isHighlighted: true,
    },
    {
      id: 2,
      value: '1100+',
      label: 'OFFERS MADE',
      isHighlighted: false,
    },
    {
      id: 3,
      value: '500+',
      label: 'RECRUITERS',
      isHighlighted: false,
    },
    {
      id: 4,
      value: '₹8.5 LPA',
      label: 'AVERAGE PACKAGE',
      isHighlighted: false,
    },
    {
      id: 5,
      value: '250+',
      label: 'DREAM OFFERS',
      isHighlighted: false,
    },
    {
      id: 6,
      value: '50+',
      label: 'GLOBAL OFFERS',
      isHighlighted: false,
    },
  ];

  const companies = ['OSYS', 'Wipro', 'Adobe', 'Oracle', 'Samsung', 'Accenture', 'IBM', 'Microsoft'];

  return (
    <div className="career-stats-container">
      <div className="main-content">
        <div className="left-section">
          <p className="small-label">● PLACEMENT REPORT 2024</p>
          <h1 className="main-heading">
            Global<br />
            <span className="red-text">Career Impact</span>
          </h1>
          <p className="description-text">
            Our industry-first curriculum ensures you're not just graduating, but stepping into a career at top global firms.
          </p>
        </div>

        {/* Right Side - Stats Cards Section */}
        <div className="stats-cards-section">
          {statsData.map((stat) => (
            <div 
              key={stat.id} 
              className={stat.isHighlighted ? 'stat-card stat-card-red' : 'stat-card stat-card-white'}
            >
              {/* If this is the highlighted card, show the RECORD badge */}
              {stat.isHighlighted && <span className="record-badge">RECORD</span>}
              
              {/* Card Content */}
              <div className="stat-card-value">{stat.value}</div>
              <div className="stat-card-label">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom Section - Companies */}
      <div className="companies-section">
        <h2 className="companies-heading">Top Recruiters</h2>
        <p className="companies-subheading">HIRING OUR STUDENTS</p>
        
        <div className="companies-list">
          {companies.map((company, index) => (
            <span key={index} className="company-name">
              {company}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}