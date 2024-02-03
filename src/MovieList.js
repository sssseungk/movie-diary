import React from 'react'
import MovieItem from './MovieItem';

function MovieList({movieData}) {
  return (
    <ul className='movieList'>
      {movieData.map((it) => 
        <MovieItem 
          key={it.id}
          {...it}
        />
      )}
    </ul>
  )
}

export default MovieList;