export default function Testimonial({ quote, name }) {
  return (
    <article className="testimonial">
      <div className="stars">★★★★★</div>
      <p>“{quote}”</p>
      <span>{name}</span>
    </article>
  )
}