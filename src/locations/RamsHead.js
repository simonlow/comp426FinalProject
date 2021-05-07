import React from 'react';
import Picture from './Picture';
import Links from './Links';
import Rameses from './Rameses.js';
const RamsHead= () =>  {
    return (
        <div className = "Rams Head">
            <h1>Rams Head Recreation Center</h1>
            <Picture url = "https://pbs.twimg.com/media/DgTrd55UwAEVM_O.jpg:large" alt = "Rams Head"></Picture>
            <p>Rams Head Recreation Center, widely known as the lesser of two gyms on campus, sits next to Chase Dining Hall. Inside is a very nice basketball court and rock climbing wall downstairs and weight machines upstairs. Rams Head is known for having only one squat rack, which is always taken. </p>
            <Links location1 = "/UL" location2 ="/Chase" title1="The Undergraduate Library" title2 = "Chase Dining Hall"></Links>
            <Rameses id = '16'></Rameses>
        </div>
    );
}

export default RamsHead; 
