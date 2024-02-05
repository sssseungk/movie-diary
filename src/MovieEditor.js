import React, { useRef, useState } from 'react'

function MovieEditor({onCreate}) {
  const titleRef = useRef();

  const [state, setState] = useState({
    title:"",
    date: "",
    theater: "",
    seat: "",
    star: 1,
  })

  const handleInfo = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  const onClick = () => {
    if(state.title.length < 1){
      alert('영화 제목은 최소 한 글자 이상 입력해주세요!');
      titleRef.current.focus();
      return;
    }
    alert('저장 완료!')
    onCreate(state.title, state.date, state.theater, state.seat, state.star);
    // 입력란 초기화
    setState({
      title:"",
      date: "",
      theater: "",
      seat: "",
      star: 1,
    })
  }
  

  return (
    <>
      <div className='movieTitle movieEditor'>
        <strong>영화 제목을 입력하세요.</strong>
        <input 
          id="title"
          name="title"
          ref={titleRef}
          value={state.title}
          type='text' 
          placeholder='최소 한 글자 이상 입력하세요.'
          onChange={handleInfo}
        />
      </div>
      <div className='movieEditor'>
        <strong>관람 정보를 입력하세요.</strong>
        <div>
          <label htmlFor='date'>날짜</label>
          <input 
            id='date'
            name='date'
            value={state.date}
            onChange={handleInfo}
            type='text'
            placeholder='ex. 2024년 01월 31일 10:00'
          />
        </div>
        <div>
          <label htmlFor='theater'>영화관</label>
          <input 
            id="theater"
            name='theater'
            value={state.theater}
            onChange={handleInfo}
            type='text'
            placeholder='방문한 영화관을 입력하세요.'
          />
        </div>
        <div className='seatContainer'>
          <label htmlFor='seat'>좌석</label>
          <input 
            id="seat"
            name='seat'
            value={state.seat}
            onChange={handleInfo}
            type='text'
            placeholder='앉은 좌석을 입력하세요. '
          />
        </div>
        <div className='movieStar'>
          <strong>별점을 평가하세요.</strong>
          <select value={state.star} name="star" onChange={handleInfo}>
            <option value={1}>⭐</option>
            <option value={2}>⭐⭐</option>
            <option value={3}>⭐⭐⭐</option>
            <option value={4}>⭐⭐⭐⭐</option>
            <option value={5}>⭐⭐⭐⭐⭐</option>
          </select>
        </div>
        <button onClick={onClick}>저장하기</button>
      </div>
    </>
  )
}

export default MovieEditor;