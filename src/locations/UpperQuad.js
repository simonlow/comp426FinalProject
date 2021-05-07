//import './App.css';
import HanesArt from './HanesArt';
import SupDogs from './SupDogs';

import React from 'react';
import Picture from './Picture';
import {Link} from'react-router-dom'
import Links from './Links';
import Rameses from './Rameses.js';

const UpperQuad = () => {
    return (
        <div className = "UpperQuad">
            <h1>Upper Quad</h1>
            <Picture url = "https://s3.amazonaws.com/carolinajournal.com/app/uploads/2018/08/21135940/sam-base-crop-1024x652.jpeg" alt = "https://www.unc.edu/wp-content/uploads/2018/03/spring_04_13_15_0451.jpg" alt = "UpperQuad"></Picture>
            <p>The Upper Quad, which hosts some academic buildings and sits between Franklin Street and Cameron Avenue, is the lesser traveled Quad. It is notable for being the former home of the controversial Silent Sam Statue, which was toppled a few years ago. </p>
            <Links location1 = "/HanesArt" location2 ="SupDogs" title1="Hanes Art Center" title2 = "Sup Dogs"></Links>
            <Rameses id = '2'></Rameses>
        </div>
    );
}

export default UpperQuad; 