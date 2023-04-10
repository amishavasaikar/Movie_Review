import React, { useState } from 'react';
import './newMovie.css';
import {movies} from '../fakeMovieService.js';



export const NewMovie= () => {

    const[movie,setMovies] = useState(...movies);
    const [addMovieData,setMovieData]= useState({
        id :'',
        title : '',
        genre : '',
        stock :'',
        rate : ''
    })

    const handleAddMovieChange =(e)=>{
        e.preventDefault();
        const fieldName = e.target.getAttribute('name');
        const fieldValue = e.target.value;

        const newMovieData = {...addMovieData};
        newMovieData[fieldName]=fieldValue;

        setMovieData(...movies,newMovieData);
    }
    // const [id,setId]= useState("");
    // const [title,setTitle]= useState("");
    // const [genre,setGenre]= useState("");
    // const [stock,setStock]= useState("");
    // const [rate,setRate]= useState("");
    

    //const [allEntry,setAllEntry]=useState([...movies]);

    const submitForm = (e)=>{
        e.preventDefault();
         
               const newMovie ={
                id :addMovieData.id,
                title : addMovieData.title,
                genre : addMovieData.genre,
                stock : addMovieData.stock,
                rate : addMovieData.rate
               };       
             const newMovies =[movie,newMovie];
             setMovies(...movies,newMovies);
                console.log(newMovies);
                 console.log("you have signIn successfully");
        
   
       }

return(
    <div className='newMovie-div'>
       <form className="newMovie-form"  onSubmit={submitForm}>
        
        <div className="mb-3">
            <label for="title" className="form-label">Title </label>
            <input type="text" name="title" id="title" aria-describedby="emailHelp"
                // value={title}
                 onChange={handleAddMovieChange}
            />    
        </div>
        <div className="mb-3">
          <label for="exampleInputGenre" className="form-label">Genre  </label>
          <input type="text" name="genre" id="genre"
                 //value={genre}
                 onChange={handleAddMovieChange}
          />
        </div>
        <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Stock </label>
            <input type="text" name="stock" id="stock"
                    //value={stock}
                    onChange={handleAddMovieChange}
            />
        </div>
        <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Rate  </label>
            <input type="text" name="rate" id="rate"
                  // value={rate}
                   onChange={handleAddMovieChange}
            />
        </div>
  
        <button type="submit" className="btn btn-primary">Add Movie</button>
      </form>
    </div>
   
)
 

        
   

     
}

export default NewMovie;