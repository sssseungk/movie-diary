function MovieItem({id, title, date, theater, seat, star, onRemove}) {

  // 사용자가 입력한 별점 별 이모티콘으로 표현하는 함수
  const renderStar = (count) => {
    const stars = '⭐'.repeat(count);
    return stars;
  }

  const onClick = () => {
    if(window.confirm(`${id}번 째 기록을 삭제하시겠습니까?`)){
      onRemove(id);
    }
  }
  return (
    <li key={id}>
      <strong>{title}</strong>
      <span>{date}</span>
      <span>{theater}</span>
      <span>{seat}</span>
      <span>{renderStar(star)}</span>
      <button onClick={onClick}>삭제하기</button>
    </li>
  )
}

export default MovieItem