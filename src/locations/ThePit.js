import React from 'react';
import Picture from './Picture';
import Links from './Links';
import Rameses from './Rameses.js';
const ThePit = () =>  {
    return (
        <div className = "The Pit">
            <h1>The Pit</h1>
            <Picture url = "https://pbs.twimg.com/media/DbzV01nXcAAKJP7.jpg" alt = "The Pit"></Picture>
            <p>The Pit is the center for student activity in a normal semester. It is surrounded by the student store, 3 libraries, the Student Union, Lenoir and more. On class days, the Pit fills with students going between class and sometimes even with Gary, the evangelical speaker who entertains the passerbys. </p>
            <Links location1 = "/Hamilton" location2 ="/StudentStore" title1="Hamilton Hall" title2 = "UNC Student Store"></Links>
            <Rameses id = '19'></Rameses>
        </div>
    );
}

export default ThePit; 
