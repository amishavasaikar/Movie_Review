import React, { Component } from 'react';
//import { useState } from 'react';
//import {movies} from '../fakeMovieService.js';
//import movie from './movie.jsx';

//import { genres } from '../fakeGenreService';


class MovieTable extends Component {
    
  
    render() { 
       const {onDelete,movies,onLike,onSort}=this.props;
       //console.log(movies);
      // const [order,setorder] = useState("ASC"); 
        return (
          
            <div className='App-container'>
             
            <table >
             <th>Title
             <i class="fa fa-sort-asc" aria-hidden="true" onClick={()=>onSort("title")}></i>
             <i class="fa fa-sort-desc" aria-hidden="true" onClick={()=>onSort("title")}></i></th>
             <th onClick={()=>onSort("genre")}>Genre</th>
             <th onClick={()=>onSort("numberInStock")}>Stock</th>
             <th onClick={()=>onSort("dailyRentalRate")}>Rate</th>
             <th> </th>
             <th> </th>
       
             <tbody>
              {
                movies.map((value,key) => {
                  console.log(value.liked)
                 
                  
                  return(
              <tr key={key}>
                <td>{value.title}</td>
                <td>{value.genre.name}</td>
                <td>{value.numberInStock}</td>
                <td>{value.dailyRentalRate}</td>
                <td>
                 
                  <button className='btn btn-danger btn-sm m-2'
                           onClick={()=>onDelete(value._id)}
                           >Delete</button>
                </td>
              </tr>
                  )
                })
              }
            </tbody>
             
            </table>
            
      </div>
      

        );

      
    
    }

      
}
 
export default MovieTable;