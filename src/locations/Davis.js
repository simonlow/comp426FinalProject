import React from 'react';
import Picture from './Picture';
import Links from './Links';
import Rameses from './Rameses.js';
const Davis = () =>  {
    return (
        <div className = "Davis">
            <h1>Davis Library</h1>
            <Picture url = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Davis_Library_UNC_Front_2.JPG/4032px-Davis_Library_UNC_Front_2.JPG" alt = "Davis"></Picture>
            <p>Davis Library sits in the heart of campus right by the Pit. Towering 8 floors, you can always find a plethora of students either reading, relaxing with friends, studying for that midterm, or doing assignments. Davis becomes a temporary home for students during finals season in a normal semester.  </p>
            <Links location1 = "/PolkPlace" location2 ="/Lenoir" title1="Polk Place" title2 = "Lenoir Dining Hall"></Links>
            <Rameses id = '21'></Rameses>
        </div>
    );
}

export default Davis; 
