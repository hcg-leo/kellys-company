import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import Testimonial from '../components/Testimonial'
import Button from '../components/Button'

export default function Home() {
  return (
    <>
      <Hero />

      <section className="intro section">
        <div className="container intro-grid">
          <div>
            <p className="eyebrow">WELCOME TO KELLY'S</p>
            <h2>Come in stressed.<br /><em>Leave feeling fabulous.</em></h2>
          </div>

          <div className="intro-copy">
            <p>
              Kelly's Company is all about good nails, great lashes and
              making time for yourself.
            </p>
            <p>
              Whether you're after a clean set of BIAB nails, a fresh lash
              lift or something a little more extra, we'll make sure you
              leave loving the result.
            </p>
            <Link to="/about" className="text-link">Meet Kelly →</Link>
          </div>
        </div>
      </section>

      <section className="services-preview section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">WHAT WE DO</p>
              <h2>The good stuff.</h2>
            </div>

            <Link to="/services" className="text-link">View all services →</Link>
          </div>

          <div className="service-grid">
            <ServiceCard
              number="01"
              title="BIAB & Gel Nails"
              description="Clean, glossy and made to last. Perfect for everyday nails."
              price="From £30"
            />

            <ServiceCard
              number="02"
              title="Nail Art"
              description="Minimal, colourful, sparkly or completely over the top."
              price="From £5"
            />

            <ServiceCard
              number="03"
              title="Lash Lifts"
              description="That wide-awake look without needing mascara every morning."
              price="From £40"
            />
          </div>
        </div>
      </section>

      <section className="split-section">
        <div className="split-image"></div>

        <div className="split-content">
          <p className="eyebrow">THE KELLY'S EXPERIENCE</p>
          <h2>It's more than just an appointment.</h2>
          <p>
            Put your phone down, have a chat, pick your colour and let us
            handle the rest. No rushing. No awkward salon experience.
            Just good music, good company and nails you can't stop looking at.
          </p>
          <Button to="/contact">Come see us</Button>
        </div>
      </section>

      <section className="testimonial-section section">
        <div className="container">
          <p className="eyebrow">KIND WORDS</p>
          <Testimonial
            quote="I genuinely can't stop looking at my nails. Kelly somehow knew exactly what I wanted."
            name="Sophie M."
          />
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <p className="eyebrow">READY WHEN YOU ARE</p>
          <h2>Go on. Treat yourself.</h2>
          <Button>Book your appointment</Button>
        </div>
      </section>
    </>
  )
}