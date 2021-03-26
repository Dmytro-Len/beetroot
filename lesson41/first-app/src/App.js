import logo from './logo.svg'; //импортировали лого из этой же папки
import './App.css'; //импортировали стили из этой же папки

function App() { //создаем компонент
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; //обозначаем наш компонент для импорта по умолчанию (т.е. если мы вызовем в другом файле
// import App from "./App") то все будет работать
