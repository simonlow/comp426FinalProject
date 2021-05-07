import React from 'react';
import Picture from './Picture';
import Links from './Links';
import Rameses from './Rameses.js';
const Wilson = () =>  {
    return (
        <div className = "Wilson ">
            <h1>Wilson Library</h1>
            <Picture url = "https://unchistory.web.unc.edu/wp-content/uploads/sites/14033/2017/11/Modern-Wilson-624x416.png" alt = "Wilson Library"></Picture>
            <p>Wilson Library sits at the head of the iconic UNC Quad. Next to the Old Well, it may be the most picturesque location at UNC. With a beautiful Rotunda visible from the outside, the inside is even more magnificent. Although, to study hear, you better be prepared to be silent, because even the turn of a page echoes throughout the glorious hall. </p>
            <Links location1 = "/BellTower" location2 ="/ThePit" title1="The Bell Tower" title2 = "The Pit"></Links>
            <Rameses id = '12'></Rameses>
        </div>
    );
}

export default Wilson; 
