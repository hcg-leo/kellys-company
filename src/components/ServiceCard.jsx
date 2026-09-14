import { Link } from 'react-router-dom'

export default function ServiceCard({ number, title, description, price }) {
  return (
    <article className="service-card">
      <div className="service-number">{number}</div>

      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className="service-bottom">
        <span>{price}</span>
        <Link to="/contact">Book →</Link>
      </div>
    </article>
  )
}