import './App.css';
import MovieWrite from './MovieWrite';
import MovieNav from './MovieNav';
import MovieList from './MovieList';


const dummyList = [
  {
    id: 1,
    title: "웡카",
    date: "2024년 01월 31일 10:00",
    theater: "롯데시네마 월드타워",
    seat: "G14",
    star: "⭐⭐⭐",
  },
  {
    id: 2,
    title: "시민덕희",
    date: "2024년 01월 28일 10:10",
    theater: "롯데시네마 용산",
    seat: "F04",
    star: "⭐⭐",
  },
  {
    id: 3,
    title: "너의 이름은",
    date: "2024년 01월 24일 12:25",
    theater: "CGV 용산아이파크몰",
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