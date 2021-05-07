import React, { useState, useEffect} from 'react';
import axios from 'axios';
import "./_video.css";


function Joke() {
    const [joke, setJoke] = useState("");

    const getJoke = () => {
        axios.get("https://official-joke-api.appspot.com/random_joke")
        .then((response) => {
            setJoke(response.data.setup + "..." + response.data.punchline)})
    };
    return (
        <div> 
           <button class = "button" onClick = {getJoke}>Press for a quick laugh!</button>{joke} 
        </div>
    )
}

export default Joke;