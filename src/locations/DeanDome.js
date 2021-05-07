import React from 'react';
import Picture from './Picture';
import Links from './Links';
import Rameses from './Rameses.js';
const DeanDome = () =>  {
    return (
        <div className = "Dean Dome">
            <h1>The Dean Dome</h1>
            <Picture width = "900"url = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Dean_E._Smith_Center_%28Florida_State_vs._North_Carolina_-_February_23%2C_2019%29.jpg/533px-Dean_E._Smith_Center_%28Florida_State_vs._North_Carolina_-_February_23%2C_2019%29.jpg" alt = "Dean Dome"></Picture>
            <p>The Dean E. Smith Center, located on Manning Drive near the Business School, is the home to Carolina's historic basketball program. In it sits the Roy Williams Court, and thousands of diehard Tar Heel fans on game days. </p>
            <Links location1 = "/Kenan" location2 ="/RamsHead" title1="Kenan Memorial Stadium " title2 = "Rams Head Recreation Center"></Links>
            <Rameses id = '15'></Rameses>
        </div>
    );
}

export default DeanDome; 
