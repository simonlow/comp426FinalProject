import React from 'react';
import Picture from './Picture';
import {Link} from'react-router-dom'
import Links from './Links';
import Rameses from './Rameses.js';
const HanesArt = () =>  {
    return (
        <div className = "Hanes Art">
            <h1>Hanes Art Center</h1>
            <Picture url = "https://cms.concept3d.com/map/lib/image-cache/i.php?mapId=111&image=111/IMG_3125.jpg&w=900&h=508&r=1" alt = "Hanes Art"></Picture>
            <p>Completed in 1985, the Hanes Art Center is the central hub for Carolina’s art and art history programs. Students learn and create in the 45,000 square-foot facility’s numerous classrooms and photography, printmaking, painting and electronic media studios.</p>
            <Links location1 = "/SupDogs" location2 ="/DeanDome" title1="Sup Dogs" title2 = "The Dean Dome"></Links>
            <Rameses id = '4'></Rameses>
        </div>
    );
}

export default HanesArt; 