import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">Willkommen bei React Router</h1>
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

      <div className="features-section">
        <h2 className="section-title">Features</h2>
        
        <div className="features-grid">
          <Link to="/about" className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3 className="feature-title">Schnelle Navigation</h3>
            <p className="feature-description">
              SPA-Navigation ohne Neuladen der Seite
            </p>
            <span className="feature-arrow">→</span>
          </Link>

          <Link to="/users" className="feature-card">
            <div className="feature-icon">👥</div>
            <h3 className="feature-title">Benutzer Profile</h3>
            <p className="feature-description">
              Dynamische Routen mit URL-Parametern
            </p>
            <span className="feature-arrow">→</span>
          </Link>

          <Link to="/blog" className="feature-card">
            <div className="feature-icon">📝</div>
            <h3 className="feature-title">Blog System</h3>
            <p className="feature-description">
              Vollständiges CMS mit Artikeln und Navigation
            </p>
            <span className="feature-arrow">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;