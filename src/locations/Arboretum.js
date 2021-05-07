import React from 'react';
import Picture from './Picture';
import Links from './Links';
import Rameses from './Rameses.js';
const Arboretum = () =>  {
    return (
        <div className = "Arboretum">
            <h1>The Arboretum</h1>
            <Picture height = '1100' url = "https://i.pinimg.com/originals/d7/4b/0f/d74b0f6f442038e0dd4848b390a7f0df.jpg" alt = "Arboretum "></Picture>
            <p>Serene walking paths take you past wildflowers and trees in this 5-acre gem on the UNC campus. Rest on one of several open lawns, or take a seat on a shady bench. Coker Arboretum changes with the seasons. From spring blooms to summer greenery, fall color to winter grace, there’s always something to see.</p>
            <Links location1 = "/Morehead" location2 ="/UpperQuad" title1="Morehead Planetarium" title2 = "The Upper Quad"></Links>
            <Rameses id = '24'></Rameses>
        </div>
    );
}

export default Arboretum ; 
