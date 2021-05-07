import React from 'react';
import Picture from './Picture';
import {Link} from'react-router-dom'
import Links from './Links';
import Rameses from './Rameses.js';


const SupDogs = () =>  {
    return (
        <div className = "Sup Dogs">
            <h1>Sup Dogs</h1>
            <Picture url = "http://navigatingfoodatunc.web.unc.edu/wp-content/uploads/sites/10936/2016/11/SupDogs1.png" alt = "Sup Dogs"></Picture>
            <p>Sup Dogs is a town-favorite restaurant on Franklin Street. During basketball games, Sup Dogs becomes a watching party. On weekend nights, students like to come here, enjoy some hot dogs, and maybe a few drinks. </p>
            <Links location1 = "/RamsHead" location2 ="/DeanDome" title1="Rams Head Recreation Center" title2 = "The Dean Dome"></Links>
            <Rameses id = '5'></Rameses>
        </div>
    );
}

export default SupDogs; 