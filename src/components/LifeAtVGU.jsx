export default function LifeAtVGU() {
  const eventsData = [
    {
      id: 1,
      title: 'Young Singers Rock the Stage',
      date: 'DEC 15, 2024',
      image: 'https://prod.butlins-prod.magnolia-platform.com/dam/jcr:ff12ea50-cf8f-4259-bf09-0a290e65ba11/20234.jpg',
      size: 'large', 
    },
    {
      id: 2,
      title: 'Tech Fest 2024',
      date: 'DEC 10, 2024',
      image: 'https://tse1.mm.bing.net/th/id/OIP.ApwbiS45coObUnFWZBg9iQHaE8?w=1024&h=683&rs=1&pid=ImgDetMain&o=7&rm=3',
      size: 'small',
    },
    {
      id: 3,
      title: 'VGU Fashion Week',
      date: 'MAY 20, 2024',
      image: 'https://goodplacestovisit.com/wp-content/uploads/2024/06/Amazon_India_Fashion_Week_A_Fashion-1.jpg',
      size: 'small',
    },
    {
      id: 4,
      title: 'Inter-University Basketball',
      date: 'FEB 10, 2025',
      image: 'https://staticg.sportskeeda.com/wp-content/uploads/2016/02/img_2852-1456661911-800.jpg',
      size: 'large',
    },
    {
      id: 5,
      title: 'Campus Buzz',
      date: 'JUL 05, 2024',
      image: 'https://tse4.mm.bing.net/th/id/OIP.pNxyRMkCfjigqSvzLjQqJgHaEp?rs=1&pid=ImgDetMain&o=7&rm=3',
      size: 'small',
    },
    {
      id: 6,
      title: 'Robotics Workshop',
      date: 'EVERY WEDNESDAY',
      image: 'https://tse1.mm.bing.net/th/id/OIP.Vfs78kezsZbBSASp35VI7AHaFj?rs=1&pid=ImgDetMain&o=7&rm=3',
      size: 'small',
    },
    {
      id: 7,
      title: 'Fine Arts Exhibition',
      date: 'APR 12, 2024',
      image: 'https://static.toiimg.com/thumb/imgsize-23456,msid-67942275,width-600,resizemode-4/67942275.jpg',
      size: 'small',
    },
    {
      id: 8,
      title: 'Convocation 2024',
      date: 'JUL 15, 2024',
      image: 'https://tse4.mm.bing.net/th/id/OIP.VvavoCGq4d9Vi0mSj0HE1AHaEK?rs=1&pid=ImgDetMain&o=7&rm=3',
      size: 'small',
    },
    {
      id: 9,
      title: 'Late Night Study',
      date: 'EVERY DAY',
      image: 'https://images.stockcake.com/public/0/8/f/08f9ae4a-09a7-4559-8cee-71f32c96c259_large/late-night-studying-stockcake.jpg',
      size: 'small',
    },
  ];

  return (
    <div className="life-at-vgu-container">
      {/* Header Section */}
      <div className="header-section">
        <p className="happening-label">● HAPPENING NOW</p>
        <h1 className="main-title">
          Life @ <span className="red-highlight">VGU</span>
        </h1>
        <p className="subtitle">
          Catch the latest happenings and events at our vibrant campus.
        </p>
      </div>

      {/* Events Grid */}
      <div className="events-grid">
        {eventsData.map((event) => (
          <div
            key={event.id}
            className={`event-card ${event.size === 'large' ? 'event-card-large' : 'event-card-small'}`}
            style={{
              backgroundImage: `url(${event.image})`,
            }}
          >
            {/* Dark overlay gradient */}
            <div className="event-overlay"></div>

            {/* Date badge at top-left */}
            <div className="event-date-badge">
              {event.date}
            </div>

            {/* Title at bottom */}
            <div className="event-title-text">
              {event.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}