function NotFound() {
  return (
    <div style={{
      padding: '40px',
      textAlign: 'center',
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <h1 style={{ fontSize: '72px', margin: '0' }}>404</h1>
      <h2>Seite nicht gefunden</h2>
      <p style={{ color: '#666' }}>
        Die gesuchte Seite existiert leider nicht.
      </p>
    </div>
  );
}

export default NotFound;