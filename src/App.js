import './App.css';

function App() {
  let post = 'hello';
  let postCss = { color: 'blue', fontSize: '30px' };

  return (
    <div className="App">
      <div className="black-nav">
        <div className={ post }>개발 블로그</div>
      </div>
      <div style={ postCss }>{ post }</div>
    </div>
  );
}

export default App;
