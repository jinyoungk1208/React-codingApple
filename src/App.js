/* eslint-disable */
import React, { useState } from 'react';
import './App.css';

function App() {
  let [title, changeTitle] = useState(['글 제목 1', '글 제목 2', '글 제목 3']);
  let [count, changeCount] = useState(0);
  let [modal, changeModal] = useState(false);

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
      <button onClick={ cbChangeTitle }>수정</button>
      {/*<div className="list">
        <h4 onClick={ () => { changeModal(true); } }>{ title[0] } <span onClick={ () => { changeCount(count+1); } }>👍</span>{ count }</h4>
        <p>22.01.01</p>
        <hr />
      </div>
      <div className="list">
        <h4>{ title[1] } <span>👍</span>0</h4>
        <p>22.01.01</p>
        <hr />
      </div>
      <div className="list">
        <h4>{ title[2] } <span>👍</span>0</h4>
        <p>22.01.01</p>
        <hr />
      </div>*/}
      {
        title.map((item) => {
          return (
            <div className="list">
              <h4 onClick={ () => { changeModal(!modal); } }>{ item } <span onClick={ () => { changeCount(count+1); } }>👍</span>{ count }</h4>
              <p>22.01.01</p>
              <hr />
            </div>
          );
        })
      }

      <button onClick={ () => { changeModal(!modal); } }>모달창</button>
      {
        modal === true
        ? <Modal />
        : null
      }
    </div>
  );
}

function Modal() {
  return (
    <>
      <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>내용</p>
      </div>
    </>
  );
}

export default App;
