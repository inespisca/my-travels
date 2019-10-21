import React from 'react';

const Travel = ({trip}) => (
    <>
        <p>{trip.destination}</p>
        <p>{trip.country}</p>
        <img src={trip.photo}/>
        <p>{trip.distance}</p>
    </>);

export default Travel;