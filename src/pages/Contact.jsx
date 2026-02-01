import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1 className="contact-title">📧 Kontakt</h1>
        <p className="contact-subtitle">Schreib uns eine Nachricht!</p>
      </div>

      <div className="contact-info-grid">
        <div className="contact-card">
          <div className="contact-icon">📧</div>
          <h3>Email</h3>
          <p>hallo@beispiel.de</p>
        </div>

        <div className="contact-card">
          <div className="contact-icon">📱</div>
          <h3>Telefon</h3>
          <p>+49 123 456 7890</p>
        </div>

        <div className="contact-card">
          <div className="contact-icon">📍</div>
          <h3>Adresse</h3>
          <p>Berlin, Deutschland</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;