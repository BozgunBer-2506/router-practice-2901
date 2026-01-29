function About() {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>ℹ️ Über uns</h1>
      <p>Wir lernen React Router!</p>
      <div style={{ 
        marginTop: '30px', 
        padding: '20px', 
        background: '#f0f0f0', 
        borderRadius: '8px',
        maxWidth: '500px',
        margin: '30px auto'
      }}>
        <h3>Was wir lernen:</h3>
        <ul style={{ textAlign: 'left', lineHeight: '1.8' }}>
          <li>Statische Routen</li>
          <li>Dynamische Routen</li>
          <li>Navigation</li>
          <li>404-Seiten</li>
        </ul>
      </div>
    </div>
  );
}

export default About;