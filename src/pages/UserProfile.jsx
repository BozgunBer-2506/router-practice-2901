import { useParams, Link } from 'react-router-dom';
import './UserProfile.css';

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
      <div className="user-not-found">
        <div className="error-icon">❌</div>
        <h1>Benutzer nicht gefunden</h1>
        <p>Der Benutzer mit ID {userId} existiert nicht.</p>
        <Link to="/users" className="back-link">
          ← Zurück zur Übersicht
        </Link>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <Link to="/users" className="back-link">
        ← Zurück zur Übersicht
      </Link>

      <div className="profile-header">
        <div className="profile-avatar">{user.name.charAt(0)}</div>
        <h1 className="profile-title">Benutzerprofil</h1>
      </div>

      <div className="profile-card">
        <div className="profile-info">
          <div className="info-row">
            <span className="info-label">Name:</span>
            <span className="info-value">{user.name}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Email:</span>
            <span className="info-value">{user.email}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Rolle:</span>
            <span className="info-value">{user.role}</span>
          </div>
          <div className="info-row">
            <span className="info-label">ID:</span>
            <span className="info-value">{user.id}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;