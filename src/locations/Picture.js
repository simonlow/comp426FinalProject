import React from 'react';
//import './App.css';

const Picture = (props) => {
    return (
        <div className = "Picture">
            <img src = {props.url} alt = {props.alt}width = {props.width} height = {props.height}></img>
        </div>
            
    )
}

Picture.defaultProps = {
    width: '700',
    height: '500'
}

export default Picture