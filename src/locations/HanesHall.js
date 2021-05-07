import React from 'react';
import Picture from './Picture';
import Links from './Links';
import Rameses from './Rameses.js';
const HanesHall = () =>  {
    return (
        <div className = "Hanes Hall">
            <h1>Hanes Hall</h1>
            <Picture url = "https://cms.concept3d.com/map/lib/image-cache/i.php?mapId=111&image=111/IMG_3310.JPG&w=900&h=508&r=1" alt = "Hanes Hall"></Picture>
            <p>Hanes Hall, named for Rober March Hanes, a UNC graduate of 1912, is home to the Department of Statistics and Operations. It sits across from Garnder Hall, the hub for the Economics department. </p>
            <Links location1 = "/OldWell" location2 ="/PolkPlace" title1="The Old Well" title2 = "Polk Place"></Links>
            <Rameses id = '10'></Rameses>
        </div>
    );
}

export default HanesHall; 