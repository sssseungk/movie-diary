import { useState } from "react";

function MovieItem({id, title, date, theater, seat, star, onRemove, onEdit}) {
  const [isEdit, setIsEdit] = useState(false);   // 수정중인지 확인하는 상태
  const toggleIsEdit = () => setIsEdit(!isEdit);

  const [localContent, setLocalContent] = useState({
    title : title,
    date : date,
    theater : theater,
    seat: seat,
    star: star,
  })

  const editInfo = (e) => {
    setLocalContent({
      ...localContent,
      [e.target.name]: e.target.value,
    });
  }


  // 사용자가 입력한 별점 별 이모티콘으로 표현하는 함수
  const renderStar = (count) => {
    const stars = '⭐'.repeat(count);
    return stars;
  }

  // 삭제하기 버튼
  const handleRemove = () => {
    if(window.confirm(`${id}번 째 기록을 삭제하시겠습니까?`)){
      onRemove(id);
    }
  }

  // 수정하기 버튼
  const handleEdit = () => {
    if(window.confirm(`${id}번 째 기록을 수정하시겠습니까?`)){
      onEdit(id, localContent.title, localContent.date, localContent.theater, localContent.seat, localContent.star);
      toggleIsEdit();
    }
  }

  // 수정 취소하기 버튼
  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(localContent);
  }

  return (
    <li key={id}>
      {isEdit ? (
        <>  
          <input name="title" value={localContent.title} onChange={editInfo}/>
          <input name="date" value={localContent.date} onChange={editInfo}/>
          <input name="theater" value={localContent.theater} onChange={editInfo}/>
          <input name="seat" value={localContent.seat} onChange={editInfo}/>
          <input name="star" value={localContent.star} onChange={editInfo}/>
        </>
      ) : (
        <>
          <strong>{title}</strong>
          <span>{date}</span>
          <span>{theater}</span>
          <span>{seat}</span>
          <span>{renderStar(star)}</span>
        </>
      )}
      {isEdit ? (
        <div>
          <button onClick={handleQuitEdit}>수정 취소</button>
          <button onClick={handleEdit}>수정 완료</button>
        </div>
      ) : (
        <div>
          <button onClick = {toggleIsEdit}>제목 수정하기</button>
          <button onClick = {handleRemove}>삭제하기</button>
        </div>
      )}
    </li>
  )
}

export default MovieItem