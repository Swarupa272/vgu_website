export default function CampusHighlights() {
  const highlightsData = [
    {
      id: 1,
      type: 'alumni',
      badge: 'NATIONAL WINNER',
      badgeColor: 'green',
      name: 'Rahul Verma',
      role: 'CONSULTANT @ DELOITTE',
      description: 'Holistic development is not just a phrase here, it\'s a practice.',
      rating: 5,
      action: 'arrow',
      // Add image URL here
      image: 'https://i.pravatar.cc/150?img=1',
    },
    {
      id: 2,
      type: 'event',
      badge: 'UPCOMING',
      badgeColor: 'purple',
      name: 'TedX VGU 2024',
      role: 'MARCH 15 • AUDITORIUM',
      description: 'Ideas worth spreading. Join us for a day of inspiration.',
      action: 'register',
      // Event icon (emoji)
      image: null,
      eventIcon: '📅',
    },
    {
      id: 3,
      type: 'alumni',
      badge: 'ALUMNI',
      badgeColor: 'blue',
      name: 'Sneha Gupta',
      role: 'SCIENTIST @ DRDO',
      description: 'Research facilities at VGU are comparable to the best in the country.',
      rating: 5,
      action: 'arrow',
      image: 'https://i.pravatar.cc/150?img=5',
    },
    {
      id: 4,
      type: 'achievement',
      badge: 'BIO-TECHNOLOGY DEPT',
      badgeColor: 'orange',
      name: 'Patent Granted',
      role: 'INNOVATION',
      description: 'Prof. Rao & team granted patent sustainable waste management.',
      action: 'winner',
      image: null,
      eventIcon: '🏆',
    },
    {
      id: 5,
      type: 'alumni',
      badge: 'CREATIVE',
      badgeColor: 'pink',
      name: 'Ananya Patel',
      role: 'DESIGNER @ ADOBE',
      description: 'Design studios are vibrant spaces of creativity and collaboration.',
      rating: 5,
      action: 'arrow',
      image: 'https://i.pravatar.cc/150?img=9',
    },
    {
      id: 6,
      type: 'achievement',
      badge: 'SPORTS',
      badgeColor: 'yellow',
      name: 'Inter-University Sports',
      role: 'GOLD MEDAL • BASKETBALL',
      description: 'VGU Titans bring home the championship trophy.',
      action: 'winner',
      image: null,
      eventIcon: '🏅',
    },
    {
      id: 7,
      type: 'alumni',
      badge: 'TECH',
      badgeColor: 'blue',
      name: 'Arjun Mehta',
      role: 'DATA SCIENTIST @ AMAZON',
      description: 'Practical labs and real-world projects made the difference.',
      rating: 5,
      action: 'arrow',
      image: 'https://i.pravatar.cc/150?img=12',
    },
    {
      id: 8,
      type: 'event',
      badge: 'EXHIBITION',
      badgeColor: 'purple',
      name: 'Design Degree Show',
      role: 'MAY 10 • DESIGN BLOCK',
      description: 'Showcasing the future of design through student portfolios.',
      action: 'register',
      image: null,
      eventIcon: '📅',
    },
  ];

  return (
    <div className="campus-highlights-container">
      {/* Header Section */}
      <div className="highlights-header">
        <div className="header-label">
          <span className="label-icon">✨</span>
          <span className="label-text">CAMPUS HIGHLIGHTS</span>
        </div>
        <h1 className="highlights-title">
          Shining in the <span className="red-text">Limelight</span>
        </h1>
        <p className="highlights-description">
          From alumni success stories to groundbreaking research and vibrant campus events, see what's making waves at VGU.
        </p>
      </div>

      {/* Highlights Grid */}
      <div className="highlights-grid">
        {highlightsData.map((item) => (
          <div key={item.id} className="highlight-card">
            {/* Card Header */}
            <div className="card-header">
              <div className="card-icon">
                {/* If image exists, show it. Otherwise show emoji */}
                {item.image ? (
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="card-avatar"
                  />
                ) : (
                  <span className="card-emoji">{item.eventIcon}</span>
                )}
              </div>
              <span className={`card-badge badge-${item.badgeColor}`}>
                {item.badge}
              </span>
            </div>

            {/* Card Body */}
            <div className="card-body">
              <h3 className="card-name">{item.name}</h3>
              <p className="card-role">{item.role}</p>
              <p className="card-description">{item.description}</p>
            </div>

            {/* Card Footer */}
            <div className="card-footer">
              {item.rating && (
                <div className="card-rating">
                  {[...Array(item.rating)].map((_, i) => (
                    <span key={i} className="star">⭐</span>
                  ))}
                </div>
              )}
              {item.action === 'arrow' && <span className="action-arrow">→</span>}
              {item.action === 'register' && (
                <span className="action-button">Register</span>
              )}
              {item.action === 'winner' && (
                <span className="action-winner">Winner</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}