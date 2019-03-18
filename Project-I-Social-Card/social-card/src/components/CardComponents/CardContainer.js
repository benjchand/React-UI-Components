import React from 'react';
import './Card.css';
import CardBanner from './CardBanner.js';
import CardContent from './CardContent.js';

const CardContainer = () => {
    return (
        <div className = "card-container" id="card-container">
            <CardBanner />
            <CardContent />
        </div>
    )
}

// function openlink() {
//     window.open("google.com");

// }
// document.getElementById("card-container").addEventListener("click", openlink);



export default CardContainer;