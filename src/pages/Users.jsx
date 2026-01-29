import { Link } from 'react-router-dom';

function Users() {
  const users = [
    { id: 1, name: 'Max Mustermann' },
    { id: 2, name: 'Anna Schmidt' },
    { id: 3, name: 'Tom Weber' }
  ];

  return (
    <div style={{ padding: '40px' }}>
      <h1>Benutzer</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {users.map(user => (
          <li key={user.id} style={{ marginBottom: '12px' }}>
            <Link 
              to={`/users/${user.id}`}
              style={{
                color: '#3498db',
                textDecoration: 'none',
                fontSize: '18px',
                padding: '8px 12px',
                display: 'inline-block',
                border: '1px solid #3498db',
                borderRadius: '4px'
              }}
            >
              {user.name} →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;