import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">LET'S DO THIS</p>
          <h1>Book your<br /><em>appointment.</em></h1>
          <p>
            Fill this in and we'll get back to you with available times.
          </p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-grid">
          <div>
            <p className="eyebrow">GET IN TOUCH</p>
            <h2>Ready when you are.</h2>

            <div className="contact-details">
              <div>
                <span>Email</span>
                <a href="mailto:hello@kellyscompany.co.uk">
                  hello@kellyscompany.co.uk
                </a>
              </div>

              <div>
                <span>Phone</span>
                <a href="tel:+440000000000">00000 000000</a>
              </div>

              <div>
                <span>Location</span>
                <p>Your Town, UK</p>
              </div>
            </div>
          </div>

          <div className="contact-form-wrap">
            {submitted ? (
              <div className="success-message">
                <span>✓</span>
                <h3>Thanks!</h3>
                <p>
                  Your message has been received. Kelly will get back to you
                  soon.
                </p>
                <button onClick={() => setSubmitted(false)}>
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <label>
                  Your name
                  <input type="text" required />
                </label>

                <label>
                  Email address
                  <input type="email" required />
                </label>

                <label>
                  What are you booking?
                  <select defaultValue="" required>
                    <option value="" disabled>Select a service</option>
                    <option>BIAB Nails</option>
                    <option>Gel Manicure</option>
                    <option>Nail Art</option>
                    <option>Lash Lift</option>
                    <option>Lash Extensions</option>
                    <option>Not sure yet</option>
                  </select>
                </label>

                <label>
                  Tell us anything else
                  <textarea rows="5"></textarea>
                </label>

                <button type="submit" className="button">
                  Send enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}