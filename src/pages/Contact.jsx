function Contact() {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>📧 Kontakt</h1>
      <p>Schreib uns eine Nachricht!</p>
      <div style={{ 
        marginTop: '30px',
        maxWidth: '400px',
        margin: '30px auto',
        textAlign: 'left'
      }}>
        <p><strong>Email:</strong> hallo@beispiel.de</p>
        <p><strong>Telefon:</strong> +49 123 456 7890</p>
        <p><strong>Adresse:</strong> Berlin, Deutschland</p>
      </div>
    </div>
  );
}

export default Contact;