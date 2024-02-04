import './App.css';
import MovieNav from './MovieNav';
import MovieList from './MovieList';
import { useState } from 'react';
import MovieEditor from './MovieEditor';



function App() {

  const [data, setData] = useState([]);

  const onCreate = (title, date, theater, seat, star) => {
    const newItem = {
      title,
      date,
      theater,
      seat,
      star
    }
  }

  return (
    <div className='movieDiary'>
      <MovieEditor/>
      <MovieNav/>
      <MovieList movieData={[]}/>
    </div>
  )
}

export default App;