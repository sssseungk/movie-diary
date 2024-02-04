import React from 'react'
import MovieItem from './MovieItem';

function MovieList({movieData, onRemove}) {
  return (
    <ul className='movieList'>
      {movieData.map((it) => 
        <MovieItem key={it.id}{...it} onRemove={onRemove}/>
      )}
    </ul>
  )
}

export default MovieList;