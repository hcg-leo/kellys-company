import ServiceCard from '../components/ServiceCard'

export default function Services() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">THE MENU</p>
          <h1>Services made<br /><em>for you.</em></h1>
          <p>
            Keep it simple or go all out. Whatever you're after,
            we've got you.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container service-list">
          <ServiceCard
            number="01"
            title="BIAB Nails"
            description="A strong, natural-looking overlay designed to help your own nails grow while keeping them looking gorgeous."
            price="From £30"
          />

          <ServiceCard
            number="02"
            title="Gel Manicure"
            description="A classic manicure finished with your favourite gel colour for a shiny, long-lasting finish."
            price="From £28"
          />

          <ServiceCard
            number="03"
            title="Nail Art"
            description="French tips, chrome, tiny flowers, abstract swirls or something you've spotted online."
            price="From £5"
          />

          <ServiceCard
            number="04"
            title="Lash Lift"
            description="A natural lift and curl that makes your lashes look longer, darker and beautifully open."
            price="From £40"
          />

          <ServiceCard
            number="05"
            title="Lash Extensions"
            description="Soft, lightweight extensions tailored to the look you actually want."
            price="From £55"
          />

          <ServiceCard
            number="06"
            title="Lash Tint"
            description="A simple tint for darker-looking lashes without reaching for mascara."
            price="From £15"
          />
        </div>
      </section>
    </div>
  )
}