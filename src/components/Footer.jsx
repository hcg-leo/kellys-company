import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-logo">Kelly's Company</div>
          <p>Nails, lashes and a little bit of luxury.</p>
        </div>

        <div>
          <h3>Explore</h3>
          <Link to="/services">Services</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/about">About Kelly</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div>
          <h3>Get in touch</h3>
          <a href="mailto:hello@kellyscompany.co.uk">hello@kellyscompany.co.uk</a>
          <a href="tel:+440000000000">00000 000000</a>
          <p>Your Town, UK</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Kelly's Company</p>
      </div>
    </footer>
  )
}