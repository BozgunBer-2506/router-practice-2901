import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1 className="about-title">ℹ️ Über uns</h1>
        <p className="about-subtitle">Wir lernen React Router!</p>
      </div>

      <div className="about-content">
        <div className="info-card">
          <h2>Was wir lernen:</h2>
          <ul className="learning-list">
            <li>
              <span className="icon">✅</span>
              <span>Statische Routen</span>
            </li>
            <li>
              <span className="icon">✅</span>
              <span>Dynamische Routen</span>
            </li>
            <li>
              <span className="icon">✅</span>
              <span>Navigation</span>
            </li>
            <li>
              <span className="icon">✅</span>
              <span>404-Seiten</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;