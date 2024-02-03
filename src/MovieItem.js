function MovieItem({id, title, date, theater, seat, star}) {
  return (
    <li key={id}>
      <strong>{title}</strong>
      <span>{date}</span>
      <span>{theater}</span>
      <span>{seat}</span>
      <span>{star}</span>
    </li>
  )
}

export default MovieItem