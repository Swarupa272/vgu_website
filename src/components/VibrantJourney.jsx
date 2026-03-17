export default function VibrantJourney() {
  const cards = [
    {
      id: 1,
      badge: 'THE HIGHLIGHT',
      title: 'Academic Excellence & Convocation',
      image: 'https://cdn.bfldr.com/HZPAR69W/at/g4fhcgfx48hrn6q7h4q6hmnn/WR_81324_GBSI.jpg?drupal-image-style=card_1x&width=800&height=450&precrop=1600%2C900%2Cx0%2Cy8%2Csafe&auto=webp&h=2bb116cf&itok=jIR0oTcC',
    },
    {
      id: 2,
      badge: 'INNOVATION',
      title: 'Research Hub',
      image: 'https://tse4.mm.bing.net/th/id/OIP.hZ0bFUefWCelbR90kYl3iwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
    },
    {
      id: 3,
      badge: 'CAREERS',
      title: 'Industry Connect',
      image: 'https://th.bing.com/th/id/R.cc425faea4ea28b00f99c1c3fe0c7696?rik=T0iGHEjf0wz11w&riu=http%3a%2f%2fwww.bu.edu%2fchemistry%2ffiles%2f2012%2f03%2fIMG_7702.jpg&ehk=4%2b3H5rGi8T4cPEYY%2fZ6bPBemTElDE6gnNNBPJlirLZU%3d&risl=&pid=ImgRaw&r=0',
    },
  ];

  return (
    <div className="vibrant-journey">
      <div className="header-section">
        <div className="title-container">
          <h1 className="title">
            Our Vibrant <span className="highlight">Journey</span>
          </h1>
          <div className="title-bar"></div>
        </div>
        <p className="subtitle">
          Witness the milestones that define our legacy of excellence, innovation, and global impact.
        </p>
      </div>

      <div className="cards-grid">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <div
              className="card-image"
              style={{ backgroundImage: `url(${card.image})` }}
            >
              <div className="card-overlay"></div>
              <div className="card-badge">{card.badge}</div>
              <h3 className="card-title">{card.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}