import './App.css';
import MovieNav from './MovieNav';
import MovieList from './MovieList';
import { useRef, useState } from 'react';
import MovieEditor from './MovieEditor';



function App() {

  const [data, setData] = useState([]);
  const dataId = useRef(1);

  // 영화 기록 생성하는 함수
  const onCreate = (title, date, theater, seat, star) => {
    const newItem = {
      title,
      date,
      theater,
      seat,
      star,
      id:dataId.current
    }
    dataId.current += 1;
    setData([newItem, ...data]);
  }

  // 영화 기록 삭제하는 함수
  const onRemove = (targetId) => {
    const newMovieList = data.filter((it) => it.id !== targetId);
    setData(newMovieList);
  }

  return (
    <div className='movieDiary'>
      <MovieEditor onCreate={onCreate}/>
      <MovieNav/>
      <MovieList movieData={data} onRemove={onRemove}/>
    </div>
  )
}

export default App;