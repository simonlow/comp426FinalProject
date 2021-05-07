import React from 'react';
import Picture from './Picture';
import Links from './Links';
import Rameses from './Rameses.js';
const Chase = () =>  {
    return (
        <div className = "Chase">
            <h1>Chase Dining Hall</h1>
            <Picture url = "https://fo.unc.edu/wp-content/uploads/sites/228/2017/09/Chase-Hall-600x400.jpg" alt = "Chase"></Picture>
            <p>Chase Dining Hall sits next to Rams Head Recreation Center on South Campus. Known for their cookies, Chase is a place to call home for South Campus inhabitants. </p>
            <Links location1 = "/UL" location2 ="/StudentStore" title1="The Undergraduate Library" title2 = "UNC Student Store"></Links>
            <Rameses id = '17'></Rameses>
        </div>
    );
}

export default Chase; 
