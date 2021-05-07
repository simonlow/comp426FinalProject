import React from 'react';
import Morehead from './Morehead';
import UpperQuad from './UpperQuad';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Picture from './Picture';
import {Link} from'react-router-dom'
import Links from './Links';
import Rameses from './Rameses.js';

function OldWell () {
    return (
        <div className = "OldWell">
            <h1>The Old Well</h1>
            <Picture url = "https://snworksceo.imgix.net/dth/645e930e-df4a-48f1-ab25-e887867d2354.sized-1000x1000.jpeg?w=1000" alt = "Old Well"></Picture>
            <p>At the heart of campus stands the visual symbol of the University of North Carolina at Chapel Hill. The scene of wedding proposals, graduation photos and fun Carolina traditions, it sits on the site of the primary water source for the University’s first 100 years.</p>
            <Links location1 = "/UpperQuad" location2 ="/Morehead" title1="Upper Quad" title2 = "Morehead Planetarium"></Links>
            <Rameses id = '1'></Rameses>
        </div>
    );
} 

export default OldWell;