import { Link } from 'react-router-dom'

export default function Button({ children, to = '/contact', secondary = false }) {
  return (
    <Link
      to={to}
      className={`button ${secondary ? 'button-secondary' : ''}`}
    >
      {children}
    </Link>
  )
}