import React, { useState, useEffect} from 'react';
import axios from 'axios';
import "./_video.css";


function Bored() {
    const [activity, setActivity] = useState("");

    const getActivity = () => {
        axios.get("https://www.boredapi.com/api/activity")
        .then((response) => {
            setActivity("If you're bored..." + response.data.activity)})
    };
    return (
        <div> 
           <button class = "button" onClick = {getActivity}>Press to get a surprise activity</button>{activity} 
        </div>
    )
}

export default Bored;