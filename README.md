### 🎬 간단한 영화 기록 다이어리
한입 크기로 잘라 먹는 리액트 강의 일기장 실습 응용한 미니 프로젝트 

---

<br />

### 1일차 (02. 02)
- <strong>관람 영화 정보</strong>를 작성하는 컴포넌트 구성

![alt text](image-2.png)

<br/>

- <strong>작성한 관람 정보</strong>들을 렌더링하는 컴포넌트 구성

![alt text](image-3.png)

<br/>
<br/>

#### ✔️ 구현한 것
- 영화 제목, 관람 정보, 별점 평가 입력 처리
- 저장하기 버튼 클릭 시 입력 조건 확인 및 alert로 알려주기
- App.js에 임의로 생성한 영화 데이터 리스트 렌더링하기

<br/>
<br/>

#### ⭐ 추가해야할 것
- 저장하기 버튼 클릭 시 alert가 아닌 useRef로 포커스 이동시키기
- 임의로 생성한 데이터가 아닌, 사용자가 입력한 데이터 렌더링하기
- MovieList 컴포넌트에서 리스트 렌더링할 때 각 리스트 아이템들을 MovieItem 컴포넌트로 분리하기
- 이미지 첨부 기능 및 렌더링 기능 추가하기
<br/>
<br/>

#### 🌠 트러블 슈팅
🚨 새로운 컴포넌트 파일을 추가하였는데 Module not found: Can't resolve '라이브러리명'.. 에러가 발생하면서 렌더링되지 않는 문제 발생
➡️ node_modules 폴더, package-lock.json 파일 삭제 후 npm install로 재설치하여 해결
<br/>

🚨 저장하기 버튼을 클릭했을 때 사용자가 입력한 문자열의 길이를 조건처리하여 alert 창을 띄우고 싶은데, 사용자가 입력하는 값과 버튼 컴포넌트가 분리되어 있어 MovieTitle의 상태를 상위 컴포넌트인 MovieWrite으로 전달하고, MovieWrite에서 받은 상태를 SubmitBtn으로 전달해야했음 
```js
function MovieWrite() {
  const [movieTitle, setMovieTitle] = useState("");
  const giveTitle = (title) => {
    setMovieTitle(title);
  }

  return (
    <div className='movieWrite'>
      <MovieTitle giveTitle={giveTitle} />
      <SubmitBtn movieTitle={movieTitle} />
    </div>
  )
}
```
➡️ 상위 컴포넌트인 MovieWrite에서 상태를 하나 더 만들고, 함수를 만들어서 하위 컴포넌트로 해당 함수를 전달한다. 
```js
import React, { useState } from 'react'

function MovieTitle({giveTitle}) {
  const [title, setTitle] = useState("");
  const onChange = (e) => {
    setTitle(e.target.value);
    giveTitle(e.target.value);
  }
  return (
    <div className='movieTitle'>
      <input 
        value={title}
        onChange={onChange}
      />
    </div>
  )
}
```
➡️ 상위 컴포넌트에서 하위 컴포넌트로 전달한 상위 컴포넌트의 상태를 변화시키는 함수를 props로 받아서 해당 함수를 활용해 상위 컴포넌트의 상태를 변경시키는 방식으로 구현함.