import React from 'react';

const Travel = ({ destination, country, photo, distance }) => (
    <>
        <p>{destination}</p>
        <p>{country}</p>
        <img src={photo}/>
        <p>{distance}</p>
    </>);

export default Travel;