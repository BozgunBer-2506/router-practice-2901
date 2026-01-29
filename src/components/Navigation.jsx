import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav style={{
      padding: '16px 24px',
      background: '#333',
      display: 'flex',
      gap: '24px'
    }}>
      <Link to="/" style={{ 
        color: '#fff', 
        textDecoration: 'none',
        fontSize: '16px',
        fontWeight: '500'
      }}>
        Home
      </Link>
      
      <Link to="/about" style={{ 
        color: '#fff', 
        textDecoration: 'none',
        fontSize: '16px',
        fontWeight: '500'
      }}>
        Über uns
      </Link>
      
      <Link to="/contact" style={{ 
        color: '#fff', 
        textDecoration: 'none',
        fontSize: '16px',
        fontWeight: '500'
      }}>
        Kontakt
      </Link>

      <Link to="/users" style={{ 
        color: '#fff', 
        textDecoration: 'none',
        fontSize: '16px',
        fontWeight: '500'
      }}>
        Benutzer
      </Link>

      <Link to="/blog" style={{ 
        color: '#fff', 
        textDecoration: 'none',
        fontSize: '16px',
        fontWeight: '500'
      }}>
        Blog
      </Link>
    </nav>
  );
}

export default Navigation;