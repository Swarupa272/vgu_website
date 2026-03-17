
export default function WhyChoose() {
  const featuresData = [
    {
      id: 1,
      icon: '🔧',
      iconColor: 'blue',
      title: 'Practice Intensive',
      description: 'Hands-on learning with 100+ state-of-the-art laboratories and research centers.',
      action: 'Learn More',
    },
    {
      id: 2,
      icon: '⚡',
      iconColor: 'red',
      title: 'Industry Linkage',
      description: 'Direct access to 500+ top-tier industry partners for internships and placements.',
      action: 'Learn More',
    },
    {
      id: 3,
      icon: '🔗',
      iconColor: 'orange',
      title: 'Modern Facilities',
      description: 'A futuristic campus with smart classrooms, digital libraries, and maker spaces.',
      action: 'Learn More',
    },
  ];

  return (
    <div className="why-choose-vgu-container">
      {/* Header Section */}
      <div className="header-section">
        <p className="header-label">WHY CHOOSE VGU?</p>
        <h1 className="header-title">
          BE A TRAILBLAZER.<br />
          <span className="red-text">FUTURE LEADER.</span>
        </h1>
      </div>

      {/* Features Grid */}
      <div className="features-grid">
        {featuresData.map((feature) => (
          <div key={feature.id} className="feature-card">
            {/* Icon */}
            <div className={`feature-icon icon-${feature.iconColor}`}>
              {feature.icon}
            </div>

            {/* Title */}
            <h3 className="feature-title">{feature.title}</h3>

            {/* Description */}
            <p className="feature-description">{feature.description}</p>

            {/* Learn More Link */}
            <a href="#" className="feature-link">
              {feature.action} <span className="arrow">→</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}