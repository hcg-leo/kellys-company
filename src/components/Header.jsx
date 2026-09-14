import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo" onClick={closeMenu}>
          <span>Kelly's</span>
          <strong>Company</strong>
        </Link>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
        </button>

        <nav className={`navigation ${menuOpen ? 'navigation-open' : ''}`}>
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/services" onClick={closeMenu}>Services</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          <NavLink to="/pricing" onClick={closeMenu}>Pricing</NavLink>
          <Link to="/contact" className="nav-book" onClick={closeMenu}>Book now</Link>
        </nav>
      </div>
    </header>
  )
}