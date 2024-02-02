import './App.css';

import React from 'react'
import MovieTitle from './MovieTitle';
import MovieDetail from './MovieDetail';

function App() {
  return (
    <div className='movieDiary'>
      <MovieTitle/>
      <MovieDetail/>
    </div>
  )
}

export default App