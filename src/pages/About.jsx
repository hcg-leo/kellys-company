import Button from '../components/Button'

export default function About() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">ABOUT KELLY</p>
          <h1>Small business.<br /><em>Big beauty energy.</em></h1>
        </div>
      </section>

      <section className="about-section section">
        <div className="container about-grid">
          <div className="about-image"></div>

          <div className="about-copy">
            <p className="eyebrow">NICE TO MEET YOU</p>

            <h2>Hi, I'm Kelly.</h2>

            <p>
              I started Kelly's Company because I wanted to create the kind
              of beauty space I would want to visit myself.
            </p>

            <p>
              Somewhere relaxed. Somewhere friendly. Somewhere you can sit
              down for an hour, have a chat and come out feeling like you've
              actually done something nice for yourself.
            </p>

            <p>
              I love the little details — the perfect shape, the tiny bit
              of nail art, the lash curl that makes your eyes pop. Those
              little things are what make the difference.
            </p>

            <Button>Book with Kelly</Button>
          </div>
        </div>
      </section>
    </div>
  )
}