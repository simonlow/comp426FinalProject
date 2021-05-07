import React from 'react';
import Picture from './Picture';
import Links from './Links';
import Rameses from './Rameses.js';

const Lenoir = () =>  {
    return (
        <div className = "Lenoir">
            <h1>Lenoir Dining Hall</h1>
            <Picture url = "http://unchistory.web.unc.edu/wp-content/uploads/sites/14033/2017/11/lenoir-hall.jpg" alt = "Lenoir"></Picture>
            <p>Lenoir Dining Hall sits right next to the Pit and can get very active between class changes around 12 and 1 during the week. Lenoir is a great spot to hit after class to get a quick meal in before heading to the library to do work. </p>
            <Links location1 = "/Hamilton" location2 ="/Arboretum" title1="Hamilton Hall" title2 = "The Arboretum"></Links>
            <Rameses id = '22'></Rameses>
        </div>
    );
}

export default Lenoir; 
