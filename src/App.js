import React, { useState } from 'react';
import './App.css';

function App() {
  let [글제목, 글제목변경함수] = useState('코트 추천');

  let posts = 'hello';

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 블로그</div>
      </div>
      <div className="list">
        <h4>{ 글제목 }</h4>
        <p>날짜</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
