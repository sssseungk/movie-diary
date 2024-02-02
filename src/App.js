import './App.css';
import MovieWrite from './MovieWrite';
import MovieNav from './MovieNav';
import MovieList from './MovieList';


const dummyList = [
  {
    title: "웡카",
    date: "2024년 01월 31일 10:00",
    theater: "롯데시네마 동탄",
    seat: "G14",
    star: "⭐⭐⭐",
  },
  {
    title: "시민덕희",
    date: "2024년 01월 28일 10:10",
    theater: "롯데시네마 동탄",
    seat: "F04",
    star: "⭐⭐",
  },
  {
    title: "너의 이름은",
    date: "2024년 01월 24일 12:25",
    theater: "CGV 동탄",
    seat: "G11",
    star: "⭐⭐⭐⭐⭐",
  }
]


function App() {

  return (
    <div className='movieDiary'>
      <MovieWrite/>
      <MovieNav/>
      <MovieList movieData={dummyList}/>
    </div>
  )
}

export default App;