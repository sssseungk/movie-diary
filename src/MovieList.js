import React from 'react'
import MovieItem from './MovieItem';

function MovieList({movieData, onRemove, onEdit}) {
  return (
    <ul className='movieList'>
      {movieData.map((it) => 
        <MovieItem key={it.id}{...it} onRemove={onRemove} onEdit={onEdit}/>
      )}
    </ul>
  )
}

export default MovieList;