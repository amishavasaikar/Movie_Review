import React from 'react';
import  ReactDOM  from 'react-dom';
import './index.css';
import './App.css';
//import App from './App';
//import MovieTable from './components/movieTable';
import reportWebVitals from './reportWebVitals';
import'bootstrap/dist/css/bootstrap.css';
import Movie from './component/movie';
import { BrowserRouter } from 'react-router-dom'
//import App from './App';
ReactDOM.render(<BrowserRouter>
    <Movie />
  </BrowserRouter>,document.getElementById("root"));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
