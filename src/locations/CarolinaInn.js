import React from 'react';
import Picture from './Picture';
import {Link} from'react-router-dom'
import Links from './Links';
import Rameses from './Rameses.js';
const CarolinaInn= () =>  {
    return (
        <div className = "Carolina Inn">
            <h1>The Carolina Inn</h1>
            <Picture height = '400'width = '950'url = "https://dh-prod-cdn.azureedge.net/-/media/property/destination-hotels/corporate/hotels-and-resorts/the-carolina-inn/thecarolinainnexteriorfrontentrance-maximum-cropped-1440x460.jpg?ts=f62c554a-eb37-4e96-9690-6c0dcbea73dd" alt = "Carolina Inn"></Picture>
            <p>The Carolina Inn sits on the corner of West Cameron Avenue and Columbia Street. It is a beautiful building that hosts families, cocktails, people staying there and just about anything. </p>
            <Links location1 = "/SupDogs" location2 ="/Ackland" title1="Sup Dogs" title2 = "Ackland"></Links>
            <Rameses id = '7'></Rameses>
        </div>
    );
}

export default CarolinaInn; 