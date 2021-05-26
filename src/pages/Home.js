import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import Search from '../components/Search';
function Home() {
    return (
        <div className="home">
            
            <div className="home__header">
            <div className="headerLeft">
            
            <Link to='/about'>About</Link>
            
            <Link to='/store'>Store</Link>
            </div>
            <div className="headerRight">
            <Link to='/gmail'>Gmail</Link>
            <Link to='/images'>Images</Link>
            <AppsIcon />
            <Avatar/>
            </div>
                
                
                {/*Icon */}
                {/*Avatar */}
            </div>
            <div className="home__body">
            <img src="https://s3.amazonaws.com/caprate-standard/bin/uploads/2017/09/05120753/1000px-Google_2015_logo.svg_.png" alt=" "/>
            <div className="home__input__container">
            <Search  />
            
            </div>
            </div>
        </div>
    )
}

export default Home
