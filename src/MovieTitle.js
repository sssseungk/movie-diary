import React, { useState } from 'react'

function MovieTitle() {

  const [title, setTitle] = useState("");
  const onChange = (e) => {
    setTitle(e.target.value)
  }

  return (
    <div className='movieTitle'>
      <strong>영화 제목을 입력하세요.</strong>
      <input 
        value={title}
        type='text' 
        placeholder='최소 한 글자 이상 입력하세요.'
        onChange={onChange}
      />
      <span>{title}</span>
    </div>
  )
}

export default MovieTitle;