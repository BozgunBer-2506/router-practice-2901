import { Link } from 'react-router-dom';
import './Users.css';

function Users() {
  const users = [
    { id: 1, name: 'Max Mustermann' },
    { id: 2, name: 'Anna Schmidt' },
    { id: 3, name: 'Tom Weber' }
  ];

  return (
    <div className="users-container">
      <div className="users-header">
        <h1 className="users-title">Benutzer</h1>
      </div>

      <div className="users-grid">
        {users.map(user => (
          <Link 
            key={user.id}
            to={`/users/${user.id}`}
            className="user-card"
          >
            <div className="user-avatar">{user.name.charAt(0)}</div>
            <h3 className="user-name">{user.name}</h3>
            <span className="view-profile">Profil anzeigen →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Users;