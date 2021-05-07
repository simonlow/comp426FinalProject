import React from 'react';
import Picture from './Picture';
import Links from './Links';
import Rameses from './Rameses.js';
const StudentStore = () =>  {
    return (
        <div className = "Student Store">
            <h1>UNC Student Store</h1>
            <Picture url = "https://i.ytimg.com/vi/-GSigsF-pzc/maxresdefault.jpg" alt = "Student Store"></Picture>
            <p>The UNC Student Store sits on South Road. In the basement, students can pick up their textbooks and buy notebooks and materials. Go up a level and you'll find all the UNC merchandise you can imagine. On the top level, there are books, a printing center, and a Pharmacy. </p>
            <Links location1 = "/Davis" location2 ="/Lenoir" title1="Davis Library" title2 = "Lenoir Dining Hall"></Links>
            <Rameses id = '20'></Rameses>
        </div>
    );
}

export default StudentStore; 
