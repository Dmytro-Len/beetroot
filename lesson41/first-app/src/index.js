import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App'; //импортировать функцию-компонент (указываем название) из файла
import reportWebVitals from './reportWebVitals';
import Header from './header';
import Main from './main';
import Footer from './footer';

ReactDOM.render( //Означает буквально: "отрисуй мне"
  <React.StrictMode>
    {/* <App /> */}
    <Header /> 
    <Main /> 
    <Footer />
  </React.StrictMode>,
  document.getElementById('root') //указываем в какой тег/класс/айди отрисовать содержимое выше
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// function myComponent() {
//   return (
//       <div>
//         <h1>Hello, Great world!</h1>
//       </div>
//   )
// }
// render(<myComponent/>, document.getElementById('root'))