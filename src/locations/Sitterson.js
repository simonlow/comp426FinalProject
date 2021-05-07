import React from 'react';
import Picture from './Picture';
import Links from './Links';
import Rameses from './Rameses.js';

const Sitterson = () =>  {
    return (
        <div className = "Sitterson">
            <h1>Sitterson Hall</h1>
            <Picture url = "https://chanen.com/wp-content/uploads/2020/06/DSC_7227.jpg" alt = "Sitterson"></Picture>
            <p>Sitterson Hall, or the Frederick Brooks Building is home to UNC Computer Science. Inside, you can find computer science students like myself for hours at a time trying to figure out their latest coding assingment.  </p>
            <Links location1 = "/Phillips" location2 ="/HanesHall" title1="Phillips Hall" title2 = "Hanes Hall"></Links>
            <Rameses id = '9'></Rameses>
        </div>
    );
}

export default Sitterson; 
