import Button from './Button'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-image"></div>

      <div className="hero-content">
        <p className="eyebrow">NAILS · LASHES · YOU</p>

        <h1>
          Your nails.
          <br />
          Your lashes.
          <br />
          <em>Your moment.</em>
        </h1>

        <p className="hero-text">
          A little place to switch off, get pampered and leave feeling
          ridiculously good about yourself.
        </p>

        <div className="hero-buttons">
          <Button>Book an appointment</Button>
          <Button to="/services" secondary>See our services</Button>
        </div>
      </div>

      <div className="hero-note">
        <span>01</span>
        <span>Beautiful details, every time.</span>
      </div>
    </section>
  )
}