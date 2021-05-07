import React from 'react';
import Picture from './Picture';
import Links from './Links';
import Rameses from './Rameses.js';
const UL = () =>  {
    return (
        <div className = "UL">
            <h1>The Undergraduate Library</h1>
            <Picture width = '780'url = "https://i.pinimg.com/originals/61/dd/e2/61dde2f29b819de7cbef1c08b2429325.jpg" alt = "UL"></Picture>
            <p>My personal favorite library, the House Undergraduate Library sits across from Greenlaw Hall just outside the Pit. It is known for its comforting carpet floors and wood desks. The UL fills in with students during midterm and final season. </p>
            <Links location1 = "/ThePit" location2 ="/StudentStore" title1="The Pit" title2 = "UNC Student Store"></Links>
            <Rameses id = '18'></Rameses>
        </div>
    );
}

export default UL ; 
