import React, { Component } from 'react';
import { getMovies, movies} from '../fakeMovieService';
import ListGroup from './listGroup';
import { getGenres } from '../fakeGenreService';
import MovieTable from './movieTable';
import NavBar from './navBar';
import Customer from './genre';
import Home from './Home';
import Registration from './registration';
import './movie.css'

//import { useState } from 'react';

import {
   BrowserRouter as Router,
   useHistory,
   Switch,
   Route
 } from "react-router-dom";
import Login from './login';
import { Button } from 'bootstrap';
import NewMovie from './newMovie';
import { Link } from 'react-router-dom';
 


class Movie extends Component {

    
    state = { 
        movies:[],
        genre:[],
        sort:{order:"ASC"}
        
     } ;
     
     componentDidMount(){
        //console.log("this.state.movies");
        //this.setState({movies:getMovies(),genre})
      // const genre=[{ name : "All genre" }, ...getGenres()];
       this.setState({movies:getMovies()});
        }

     handleDelete = (id) => {
        
        console.log('Event Handler Called',id);  
        //const movies ={...this.state.movies}; 
        const array =this.state.movies.filter((movie) => movie._id !== id);
        //console.log(m);
        this.setState({movies : array} );
      };

     /* handleLike=(movie)=>{
          console.log("like clicked",movie);        
         const movies=[...this.state.movies];
          const i= movies.indexOf(movie);
        
          movies[i].liked= !movies[i].liked;
          console.log(movies[i].liked);
         this.setState({ movies });            
         
      } */
 
   
      handleGenre = (item) => {
        console.log("genre clicked", item.name);
        const filteredMovies = (item.name === "All Genres" ? getMovies() : getMovies().filter(movie => movie.genre.name === item.name));
        this.setState({ movies: filteredMovies });
      }

      handleSort = (col) => {
          console.log("sort clicked",col);
          //let order1=this.state.sort.order;
          if(this.state.sort.order === "ASC"){
            const sorted =movies.sort((a,b)=>
               a[col] > b[col] ? 1 : -1
            );
            this.setState(sorted); 
          //  order1="DESC";
            this.state.sort.order="DESC"; 
             
          }
          else if(this.state.sort.order === "DESC"){
            const sorted =movies.sort((a,b)=>
               a[col] < b[col] ? 1 : -1
            );
            this.setState(sorted); 
            this.state.sort.order="ASC";      
 
          }
         }
      
         

    
     render() {   
         
        return(
         <div style={{backgroundImage: `url("https://3.bp.blogspot.com/-p1aM0cP82Fw/Vxto2SB7XNI/AAAAAAAAyXw/IFS4lYcMeXwrK-SDHbhzmq8DHktGaULdwCHM/s1600/video-backgrounds-best-background-wallpaper.jpg")`}}className='movies'>
            
            <router>
               <NavBar/>
               <Switch>

                <Route exact path="/">
                   <div className='List-Col' >                
                     <ListGroup
                        items={[{ name: "All Genres" }, getGenres]}
                         onGenre={this.handleGenre}
                     />
                   </div>       
                    <div className='newMovie' >
                    <button type="button" class="btn btn-newMovie btn-primary"
                     ><Link to="/newMovie" className='newMovie_name' >New Movie</Link></button>
                  
                        
                    
                    </div>
                   <div className='column-1'>           
                   <MovieTable
                     movies = {this.state.movies}
                     onDelete={this.handleDelete}
                     //onLike={this.handleLike}
                     onSort={this.handleSort}
                   ></MovieTable>
                   </div>
                  </Route>

                 <Route exact path="/Home">
                 <Home />
                </Route>

                <Route exact path="/login">
                  <Login />
                </Route>
                <Route exact path="/registration">
                  <Registration />
                </Route>
                <Route exact path="/newMovie">
                  <NewMovie />
                </Route>
                </Switch>
            </router>


            
        </div>
        )
     } 
   
}
 
export default Movie;