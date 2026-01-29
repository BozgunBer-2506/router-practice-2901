import { useParams, Link } from 'react-router-dom';

const usersData = {
  1: { id: 1, name: 'Max Mustermann', email: 'max@beispiel.de', role: 'Entwickler' },
  2: { id: 2, name: 'Anna Schmidt', email: 'anna@beispiel.de', role: 'Designerin' },
  3: { id: 3, name: 'Tom Weber', email: 'tom@beispiel.de', role: 'Manager' }
};

function UserProfile() {
  const { userId } = useParams();
  const user = usersData[userId];

  if (!user) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h1>❌ Benutzer nicht gefunden</h1>
        <p>Der Benutzer mit ID {userId} existiert nicht.</p>
        <Link to="/users" style={{ color: '#3498db' }}>
          ← Zurück zur Übersicht
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
      <Link to="/users" style={{ color: '#3498db', textDecoration: 'none' }}>
        ← Zurück zur Übersicht
      </Link>

      <h1 style={{ marginTop: '20px' }}>Benutzerprofil</h1>

      <div style={{
        padding: '24px',
        border: '1px solid #ddd',
        borderRadius: '12px',
        marginTop: '20px',
        background: '#f9f9f9'
      }}>
        <h2 style={{ marginTop: 0 }}>{user.name}</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Rolle:</strong> {user.role}</p>
        <p><strong>ID:</strong> {user.id}</p>
      </div>
    </div>
  );
}

export default UserProfile;