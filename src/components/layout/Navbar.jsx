import { Link } from 'react-router-dom'
import '../../styles/components/navbar.css'
import { useState } from 'react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Divulgosim
        </Link>
        
        <button 
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link" onClick={() => setIsMenuOpen(false)}>Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link btn-primary" onClick={() => setIsMenuOpen(false)}>
              Começar Agora
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar 