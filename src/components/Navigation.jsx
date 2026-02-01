import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">Über uns</Link>
        <Link to="/contact" className="nav-link">Kontakt</Link>
        <Link to="/users" className="nav-link">Benutzer</Link>
        <Link to="/blog" className="nav-link">Blog</Link>
      </div>
    </nav>
  );
}

export default Navigation;