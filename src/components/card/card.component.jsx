import React from 'react';
import './card.styles.css';

export const Card = (props) => (
    <div className='card-container'>
        <img alt="hero" src={`https://api.opendota.com${props.hero.img}?set=set2&size=180x180`} />
        <h2>{props.hero.localized_name}</h2>
        <p>{props.hero.attack_type}</p>
    </div>
);