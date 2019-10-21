import React from 'react';
import './card.style.css';

export const Card = props => (
    <div className="card-container">
        <img className="image" alt='robots' src={`https://robohash.org/${props.monsters.id}set=set2`}/>
        <h1>{props.monsters.name}</h1>
        <p>{props.monsters.username}</p>
        <p>{props.monsters.email}</p>
    </div>
);