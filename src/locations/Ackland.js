import React from 'react';
import Picture from './Picture';
import {Link} from'react-router-dom'
import Links from './Links';
import Rameses from './Rameses.js';
const Ackland = () =>  {
    return (
        <div className = "Ackland">
            <h1>Ackland Art Museum</h1>
            <Picture url = "http://arttextstyle.com/wp-content/uploads/2018/03/20171101_143433_HDR_edited_72dpi.jpg" alt = "Ackland"></Picture>
            <p>The Ackland Art Museum is a public and university building that features fantastic art. One cool fact about the museum is that its namesake, William Hayes Ackland lies in his tomb in the entry way of the building. </p>
            <Links location1 = "/SupDogs" location2 ="/HanesArt" title1="Sup Dogs" title2 = "Hanes Art Center"></Links>
            <Rameses id = '6'></Rameses>
        </div>
    );
}

export default Ackland; 