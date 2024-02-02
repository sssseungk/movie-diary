
function SubmitBtn({movieTitle, movieDetail}) {

  const onClick = (e) => {
    // console.log(movieTitle);           // 웡카 2024년 G04 롯데시네마 3
    // console.log(movieDetail.date);
    // console.log(movieDetail.seat);
    // console.log(movieDetail.theater);
    // console.log(movieDetail.star);
    if(movieTitle.length < 1){
      alert('영화 제목은 최소 1글자 이상 입력해주세요!');
      return;
    }
    if(movieDetail.date.length < 3){
      alert('영화 관람 날짜는 최소 4글자 이상 입력해주세요!');
      return;
    }
    if(movieDetail.theater.length === 0){
      alert('관람 영화관을 입력해주세요!');
      return;
    }
    if(movieDetail.seat.length < 2){
      alert('영화 관람 좌석은  최소 2글자 이상 입력해주세요!');
      return;
    }
    if(!movieDetail.star){
      alert('영화의 별점을 평가해주세요!');
      return;
    }
  }

  return (
    <div className="submitBtn">
      <button 
        type="button"
        onClick={onClick}>
          저장하기
      </button>
    </div>
  )
}

export default SubmitBtn;