import UpperQuad from './UpperQuad';
import Ackland from './Ackland';

import React from 'react';
import Picture from './Picture';
import {Link} from'react-router-dom'
import Links from './Links';
import Rameses from './Rameses.js';

function Morehead () {
    return (
        <div className = "Morehead">
            <h1>Morehead Planetarium</h1>
            <Picture url = "https://assets.simpleviewinc.com/simpleview/image/upload/crm/chapelhill/Morehead-Planetarium-Sceince-Center-5ea50ca75056b3a_5ea50d90-5056-b3a8-496aef3392379209.jpg" alt = "Morehead"></Picture>
            <p>Morehead Planetarium is one of many buildings/programs named for John Motley Morehead III. As the largest fulldome planetarium in the southeastern United States, Morehead Planetarium and Science Center welcomes nearly 160,000 visitors each year and provides outreach programs across the state.</p>
            <Links location1 = "/Ackland" location2 ="/UpperQuad" title1="The Ackland Art Museum" title2 = "The Upper Quad"></Links>
            <Rameses id = '3'></Rameses>
        </div>
    );
}

export default Morehead; 
