import React from 'react';
import Picture from './Picture';
import Links from './Links';
import Rameses from './Rameses.js';
const Hamilton = () =>  {
    return (
        <div className = "Hamilton">
            <h1>Hamilton Hall</h1>
            <Picture url = "https://hotline.unc.edu/imagesVol/rooms/hm100back.jpg" alt = "Hamilton"></Picture>
            <p>Hamilton Hall sits next to Davis Library on campus. It's a tall, not-so-pretty building that hosts departments for several subjects in the humanities, including Archaeology and Sociology. </p>
            <Links location1 = "/PolkPlace" location2 ="/Arboretum" title1="Polk Place" title2 = "The Arboretum"></Links>
            <Rameses id = '23'></Rameses>
        </div>
    );
}

export default Hamilton; 
