import React from 'react'
import "./Search.css"
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import {actionTypes} from '../reducer'
function Search({hideButtons=false}) {
    const [{},dispatch] = useStateValue();
    const [inputt, setInputt] =useState('');
    const history = useHistory();
    const search = e => {
        e.preventDefault();
        console.log("Message button pressed >> ",inputt);
        dispatch({
           type: actionTypes.SET_SEARCH_TERM,
           term: inputt 
        })
        history.push('/search')
    }
    return (
        <form className="search">
           <div className="search__input">
           <SearchIcon className="search__inputIcon" />
           <input value={inputt} onChange={e => setInputt(e.target.value)}  />
           <MicIcon />
           
           </div> 
           {!hideButtons?(
            <div  className="search__button">
            <Button   type='submit' onClick={search} variant="outlined">Google Search</Button>
            <Button   variant="outlined">I'm Feeling Lucky</Button>
            
            </div>
           ):(
            <div  className="search__button">
            <Button className="search__buttonshidden" type='submit' onClick={search} variant="outlined">Google Search</Button>
            <Button className="search__buttonshidden" variant="outlined">I'm Feeling Lucky</Button>
            
            </div>
           )}
            

        </form>
    )
}

export default Search
