import React from 'react';

import {Link} from'react-router-dom'
import Picture from './Picture.js';
import Map from './Map';
//import YouTube from 'react-youtube';
import Search from './Search.js';
import VideoList from './VideoList';
import Joke from './Joke';
import Bitcoin from './Bitcoin';
import Bored from './Bored';
import './_video.css';

function HomePage () {
    return (
        <div className = "HomePage">
            <h1>Welcome to the Game!</h1>
            <Picture url =  "https://testmaxprep.com/uploads/blog_image/blog_full_university-of-north-carolina.jpg" alt = "Chapel Hill"></Picture>
            <p>You've been placed in the middle of the town of Chapel Hill on UNC's campus. You are very unfamiliar with the place, but Rameses is hiding somewhere on campus or around Chapel Hill! Rameses Jr. is with you, but don't mistake Rameses Jr. for Rameses as you try to find Rameses. You can choose to start at either the historic Old Well or the Morehead Planetarium. Choose wisely, and you can always restart by clicking 'Explore Chapel Hill' at the top. Good Luck!</p>
            <ul>
                <Link to="/OldWell">
                    <li>Old Well</li>
                </Link>
                <Link to="/Morehead">
                    <li>Morehead</li>
                </Link>
            </ul>
            <p> If you don't feel like playing at the moment, <Link to="/Other">click here</Link> to find some fun buttons</p>
            <Map></Map>
        </div>
    );
} 

export default HomePage;