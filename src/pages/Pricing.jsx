import { Link } from 'react-router-dom'

const prices = [
  ['BIAB Nails', '£30'],
  ['BIAB Infill', '£25'],
  ['Gel Manicure', '£28'],
  ['Nail Art', 'from £5'],
  ['Lash Lift', '£40'],
  ['Lash Lift & Tint', '£45'],
  ['Classic Lashes', '£55'],
  ['Lash Infills', 'from £35']
]

export default function Pricing() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">PRICES</p>
          <h1>No surprises.<br /><em>Just good prices.</em></h1>
        </div>
      </section>

      <section className="section">
        <div className="container pricing-layout">
          <div>
            <p className="eyebrow">THE PRICE LIST</p>
            <h2>Simple as that.</h2>
          </div>

          <div className="price-list">
            {prices.map(([name, price]) => (
              <div className="price-row" key={name}>
                <span>{name}</span>
                <strong>{price}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="container pricing-note">
          <p>
            Prices can vary depending on length, design and what you already
            have on your nails. If you're unsure, just send us a message
            before booking.
          </p>

          <Link to="/contact" className="text-link">Ask a question →</Link>
        </div>
      </section>
    </div>
  )
}