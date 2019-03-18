import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className = "card-content-text">
            <p className = "p-bold">Get started with React</p>
            <p>React makes it painless to create interactive UIs.  Design simple views for each state in your application.</p>
            <p className = "p-gray">reactjs.org</p>
        </div>
    )
}

export default CardContent;