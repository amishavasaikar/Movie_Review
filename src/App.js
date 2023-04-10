import logo from './logo.svg';
import { Component, useState } from 'react';
import './App.css';
//import movieTable from './components/movieTable';
//import { LikeButton } from "@lyket/react";
//import { movies } from './fakeMovieService';
//import { genres } from './fakeGenreService';
//import { deleteMovie } from './fakeMovieService';


class App extends Component {
  state = {  } 
  render() { 
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo'/>
          <h1 className='App-Title'>Welcome to React</h1>
        </header>

      </div>
    );
  }
}
 
export default App;
 


