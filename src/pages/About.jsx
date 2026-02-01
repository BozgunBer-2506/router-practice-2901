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
            <span><strong>Statische Routen:</strong> Erstellung von Pfaden wie Home und Kontakt.</span>
          </li>
          <li>
            <span className="icon">✅</span>
            <span><strong>Dynamische Routen:</strong> Nutzung von Parametern mit <code>useParams</code>.</span>
          </li>
          <li>
            <span className="icon">✅</span>
            <span><strong>Navigation:</strong> Client-seitiges Routing mit der <code>Link</code> Komponente.</span>
          </li>
          <li>
            <span className="icon">✅</span>
            <span><strong>404-Seiten:</strong> Behandlung von ungültigen URLs mit Wildcard-Pfaden.</span>
          </li>
        </ul>
        </div>
      </div>
    </div>
  );
}

export default About;