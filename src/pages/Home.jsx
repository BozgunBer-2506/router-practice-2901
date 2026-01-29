import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const features = [
    {
      icon: '🚀',
      title: 'Schnelle Navigation',
      description: 'SPA-Navigation ohne Neuladen',
      link: '/about'
    },
    {
      icon: '👥',
      title: 'Benutzer Profile',
      description: 'Dynamische Routen mit Parametern',
      link: '/users'
    },
    {
      icon: '📝',
      title: 'Blog System',
      description: 'Vollständiges CMS mit Artikeln',
      link: '/blog'
    }
  ];

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">
          Willkommen bei <span className="highlight">React Router</span>
        </h1>
        <p className="hero-subtitle">
          Eine moderne Single Page Application mit dynamischer Navigation
        </p>
        
        <div className="hero-buttons">
          <Link to="/blog" className="btn btn-primary">
            Blog entdecken
          </Link>
          <Link to="/about" className="btn btn-secondary">
            Mehr erfahren
          </Link>
        </div>
      </div>

      <div className="features-grid">
        {features.map((feature, index) => (
          <Link 
            to={feature.link} 
            key={index} 
            className="feature-card"
          >
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
            <span className="feature-arrow">→</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;