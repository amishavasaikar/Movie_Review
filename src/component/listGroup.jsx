import React, { Component } from 'react';
//import logo from './logo.svg';
//import { useState } from 'react';
import '../App.css';
import './listGroup.css';
import { genres } from '../fakeGenreService';
//import '~@fortawesome/fontawesome-free/css/fontawesome.css';

class ListGroup extends Component {
    //state = {  } 
    render() { 
        const {onGenre}=this.props;
       
        return (
            <div className='List'>
                {
                    genres.map((value,key)=>{
                        return(
                            
                        <ul  key={value._id}  className="list-group" >
                           
                            <li 
                            className='list-group-item  '
                             
                            onClick={()=>onGenre(value)}
                            >
                                {value.name}
                                </li>
                            
                        </ul>

                        )
                    })
                }
               
            </div>
        );
    }
}
 
export default ListGroup;