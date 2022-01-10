/* eslint-disable */
import React, { useState } from "react";
import "./App.css";

function App() {
  let [title, setTitle] = useState(["글 제목 1", "글 제목 2", "글 제목 3"]);
  let [count, setCount] = useState(0);
  let [modal, setModal] = useState(false);
  let [clickNum, setClickNum] = useState(0);
  let [inputVal, setInputVal] = useState("");

  function modifySetTitle() {
    let newArray = [...title];
    newArray[0] = "글 수정 1";
    setTitle(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 블로그</div>
      </div>
      <button onClick={modifySetTitle}>수정</button>
      {title.map((item, i) => {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setClickNum(i);
              }}
            >
              {item}{" "}
              <span
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                👍
              </span>
              {count}
            </h4>
            <p>22.01.01</p>
            <hr />
          </div>
        );
      })}

      <div className="publish">
        <input
          onChange={(e) => {
            setInputVal(e.target.value);
          }}
        />
        <button
          onClick={() => {
            let newTitle = [...title];
            newTitle.unshift(inputVal);
            setTitle(newTitle);
          }}
        >
          저장
        </button>
      </div>

      <button
        onClick={() => {
          setClickNum(0);
        }}
      >
        버튼1
      </button>
      <button
        onClick={() => {
          setClickNum(1);
        }}
      >
        버튼2
      </button>
      <button
        onClick={() => {
          setClickNum(2);
        }}
      >
        버튼3
      </button>

      <button
        onClick={() => {
          setModal(!modal);
        }}
      >
        모달창
      </button>
      {modal === true ? <Modal clickNum={clickNum} title={title} /> : null}

      <Profile />
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.title[props.clickNum]}</h2>
      <p>날짜</p>
      <p>내용</p>
    </div>
  );
}

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Kim",
      age: "30",
    };
  }

  changeName() {
    this.setState({ name: "Lee" });
  }

  render() {
    return (
      <div>
        <h3>프로필 입니다.</h3>
        <p>저는 {this.state.name} 입니다.</p>
        <p>저는 {this.state.age}살 입니다.</p>
        <button onClick={this.changeName.bind(this)}>Lee</button>
      </div>
    );
  }
}

export default App;
