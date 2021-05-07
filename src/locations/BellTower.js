import React from 'react';
import Picture from './Picture';
import Links from './Links';
import Rameses from './Rameses.js';
const BellTower= () =>  {
    return (
        <div className = "Bell Tower">
            <h1>The Bell Tower</h1>
            <Picture url = "https://www.unc.edu/wp-content/uploads/2020/08/belltower2020-1200x675.jpg" alt = "Bell Tower"></Picture>
            <p>The UNC Bell Tower, officially name the Morehead-Patterson Bell Tower, sits ust beyond South Road in a green near the Student Store. In a recently started tradition, the Bell Tower lights up blue whenever UNC football wins a football game. </p>
            <Links location1 = "/Sitterson" location2 ="/HanesHall" title1="Sitterson Hall" title2 = "Hanes Hall"></Links>
            <Rameses id = '11'></Rameses>
        </div>
    );
}

export default BellTower; 
