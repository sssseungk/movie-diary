import React, { useState } from 'react'
import MovieTitle from './MovieTitle'
import MovieDetail from './MovieDetail'
import SubmitBtn from './SubmitBtn'

function MovieWrite() {
  const [movieTitle, setMovieTitle] = useState("");
  const [movieDetail, setMovieDetail] = useState({
    movieDate:"",
    movieTheater:"",
    movieSeat:"",
    star:"",
  });

  const giveTitle = (title) => {
    setMovieTitle(title);
  }

  const giveDetail = (detail) => {
    setMovieDetail(detail);
  }

  return (
    <div className='movieWrite'>
      <MovieTitle giveTitle={giveTitle}/>
      <MovieDetail giveDetail={giveDetail}/>
      <SubmitBtn movieTitle={movieTitle} movieDetail={movieDetail}/>
    </div>

  )
}

export default MovieWrite;