/* eslint-disable */
import React, { useState } from 'react';
import './App.css';

function App() {
  let [title, changeTitle] = useState(['글 제목 1', '글 제목 2', '글 제목 3']);
  let [count, changeCount] = useState(0);

  function cbChangeTitle() {
    let newArray = [...title];
    newArray[0] = '글 수정 1';
    changeTitle(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 블로그</div>
      </div>
      <button onClick={ cbChangeTitle }>버튼</button>
      <div className="list">
        <h4>{ title[0] } <span onClick={ () => { changeCount(count+1); } }>👍</span>{ count }</h4>
        <p>22.01.01</p>
        <hr />
        <h4>{ title[1] } <span>👍</span>0</h4>
        <p>22.01.01</p>
        <hr />
        <h4>{ title[2] } <span>👍</span>0</h4>
        <p>22.01.01</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
