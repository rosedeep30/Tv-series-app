import React from 'react';
import loadersrc from '../../assets/loader.png';
//import './index.css';
const Loader = (props) => (

    <div className = "container">
        <img 
            style = {{width: 50}}
            alt = "Loader Icon"
            src = {loadersrc}/>
        
    </div>
);

export default Loader;