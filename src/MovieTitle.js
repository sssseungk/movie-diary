import React, { useState } from 'react'

function MovieTitle({giveTitle}) {

  const [title, setTitle] = useState("");

  const onChange = (e) => {
    setTitle(e.target.value);
    giveTitle(e.target.value);
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
    </div>
  )
}

export default MovieTitle;