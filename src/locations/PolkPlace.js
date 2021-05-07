import React from 'react';
import Picture from './Picture';
import Links from './Links';
import Rameses from './Rameses.js';
const PolkPlace = () =>  {
    return (
        <div className = "Polk Place">
            <h1>Polk Place</h1>
            <Picture url = "https://theblacksheeponline.com/wp-content/uploads/2018/04/JV-3.jpg" alt = "Polk Place"></Picture>
            <p>Polk Place, also known as the Quad is at the center of the majority of academic buildings at UNC. On nice days, students come to sit in the grass to either study or hang out with their friends.</p>
            <Links location1 = "/OldWell" location2 ="/Morehead" title1="The Old Well" title2 = "Morehead Planetarium"></Links>
            <Rameses id = '13'></Rameses>
        </div>
    );
}

export default PolkPlace; 
