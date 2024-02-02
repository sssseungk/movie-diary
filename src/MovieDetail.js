import React, { useState } from 'react'

function MovieDetail() {

  const [state, setState] = useState({
    date: "",
    theater: "",
    seat: "",
    star: "",
  })

  const handleInfo = (e) => setState({
    ...state,
    [e.target.name]: e.target.value,
  })

  return (
    <div className='movieDetail'>
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
        <select name="star" onChange={handleInfo}>
          <option value={1}>⭐</option>
          <option value={2}>⭐⭐</option>
          <option value={3}>⭐⭐⭐</option>
          <option value={4}>⭐⭐⭐⭐</option>
          <option value={5}>⭐⭐⭐⭐⭐</option>
        </select>
      </div>
    </div>
  )
}

export default MovieDetail;