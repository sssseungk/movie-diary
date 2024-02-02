import React from 'react'

function MovieList({movieData}) {
  console.log(movieData);
  return (
    <ul className='movieList'>
      {movieData.map((it) => 
        <li>
          <strong>{it.title}</strong>
          <span>{it.date}</span>
          <span>{it.theater}</span>
          <span>{it.seat}</span>
          <span>{it.star}</span>
        </li>
      )}
    </ul>
  )
}

export default MovieList;