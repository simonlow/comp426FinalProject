import React from 'react';
import Picture from './Picture';
import Links from './Links';
import Rameses from './Rameses.js';

const Kenan = () =>  {
    return (
        <div className = "Kenan">
            <h1>Kenan Memorial Stadium </h1>
            <Picture url = "https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fkeepingitheel.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F1173468694.jpeg" alt = "Kenan"></Picture>
            <p>Kenan Memorial Stadium sits on the walk to South Campus. On game days, the stadium fills with Tar Heel fans who are excited to watch their future Heisman winner, Sam Howell, distract from how bad the basketball team has been. </p>
            <Links location1 = "/BellTower" location2 ="/Wilson" title1="The Bell Tower" title2 = "Wilson Library"></Links>
            <Rameses id = '14'></Rameses>
        </div>
    );
}

export default Kenan; 
