function MovieItem({id, title, date, theater, seat, star}) {

  // 사용자가 입력한 별점 별 이모티콘으로 표현하는 함수
  const renderStar = (count) => {
    const stars = '⭐'.repeat(count);
    return stars;
  }

  return (
    <li key={id}>
      <strong>{title}</strong>
      <span>{date}</span>
      <span>{theater}</span>
      <span>{seat}</span>
      <span>{renderStar(star)}</span>
    </li>
  )
}

export default MovieItem